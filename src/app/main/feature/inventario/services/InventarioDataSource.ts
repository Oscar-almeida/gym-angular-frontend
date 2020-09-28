import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InventarioLectura } from '@core/models/Inventario/InventarioLectura';
import { FuseUtils } from '@fuse/utils';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InventarioResolveService } from './inventario-resolve.service';

export class InventarioDataSource extends DataSource<InventarioLectura>{

    private _filterChange: BehaviorSubject<string>;
    private _filteredDataChange: BehaviorSubject<InventarioLectura[]>;

    constructor(
        private _inventarioResolveService: InventarioResolveService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();
        this._filterChange = new BehaviorSubject<string>("");
        this._filteredDataChange = new BehaviorSubject<InventarioLectura[]>([]);
        this.filteredData = this._inventarioResolveService.inventarios;
    }

    connect(collectionViewer: CollectionViewer): Observable<InventarioLectura[] | readonly InventarioLectura[]> {
        const displayDataChanges = [
            this._inventarioResolveService.onInventariosCambios,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._inventarioResolveService.inventarios.slice();
                    data = this.filterData(data);
                    this.filteredData = [...data];
                    data = this.sortData(data);

                    const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                    return data.splice(startIndex, this._matPaginator.pageSize);
                }));
    }

    // Datos filtrados
    get filteredData(): InventarioLectura[] {
        return this._filteredDataChange.value
    }

    set filteredData(inventario: InventarioLectura[]) {
        this._filteredDataChange.next(inventario);
    }

    // Filtro a datos
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    filterData(data: InventarioLectura[]): any {
        if (!this.filter)
            return data
        return FuseUtils.filterArrayByString(data, this.filter);
    }

    sortData(data: InventarioLectura[]): InventarioLectura[] {
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
                case 'cantidadTotal':
                    [propertyA, propertyB] = [a.cantidadTotal, b.cantidadTotal];
                    break;
                case 'cantidadDisponible':
                    [propertyA, propertyB] = [a.cantidadDisponible, b.cantidadDisponible];
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