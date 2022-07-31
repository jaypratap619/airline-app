import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Modals/iuser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  userSignUpData: IUser = {
    mobile: '',
    dateOfBirth: new Date(),
    emailId: '',
    UserPwd: '',
    firstName: '',
    lastName: '',
    userid: 0,
    tickets: [],
  };
  cpassword:string = ''
  constructor(
    private authservice : AuthService,
    private router: Router) { }

  ngOnInit(): void {}

  userSignUp(userSignUpData : IUser){
    if(this.cpassword === userSignUpData.UserPwd){
      this.authservice.signUpUser(userSignUpData).subscribe((res) => {
        alert('Registered Successfully');
        }
      );
    }
    else
      alert("Password doesn't match")
  }
}
