import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Rutina } from '@core/models';
import { RutinasService } from '@core/services';
import { error } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RutinasResolveService implements Resolve<Rutina[]> {

  rutinas: Rutina[];
  onRutinasCambios: BehaviorSubject<Rutina[]>;
  routeParams: string;

  constructor(
    private _rutinasService: RutinasService
  ) {
    this.onRutinasCambios = new BehaviorSubject<Rutina[]>(null);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Rutina[] | Observable<Rutina[]> | Promise<Rutina[]> {
    this.routeParams = route.params['id'];

    return new Promise((resolve, reject) => {
      Promise.all([
        this.ObtenerRutinasPorAprendiz()
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  ObtenerRutinasPorAprendiz(): Promise<Rutina[]> {
    return new Promise<Rutina[]>((resolve, reject) => {
      this._rutinasService.ObtenerRutinasPorAprendiz(this.routeParams)
        .subscribe(response => {
          this.rutinas = response;
          this.onRutinasCambios.next(response);
          resolve(response);
        },
          error => {
            reject
          });
    });
  }
}
