import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InventarioResolveService } from '@feature/inventario/services';
import { InventarioDataSource } from '@feature/inventario/services/InventarioDataSource';
import { fuseAnimations } from '@fuse/animations';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class InventariosComponent implements OnInit {

  dataSource: InventarioDataSource;
  displayedColumns = ['id', 'imagen', 'nombre', 'cantidadTotal', 'cantidadDisponible']

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @ViewChild('filter', { static: true })
  filter: ElementRef;

  private _unsuscribeAll: Subject<any>;

  constructor(
    private _inventarioResolveService: InventarioResolveService
  ) {
    this._unsuscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.dataSource = new InventarioDataSource(this._inventarioResolveService, this.paginator, this.sort);

    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        takeUntil(this._unsuscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      ).subscribe(() => {
        if (!this.dataSource)
          return
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

}
