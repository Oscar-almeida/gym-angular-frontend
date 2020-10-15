import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { CoreModule } from './main/core/core.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './fake-db/fake-db.service';
import { CalendarModule } from 'angular-calendar';
import { AutenticadoGuard, NoAutenticadoGuard } from '@core/guards';

const appRoutes: Routes = [
    {
        path: 'app',
        loadChildren: () => import('@feature/feature.module')
            .then(module => module.FeatureModule),
        canActivate: [NoAutenticadoGuard]
    },
    {
        path: 'autenticacion',
        loadChildren: () => import('@autenticacion/autenticacion.module')
            .then(module => module.AutenticacionModule),
        canActivate: [AutenticadoGuard]
    },
    {
        path: 'eventos',
        loadChildren: () => import('@calendario-eventos/calendario-eventos.module')
            .then(module => module.CalendarioEventosModule)
    },
    {
        path: '**',
        redirectTo: 'app/historial-asistencia'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        // InMemoryWebApiModule.forRoot(FakeDbService, {
        //     delay: 0,
        //     passThruUnknownUrl: true
        // }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        CoreModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
