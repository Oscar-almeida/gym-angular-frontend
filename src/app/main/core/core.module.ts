import { NgModule } from '@angular/core';
import { ApiService, AprendicesService, AutenticacionService, EjerciciosService, HistorialAsistenciaService, InventarioService, JwtService, MusculosService, RutinasService } from './services';
import { AutenticadoGuard, NoAutenticadoGuard } from './guards';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptorService } from './interceptors/http-token-interceptor.service';
import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
  declarations: [],
  imports: [
    FuseSharedModule
  ],
  providers: [
    ApiService,
    AutenticacionService,
    JwtService,
    AutenticadoGuard,
    NoAutenticadoGuard,
    InventarioService,
    MusculosService,
    AprendicesService,
    HistorialAsistenciaService,
    RutinasService,
    EjerciciosService,
    HttpTokenInterceptorService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptorService, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class CoreModule { }
