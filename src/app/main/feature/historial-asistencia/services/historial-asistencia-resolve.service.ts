import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HistorialAsistencia } from '@core/models';
import { HistorialAsistenciaService } from '@core/services';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class HistorialAsistenciaResolveService implements Resolve<HistorialAsistencia | HistorialAsistencia[]> {

  historialAsistencia: HistorialAsistencia[];
  onHistorialAsistenciaCambios: BehaviorSubject<HistorialAsistencia[]>;
  routeParams: string;

  constructor(
    private _historialAsistenciaService: HistorialAsistenciaService
  ) {
    this.onHistorialAsistenciaCambios = new BehaviorSubject<HistorialAsistencia[]>(null);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): HistorialAsistencia | HistorialAsistencia[] | Observable<HistorialAsistencia | HistorialAsistencia[]> | Promise<HistorialAsistencia | HistorialAsistencia[]> {
    this.routeParams = route.params['id'];
    if (this.routeParams)
      return new Promise((resolve, reject) => {
        Promise.all([
          this.ObtenerHistorialPorAprendiz()
        ]).then(() => {
          resolve();
        }, reject);
      });

    return new Promise((resolve, reject) => {
      Promise.all([
        this.ObtenerHistorialAsistencia()
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  ObtenerHistorialAsistencia(): Promise<HistorialAsistencia[]> {
    return new Promise<HistorialAsistencia[]>((resolve, reject) => {
      this._historialAsistenciaService.ObtenerHistorialAsistencia()
        .subscribe(response => {
          this.historialAsistencia = response;
          this.onHistorialAsistenciaCambios.next(response);
          resolve(response);
        },
          error => {
            reject
          })
    })
  }

  ObtenerHistorialPorAprendiz(): Promise<HistorialAsistencia[]> {
    return new Promise<HistorialAsistencia[]>((resolve, reject) => {
      this._historialAsistenciaService.ObtenerHistorialPorAaprendiz(this.routeParams)
        .subscribe(response => {
          this.historialAsistencia = response;
          this.onHistorialAsistenciaCambios.next(response);
          resolve(response);
        },
          error => {
            reject
          })
    });
  }

}
