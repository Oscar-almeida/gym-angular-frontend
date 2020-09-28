import { Injectable } from '@angular/core';
import { MusculoCrear, MusculoLectura } from '@core/models';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class MusculosService {

  private readonly _path: string = 'musculos';

  constructor(
    private _apiService: ApiService
  ) { }

  ObtenerMusculos(): Observable<MusculoLectura[]> {
    return this._apiService.Get<MusculoLectura[]>(`${this._path}`);
  }

  ObtenerMusculoPorId(id: number): Observable<MusculoLectura> {
    return this._apiService.Get<MusculoLectura>(`${this._path}/${id}`);
  }

  CrearMusculo(musculo: MusculoCrear): Observable<MusculoLectura> {
    return this._apiService.Post<MusculoLectura>(`${this._path}`, musculo);
  }

  ActualizarMusculos(musculo: MusculoCrear, id: number): Observable<void> {
    return this._apiService.Put(`${this._path}/${id}`, musculo);
  }

}
