import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';


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
    private formBuilder: FormBuilder,
    public toastr: ToastrManager
  ) { }

  ngOnInit(): void {

    let login_check = this.storage.get("doctor_login_cache");
    console.log(login_check);
    if(login_check == true){
    }else{
      this.router.navigateByUrl('/doctorlogin');
    }


    this.users = this.storage.get("user");
    this.Date();

    console.log(this.schedule);
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


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  next_funcation(){
    console.log(this.schedule);

    if(this.schedule.length == 0){
     this.toastr.warningToastr("Select the day");
    }else{
      this.saveInLocal('dayselect', this.schedule);
      this.router.navigateByUrl('/doctor-admin/doctor-edit-calendar-fulltime');
    }

  }


  Filter(data) {
    console.log(data);
    localStorage.setItem('dataSource', data);
    this.router.navigateByUrl('/doctor-admin/doctor-edit-calendar-time');
  }
}
function user(user: any): any {
  throw new Error('Function not implemented.');
}

