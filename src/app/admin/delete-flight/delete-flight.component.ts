import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {
  FlightDeleteData : {flightnumber: string} = {flightnumber: ''};
  constructor(private flightservice: FlightService) { }

  ngOnInit(): void {
  }
  deleteFlight(FlightDeleteData:{flightnumber: string}){
    this.flightservice.flightDelete(FlightDeleteData.flightnumber).subscribe((res) => {
      alert('Deleted Successfully');
      }
    );
  }
}
