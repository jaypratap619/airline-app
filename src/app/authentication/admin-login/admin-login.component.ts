import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginData : any = {username: '', password: ''}
  constructor(
   
    private router: Router) { }

  ngOnInit(): void {
  }
  adminLogin(adminLoginData : any){
    if(adminLoginData == "admin" && adminLoginData.password == "admin123")
      this.router.navigate(['/admin']);
      else{
        alert("Invalid credential, Try again!")
      }
  }
}
