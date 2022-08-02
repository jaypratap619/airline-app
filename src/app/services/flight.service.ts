import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IFlight } from '../Modals/iflight';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url = 'http://localhost:57104/api/flight';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  constructor(private httpclient: HttpClient) {}
  Passengers : [] = [];

  flightList(): Observable<any>{
    return this.httpclient
      .get<any>(this.url + "/getallflights", this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  flightSearch(flightSearchData: any): Observable<any>{
    console.log(flightSearchData);
    return this.httpclient
      .get<any>(this.url + '/getoneway?depDate=' + flightSearchData.departureDate + '&arCity=' + flightSearchData.to + '&dpCity=' + flightSearchData.from, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  flightAdd(flightData: IFlight): Observable<any>{
    console.log(flightData);
    return this.httpclient
      .post<any>(this.url + '/addflight',{
          "FlightNumber": flightData.FlightNumber,
          "FlightName": flightData.FlightName,
          "TimeOfArr": flightData.TimeOfArr,
          "DateOfArr": flightData.DateOfArr,
          "Duration": flightData.Duration,
          "PriceEco": flightData.PriceEco,
          "PriceBn": flightData.PriceBn,
          "DepCity": flightData.DepCity,
          "ArrCity": flightData.ArrCity,
          "TimeOfDept": flightData.TimeOfDept,
          "DateOfDept": flightData.DateOfDept,
          "SeatsEco": flightData.SeatsEco,
          "SeatsBussiness": flightData.SeatsBussiness,
          "Tickets": []
      }, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  flightDelete(fnum :string): Observable<any>{
    console.log(fnum);
    return this.httpclient
      .delete<any>(this.url + '/deleteflight?flightnumber=' + fnum, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  flightBook(bookingData : any, user:any, flightNumber:any ){
   
    return this.httpclient
      .post<any>("http://localhost:57104/api/ticket/book?Uemail=" + user.EmailId + "&flightnumber=" + flightNumber + "&type=" + bookingData.bookingclass ,
        bookingData.passengers
      ,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }

}
