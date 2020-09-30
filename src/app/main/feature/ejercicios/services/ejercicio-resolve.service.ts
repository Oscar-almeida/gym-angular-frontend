import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MusculoLectura } from '@core/models';
import { EjercicioCrear } from '@core/models/Ejercicio/EjercicioCrear';
import { EjercicioLectura } from '@core/models/Ejercicio/EjercicioLectura';
import { EjerciciosService, MusculosService } from '@core/services';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class EjercicioResolveService implements Resolve<EjercicioLectura[] | EjercicioLectura> {

  ejercicios: EjercicioLectura[];
  onEjerciciosCambios: BehaviorSubject<EjercicioLectura[]>;

  ejercicio: EjercicioLectura;
  onEjercicioCambios: BehaviorSubject<EjercicioLectura>;
  routeParams: string;

  musculos: MusculoLectura[];
  onMusculosCambios: BehaviorSubject<MusculoLectura[]>;

  constructor(
    private _ejerciciosService: EjerciciosService,
    private _musculosService: MusculosService
  ) {
    this.onEjerciciosCambios = new BehaviorSubject<EjercicioLectura[]>([]);
    this.onEjercicioCambios = new BehaviorSubject<EjercicioLectura>(null);
    this.onMusculosCambios = new BehaviorSubject<MusculoLectura[]>([]);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EjercicioLectura | EjercicioLectura[] | Observable<EjercicioLectura | EjercicioLectura[]> | Promise<EjercicioLectura | EjercicioLectura[]> {
    this.routeParams = route.params['id'];

    if (this.routeParams)
      return new Promise((resolve, reject) => {
        Promise.all([
          this.ObtenerEjercicioPorId(),
          this.ObtenerMusculos()
        ]).then(() => {
          resolve();
        }, reject);
      });

    return new Promise((resolve, reject) => {
      Promise.all([
        this.ObtenerEjercicios(),
        this.ObtenerMusculos()
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

  ObtenerMusculos(): Promise<MusculoLectura[]> {
    return new Promise<MusculoLectura[]>((resolve, reject) => {
      this._musculosService.ObtenerMusculos()
        .subscribe(response => {
          this.musculos = response;
          this.onMusculosCambios.next(response);
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
