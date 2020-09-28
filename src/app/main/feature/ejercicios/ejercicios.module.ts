import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { EjercicioComponent } from './pages/ejercicio/ejercicio.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { EjercicioResolveService } from './services';
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
    component: EjerciciosComponent,
    resolve: { ejercicios: EjercicioResolveService }
  },
  {
    path: ':id',
    component: EjercicioComponent
  },
  {
    path: 'nuevo',
    component: EjercicioComponent
  }
]

@NgModule({
  declarations: [EjerciciosComponent, EjercicioComponent],
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
    EjercicioResolveService
  ]
})
export class EjerciciosModule { }
