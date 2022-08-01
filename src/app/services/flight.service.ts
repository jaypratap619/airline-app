import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url = 'http://localhost:57104/api/flight';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  constructor(private httpclient: HttpClient) {}

  flightSearch(flightSearchData: any): Observable<any>{
    console.log(flightSearchData);
    return this.httpclient
      .get<any>(this.url + '/getoneway?depDate=' + flightSearchData.departureDate + '&arCity=' + flightSearchData.to + '&dpCity=' + flightSearchData.from, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }

}
