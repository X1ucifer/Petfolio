import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-edit-calendar-time',
  templateUrl: './doctor-edit-calendar-time.component.html',
  styleUrls: ['./doctor-edit-calendar-time.component.css']
})
export class DoctorEditCalendarTimeComponent implements OnInit {
  user_detail: any;
  timeList: any;
  constructor(private router: Router,
    private _api: ApiService) { }

  ngOnInit(): void {
    this.Time();
  }

  selectedCities: string[] = [];

  Time() {
    this.user_detail = { "Day": "Sunday", "user_id": "6087d8626163803091258a5d" };
    this._api.calendar_time(this.user_detail).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.timeList = response.Data;
      }
    )
  }

  Filter() {
    console.log("submitted");
  }
}
