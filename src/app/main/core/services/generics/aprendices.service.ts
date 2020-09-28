import { Injectable } from '@angular/core';
import { AprendizCrear, AprendizLectura } from '@core/models';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class AprendicesService {

  private readonly _path: string = 'aprendices';

  constructor(
    private _apiService: ApiService
  ) { }

  ObtenerAprendices(): Observable<AprendizLectura[]> {
    return this._apiService.Get<AprendizLectura[]>(`${this._path}`);
  }

  ObtenerAprendizPorIdentificacion(identificacion: string): Observable<AprendizLectura> {
    return this._apiService.Get<AprendizLectura>(`${this._path}/${identificacion}`);
  }

  CrearAprendiz(aprendiz: AprendizCrear): Observable<AprendizLectura> {
    return this._apiService.Post<AprendizLectura>(`${this._path}`, aprendiz);
  }

  ModificarAprendiz(aprendiz: AprendizCrear, identificacion: string): Observable<void> {
    return this._apiService.Put<void>(`${this._path}/${identificacion}`, aprendiz);
  }

}
