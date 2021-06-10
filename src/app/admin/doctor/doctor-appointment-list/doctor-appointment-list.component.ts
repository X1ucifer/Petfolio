import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ExcelService } from '../../../excel.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-doctor-appointment-list',
  templateUrl: './doctor-appointment-list.component.html',
  styleUrls: ['./doctor-appointment-list.component.css']
})
export class DoctorAppointmentListComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  searchQR: any;
  appointment_list: any;
  Main_list: any;
  filter_type: any;
  S_Date: any;
  E_Date: any;
  rows: any = [{ type: "Dog", name: "dog1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" }]
  excelData: any[] = [];
  c_list: any = [];
  user;
  user_detail;
  completed_list;
  booked_list;
  missed_list;

  constructor(
    private toastr: ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private datePipe: DatePipe,
    private excelService: ExcelService,

  ) { }

  ngOnInit(): void {
    // this.listpettype();
    this.user = this.storage.get('user');
    this.listpettype();
  }

  MakeCall(url) {
    window.open(url, "_blank");
  }

  listpettype() {
    this._api.appointment_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.Main_list = response.Data;
        this.appointment_list = response.Data;
        console.log(this.appointment_list);
        this.get_c_list();
      }
    );
  }
  completedlist() {
    this.user_detail = { "current_time": "2021-05-10 16:08:18", "doctor_id": this.user._id };
    this._api.appointment_completed(this.user_detail).subscribe(
      (response: any) => {
        this.rows = response.Data;
        this.completed_list = response.Data;
        this.appointment_list = response.Data;
      }
    )
  }
  bookedlist() {
    this.user_detail = { "current_time": "2021-05-10 16:08:18", "doctor_id": this.user._id };
    this._api.appointment_booked(this.user_detail).subscribe(
      (response: any) => {
        this.rows = response.Data;
        this.booked_list = response.Data;
        this.appointment_list = response.Data;
      }
    )
  }
  missedlist() {
    this.user_detail = { "current_time": "2021-05-10 16:08:18", "doctor_id": this.user._id };
    this._api.appointment_missed(this.user_detail).subscribe(
      (response: any) => {
        this.rows = response.Data;
        this.missed_list = response.Data;
        this.appointment_list = response.Data;
      }
    )
  }
  view_details(item) {
    this.saveInLocal('view_detail_data', item);
    this.saveInLocal('view_detail', 'Appointment')
    this.router.navigateByUrl('/doctor-admin/appointment-details')

  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  Filter(type) {
    this.appointment_list = this.Main_list;
    this.filter_type = type;
    if (this.filter_type == 'Completed') {
      // this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type && x.user_id._id == this.user._id)
      // console.log(this.appointment_list)
      // this.get_c_list();
      this.completedlist();
      this.appointment_list = this.completed_list
      console.log(this.appointment_list)
      this.get_c_list();
    }
    if (this.filter_type == 'Incomplete') {
      // this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type && x.user_id._id == this.user._id)
      // console.log(this.appointment_list)
      // this.get_c_list();
      this.bookedlist();
      this.appointment_list = this.booked_list
      console.log(this.appointment_list)
      this.get_c_list();
    }
    if (this.filter_type == 'Missed') {
      // this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type && x.user_id._id == this.user._id)
      // console.log(this.appointment_list)
      // this.get_c_list();
      this.missedlist();
      this.appointment_list = this.missed_list
      console.log(this.appointment_list)
      this.get_c_list();
    }
    if (this.filter_type == 'All') {
      this.appointment_list = this.Main_list;
      console.log(this.appointment_list)
      this.get_c_list();
    }

  }
  Delete(id) {
    let a = {
      "_id": id
    }
    this._api.appointment_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        //alert('Deleted Successfully');
        this.showSuccess("Deleted Successfully")
        this.ngOnInit();
      }
    );
  }
  filter_date() {
    if (this.E_Date != undefined && this.S_Date != undefined) {
      // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
      let yourDate = this.E_Date.setDate(this.E_Date.getDate() + 1);

      let a = {
        "fromdate": this.datePipe.transform(new Date(this.S_Date), 'yyyy-MM-dd'),
        "todate": this.datePipe.transform(new Date(yourDate), 'yyyy-MM-dd')
      }
      console.log(a);
      this._api.appointment_filter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.appointment_list = response.Data;
          this.get_c_list();
        }
      );
    }
    else {
      this.showWarning("Please select the startdate and enddate")
      //alert('Please select the startdate and enddate');
    }

  }
  refersh() {
    this.listpettype(); this.E_Date = undefined; this.S_Date = undefined;
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.excelData, 'Pet_care_appiontment_List');
  }
  get_c_list() {
    this.c_list = this.appointment_list.reverse();
    console.log(this.c_list)
    this.excelData = this.c_list
    // for (let a = 0; a < this.c_list.length; a++) {
    //   let data = {  
    //   }
    //   this.excelData.push(this.c_list)
    // }

  }

  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
    this.toastr.errorToastr(msg);
  }

  showWarning(msg) {
    this.toastr.warningToastr(msg);
  }
}
