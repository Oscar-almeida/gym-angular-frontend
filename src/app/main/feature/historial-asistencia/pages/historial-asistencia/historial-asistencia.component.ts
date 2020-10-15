import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HistorialAsistenciaDataSource, HistorialAsistenciaResolveService } from '@feature/historial-asistencia/services';
import { fuseAnimations } from '@fuse/animations';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-historial-asistencia',
  templateUrl: './historial-asistencia.component.html',
  styleUrls: ['./historial-asistencia.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class HistorialAsistenciaComponent implements OnInit {

  dataSource: HistorialAsistenciaDataSource;
  displayedColumns = ['id', 'fechaCreacion', 'fechaSalida', 'rutinaId'];

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @ViewChild('filter', { static: true })
  filter: ElementRef;

  private _unsuscribeAll: Subject<any>;

  constructor(
    private _historialAsistenciaResolveService: HistorialAsistenciaResolveService
  ) {
    this._unsuscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.dataSource = new HistorialAsistenciaDataSource(this._historialAsistenciaResolveService, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        takeUntil(this._unsuscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      ).subscribe(() => {
        if (!this.dataSource)
          return
        this.dataSource.filter = this.filter.nativeElement.value;
      })
  }

}
