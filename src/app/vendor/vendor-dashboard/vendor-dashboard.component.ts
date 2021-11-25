
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  dashboardData: any;
  new_appointment: any;
  completedAppointment: any;
  missedAppointment: any;
  paymentDetail: any;


  w_new_appointment: any;
  w_completedAppointment: any;
  w_missedAppointment: any;
  w_paymentDetail: any;


  checkData: any;
  users: any;
  display: boolean;
  content: any = '';
  new_count:any;
  comp_count:any;
 can_count:any;
  constructor(
    private toastr: ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
  ) {
    this.users = this.storage.get("user");
    console.log(this.users);
    
   }

  ngOnInit(): void {
   
    this.new();
    this.comp();
    this.can();
  }
  
  new(){
    let a = {
      "user_id": this.users._id
    }
    this._api.Vendor_New_Order_API(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        if (response.Code === 200) {
          this.new_count = 0;
          // this.userid = response.Data.user_details._id;
          // console.log(this.userid)
          // alert('Added Successfully');
          // this.showSuccess("Added Successfully")
        } else {
          // this.showError(response.Message);
          //alert(response.Message);
        }
      }
    );
  }
  comp(){
    let a = {
      "user_id": this.users._id
    }
    this._api.Vendor_Completed_Order_API(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        if (response.Code === 200) {
          this.comp_count = 0;
          // this.userid = response.Data.user_details._id;
          // console.log(this.userid)
          // alert('Added Successfully');
          // this.showSuccess("Added Successfully")
        } else {
          // this.showError(response.Message);
          //alert(response.Message);
        }
      }
    );
  
  }
  can(){
    let a = {
      "user_id": this.users._id
    }
    this._api.Vendor_Cancelled_Order_API(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        if (response.Code === 200) {
          this.can_count = 0;
          // this.userid = response.Data.user_details._id;
          // console.log(this.userid)
          // alert('Added Successfully');
          // this.showSuccess("Added Successfully")
        } else {
          // this.showError(response.Message);
          // alert(response.Message);
        }
      }
    );
  }
  showWarning(msg) {
    this.toastr.warningToastr(msg);
  }
}

