import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptorService implements HttpInterceptor {

  constructor(
    private _jwtService: JwtService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }

    const token = this._jwtService.GetToken();
    
    if (token)
      headersConfig["Authorization"] = `Bearer ${token.token}`;

    const request = req.clone({ setHeaders: headersConfig });
    
    return next.handle(request);
  }


}
