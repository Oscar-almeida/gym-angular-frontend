import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HistorialAsistencia } from '@core/models';
import { HistorialAsistenciaResolveService } from '@feature/aprendices/services';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class HistorialComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['fechaCreacion', 'fechaSalida', 'rutinaId'];
  dataSource: HistorialAsistencia[];

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _historialAsistenciaResolveService: HistorialAsistenciaResolveService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._historialAsistenciaResolveService.onHistorialAsistenciaCambios
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this.dataSource = response;
      })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
