import { Component, OnInit } from '@angular/core';
import { IFlight } from 'src/app/Modals/iflight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css'],
})
export class AllFlightsComponent implements OnInit {
  flights: IFlight[] = [];
  constructor(private flightservice: FlightService) {}

  ngOnInit(): void {
    this.flightservice.flightList().subscribe((res) => {
      this.flights = res;
    });
  }
}
