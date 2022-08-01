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
  constructor(private router : Router){
    this.isUserLogged = localStorage.getItem("currentUser") ? true : false;
  }
  
  logOut(){
    window.localStorage.removeItem('currentUser')
    this.isUserLogged =false;
  }
}
