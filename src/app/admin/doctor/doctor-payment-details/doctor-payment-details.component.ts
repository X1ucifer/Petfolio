import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-doctor-payment-details',
  templateUrl: './doctor-payment-details.component.html',
  styleUrls: ['./doctor-payment-details.component.css']
})
export class DoctorPaymentDetailsComponent implements OnInit {
  title = 'pet';
  payment_list: any;
  users: any;
  total_value : number = 0;

  S_Date : any ;
  E_Date : any ;
  list = [];


  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR: any;

  constructor(
    private formBuilder:FormBuilder,
    private toastr:ToastrManager,
    private router: Router,
    private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private http: HttpClient,
    private datePipe: DatePipe,
    ){
   }

  ngOnInit(): void {
    this.users = this.storage.get("user");
    let a = {
      "doctor_id": this.users._id
    }
    this._api.payment_details(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        // this.rows = response.Data;
        // this.Main_list = response.Data;
        this.list = response.Data;
        this.total_value = 0;
        for(let a  = 0 ; a < this.list.length; a ++){
          this.total_value = this.total_value + +this.list[a].amount
        }
        console.log(this.list);
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


  filter_date() {
    if (this.E_Date != undefined && this.S_Date != undefined) {
      // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
      let yourDate = this.E_Date.setDate(this.E_Date.getDate() + 1);

      let a = {
        "fromdate": this.datePipe.transform(new Date(this.S_Date), 'yyyy-MM-dd'),
        "todate": this.datePipe.transform(new Date(yourDate), 'yyyy-MM-dd')
      }
      console.log(a);
      this._api.newproduct_detail_filter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.list = response.Data;
        }
      );
    }
    else {
      this.showWarning("Please select the startdate and enddate");
      //alert('Please select the startdate and enddate');
    }

  }
  refersh() {
    this.ngOnInit(); this.E_Date = undefined; this.S_Date = undefined;
  }

}

