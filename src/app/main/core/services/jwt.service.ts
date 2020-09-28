import { Injectable } from '@angular/core';
import { CurrentUser } from '@core/models';

@Injectable()
export class JwtService {

  constructor() { }

  GetToken(): CurrentUser {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  SaveToken(currentUser: CurrentUser) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  DestroyToken() {
    localStorage.removeItem('currentUser');
  }
}
