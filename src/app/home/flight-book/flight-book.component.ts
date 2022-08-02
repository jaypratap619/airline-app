import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-book',
  templateUrl: './flight-book.component.html',
  styleUrls: ['./flight-book.component.css'],
})
export class FlightBookComponent implements OnInit {
  bookingData: any = {
    bookingclass: '',
    passengercount: 1,
    passengers: Array({ pname: '', page: undefined }),
  };
  localItem: string | null = '';
  user: any = {};
  constructor(
    private flightservice: FlightService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  flightNumber: any = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params : any) => {
      this.flightNumber = params.flightNum;
    });
    this.localItem = sessionStorage.getItem('currentUser');
    if (this.localItem == null) this.user = {};
    else {
      this.user = JSON.parse(this.localItem);
      console.log('user: ', this.user);
      console.log('fnum: ', this.flightNumber);
    }
  }
  // onCountChange(){
  //   this.bookingData.passengers = Array(this.bookingData.passengercount)
  // }
  bookFlight(bookingData: any) {
    console.log('booking data :', this.bookingData);
    this.flightservice.flightBook(this.bookingData, this.user, this.flightNumber ).subscribe((res:any)=>{
      console.log("Booked",res);
    })
  }
  removePassengers() {
    if (this.bookingData.passengercount > 1) {
      this.bookingData.passengercount--;
      this.bookingData.passengers.pop();
    }
  }
  addPassengers() {
    if (this.bookingData.passengercount < 5) {
      this.bookingData.passengercount++;
      this.bookingData.passengers.push({ p_name: '', p_age: undefined });
    }
  }
}
