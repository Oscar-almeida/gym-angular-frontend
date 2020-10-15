import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialAsistenciaComponent } from './pages/historial-asistencia/historial-asistencia.component';
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
import { MatDividerModule } from '@angular/material/divider';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';
import { RouterModule, Routes } from '@angular/router';
import { HistorialAsistenciaResolveService } from './services';

const router: Routes = [
  {
    path: '',
    component: HistorialAsistenciaComponent,
    resolve: {
      historialAsistencia: HistorialAsistenciaResolveService
    }
  }
]

@NgModule({
  declarations: [HistorialAsistenciaComponent],
  imports: [
    RouterModule.forChild(router),

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
    MatDividerModule,

    FuseSharedModule,
    FuseWidgetModule
  ],
  providers: [
    HistorialAsistenciaResolveService
  ]
})
export class HistorialAsistenciaModule { }
