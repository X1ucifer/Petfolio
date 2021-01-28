import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router, RouterModule } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.css']
})
export class PaymentManagementComponent implements OnInit {
  rows = [];
  searchQR: any;
  counts:any;
  Price_counts : any;
  Sp_total_price: any;
  pay_list: any;
  value1: any;
  S_Date: any;
  E_Date: any;
  doctor_list:any;
  sp_list:any;
  Vendor_list:any;
   
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private datePipe: DatePipe,

  ) { }
 
  list() {
    this._api.pay_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.pay_list = response.Data;
        console.log(this.pay_list);
      }
    );
  }
  
  ngOnInit(): void {
    this._api.dashboard_count().subscribe((res:any)=>{
      console.log(res)
      this.counts = res.Data;
    });

    this._api.prices_count().subscribe((res:any)=>{
      console.log(res)
      this.Price_counts = res.Data;
    });

    this._api.sp_total_price().subscribe((res:any)=>{
      console.log(res)
      this.Sp_total_price = res.Data;
    })


    this._api.doctor_details_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.doctor_list = response.Data;
        console.log(this.doctor_list);
      }
    );
    this._api.service_provider_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.sp_list = response.Data;
      }
    );
    this._api.vendor_details_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.Vendor_list = response.Data;
      }
    );
    this.list();
  }

 
  pet_view(item) {
    window.scrollTo(0, 0);
    let a = {
      'user_id': item._id
    };
    console.log(a)
    this._api.single_user_detail(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.saveInLocal('pet_list', response.Data);
        this.router.navigateByUrl('/admin/Pet_list')
      }
    );


  }
  view_details(item) {
    this.saveInLocal('fun_type', 'create');
    window.scrollTo(0, 0);
    let a = {
      'user_id': item._id
    };
    this._api.single_user_detail(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.saveInLocal('view_detail_data', response.Data);
        this.saveInLocal('view_detail', 'User');
        this.router.navigateByUrl('/admin/View_details')
      }
    );


  }
  Delete(data) {
    let a = {
      '_id': data
    };
    console.log(a);
    this._api.user_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        alert('Deleted Successfully');
        this.ngOnInit();
      }
    );
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  service_form() {
    this.saveInLocal('fun_type', 'create');
    this.router.navigateByUrl('/admin/Customer_create')
  }

  edit_details(item) {
    this.saveInLocal('view_detail_data', item);
    this.saveInLocal('fun_type', 'edit');
    this.router.navigateByUrl('/admin/Customer_create')

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
      this._api.user_filter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.pay_list = response.Data;
        }
      );
    }
    else{
      alert('Please select the startdate and enddate');
    }
   
  }
  refersh(){
    this.list();
  }


}
