import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticadoGuard implements CanActivate {

  constructor(
    private _jwtService: JwtService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this._jwtService.GetToken()) {
      this._router.navigate(['/']);
      return false;
    }
    return true;
  }



}
