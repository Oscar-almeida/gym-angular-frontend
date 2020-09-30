import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { InventarioCrear, InventarioLectura } from '@core/models';
import { InventarioService } from '@core/services';
import { reject } from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class InventarioResolveService implements Resolve<InventarioLectura[] | InventarioLectura> {

  inventarios: InventarioLectura[];
  onInventariosCambios: BehaviorSubject<InventarioLectura[]>;

  inventario: InventarioLectura;
  onInventarioCambios: BehaviorSubject<InventarioLectura>;
  routeParams: string;

  constructor(
    private _inventarioService: InventarioService
  ) {
    this.onInventariosCambios = new BehaviorSubject<InventarioLectura[]>([]);
    this.onInventarioCambios = new BehaviorSubject<InventarioLectura>(null);
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): InventarioLectura | InventarioLectura[] | Observable<InventarioLectura | InventarioLectura[]> | Promise<InventarioLectura | InventarioLectura[]> {
    this.routeParams = route.params['id'];

    if (this.routeParams)
      return new Promise((resolve, reject) => {
        Promise.all([
          this.ObtenerInvetarioPorId()
        ]).then(() => {
          resolve();
        }, reject);
      });

    return new Promise((resolve, reject) => {
      Promise.all([
        this.ObtenerInventario()
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  ObtenerInventario(): Promise<InventarioLectura[]> {
    return new Promise((resolve, reject) => {
      this._inventarioService.ObtenerInvetario()
        .subscribe(response => {
          this.inventarios = response;
          this.onInventariosCambios.next(response);
          resolve(response);
        },
          error => {
            reject;
          });
    });
  }

  ObtenerInvetarioPorId(): Promise<InventarioLectura> {
    return new Promise((resolve, reject) => {
      if (this.routeParams == 'nuevo') {
        this.onInventarioCambios.next(null);
        resolve(null);
      }
      else
        this._inventarioService.ObtenerInvetarioPorId(parseInt(this.routeParams))
          .subscribe(response => {
            this.inventario = response;
            this.onInventarioCambios.next(response);
            resolve(response);
          },
            error => {
              reject;
            });
    });
  }

  AgregarInventario(inventario: InventarioCrear): Observable<InventarioLectura> {
    return this._inventarioService.AgregarInventario(inventario);
  }

  ModificarInventario(inventario: InventarioCrear, id: number): Observable<void> {
    return this._inventarioService.ModificarInventario(inventario, id);
  }

}
