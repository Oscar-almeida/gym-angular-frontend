import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AprendizLectura } from '@core/models';
import { AprendicesResolveService } from '@feature/aprendices/services';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class InformacionComponent implements OnInit, OnDestroy {

  aprendiz: AprendizLectura;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _aprendicesResolveService: AprendicesResolveService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._aprendicesResolveService.onAprendizCambios
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this.aprendiz = response;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
