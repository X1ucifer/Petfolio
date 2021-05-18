import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-doctor-dashbaord',
  templateUrl: './doctor-dashbaord.component.html',
  styleUrls: ['./doctor-dashbaord.component.css']
})
export class DoctorDashbaordComponent implements OnInit {
  dashboardData: any;
  new_appointment: any;
  completedAppointment: any;
  missedAppointment: any;
  paymentDetail: any;
  checkData: any;
  users: any;
  display: boolean;
  content: any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.users = this.storage.get("user");
    this.dashboardDetails();
    this.checkDetails();
  }
  checkDetails() {
    this.display = true;
    this.checkData = { "user_id": "6098ff1b074e747b0fcd04b5" }
    this._api.doctor_checkdetails(this.checkData).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.content = response.Message
      }
    )
  }
  dashboardDetails() {
    let a = {
      "doctor_id": "603e2a7b2c2b43125f8cb805"
    }
    this._api.doctor_dashboard(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        // this.rows = response.Data;
        // this.Main_list = response.Data;
        this.dashboardData = response.Data;
        console.log(this.dashboardData);
        this.new_appointment = this.dashboardData.new_appointment_count;
        this.completedAppointment = this.dashboardData.complete_appointment_count;
        this.missedAppointment = this.dashboardData.missed_appointment_count;
        this.paymentDetail = this.dashboardData.payment_detail
      }
    );
  }
}
