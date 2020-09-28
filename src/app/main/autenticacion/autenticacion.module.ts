import { NgModule } from '@angular/core';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './pages';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AutenticacionResolveService } from './services';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AutenticacionRoutingModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,

    RouterModule,
    FuseSharedModule,
  ],
  providers: [
    AutenticacionResolveService
  ]
})
export class AutenticacionModule { }
