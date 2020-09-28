import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EjercicioResolveService } from '@feature/ejercicios/services';
import { EjerciciosDataSource } from '@feature/ejercicios/services/EjerciciosDataSource';
import { fuseAnimations } from '@fuse/animations';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class EjerciciosComponent implements OnInit {

  dataSource: EjerciciosDataSource;
  displayedColumns = ['id', 'imagen', 'nombre', 'descripcion', 'musculoId'];

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @ViewChild('filter', { static: true })
  filter: ElementRef;

  private _unsuscribeAll: Subject<any>;

  constructor(
    private _ejercicioResolveService: EjercicioResolveService
  ) {
    this._unsuscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.dataSource = new EjerciciosDataSource(this._ejercicioResolveService, this.paginator, this.sort);

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
