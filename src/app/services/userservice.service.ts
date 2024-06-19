import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { User } from '../model/user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  _url: string = '';

  constructor(
    private _httpClient: HttpClient
  ) { }

  enroll(user: User) {
    return this._httpClient.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
