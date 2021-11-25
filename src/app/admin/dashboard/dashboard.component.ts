import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counts: any;
  Price_counts: any;
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
  { type: "Cat", name: "cat1" }];
  searchQR: any;
  doctor_list: any;
  sp_list: any;
  Vendor_list: any;

  constructor(
    private router: Router,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService

  ) {
    let login = false
    login = this.getFromLocal('login');
    console.log(login)
    if (login != true) {
      this.router.navigateByUrl('/login');

    }

  }

  ngOnInit(): void {


    let login_check = this.storage.get("login_cache");
    console.log(login_check);
    if(login_check == true){
    }else{
      this.router.navigateByUrl('/');
    }




    this._api.dashboard_count().subscribe((res: any) => {
      console.log(res)
      this.counts = res.Data;
    });

    this._api.prices_count().subscribe((res: any) => {
      console.log(res)
      this.Price_counts = res.Data;
    });


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


  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }





}
