import { Component, OnInit } from '@angular/core';
import { IFlight } from 'src/app/Modals/iflight';
import { Time } from '@angular/common';
import { FlightService } from 'src/app/services/flight.service';
@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  flightData: IFlight = {
  FlightNumber: '',
  FlightName: '',
  TimeOfArr:  {hours: 0, minutes: 0},
  DateOfArr: new Date,
  Duration: {hours: 0, minutes: 0},
  PriceEco: 0,
  PriceBn: 0,
  DepCity: '',
  ArrCity: '',
  TimeOfDept: {hours: 0, minutes: 0},
  DateOfDept: new Date,
  SeatsEco: 0,
  SeatsBussiness: 0,
  Tickets: [],
  }
  cities=[
    {code: 'DEL', name: 'Delhi'},
    {code: 'CGH', name: 'Chandigarh'},
    {code: 'BOM', name: 'Bombay'},
    {code: 'CCU', name: 'Kolkata'},
  ]
  constructor(private flightservice: FlightService) { }

  addFlight(flightData : IFlight){
    console.log(flightData);
    this.flightservice.flightAdd(flightData).subscribe((res) => {
      alert('Successfully Added');
      }
    );
  }

  ngOnInit(): void {
  }

}
