
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-create-state',
  templateUrl: './create-state.component.html',
  styleUrls: ['./create-state.component.css']
})
export class CreateStateComponent implements OnInit {
  country: any = [];
  Country: any;
  State: any;
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
    this._api.state_details_list().subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );
    this.country_list_get();

  }

  country_list_get() {
    this._api.currency_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].country_name };
          this.country.push(obj);
        }
        console.log(this.country);

      }
    );
  }
  add() {
    if (this.State == undefined || this.State == '' || this.Country == undefined || this.Country == '') {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "state": this.State,
        "country_name": this.Country.y,
        "addedby": "Admin"
      }
      console.log(a);
      this._api.state_details_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.type = undefined;
            this.Country = undefined;
            this.State = undefined
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
    this.State = item.state;
    this.Country = { 'y': item.country_name };
  }
  edit() {
    if (this.State == undefined || this.State == '' || this.Country == undefined || this.Country == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "state": this.State,
        "country_name": this.Country.y,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.state_details_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.edit_f = false;
            this.type = undefined;
            this.State = undefined;
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
    this._api.state_details_delete(a).subscribe(
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
    this.Country = undefined;
    this.State = undefined
  }
}

