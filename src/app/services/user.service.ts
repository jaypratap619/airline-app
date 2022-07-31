import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:57104/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private httpclient: HttpClient) {}

}
