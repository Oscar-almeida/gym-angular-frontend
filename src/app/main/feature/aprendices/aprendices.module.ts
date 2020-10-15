import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
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
import { RouterModule, Routes } from '@angular/router';
import { FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { HistorialComponent, InformacionComponent, RutinasComponent } from './components';
import { AprendicesComponent, AprendizComponent, AprendizFormComponent } from './pages';
import { AprendicesResolveService, HistorialAsistenciaResolveService, RutinasResolveService } from './services';

const routes: Routes = [
  {
    path: '',
    component: AprendicesComponent,
    resolve: { aprendices: AprendicesResolveService }
  },
  {
    path: ':id',
    component: AprendizFormComponent,
    resolve: {
      aprendiz: AprendicesResolveService
    }
  },
  {
    path: 'nuevo',
    component: AprendizFormComponent,
  },
  {
    path: 'detalle/:id',
    component: AprendizComponent,
    resolve: {
      aprendiz: AprendicesResolveService,
      rutinas: RutinasResolveService,
      historialAsistencia: HistorialAsistenciaResolveService
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'prefix'
  }
]

@NgModule({
  declarations: [
    AprendicesComponent,
    AprendizComponent,
    InformacionComponent,
    HistorialComponent,
    RutinasComponent,
    AprendizFormComponent
  ],
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
    MatDividerModule,

    FuseSharedModule,
    FuseWidgetModule
  ],
  providers: [
    AprendicesResolveService,
    RutinasResolveService,
    HistorialAsistenciaResolveService
  ]
})
export class AprendicesModule { }
