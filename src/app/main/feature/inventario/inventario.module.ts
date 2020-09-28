import { NgModule } from '@angular/core';
import { InventarioComponent, InventariosComponent } from './pages';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { InventarioResolveService } from './services';
import { FuseWidgetModule } from '@fuse/components';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: InventariosComponent,
    resolve: { data: InventarioResolveService }
  },
  {
    path: ':id',
    component: InventarioComponent,
    resolve: { data: InventarioResolveService }
  },
  {
    path: 'nuevo',
    component: InventarioComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'prefix'
  }
]

@NgModule({
  declarations: [InventariosComponent, InventarioComponent],
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
    InventarioResolveService
  ]
})
export class InventarioModule { }
