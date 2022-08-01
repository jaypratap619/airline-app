import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url = 'http://localhost:57104/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  constructor(private httpclient: HttpClient) {}

  // flightSearch(flightSearchData: {}): Observable<any>{
  //   console.log(flightSearchData);
  //   return this.httpclient
  //     .post<any>(this.url + 'user/login', {"email": userLoginData.email, "password" : userLoginData.password}, this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }
  

}
