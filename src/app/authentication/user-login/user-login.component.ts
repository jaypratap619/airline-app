import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {IUserCredential} from '../../Modals/iuser-credential'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userLoginData : IUserCredential = {email: '', password: ''}
  constructor(
    private authservice : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  userLogin(userLoginData : IUserCredential){
    this.authservice.loginUser(userLoginData).subscribe((res) => {
      alert('Logged in Successfully');
      window.localStorage.setItem("currentUser", JSON.stringify(res));
      this.router.navigate(['/']);
      }
    );
   
  }
}
