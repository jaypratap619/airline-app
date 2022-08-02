import { Time } from "@angular/common";

export interface IFlight {
  FlightNumber: string;
  FlightName: string;
  TimeOfArr: Time;
  DateOfArr: Date;
  Duration: Time;
  PriceEco: number;
  PriceBn: number;
  DepCity: string;
  ArrCity: string;
  TimeOfDept: Time;
  DateOfDept: Date;
  SeatsEco: number;
  SeatsBussiness: number;
  Tickets: [];
}
