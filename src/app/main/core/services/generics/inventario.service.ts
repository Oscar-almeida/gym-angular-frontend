import { Injectable } from '@angular/core';
import { InventarioCrear, InventarioLectura } from '@core/models';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class InventarioService {

  private readonly _path: string = 'inventario';

  constructor(
    private _apiService: ApiService
  ) { }

  ObtenerInvetario(): Observable<InventarioLectura[]> {
    return this._apiService.Get<InventarioLectura[]>(`${this._path}`);
  }

  ObtenerInvetarioPorId(id: number): Observable<InventarioLectura> {
    return this._apiService.Get<InventarioLectura>(`${this._path}/${id}`);
  }

  AgregarInventario(inventario: InventarioCrear): Observable<InventarioLectura> {
    return this._apiService.Post(`${this._path}`, inventario);
  }

  ModificarInventario(inventario: InventarioCrear, id: number): Observable<void> {
    return this._apiService.Put(`${this._path}/${id}`, inventario);
  }
}
