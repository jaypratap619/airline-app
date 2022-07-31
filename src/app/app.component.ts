import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'airline-app';
  isUser = localStorage.getItem("currentUser") ? true : false;
  constructor(private router : Router){}
  
  logOut(){
    window.localStorage.removeItem('currentUser')
    this.isUser = false;
  }
  logIn(){
    this.router.navigate(['/authentication']);
    this.isUser = false;
  }
}
