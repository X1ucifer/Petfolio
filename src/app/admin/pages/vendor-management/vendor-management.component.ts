import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core'; import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.css']
})
export class VendorManagementComponent implements OnInit {
  S_Date: any;
  E_Date: any;
  rows = [];
  searchQR:any;
  value1:any;
  Main_list:any;
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.listpettype();
  
  }
  listpettype() {
    this._api.vendor_details_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.Main_list = response.Data;
        console.log(this.Main_list);
      }
    );
  }

  verify(status, id) {
    let a = {
      '_id': id,
      'profile_verification_status': status,
    };
    this._api.vendor_details_edit(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        alert("Updated Successfully");
        this.ngOnInit();
      }
    );
  }
  vendor_form(){
    this.router.navigateByUrl('/admin_panel/Vendor_form')
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  doc_form() {
    this.router.navigateByUrl('/admin/Service_Provider_form')
    this.saveInLocal('fun_type', 'create');
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
      this._api.vendor_detailsfilter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.rows = response.Data;
        }
      );
    }
    else{
      alert('Please select the startdate and enddate');
    }
   
  }
  refersh(){
    this.listpettype();
    this.E_Date = undefined ; this.S_Date = undefined;
  }
  del(data) {
    let a = {
      '_id': data
    };
    console.log(a);
    this._api.vendor_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        alert('Deleted Successfully');
        this.ngOnInit();
      }
    );
  }
  goToLink1(url: string) {
    window.open(url, "_blank");
  }
}
