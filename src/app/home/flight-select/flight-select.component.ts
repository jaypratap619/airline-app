import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { FlightService } from 'src/app/services/flight.service';
@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.css']
})
export class FlightSelectComponent implements OnInit {
  flights:any[]= [];
  constructor(private flightservice: FlightService, private route: ActivatedRoute, private router : Router ) { 
    console.log(this.flights);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.flightservice.flightSearch(params).subscribe((res)=>{
        this.flights = res;
        console.log("flights : ",this.flights);
      })
    });
  }

  onFlightSelect(fnum : string){
    if(sessionStorage.getItem("currentUser")){
      this.router.navigate(['/bookflight'])
    }
    else{
      alert("Please login to book flights")
    }
  }

}
