import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  type: any;
  rows: any;
  searchQR: any;
  id: any;
  edit_f: boolean = false;
  Product: any;
  Name: any;
  Bucket: any;
  Start_date: any;
  End_date: any;
  Client_list: any = [];
  Product_list:any=[{'y':"Credit Card"}];
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._api.bucket_type_list().subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );


    this._api.client_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for(let i=0 ; i < list.length; i++ ){
          let obj={'y':list[i].Clinet_name, '_id':list[i]._id};
          this.Client_list.push(obj);
        }
        console.log(this.Client_list);
      }
    );
  }
  add() {
    if (this.Name == undefined || this.Name == '' || this.Product == undefined || this.Bucket == undefined || this.Bucket == '' || this.Start_date == undefined || this.End_date == undefined) {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "client_name": this.Name.y,
        "product_name": this.Product.y,
        "bucket_type": this.Bucket,
        "start_date": this.Start_date,
        "end_date": this.End_date,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.bucket_type_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.Name = undefined;
            this.Product = undefined;
            this.Bucket = undefined;
            this.Start_date = undefined;
            this.End_date = undefined
            this.ngOnInit();
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  show_edit(item) {
    console.log(item);
    this.id = item._id;
    this.edit_f = true;
    this.Name = { 'y': item.client_name };
    this.Product = { 'y': item.product_name };
    this.Bucket = item.bucket_type;
    this.Start_date = new Date(item.start_date);
    this.End_date == new Date(item.end_date);
  }
  edit() {
    if (this.Name == undefined || this.Name == '' || this.Product == undefined || this.Bucket == undefined || this.Bucket == '' || this.Start_date == undefined || this.End_date == undefined) {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "client_name": this.Name.y,
        "product_name": this.Product.y,
        "bucket_type": this.Bucket,
        "start_date": this.Start_date,
        "end_date": this.End_date,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.bucket_type_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.edit_f = false;
            this.Name = undefined;
            this.Product = undefined;
            this.Bucket = undefined;
            this.Start_date = undefined;
            this.End_date = undefined
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
    this._api.bucket_type_delete(a).subscribe(
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
    this.Name = undefined;
    this.Product = undefined;
    this.Bucket = undefined;
    this.Start_date = undefined;
    this.End_date = undefined

    this.edit_f = false;
  }
}
