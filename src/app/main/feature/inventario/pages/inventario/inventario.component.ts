import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InventarioLectura } from '@core/models/Inventario/InventarioLectura';
import { InventarioResolveService } from '@feature/inventario/services';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { InventarioCrear } from '@core/models';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class InventarioComponent implements OnInit, OnDestroy {

  inventario: InventarioLectura;
  pageType: string;
  inventarioForm: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _inventarioResolveService: InventarioResolveService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _matSnackBar: MatSnackBar
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._inventarioResolveService.onInventarioCambios
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(inventario => {
        if (inventario) {
          this.pageType = 'editar';
          this.inventario = inventario
        }
        else {
          this.pageType = 'nuevo';
          this.inventario = {
            id: null,
            cantidadDisponible: null,
            cantidadTotal: null,
            descripcion: null,
            fechaCreacion: null,
            fechaModificacion: null,
            nombre: null,
            imagen: null
          };
        }
        this.inventarioForm = this.CrearFormulario();
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  CrearFormulario(): FormGroup {
    return this._formBuilder.group({
      nombre: [this.inventario.nombre],
      descripcion: [this.inventario.descripcion],
      cantidadTotal: [this.inventario.cantidadTotal],
      cantidadDisponible: [this.inventario.cantidadDisponible],
      imagen: [this.inventario.imagen]
    })
  }

  CrearInventario(): void {
    const inventario: InventarioCrear = this.inventarioForm.getRawValue();
    this._inventarioResolveService.AgregarInventario(inventario)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this._inventarioResolveService.onInventarioCambios.next(response);

        this._matSnackBar.open('Inventario creado', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 5000
        });

        this._router.navigate(['/app/inventario']);
      },
        error => {
          this._matSnackBar.open('¡Error! Intenta de nuevo', 'Ok', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 5000
          });
        })
  }

  ModificarInventario(): void {
    const inventario: InventarioCrear = this.inventarioForm.getRawValue();
    inventario.id = this.inventario.id;
    this._inventarioResolveService.ModificarInventario(inventario, this.inventario.id)
      .subscribe(response => {
        this._matSnackBar.open('Inventario guardado', 'Ok', {
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
