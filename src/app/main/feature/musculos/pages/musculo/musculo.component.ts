import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MusculoCrear, MusculoLectura } from '@core/models';
import { MusculoResolveService } from '@feature/musculos/services';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-musculo',
  templateUrl: './musculo.component.html',
  styleUrls: ['./musculo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class MusculoComponent implements OnInit {

  musculo: MusculoLectura;
  pageType: string;
  musculoForm: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _musculoResolveService: MusculoResolveService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _matSnackBar: MatSnackBar
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._musculoResolveService.onMusculoCambios
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(musculo => {
        if (musculo) {
          this.pageType = 'editar';
          this.musculo = musculo
        }
        else {
          this.pageType = 'nuevo';
          this.musculo = {
            id: null,
            fechaCreacion: null,
            fechaModificacion: null,
            nombre: null,
            imagen: null
          };
        }
        this.musculoForm = this.CrearFormulario();
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  CrearFormulario(): FormGroup {
    return this._formBuilder.group({
      nombre: [this.musculo.nombre],
      imagen: [this.musculo.imagen]
    })
  }

  Crearmusculo(): void {
    const musculo: MusculoCrear = this.musculoForm.getRawValue();
    this._musculoResolveService.AgregarMusculo(musculo)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this._musculoResolveService.onMusculoCambios.next(response);

        this._matSnackBar.open('musculo creado', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 5000
        });

        this._router.navigate(['/app/musculo']);
      },
        error => {
          this._matSnackBar.open('¡Error! Intenta de nuevo', 'Ok', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 5000
          });
        })
  }

  Modificarmusculo(): void {
    const musculo: MusculoCrear = this.musculoForm.getRawValue();
    musculo.id = this.musculo.id;
    this._musculoResolveService.EditarMusculo(musculo, this.musculo.id)
      .subscribe(response => {
        this._matSnackBar.open('musculo guardado', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 5000
        });
      },
        error => {
          this._matSnackBar.open('¡Error! Intenta de nuevo', 'Ok', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 5000
          });
        })
  }

}
