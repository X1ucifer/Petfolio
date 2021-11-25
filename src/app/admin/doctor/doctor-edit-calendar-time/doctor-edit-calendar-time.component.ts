import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-doctor-edit-calendar-time',
  templateUrl: './doctor-edit-calendar-time.component.html',
  styleUrls: ['./doctor-edit-calendar-time.component.css']
})
export class DoctorEditCalendarTimeComponent implements OnInit {
  user_detail: any;
  timeList: any;
  day: any;
  users: any;
  post_data: any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService) { }

  ngOnInit(): void {
    this.day = localStorage.getItem('dataSource');
    this.users = this.storage.get("user");
    this.Time();
  }

  selectedCities: string[] = [];

  Time() {
    this.user_detail = { "Day": this.day, "user_id": this.users._id };
    this._api.calendar_time(this.user_detail).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.timeList = response.Data;
      }
    )
  }

  submit_time(a) {
    this._api.calendar_update(a).subscribe(
      (response: any) => {
        console.log(response.Data, "submit_time");
      }
    )
  }
  Filter() {
    this.post_data = { "days": [this.day], "timing": this.timeList, "user_id": this.users._id };
    console.log(this.post_data);
    this.submit_time(this.post_data);
  }
}
