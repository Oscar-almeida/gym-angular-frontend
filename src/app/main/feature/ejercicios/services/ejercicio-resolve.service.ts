import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EjercicioCrear } from '@core/models/Ejercicio/EjercicioCrear';
import { EjercicioLectura } from '@core/models/Ejercicio/EjercicioLectura';
import { EjerciciosService } from '@core/services';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class EjercicioResolveService implements Resolve<EjercicioLectura[] | EjercicioLectura> {

  ejercicios: EjercicioLectura[];
  onEjerciciosCambios: BehaviorSubject<EjercicioLectura[]>;

  ejercicio: EjercicioLectura;
  onEjercicioCambios: BehaviorSubject<EjercicioLectura>;
  routeParams: string;

  constructor(
    private _ejerciciosService: EjerciciosService
  ) {
    this.onEjerciciosCambios = new BehaviorSubject<EjercicioLectura[]>([]);
    this.onEjercicioCambios = new BehaviorSubject<EjercicioLectura>(null);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EjercicioLectura | EjercicioLectura[] | Observable<EjercicioLectura | EjercicioLectura[]> | Promise<EjercicioLectura | EjercicioLectura[]> {
    this.routeParams = route['id'];

    if (this.routeParams)
      return new Promise((resolve, reject) => {
        Promise.all([
          this.ObtenerEjercicioPorId()
        ]).then(() => {
          resolve();
        }, reject);
      });

    return new Promise((resolve, reject) => {
      Promise.all([
        this.ObtenerEjercicios()
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  ObtenerEjercicios(): Promise<EjercicioLectura[]> {
    return new Promise<EjercicioLectura[]>((resolve, reject) => {
      this._ejerciciosService.ObtenerEjercicios()
        .subscribe(response => {
          this.ejercicios = response;
          this.onEjerciciosCambios.next(response);
          resolve(response);
        },
          error => {
            reject
          });
    });
  }

  ObtenerEjercicioPorId(): Promise<EjercicioLectura> {
    return new Promise<EjercicioLectura>((resolve, reject) => {
      if (this.routeParams === 'nuevo') {
        this.onEjercicioCambios.next(null);
        resolve(null);
      } else
        this._ejerciciosService.ObtenerEjercicioPorId(parseInt(this.routeParams))
          .subscribe(response => {
            this.ejercicio = response;
            this.onEjercicioCambios.next(response);
            resolve(response);
          },
            error => {
              reject
            });
    });
  }

  CrearEjercicio(ejercicio: EjercicioCrear): Observable<EjercicioLectura> {
    return this._ejerciciosService.CrearEjercicio(ejercicio);
  }

  ModificarEjercicio(ejercicio: EjercicioCrear, id: number): Observable<void> {
    return this._ejerciciosService.ModificarEjercicio(ejercicio, id);
  }
}
