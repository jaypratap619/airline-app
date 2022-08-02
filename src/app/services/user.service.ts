import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:57104/api/user';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private httpclient: HttpClient) {}
  getTicketByUser(email: string): Observable<any>{
    return this.httpclient
      .get<any>(this.url + '/getuserticket?email=' + email, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  CancelTicket(tId: any): Observable<any>{
    return this.httpclient
      .put<any>("http://localhost:57104/api/ticket/cancelled?tickenumber=" + tId , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }

}
