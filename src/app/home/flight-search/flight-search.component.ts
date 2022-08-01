import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

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
    {code: 'MIA', name: 'Miami'},
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
  constructor(private flightservice: FlightService) {}

  ngOnInit(): void {}
  SelectOneWay(){
    this.isRoundTrip = false;
  }
  SelectRoundTrip(){
    this.isRoundTrip = true;
  }

  searchFlights(flightSearchData: {}) {
    console.log(flightSearchData)
    this.flightservice.flightSearch(flightSearchData).subscribe((res)=>{
      console.log(res);
    })
  }
}
