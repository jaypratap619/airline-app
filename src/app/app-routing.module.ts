import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FlightSearchComponent } from './home/flight-search/flight-search.component';
import { FlightSelectComponent } from './home/flight-select/flight-select.component';
import { HomeComponent } from './home/home.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      {path: '', component: FlightSearchComponent},
      {path: 'selectflight', component: FlightSelectComponent}
    ]
  },
  { path: 'authentication', component: AuthenticationComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'mybookings', component: MyBookingsComponent },
  { path: 'myprofile', component: MyProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
