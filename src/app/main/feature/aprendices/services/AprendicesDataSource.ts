import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AprendizLectura } from '@core/models';
import { FuseUtils } from '@fuse/utils';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AprendicesResolveService } from './aprendices-resolve.service';

export class AprendicesDataSource extends DataSource<AprendizLectura> {

    private _filterChange: BehaviorSubject<string>;
    private _filteredDataChange: BehaviorSubject<AprendizLectura[]>;

    constructor(
        private _aprendicesResolveService: AprendicesResolveService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();
        this._filterChange = new BehaviorSubject<string>("");
        this._filteredDataChange = new BehaviorSubject<AprendizLectura[]>([]);
        this.filteredData = this._aprendicesResolveService.aprendices;
    }

    connect(collectionViewer: CollectionViewer): Observable<AprendizLectura[] | readonly AprendizLectura[]> {
        const displayDataChanges = [
            this._aprendicesResolveService.onAprendicesCambios,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._aprendicesResolveService.aprendices.slice();
                    data = this.filterData(data);
                    this.filteredData = [...data];
                    data = this.sortData(data);

                    const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                    return data.splice(startIndex, this._matPaginator.pageSize);
                }));
    }

    // Datos filtrados
    get filteredData(): AprendizLectura[] {
        return this._filteredDataChange.value
    }

    set filteredData(inventario: AprendizLectura[]) {
        this._filteredDataChange.next(inventario);
    }

    // Filtro a datos
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    filterData(data: AprendizLectura[]): any {
        if (!this.filter)
            return data
        return FuseUtils.filterArrayByString(data, this.filter);
    }

    sortData(data: AprendizLectura[]): AprendizLectura[] {
        if (!this._matSort.active || this._matSort.direction === '')
            return data;

        return data.sort((a, b) => {
            let propertyA: number | string | Date | boolean = '';
            let propertyB: number | string | Date | boolean = '';

            switch (this._matSort.active) {
                case 'identificacion':
                    [propertyA, propertyB] = [a.identificacion, b.identificacion];
                    break;
                case 'nombres':
                    [propertyA, propertyB] = [a.nombres, b.nombres];
                    break;
                case 'apellidos':
                    [propertyA, propertyB] = [a.apellidos, b.apellidos];
                    break;
                case 'email':
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case 'ficha':
                    [propertyA, propertyB] = [a.email, b.email];
                    break;


            }

            const valueA = isNaN(+propertyA) ? propertyA : + propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : + propertyB;

            return (valueA < valueB ? -1 : 1) * (this._matSort.direction === 'asc' ? 1 : -1)
        });
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

}