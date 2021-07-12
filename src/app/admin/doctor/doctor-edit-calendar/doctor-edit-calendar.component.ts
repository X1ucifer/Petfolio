import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-edit-calendar',
  templateUrl: './doctor-edit-calendar.component.html',
  styleUrls: ['./doctor-edit-calendar.component.css']
})
export class DoctorEditCalendarComponent implements OnInit {
  user_detail: any;
  calendarlist: any;
  selectedCities: string[] = [];
  users: any;
  checked = false;
  indeterminate = false;
  schedule: string[] = [];
  length: any;
  selectedValues: string[] = [];

  constructor(private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private formBuilder: FormBuilder
  ) { 
    let login = false
    login = this.getFromLocal('login');
    console.log(login)
    if (login != true) {
      this.router.navigateByUrl('/doctorlogin');

    }
  }

  ngOnInit(): void {
    this.users = this.storage.get("user");
    this.Date();
  }

  Date() {
    this.user_detail = { "Doctor_name": this.users.first_name, "types": this.users.user_type, "user_id": this.users._id };
    console.log(this.user_detail);
    this._api.calendar_days(this.user_detail).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.calendarlist = response.Data;
      }
    )
  }

  Filter(data) {
    console.log(data);
    // console.log(this.schedule[0], "0");
    // console.log(this.schedule[1], "1");
    // for (let i = 0; i < this.length; i++) {
    //   console.log(i);
    //   if (this.schedule[i] == 'true') {
    //     console.log(i, '<=====');
    //   }
    // }
    localStorage.setItem('dataSource', data);
    this.router.navigateByUrl('/doctor-admin/doctor-edit-calendar-time');
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
function user(user: any): any {
  throw new Error('Function not implemented.');
}

