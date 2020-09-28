import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusculoComponent, MusculosComponent } from './pages';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { MusculoResolveService } from './services';
import { FuseWidgetModule } from '@fuse/components';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: MusculosComponent,
    resolve: { data: MusculoResolveService }
  },
  {
    path: ':id',
    component: MusculoComponent,
    resolve: { data: MusculoResolveService }
  },
  {
    path: 'nuevo',
    component: MusculoComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'prefix'
  }
]


@NgModule({
  declarations: [MusculosComponent, MusculoComponent],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,

    FuseSharedModule,
    FuseWidgetModule
  ],
  providers: [
    MusculoResolveService
  ]
})
export class MusculosModule { }
