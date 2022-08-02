import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  localItem: string | null = '';
  user: any ={};
  constructor(private userservice: UserService, private router: Router) { }
  tickets : any = []
  ngOnInit(): void {
    this.localItem = sessionStorage.getItem('currentUser');
    if (this.localItem == null) this.user = {};
    else {
      this.user = JSON.parse(this.localItem);
      console.log('user: ', this.user);
    }
    this.userservice.getTicketByUser(this.user.EmailId).subscribe(res=>{
      console.log("tickets",res);
      this.tickets=res;
    })
  }
  onCancelTicket(tId : any){
    this.userservice.CancelTicket(tId).subscribe((res)=>{
      this.router.navigate(['/mybookings']).then(()=>window.location.reload());
    })
  }

}
