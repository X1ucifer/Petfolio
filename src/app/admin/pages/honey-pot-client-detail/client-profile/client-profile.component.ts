import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  Existing: any;
  Account_Type: any;
  Set_Primary: any;
  Primary_Account: any;

  License: any;
  Type: any;
  Country: any;
  Short_code: any;
  System_code: any;
  Name: any;
  Website: any;
  email_id: any;
  Ho_Address: any;
  Office_Address: any;
  logo: any;

  ref_persons_array: any = [];
  Documents_array: any = [];
  Account_array: any = [];
  searchQR:any;
  client_data:any;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.client_data = this.getFromLocal('client_data');
    if (this.client_data != undefined) {
      this.Existing = this.client_data;
      this.Account_Type = this.client_data;
      this.Set_Primary = this.client_data;
      this.Primary_Account = this.client_data;
      this.License = this.client_data.no_of_lincenese;
      this.Type = { "y": this.client_data.clienttype };
      this.Country = { "y": this.client_data.country };
      this.Short_code = this.client_data.client_short_code;
      this.System_code = this.client_data.Client_system_code;
      this.Name = this.client_data.Clinet_name;
      this.Website = this.client_data.website;
      this.email_id = this.client_data.comm_email;
      this.logo = this.client_data.logo;
      this.Ho_Address = this.client_data.ho_address;
      this.Office_Address = this.client_data.off_address;
      this.ref_persons_array = this.client_data.contact_persons;
      this.Documents_array = this.client_data.documents;
      this.Account_array = this.client_data.Account;

    }
  }
  back(){
    this.router.navigateByUrl('/admin_panel/Portfolio')
  }
  portfolio(){
    this.router.navigateByUrl('/admin_panel/Portfolio')
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  goToLink1(url: string) {
    window.open(url, "_blank");
  }
}
