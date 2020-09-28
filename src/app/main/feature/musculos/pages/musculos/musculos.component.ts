import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MusculoResolveService, MusculosDataSource } from '@feature/musculos/services';
import { fuseAnimations } from '@fuse/animations';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-musculos',
  templateUrl: './musculos.component.html',
  styleUrls: ['./musculos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class MusculosComponent implements OnInit {

  dataSource: MusculosDataSource;
  displayedColumns = ['id', 'imagen', 'nombre']

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @ViewChild('filter', { static: true })
  filter: ElementRef;

  private _unsuscribeAll: Subject<any>;

  constructor(
    private _musculoResolveService: MusculoResolveService
  ) {
    this._unsuscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.dataSource = new MusculosDataSource(this._musculoResolveService, this.paginator, this.sort);

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
