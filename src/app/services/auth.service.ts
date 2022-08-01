import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import {IUserCredential} from '../Modals/iuser-credential'
import { IUser } from '../Modals/iuser';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:57104/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private httpclient: HttpClient) {}
  loginUser(userLoginData: IUserCredential): Observable<any>{
    console.log(userLoginData);
    return this.httpclient
      .post<any>(this.url + 'user/login', {"email": userLoginData.email, "pass" : userLoginData.password}, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  signUpUser(userData: IUser): Observable<any>{

    return this.httpclient
      .post<any>(this.url + 'user/signUp',{
        "Mobile": userData.mobile,
        "DateOfBirth": userData.dateOfBirth,
        "EmailId": userData.emailId,
        "UserPwd": userData.UserPwd,
        "FirstName": userData.firstName,
        "LastName": userData.lastName,
        "Tickets": []
      } , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  
   //handling errors from webapi
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
