import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {
  cities=[
    {code: 'DEL', name: 'Delhi'},
    {code: 'CGH', name: 'Chandigarh'},
    {code: 'BOM', name: 'Bombay'},
  ]
  isRoundTrip = false;
  flightSearchData: {
    from: string;
    to: string;
    departureDate: Date;
    returnDate: Date;
  } = {
    from: '',
    to: '',
    departureDate: new Date(),
    returnDate: new Date(),
  };
  constructor() {}

  ngOnInit(): void {}
  SelectOneWay(){
    this.isRoundTrip = false;
  }
  SelectRoundTrip(){
    this.isRoundTrip = true;
  }

  searchFlights(flightSearchData: {}) {
    console.log(flightSearchData)
  }
}
