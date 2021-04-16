import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  Country: any;
  Currency: any;
  type: any;
  rows: any;
  searchQR: any;
  id: any;
  edit_f: boolean = false;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._api.currency_type_list().subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );
  }
  add() {
    if (this.Currency == undefined || this.Currency == '' || this.Country == undefined || this.Country == '') {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "currency_type": this.Currency,
        "country_name": this.Country,
        "addedby": "Admin"
      }
      console.log(a);
      this._api.currency_type_add(a).subscribe(
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
    this.Currency = item.currency_type;
    this.Country = item.country_name;
  }
  edit() {
    if (this.Currency == undefined || this.Currency == '' || this.Country == undefined || this.Country == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "currency_type": this.Currency,
        "country_name": this.Country,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.currency_type_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.edit_f = false;
            this.type = undefined;
            this.Currency = undefined;
            this.Country = undefined;
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
      "_id": id
    }
    this._api.currency_type_delete(a).subscribe(
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
  cancel() {
    this.type = undefined;
    this.edit_f = false;
  }
}

