import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CurrentUser } from '@core/models';
import { LoginUser } from '@core/models/user/LoginUser';
import { AutenticacionService } from '@core/services';
import { fuseAnimations } from '@fuse/animations';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private _fuseProgressBarService: FuseProgressBarService,
    private _matSnackBar: MatSnackBar,
    private _autenticacionService: AutenticacionService,
    private _router: Router
  ) {
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  OnLogin(): void {
    this._fuseProgressBarService.show();

    const credenciales: LoginUser = {
      email: this.loginForm.controls.email.value,
      contrasenha: this.loginForm.controls.password.value
    }

    this._autenticacionService.LoginAdministrador(credenciales)
      .subscribe(response => {
        this._fuseProgressBarService.hide();
        this._router.navigate(['/']);
      },
        error => {
          this._fuseProgressBarService.hide();
          this._matSnackBar.open(`${error}`, 'Ok', {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 7000
          });
        });
  }

}
