import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MusculoLectura } from '@core/models';
import { FuseUtils } from '@fuse/utils';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MusculoResolveService } from './musculo-resolve.service';

export class MusculosDataSource extends DataSource<MusculoLectura> {

    private _filterChange: BehaviorSubject<string>;
    private _filteredDataChange: BehaviorSubject<MusculoLectura[]>;

    constructor(
        private _musculosResolveService: MusculoResolveService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();
        this._filterChange = new BehaviorSubject<string>("");
        this._filteredDataChange = new BehaviorSubject<MusculoLectura[]>([]);
        this.filteredData = this._musculosResolveService.musculos;
    }

    connect(collectionViewer: CollectionViewer): Observable<MusculoLectura[] | readonly MusculoLectura[]> {
        const displayDataChanges = [
            this._musculosResolveService.onMusculosCambios,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._musculosResolveService.musculos.slice();
                    data = this.filterData(data);
                    this.filteredData = [...data];
                    data = this.sortData(data);

                    const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                    return data.splice(startIndex, this._matPaginator.pageSize);
                }));
    }

    // Datos filtrados
    get filteredData(): MusculoLectura[] {
        return this._filteredDataChange.value
    }

    set filteredData(musculos: MusculoLectura[]) {
        this._filteredDataChange.next(musculos);
    }

    // Filtro a datos
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    filterData(data: MusculoLectura[]) {
        if (!this.filter)
            return data
        return FuseUtils.filterArrayByString(data, this.filter);
    }

    sortData(data: MusculoLectura[]): MusculoLectura[] {
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

            }

            const valueA = isNaN(+propertyA) ? propertyA : + propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : + propertyB;

            return (valueA < valueB ? -1 : 1) * (this._matSort.direction === 'asc' ? 1 : -1)
        })
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

}