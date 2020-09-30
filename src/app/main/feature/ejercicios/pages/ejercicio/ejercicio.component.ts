import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EjercicioLectura } from '@core/models/Ejercicio/EjercicioLectura';
import { EjercicioResolveService } from '@feature/ejercicios/services';
import { fuseAnimations } from '@fuse/animations';
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
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  CrearFormulario(): FormGroup {
    return this._formBuilder.group({
      nombre: [this.ejercicio.nombre],
      descripcion: [this.ejercicio.descripcion],
      musculoId: [this.ejercicio.musculoId],
      imagen: [this.ejercicio.imagen]
    });
  }

}
