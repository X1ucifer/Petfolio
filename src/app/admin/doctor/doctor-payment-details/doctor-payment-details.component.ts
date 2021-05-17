import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-doctor-payment-details',
  templateUrl: './doctor-payment-details.component.html',
  styleUrls: ['./doctor-payment-details.component.css']
})
export class DoctorPaymentDetailsComponent implements OnInit {
  title = 'pet';
  payment_list: any;
  users: any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.users = this.storage.get("user");
    this.paymentDetails();
  }
  // payment_details
  paymentDetails() {
    let a = {
      "doctor_id": this.users._id
    }
    this._api.payment_details(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        // this.rows = response.Data;
        // this.Main_list = response.Data;
        this.payment_list = response.Data;
        console.log(this.payment_list);
      }
    );
  }
}
