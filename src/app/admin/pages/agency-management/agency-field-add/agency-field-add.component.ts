import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-agency-field-add',
  templateUrl: './agency-field-add.component.html',
  styleUrls: ['./agency-field-add.component.css']
})
export class AgencyFieldAddComponent implements OnInit {
  type: any;

  fields_detail: any;
  data_type: any;
  length: any;



  rows: any;
  searchQR: any;
  id: any;
  edit_f:boolean = false;

  profolio_list: any = [
    { 'y': "Text" },
    { 'y': "Number" },
    { 'y': "Boolean" }
  ];

  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._api.fields_list().subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );
  }
  add() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "fields": this.type,
        "fields_detail" : this.fields_detail,
        "data_type" : this.data_type.y,
        "length" : this.length,
        "addedby": "Admin"
      };
      console.log(a);

      this._api.fields_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.type = undefined;
            this.fields_detail = undefined;
            this.data_type = undefined;
            this.length = undefined;
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
    this.type = item.fields;
    this.fields_detail = item.fields_detail;
    this.data_type = item.data_type;
    this.length = item.length;
  }
  edit() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "fields": this.type,
        "fields_detail" : this.fields_detail,
        "data_type" : this.data_type,
        "length" : this.length,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.fields_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.edit_f = false;
            this.type = undefined;
            this.fields_detail = undefined;
    this.data_type = undefined;
    this.length = undefined;
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
    this._api.fields_delete(a).subscribe(
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
    this.type = undefined;
    this.edit_f = false;
  }
}
