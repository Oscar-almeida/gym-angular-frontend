import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from '@core/models';
import { LoginUser } from '@core/models/user/LoginUser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtService } from '../jwt.service';
import { ApiService } from './api.service';

@Injectable()
export class AutenticacionService {

  private readonly path: string = 'Administradores';

  constructor(
    private _apiService: ApiService,
    private _jwtService: JwtService,
    private _router: Router
  ) { }

  LoginAdministrador(user: LoginUser): Observable<CurrentUser> {
    return this._apiService.Post<CurrentUser>(`${this.path}/Login`, user)
      .pipe(map((user => {
        if (user)
          this._jwtService.SaveToken(user);
        return user;
      })));
  }

  ObtenerCurrentUser(): CurrentUser {
    return this._jwtService.GetToken();
  }

  LogoutCurrentUser() {
    this._jwtService.DestroyToken();
    this._router.navigate(['/autenticacion/ingresar']);
  }

}
