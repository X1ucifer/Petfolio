import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

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
    private toastr: ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.users = this.storage.get("user");
    this.dashboardDetails();
    // this.checkDetails();
  }
  checkDetails() {
    this.display = true;
    this.checkData = { "user_id": "6098ff1b074e747b0fcd04b5" }
    this._api.doctor_checkdetails(this.checkData).subscribe(
      (response: any) => {
        console.log(response.Data);
        if (response.Data.profile_status == false) {
          this.showWarning("profile status is pending");
          this.router.navigate(['/doctor_register']);
        }
        else if (response.Data.calender_status == false) {
          this.showWarning("calender_status is pending");
          this.router.navigate(['/doctor-admin/doctor-edit-calendar']);
        }
        else if (response.Data.profile_verification_status == "Not verified") {
          this.content = response.Message
        }
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
  ok() {
    this.router.navigate(['/doctorlogin']);
  }
  refresh() {
    this.checkDetails();
    window.location.reload();
  }
  showWarning(msg) {
    this.toastr.warningToastr(msg);
  }
}
