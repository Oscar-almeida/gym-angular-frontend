import { Pipe, PipeTransform } from '@angular/core';
import { MusculoLectura } from '@core/models';
import { EjercicioLectura } from '@core/models/Ejercicio/EjercicioLectura';
import { EjercicioResolveService } from '../services';

@Pipe({
  name: 'idToMusculo'
})
export class IdToMusculoPipe implements PipeTransform {

  musculos: MusculoLectura[];

  constructor(
    private _ejerciciosResolveService: EjercicioResolveService
  ) {
    this.musculos = this._ejerciciosResolveService.musculos;
  }

  transform(value: number, ...args: unknown[]): string {
    let musculo: MusculoLectura = this.musculos.find(musculo => musculo.id == value)
    return `${musculo.id + ' - ' + musculo.nombre}`;
  }

}
