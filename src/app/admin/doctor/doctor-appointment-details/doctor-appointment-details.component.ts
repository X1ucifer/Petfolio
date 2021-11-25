import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-appointment-details',
  templateUrl: './doctor-appointment-details.component.html',
  styleUrls: ['./doctor-appointment-details.component.css']
})
export class DoctorAppointmentDetailsComponent implements OnInit {
  view_detail: any;
  view_detail_data: any;
  live_s: any;
  user_id:any;
  showCanel: boolean;
  prescription : any;

  backgroundImg : any;
  constructor(
    private toastr:ToastrManager,
    private location: Location,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private sanitizer: DomSanitizer,
  ) {
    this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(http://54.212.108.156/assets/images/dog.jpg)');
    console.log(this.backgroundImg);
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
    this.user_id = this.view_detail_data.user_id._id
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



    let ids = {
      "Appointment_ID": this.view_detail_data._id
    }
    console.log(ids)
    this._api.fetch_prescription(ids).subscribe(
      (response: any) => {
        console.log(response);
        if(response.Data.length == 0){
          this.prescription = [];
        }else{
          this.prescription = response.Data[0].Prescription_data;
        }
      }
    );



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
    this.location.back();
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

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
}


 printComponent1() {
  var divToPrint = document.getElementById('component1');
  var newWin = window.open('', 'Print-Window');
  newWin.document.open();
  newWin.document.write('<html><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" media="print"/><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
  newWin.document.close();
  setTimeout(function() {
    newWin.close();
  }, 10);
}


viewprescription(){
  this.router.navigateByUrl('/doctor-admin/prescriptionview');
}




}
