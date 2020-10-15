import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HistorialAsistencia } from '@core/models';
import { FuseUtils } from '@fuse/utils';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistorialAsistenciaResolveService } from './historial-asistencia-resolve.service';

export class HistorialAsistenciaDataSource extends DataSource<HistorialAsistencia> {

    private _filterChange: BehaviorSubject<string>;
    private _filteredDataChange: BehaviorSubject<HistorialAsistencia[]>;

    constructor(
        private _historialAsistenciaResolveService: HistorialAsistenciaResolveService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();
        this._filterChange = new BehaviorSubject<string>("");
        this._filteredDataChange = new BehaviorSubject<HistorialAsistencia[]>([]);
    }

    connect(collectionViewer: CollectionViewer): Observable<HistorialAsistencia[] | readonly HistorialAsistencia[]> {
        const displayDataChanges = [
            this._historialAsistenciaResolveService.onHistorialAsistenciaCambios,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._historialAsistenciaResolveService.historialAsistencia.slice();
                    data = this.filterData(data);
                    this.filteredData = [...data];
                    data = this.sortData(data);

                    const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                    return data.splice(startIndex, this._matPaginator.pageSize);
                }));
    }

    // Datos filtrados
    get filteredData(): HistorialAsistencia[] {
        return this._filteredDataChange.value
    }

    set filteredData(inventario: HistorialAsistencia[]) {
        this._filteredDataChange.next(inventario);
    }

    // Filtro a datos
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    filterData(data: HistorialAsistencia[]): any {
        if (!this.filter)
            return data
        return FuseUtils.filterArrayByString(data, this.filter);
    }

    sortData(data: HistorialAsistencia[]): HistorialAsistencia[] {
        if (!this._matSort.active || this._matSort.direction === '')
            return data;

        return data.sort((a, b) => {
            let propertyA: number | string | Date | boolean = '';
            let propertyB: number | string | Date | boolean = '';

            switch (this._matSort.active) {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'fechaCreacion':
                    [propertyA, propertyB] = [a.fechaCreacion, b.fechaCreacion];
                    break;
                case 'fechaSalida':
                    [propertyA, propertyB] = [a.fechaSalida, b.fechaSalida];
                    break;
                case 'rutinaId':
                    [propertyA, propertyB] = [a.rutinaId, b.rutinaId];
                    break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : + propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : + propertyB;

            return (valueA < valueB ? -1 : 1) * (this._matSort.direction === 'asc' ? 1 : -1);
        })
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

}