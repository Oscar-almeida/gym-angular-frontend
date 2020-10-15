import { Injectable } from '@angular/core';
import { HistorialAsistencia } from '@core/models';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class HistorialAsistenciaService {

  private readonly _path: string = 'HistorialAsistencias';

  constructor(
    private _apiService: ApiService
  ) { }

  ObtenerHistorialAsistencia(): Observable<HistorialAsistencia[]> {
    return this._apiService.Get<HistorialAsistencia[]>(this._path);
  }

  ObtenerHistorialPorAaprendiz(identificacion: string): Observable<HistorialAsistencia[]> {
    return this._apiService.Get<HistorialAsistencia[]>(`${this._path}/${identificacion}`);
  }

}
