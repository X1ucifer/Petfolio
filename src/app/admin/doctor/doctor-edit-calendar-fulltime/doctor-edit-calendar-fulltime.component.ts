import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-doctor-edit-calendar-fulltime',
  templateUrl: './doctor-edit-calendar-fulltime.component.html',
  styleUrls: ['./doctor-edit-calendar-fulltime.component.css']
})
export class DoctorEditCalendarFulltimeComponent implements OnInit {
  user_detail: any;
  timeList: any;
  day: any;
  users: any;
  post_data: any;
  dayselect : any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService) { }

  ngOnInit(): void {
    this.day = localStorage.getItem('dataSource');
    this.dayselect = this.getFromLocal('dayselect');
    this.users = this.storage.get("user");
    this.Time();
    console.log(this.dayselect);
    console.log(this.day);
     for(let a  = 0 ; a < this.dayselect.length ; a ++){



     }
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

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
