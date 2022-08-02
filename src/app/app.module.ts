import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserLoginComponent } from './authentication/user-login/user-login.component';
import { UserSignupComponent } from './authentication/user-signup/user-signup.component';
import { AdminLoginComponent } from './authentication/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './home/flight-search/flight-search.component';
import { FlightSelectComponent } from './home/flight-select/flight-select.component';
import { AdminComponent } from './admin/admin.component';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { DeleteFlightComponent } from './admin/delete-flight/delete-flight.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookComponent } from './home/flight-book/flight-book.component';
import { AllFlightsComponent } from './admin/all-flights/all-flights.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UserLoginComponent,
    UserSignupComponent,
    AdminLoginComponent,
    HomeComponent,
    FlightSearchComponent,
    FlightSelectComponent,
    AdminComponent,
    AddFlightComponent,
    DeleteFlightComponent,
    MyBookingsComponent,
    MyProfileComponent,
    FlightBookComponent,
    AllFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
