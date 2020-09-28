import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AprendizCrear, AprendizLectura } from '@core/models';
import { AprendicesService } from '@core/services';
import { error } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AprendicesResolveService implements Resolve<AprendizLectura[] | AprendizLectura> {

  aprendices: AprendizLectura[];
  onAprendicesCambios: BehaviorSubject<AprendizLectura[]>;

  aprendiz: AprendizLectura;
  onAprendizCambios: BehaviorSubject<AprendizLectura>;
  routeParams: string;

  constructor(
    private _aprendizService: AprendicesService
  ) {
    this.onAprendizCambios = new BehaviorSubject<AprendizLectura>(null);
    this.onAprendicesCambios = new BehaviorSubject<AprendizLectura[]>(null);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): AprendizLectura | AprendizLectura[] | Observable<AprendizLectura | AprendizLectura[]> | Promise<AprendizLectura | AprendizLectura[]> {
    this.routeParams = route.params['id'];
    
    if (this.routeParams)
      return new Promise((resolve, reject) => {
        Promise.all([
          this.ObtenerAprendizPorIdentificacion()
        ]).then(() => {
          resolve();
        }, reject);
      });

    return new Promise((resolve, reject) => {
      Promise.all([
        this.ObtenerAprendices()
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  ObtenerAprendices(): Promise<AprendizLectura[]> {
    return new Promise<AprendizLectura[]>((resolve, reject) => {
      this._aprendizService.ObtenerAprendices()
        .subscribe(response => {
          this.aprendices = response;
          this.onAprendicesCambios.next(response);
          resolve(response);
        },
          error => {
            reject
          });
    });
  }

  ObtenerAprendizPorIdentificacion(): Promise<AprendizLectura> {
    return new Promise<AprendizLectura>((resolve, reject) => {
      if (this.routeParams == 'nuevo') {
        this.onAprendizCambios.next(null);
        resolve(null);
      } else
        this._aprendizService.ObtenerAprendizPorIdentificacion(this.routeParams)
          .subscribe(response => {
            this.aprendiz = response;
            this.onAprendizCambios.next(response);
            resolve(response);
          },
            error => {
              reject
            });
    });
  }

  CrearAprendiz(aprendiz: AprendizCrear): Observable<AprendizLectura> {
    return this._aprendizService.CrearAprendiz(aprendiz);
  }

  MoficarAprendiz(aprendiz: AprendizCrear, identificacion: string): Observable<void> {
    return this._aprendizService.ModificarAprendiz(aprendiz, identificacion);
  }
}
