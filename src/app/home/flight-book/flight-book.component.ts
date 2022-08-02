import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-book',
  templateUrl: './flight-book.component.html',
  styleUrls: ['./flight-book.component.css']
})
export class FlightBookComponent implements OnInit {
  bookingData : any = {
    bookingclass: '',
    passengercount: 1,
    passengers : Array({p_name: '', p_age: undefined})
  }
  constructor() { }

  ngOnInit(): void {
  }
  bookFlight(bookingData:any){
    console.log("booking data :",this.bookingData);
    
  }
  // onCountChange(){
  //   this.bookingData.passengers = Array(this.bookingData.passengercount)
  // }
  removePassengers(){
    if(this.bookingData.passengercount >1){
      this.bookingData.passengercount--;
      this.bookingData.passengers.pop();
    }
  }
  addPassengers(){
    if(this.bookingData.passengercount <5){
      this.bookingData.passengercount++;
      this.bookingData.passengers.push({p_name: '', p_age: undefined});
    }
  }
}
