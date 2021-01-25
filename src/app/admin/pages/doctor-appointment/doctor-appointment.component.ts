import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {
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


  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.listpettype();
  }

  listpettype() {
    this._api.appointment_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.Main_list = response.Data;
        this.appointment_list = response.Data;
        console.log(this.appointment_list);
      }
    );
  }
  view_details(item) {
    this.saveInLocal('view_detail_data', item);
    this.saveInLocal('view_detail', 'Appointment')
    this.router.navigateByUrl('/admin/View_details')

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
      this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type)
      console.log(this.appointment_list)
    }
    if (this.filter_type == 'Incomplete') {
      this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type)
      console.log(this.appointment_list)
    }
    if (this.filter_type == 'Missed') {
      this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type)
      console.log(this.appointment_list)
    }
    if (this.filter_type == 'All') {
      this.appointment_list = this.Main_list;
      console.log(this.appointment_list)
    }

  }
  Delete(id){
    let a ={
      "_id": id
    }
    this._api.appointment_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        alert('Deleted Successfully');
        this.ngOnInit();
      }
    );
  }
  filter_date() {
    if ( this.E_Date != undefined && this.S_Date != undefined) {
      // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
      let yourDate= this.E_Date.setDate(this.E_Date.getDate() + 1);

      let a = {
        "fromdate":this.datePipe.transform(new Date(this.S_Date),'yyyy-MM-dd'),
        "todate" : this.datePipe.transform(new Date(yourDate),'yyyy-MM-dd')
        }
      console.log(a);
      this._api.appointment_filter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.appointment_list = response.Data;
        }
      );
    }
    else{
      alert('Please select the startdate and enddate');
    }
   
  }
  refersh(){
    this.listpettype();this.E_Date = undefined ; this.S_Date = undefined;
  }
}