import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  localItem: string | null = '';
  user: any ={};
  constructor(private router : Router) {}
  imageSrc = 'assets/avatar.png'  
   imageAlt = 'avatar'
  ngOnInit(): void {
    this.localItem = sessionStorage.getItem('currentUser');
    if (this.localItem == null) this.user = {};
    else {
      this.user = JSON.parse(this.localItem);
      console.log('user: ', this.user);
    }
  }
  signOut(){
    window.sessionStorage.removeItem('currentUser')
    this.router.navigate(['/']).then(()=>{window.location.reload()})
  }
}
