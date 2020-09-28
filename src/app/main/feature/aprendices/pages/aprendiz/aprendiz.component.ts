import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';
import { AprendizLectura } from '@core/models';
import { AprendicesResolveService } from '@feature/aprendices/services';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-aprendiz',
  templateUrl: './aprendiz.component.html',
  styleUrls: ['./aprendiz.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AprendizComponent implements OnInit, OnDestroy {

  public aprendiz: AprendizLectura;
  pageType: string;

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
        if (response) {
          this.pageType = 'editar';
          this.aprendiz = response;
        }
      })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
