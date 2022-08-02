import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  localItem: string | null = '';
  user: {} ={};
  constructor() {}
  ngOnInit(): void {
    this.localItem = sessionStorage.getItem('currentuser');
    if (this.localItem == null) this.user = {};
    else {
      this.user = JSON.parse(this.localItem);
      console.log('user', this.user);
    }
  }
}
