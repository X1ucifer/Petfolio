
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {


    company_type: any = [
  { 'y': "New Company"},
  { 'y': "Exists Company"}];


  company_name: any = [
    { 'y': "Triton IT Solutions"},
    { 'y': "Triton IT Solutions1"},
    { 'y': "Triton IT Solutions2"},
    { 'y': "Triton IT Solutions3"},
    { 'y': "Triton IT Solutions4"},
    { 'y': "Triton IT Solutions5"},
    { 'y': "Triton IT Solutions6"},
    { 'y': "Triton IT Solutions7"},
    { 'y': "Triton IT Solutions8"}
  ];


  company_types : string;
  bankname : string;
  company_title : boolean;



  type: any;
  rows: any;
  searchQR: any;
  id: any;
  edit_f:boolean = false;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.company_types = '';
    this.bankname = '';


    let a = {
       client_id:this.getFromLocal('Client_ID'),
    }
    this._api.getlist_bank_details(a).subscribe(
      (response: any) => {
        console.log(response);
        this.rows =  response.Data;
        console.log(this.rows);
      }
    );



  }


  company_type_select(data){
    console.log(data);
    if(data.y == 'New Company'){
      this.company_title = true;
    } else {
      this.company_title = false;
    }
  }


  add() {
    if (this.bankname == undefined || this.bankname == '') {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "client_id": this.getFromLocal('Client_ID'),
        "bank_name": this.bankname,
        "addedby" : this.getFromLocal('User_ID')
      };
      console.log(a);
      this._api.create_bank_details(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.type = undefined;
            this.ngOnInit();
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  show_edit(item) {
    this.id = item._id;
    this.edit_f = true;
    this.bankname = item.bank_name;
  }
  edit() {
    if (this.bankname == undefined || this.bankname == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "bank_name": this.bankname,
        "addedby": this.getFromLocal('client_name')
      };
      console.log(a);
      this._api.update_bank_details(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.edit_f = false;
            this.type = undefined;
            this.ngOnInit();
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  delete(id) {
    let a = {
      "_id": id,
      "delete_status": true,
    }
    this._api.update_bank_details(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          alert(response.Message);
          this.ngOnInit();
        } else {
          alert(response.Message);
        }
      }
    );
  }
  cancel(){
    // this.type = undefined;
    this.edit_f = false;
    this.bankname = ''
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}

