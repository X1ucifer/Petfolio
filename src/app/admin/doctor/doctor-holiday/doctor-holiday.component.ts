import { Component, Inject, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-doctor-holiday',
  templateUrl: './doctor-holiday.component.html',
  styleUrls: ['./doctor-holiday.component.css']
})
export class DoctorHolidayComponent implements OnInit {
  holiday_date: any;
  users: any;
  holiday_details: any;
  holiday_list: any;
  Datearray: any;
  delete_date: any;
  constructor(
    private toastr: ToastrManager,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.users = this.storage.get("user");
    this.update();
  }
  create() {
    // this.date=new Date();
    this.holiday_date = this.datepipe.transform(this.holiday_date, 'dd-MM-yyyy');
    this.holiday_details = { "Date": this.holiday_date, "user_id": this.users._id }
    console.log(this.holiday_details);
    this._api.holiday_create(this.holiday_details).subscribe(
      (response: any) => {
        console.log(response.Data);
        if (response.Code === 200) {
          this.showSuccess("Added Successfully");
          window.location.reload();
        } else {
          this.showError(response.Message);
          //alert(response.Message);
        }
      }
    );
  }
  update() {
    this.holiday_list = { "user_id": this.users._id };
    console.log(this.holiday_list);
    this._api.holiday_update(this.holiday_list).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.Datearray = response.Data;
        if (response.Code === 200) {
          console.log("listed Successfully");
        } else {
          this.showError(response.Message);
          //alert(response.Message);
        }
      }
    );
  }
  remove_holiday(id) {
    this.delete_date = { "_id": id };
    this._api.holiday_delete(this.delete_date).subscribe(
      (response: any) => {
        if (response.Code === 200) {
          console.log("deleted Successfully");
        } else {
          this.showError(response.Message);
          //alert(response.Message);
        }
      })
    window.location.reload();
  }
  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
    this.toastr.errorToastr(msg);
  }

}
