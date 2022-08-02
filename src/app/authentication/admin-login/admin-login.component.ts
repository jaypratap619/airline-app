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
    console.log(adminLoginData)
    if(adminLoginData.username == 'admin' && adminLoginData.password == 'admin123'){
      window.sessionStorage.setItem("admin", "true");
      this.router.navigate(['/admin']).then(()=>{window.location.reload()});
    }
      else{
        alert("Invalid credential, Try again!")
      }
  }
}
