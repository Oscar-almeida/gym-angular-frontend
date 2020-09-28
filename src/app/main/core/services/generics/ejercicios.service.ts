import { Injectable } from '@angular/core';
import { EjercicioCrear } from '@core/models/Ejercicio/EjercicioCrear';
import { EjercicioLectura } from '@core/models/Ejercicio/EjercicioLectura';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class EjerciciosService {

  private readonly _path: string = 'ejercicios';

  constructor(
    private _apiService: ApiService
  ) { }

  ObtenerEjercicios(): Observable<EjercicioLectura[]> {
    return this._apiService.Get<EjercicioLectura[]>(`${this._path}`);
  }

  ObtenerEjercicioPorId(id: number): Observable<EjercicioLectura> {
    return this._apiService.Get<EjercicioLectura>(`${this._path}/${id}`);
  }

  CrearEjercicio(ejercicio: EjercicioCrear): Observable<EjercicioLectura> {
    return this._apiService.Post<EjercicioLectura>(`${this._path}`, ejercicio);
  }

  ModificarEjercicio(ejercicio: EjercicioLectura, id: number): Observable<void> {
    return this._apiService.Put<void>(`${this._path}/${id}`, ejercicio);
  }
}
