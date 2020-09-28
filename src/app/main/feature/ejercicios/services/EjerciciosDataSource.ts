import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EjercicioLectura } from '@core/models/Ejercicio/EjercicioLectura';
import { FuseUtils } from '@fuse/utils';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EjercicioResolveService } from './ejercicio-resolve.service';

export class EjerciciosDataSource extends DataSource<EjercicioLectura>{

    private _filterChange: BehaviorSubject<string>;
    private _filteredDataChange: BehaviorSubject<EjercicioLectura[]>;

    constructor(
        private _ejerciciosResolveService: EjercicioResolveService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();
        this._filterChange = new BehaviorSubject<string>("");
        this._filteredDataChange = new BehaviorSubject<EjercicioLectura[]>([]);
        this.filteredData = this._ejerciciosResolveService.ejercicios;
    }

    connect(collectionViewer: CollectionViewer): Observable<EjercicioLectura[] | readonly EjercicioLectura[]> {
        const displayDataChanges = [
            this._ejerciciosResolveService.ejercicios,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._ejerciciosResolveService.ejercicios.slice();
                    data = this.filterData(data);
                    this.filteredData = [...data];
                    data = this.sortData(data);

                    const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                    return data.splice(startIndex, this._matPaginator.pageSize);
                })
            )
    }

    // Datos filtrados
    get filteredData(): EjercicioLectura[] {
        return this._filteredDataChange.value
    }

    set filteredData(inventario: EjercicioLectura[]) {
        this._filteredDataChange.next(inventario);
    }

    // Filtro a datos
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    filterData(data: EjercicioLectura[]): any {
        if (!this.filter)
            return data
        return FuseUtils.filterArrayByString(data, this.filter);
    }

    sortData(data: EjercicioLectura[]): EjercicioLectura[] {
        if (!this._matSort.active || this._matSort.direction === '')
            return data;

        return data.sort((a, b) => {
            let propertyA: number | string | Date | boolean = '';
            let propertyB: number | string | Date | boolean = '';

            switch (this._matSort.active) {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'nombre':
                    [propertyA, propertyB] = [a.nombre, b.nombre];
                    break;
                case 'descripcion':
                    [propertyA, propertyB] = [a.descripcion, b.descripcion];
                    break;
                case 'musculoId':
                    [propertyA, propertyB] = [a.musculoId, b.musculoId];
                    break;

            }

            const valueA = isNaN(+propertyA) ? propertyA : + propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : + propertyB;

            return (valueA < valueB ? -1 : 1) * (this._matSort.direction === 'asc' ? 1 : -1)
        })
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

}