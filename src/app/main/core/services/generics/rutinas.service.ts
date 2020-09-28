import { Injectable } from '@angular/core';
import { Rutina } from '@core/models';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class RutinasService {

  private readonly _path: string = 'rutinas';

  constructor(
    private _apiService: ApiService
  ) { }

  ObtenerRutinasPorAprendiz(identificacion: string): Observable<Rutina[]> {
    return this._apiService.Get<Rutina[]>(`${this._path}/${identificacion}`);
  }
}
