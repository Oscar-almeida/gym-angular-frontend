import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Rutina } from '@core/models';
import { RutinasResolveService } from '@feature/aprendices/services';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class RutinasComponent implements OnInit, OnDestroy {

  rutinas: Rutina[];

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _rutinasResolveService: RutinasResolveService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._rutinasResolveService.onRutinasCambios
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this.rutinas = response
      })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
