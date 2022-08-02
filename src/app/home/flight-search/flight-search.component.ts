import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    {code: 'CCU', name: 'Kolkata'},
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
  filterFilghts = []
  constructor(private flightservice: FlightService , private router: Router) {}

  ngOnInit(): void {}
  SelectOneWay(){
    this.isRoundTrip = false;
  }
  SelectRoundTrip(){
    this.isRoundTrip = true;
  }

  searchFlights(flightSearchData: any) {
    console.log(flightSearchData)
    this.router.navigate(['/selectflight'], { queryParams: flightSearchData})
    
  }
}
