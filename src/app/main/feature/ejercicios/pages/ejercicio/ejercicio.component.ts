import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MusculoLectura } from '@core/models';
import { EjercicioCrear } from '@core/models/Ejercicio/EjercicioCrear';
import { EjercicioLectura } from '@core/models/Ejercicio/EjercicioLectura';
import { EjercicioResolveService } from '@feature/ejercicios/services';
import { fuseAnimations } from '@fuse/animations';
import { error } from 'protractor';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class EjercicioComponent implements OnInit, OnDestroy {

  ejercicio: EjercicioLectura;
  pageType: string;
  ejercicioForm: FormGroup;
  musculos: MusculoLectura[];

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _ejerciciosResolveService: EjercicioResolveService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._ejerciciosResolveService.onEjercicioCambios
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(ejercicio => {
        if (ejercicio) {
          this.pageType = 'editar';
          this.ejercicio = ejercicio;
        } else {
          this.pageType = 'nuevo';
          this.ejercicio = {
            id: null,
            descripcion: null,
            fechaCreacion: null,
            fechaModificacion: null,
            imagen: null,
            musculoId: null,
            nombre: null
          };
        }
        this.ejercicioForm = this.CrearFormulario();
      });
    this.musculos = this._ejerciciosResolveService.musculos;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private CrearFormulario(): FormGroup {
    return this._formBuilder.group({
      nombre: [this.ejercicio.nombre],
      descripcion: [this.ejercicio.descripcion],
      musculoId: [this.ejercicio.musculoId],
      imagen: [this.ejercicio.imagen]
    });
  }

  CrearEjercicio(): void {
    const ejercicio: EjercicioCrear = this.ejercicioForm.getRawValue();
    this._ejerciciosResolveService.CrearEjercicio(ejercicio)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this._ejerciciosResolveService.onEjercicioCambios.next(response);
        this._matSnackBar.open('Ejercicio creado', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 5000
        });
        this._router.navigate(['/app/ejercicios']);
      },
        error => {
          this._matSnackBar.open('¡Error! Intenta de nuevo', 'Ok', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 5000
          });
        });
  }

  ModificarEjercicio(): void {
    const ejercicio: EjercicioCrear = this.ejercicioForm.getRawValue();
    ejercicio.id = this.ejercicio.id;
    this._ejerciciosResolveService.ModificarEjercicio(ejercicio, ejercicio.id)
      .subscribe(response => {
        this._matSnackBar.open('Ejercicio modificado', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 5000
        });
      },
        error => {
          this._matSnackBar.open('Inventario creado', 'Ok', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 5000
          });
        });
  }

}
