import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'airline-app';
  isUserLogged : boolean;
  isAdminLogged : boolean;
  constructor(private router : Router){
    this.isUserLogged = sessionStorage.getItem("currentUser") ? true : false;
    this.isAdminLogged = sessionStorage.getItem("admin") ? true : false;
  }
  
  logOutUser(){
    window.sessionStorage.removeItem('currentUser')
    this.isUserLogged =false;
    this.router.navigate(['/'])
  }
  logOutAdmin(){
    window.sessionStorage.removeItem('admin')
    this.isAdminLogged =false;
    this.router.navigate(['/'])
  }
}
