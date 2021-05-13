import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-doctor-payment-details',
  templateUrl: './doctor-payment-details.component.html',
  styleUrls: ['./doctor-payment-details.component.css']
})
export class DoctorPaymentDetailsComponent implements OnInit {
  title = 'pet';
  payment_list: any;
  constructor(
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.paymentDetails();
  }
  // payment_details
  paymentDetails() {
    let a = {
      "doctor_id": "603e2a7b2c2b43125f8cb805"
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
