import { NgModule } from '@angular/core';
import { CalendarioEventosRoutingModule } from './calendario-eventos-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarioComponent } from './pages';
import { FuseConfirmDialogModule } from '@fuse/components';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CalendarioEventosRoutingModule,

    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,

    CalendarModule.forRoot({
      provide: DateAdapter, useFactory: adapterFactory
    }),
    ColorPickerModule,

    FuseSharedModule,
    FuseConfirmDialogModule
  ]
})
export class CalendarioEventosModule { }
