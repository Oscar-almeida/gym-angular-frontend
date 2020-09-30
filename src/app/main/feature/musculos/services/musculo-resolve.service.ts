import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MusculoCrear, MusculoLectura } from '@core/models';
import { MusculosService } from '@core/services';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MusculoResolveService implements Resolve<MusculoLectura | MusculoLectura[]> {

  musculos: MusculoLectura[];
  onMusculosCambios: BehaviorSubject<MusculoLectura[]>;

  musculo: MusculoLectura;
  onMusculoCambios: BehaviorSubject<MusculoLectura>;

  routeParams: string;

  constructor(
    private _musculosService: MusculosService
  ) {
    this.onMusculosCambios = new BehaviorSubject<MusculoLectura[]>([]);
    this.onMusculoCambios = new BehaviorSubject<MusculoLectura>(null);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MusculoLectura | MusculoLectura[] | Observable<MusculoLectura | MusculoLectura[]> | Promise<MusculoLectura | MusculoLectura[]> {
    this.routeParams = route.params['id'];
    if (this.routeParams)
      return new Promise((resolve, reject) => {
        Promise.all([
          this.ObtenerMusculoPorId()
        ]).then(() => {
          resolve();
        }, reject);
      });

    return new Promise((resolve, reject) => {
      Promise.all([
        this.ObtenerMusculos()
      ]).then(() => {
        resolve();
      }, reject);
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

  ObtenerMusculoPorId(): Promise<MusculoLectura> {
    return new Promise<MusculoLectura>((resolve, reject) => {
      if (this.routeParams === 'nuevo') {
        this.onMusculoCambios.next(null);
        resolve(null);
      } else
        this._musculosService.ObtenerMusculoPorId(parseInt(this.routeParams))
          .subscribe(response => {
            this.musculo = response;
            this.onMusculoCambios.next(response);
            resolve(response);
          },
            error => {
              reject
            });
    });
  }

  AgregarMusculo(musculo: MusculoCrear): Observable<MusculoLectura> {
    return this._musculosService.CrearMusculo(musculo);
  }

  EditarMusculo(musculo: MusculoCrear, id: number): Observable<void> {
    return this._musculosService.ActualizarMusculos(musculo, id);
  }
}
