import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  private readonly path: string = environment.api_uri;

  constructor(
    private _http: HttpClient
  ) { }

  private FormatErros(error: any) {
    return throwError(error.error);
  }

  Get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this._http.get<T>(`${this.path}/${path}`, { params })
      .pipe(catchError(this.FormatErros));
  }

  Put<T>(path: string, body: Object = {}): Observable<T> {
    return this._http.put<T>(`${this.path}/${path}`, body)
      .pipe(catchError(this.FormatErros));
  }

  Post<T>(path: string, body: Object = {}): Observable<T> {
    return this._http.post<T>(`${this.path}/${path}`, body)
      .pipe(catchError(this.FormatErros));
  }

  Delete(paht: string): Observable<any> {
    return this._http.delete(`${this.path}/${paht}`)
      .pipe(catchError(this.FormatErros));
  }
}