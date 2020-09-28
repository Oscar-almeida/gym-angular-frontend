import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AprendizCrear, AprendizLectura } from '@core/models';
import { AprendicesResolveService } from '@feature/aprendices/services';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-aprendiz-form',
  templateUrl: './aprendiz-form.component.html',
  styleUrls: ['./aprendiz-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AprendizFormComponent implements OnInit, OnDestroy {

  aprendiz: AprendizLectura
  pageType: string;
  aprendizForm: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _aprendicesResolveService: AprendicesResolveService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._aprendicesResolveService.onAprendizCambios
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(aprendiz => {
        if (aprendiz) {
          this.pageType = 'editar';
          this.aprendiz = aprendiz;
        } else {
          this.pageType = 'nuevo',
            this.aprendiz = {
              id: null,
              identificacion: null,
              nombres: null,
              apellidos: null,
              edad: null,
              email: null,
              ficha: null,
              genero: null,
              imagen: null,
              rh: null,
              telefonoCelular: null,
              telefonoFijo: null
            };
        }
        this.aprendizForm = this.CrearFormulario();
      })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  CrearFormulario(): FormGroup {
    return this._formBuilder.group({
      identificacion: [this.aprendiz.identificacion, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      nombres: [this.aprendiz.nombres, Validators.compose([Validators.required])],
      apellidos: [this.aprendiz.apellidos, Validators.compose([Validators.required])],
      genero: [this.aprendiz.genero, Validators.compose([Validators.required])],
      edad: [this.aprendiz.edad, Validators.compose([Validators.required])],
      email: [this.aprendiz.email, Validators.compose([Validators.required, Validators.email])],
      telefonoCelular: [this.aprendiz.telefonoCelular],
      telefonoFijo: [this.aprendiz.telefonoFijo],
      ficha: [this.aprendiz.ficha, Validators.compose([Validators.required])],
      rh: [this.aprendiz.rh, Validators.compose([Validators.required])],
      imagen: [this.aprendiz.imagen]
    });
  }

  CrearAprendiz() {
    const aprendiz: AprendizCrear = this.aprendizForm.getRawValue();
    aprendiz.id = aprendiz.identificacion;
    this._aprendicesResolveService.CrearAprendiz(aprendiz)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this._aprendicesResolveService.onAprendizCambios.next(response);
        this._matSnackBar.open('Aprendiz creado', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 5000
        });
        this._router.navigate(['/app/aprendices']);
      },
        error => {
          this._matSnackBar.open('¡Error! Intenta de nuevo', 'Ok', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 5000
          });
        });
  }

  ModificarAprendiz() {
    const aprendiz: AprendizCrear = this.aprendizForm.getRawValue();
    aprendiz.identificacion = this.aprendiz.identificacion;
    this._aprendicesResolveService.MoficarAprendiz(aprendiz, this.aprendiz.identificacion)
      .subscribe(response => {
        this._matSnackBar.open('Aprendiz modificado', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 5000
        });
      },
        error => {
          this._matSnackBar.open('Aprendiz modificado', 'Ok', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 5000
          });
        });
  }

}
