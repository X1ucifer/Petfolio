import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointmentedit',
  templateUrl: './appointmentedit.component.html',
  styleUrls: ['./appointmentedit.component.css']
})
export class AppointmenteditComponent implements OnInit {
  view_detail: any;
  view_detail_data: any;
  live_s: any;
  user_id:any;
  showCanel: boolean;
  diagnosis_type = [];
  sub_diagnosis_type = [];
  diagnosis : any = '';
  sub_diagnosis : any = '';

  diagnosis_text : any = '';
  sub_diagnosis_text : any = '';
  datas : any = [];

  next_appointment_date : any;
  next_appointment_time : any;

  time_list = [
    "01:00 AM",
    "01:30 AM",
    "02:00 AM",
    "02:30 AM",
    "03:00 AM",
    "03:30 AM",
    "04:00 AM",
    "04:30 AM",
    "05:00 AM",
    "05:30 AM",
    "06:00 AM",
    "06:30 AM",
    "07:00 AM",
    "07:30 AM",
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 AM",
    "12:30 AM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
    "12:00 PM",
    "12:30 PM",
  ]

  constructor(
    private toastr:ToastrManager,
    private location: Location,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    public datepipe: DatePipe
  ) {
    let login = false
    login = this.getFromLocal('login');
    console.log(login)
    if (login != true) {
      this.router.navigateByUrl('/doctorlogin');

    }
    this._api.sub_diagnosis_getlist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.sub_diagnosis_type = response.Data
      }
    );
    this.view_detail = this.getFromLocal('view_detail');
    this.view_detail_data = this.getFromLocal('view_detail_data');
    const x = new Date(this.view_detail_data.booking_date_time);
    const y = new Date();
    if (x < y) {
      this.showCanel = true;
    } else {
      this.showCanel = false;
    }
    console.log(this.view_detail);
    console.log(this.view_detail_data);
    this.user_id = this.view_detail_data.user_id._id;
    this.sub_diagnosis = this.view_detail_data.sub_diagnosis;
    this.diagnosis =  this.view_detail_data.diagnosis;
    this.view_detail_data.payment_method = 'Cash';
    console.log(this.sub_diagnosis);

    let id = {
      "Appointment_ID": this.view_detail_data._id
    }
    console.log(id)
    this._api.fetch_prescription(id).subscribe(
      (response: any) => {
        console.log(response);
        if(response.Data.length == 0){
          this.view_detail_data.prescription_details = 'add';
        }else{
          this.view_detail_data.prescription_details = 'edit';
          this.datas = response.Data[0].Prescription_data;
        }
      }
    );
  }





  ngOnInit(): void {
     let id = {
      "user_id": this.user_id
    }
    console.log(id)
    this._api.live_check(id).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Data.length == 0) {
          this.live_s = 'not_live';
        }
        else {
          this.live_s = 'live';
        }
        console.log( this.live_s);
      }
    );
    this.list_diagnosis();
    this.list_subdiagnosis();
  }
  cancelAppointment(){
    const data =     {
      "_id": this.view_detail_data._id,
      "appoinment_status": "Missed",
      "missed_at": new Date(),
      "appoint_patient_st": "Doctor Cancelled appointment"
    };
    this._api.doc_cancel_appointment(data).subscribe(data => {
      if (data['Code'] == 200) {
        this.showSuccess(data['Message']);
        this.location.back();
      } else {
        this.showWarning(data['Message']);
      }
    })
  }
  back() {
    this.router.navigateByUrl('/doctor-admin/Walkin_Appointment');
  }
  goToLink1(url: string) {
    window.open(url, "_blank");
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  verify(status, id) {
    let a = {
      '_id': id,
      'profile_verification_status': status,
    };
    this._api.doctor_details_edit(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.view_detail_data = response.Data;
        this.user_id=this.view_detail_data.user_id
        // alert("Updated Successfully");
        this.showSuccess("Updated Successfully");
        this.ngOnInit();
      }
    );
  }


  live_status_change(status, id) {
    let a = {
      '_id': id,
      "live_by": "Super Admin",
      "live_status": status
    };
    this._api.doctor_details_edit(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        // alert("Updated Successfully");
       this.showSuccess("Updated Successfully");
        if (this.live_s == 'not_live') {
          this.view_detail_data = response.Data;
          this.user_id=this.view_detail_data.user_id
          let a = response.Data;
          console.log(a);
          this._api.livedoctordetails_create(a).subscribe(
            (response: any) => {
              console.log(response);
              this.ngOnInit();
            }
          );
        }
        else {
          this.view_detail_data = response.Data;
          this.user_id=this.view_detail_data.user_id
          let a = response.Data;
          this._api.livedoctordetails_edit(a).subscribe(
            (response: any) => {
              console.log(response);
              this.ngOnInit();
            }
          );
        }

      }
    );

  }

  delete_pet(data) {
    let a = {
      '_id': data
    };
    console.log(a);
    this._api.pet_detail_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        // alert('Deleted Successfully');
        this.showSuccess("Deleted Successfully");
        let b = {
          'user_id': this.view_detail_data.userdetailsModels[0]._id
        };
        console.log(b);
        this._api.single_user_detail(b).subscribe(
          (response: any) => {
            console.log(response.Data);
            this.view_detail_data = response.Data;
            console.log(this.view_detail_data);
          }
        );
      }
    );
  }
  delete_loc(data) {
    let a = {
      '_id': data
    };
    console.log(a);
    this._api.customer_location_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        // alert('Deleted Successfully');
        this.showSuccess("Deleted Successfully");
        let b = {
          'user_id': this.view_detail_data.userdetailsModels[0]._id
        };
        console.log(b);
        this._api.single_user_detail(b).subscribe(
          (response: any) => {
            console.log(response.Data);
            this.view_detail_data = response.Data;
            console.log(this.view_detail_data);
          }
        );
      }
    );
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

  list_diagnosis() {
    this._api.diagnosis_getlist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.diagnosis_type = response.Data
      }
    );
  }

  list_subdiagnosis(){

  }


  list_sub_diagnosis() {
    let x = '';
    console.log(this.view_detail_data.diagnosis);
    for(let c  =  0 ; c < this.diagnosis_type.length ; c++){
     if(this.diagnosis_type[c].diagnosis == this.view_detail_data.diagnosis){
      x = this.diagnosis_type[c]._id;
     }
    }



    console.log(x);
    let a = {
      "diagnosis_id":x
    }
    this.sub_diagnosis_type = [];
    this._api.sub_diagnosis_getlist_byid(a).subscribe(
      (response: any) => {
        console.log(response.Data);
       this.sub_diagnosis_type = response.Data;
      }
    );
  }


  update_appointment(){
    console.log(
      // view_detail_data.appoinment_status
    )
    let a = {
      _id : this.view_detail_data._id,
      appoinment_status : this.view_detail_data.appoinment_status,
      payment_method : this.view_detail_data.payment_method,
      sub_diagnosis : this.view_detail_data.sub_diagnosis,
      diagnosis : this.view_detail_data.diagnosis,
      start_appointment_status : "Completed",
      end_appointment_status : "Completed",
      next_appointment_time : this.view_detail_data.next_appointment_time,
      next_appointment_date : this.view_detail_data.next_appointment_date,
      // completed_at : ""+new Date(),
      doctor_comment : this.view_detail_data.doctor_comment,
      user_feedback  : this.view_detail_data.user_feedback,
      amount : this.view_detail_data.amount,
      missed_at : this.datepipe.transform(new Date(), 'dd/MM/yyyy h:mm:ss'),
      completed_at : this.datepipe.transform(new Date(), 'dd/MM/yyyy h:mm:ss'),
    }
    console.log(a);
    this._api.update_appointment(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.toastr.successToastr("Update successfully");
        this.router.navigateByUrl('/doctor-admin/Walkin_Appointment');
      }
    );
  }

  printComponent(cmpName) {
    
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    document.close();
}
print(cmpName): void {
  const printContents = document.getElementById(cmpName).innerHTML;
  const popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
      <html>
          <head>
              <title>Print Page</title>
          </head>
          <body
              style="font-size: 14px;
                  font-family: 'Source Sans Pro', 'Helvetica Neue',
                  Helvetica, Arial, sans-serif;
                  color: #333";
              onload="document.execCommand('print');window.close()">${printContents}</body>
      </html>`
  );
  popupWin.document.close();
}

}
