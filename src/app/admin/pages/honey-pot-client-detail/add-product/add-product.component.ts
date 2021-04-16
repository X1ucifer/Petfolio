
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  client_name: any;
  business_divi: any;
  product_name: any;
  profolio: any;
  type: any;
  rows: any;
  searchQR: any;
  id: any;
  edit_f: boolean = false;
  client_list: any = [];
  product_list: any = [];
  profolio_list: any = [];
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._api.products_detatils_list().subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );

    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let ac = {
      client_id : this.getFromLocal("Client_ID")
    }

    this._api.product_type_list(ac).subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].product_type };
          this.product_list.push(obj);
        }

        console.log(this.product_list);
      }
    );

    this._api.client_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].Clinet_name };
          this.client_list.push(obj);
        }

        console.log(this.client_list);
      }
    );

    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let a = {
      client_id : this.getFromLocal("Client_ID")
    }
    this._api.portfolio_type_list(a).subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].portfolio_type };
          this.profolio_list.push(obj);
        }

        console.log(this.profolio_list);
      }
    );
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }


  add() {
    if (this.client_name == undefined || this.product_name == undefined || this.profolio == undefined || this.business_divi == undefined || this.business_divi == '') {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "client_name": this.client_name.y,
        "business_divi": this.business_divi,
        "product_name": this.product_name.y,
        "profolio": this.profolio.y,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.products_detatils_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.type = undefined;
            this.client_name = undefined;
            this.product_name = undefined;
            this.profolio = undefined;
            this.business_divi = undefined;
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
    this.client_name = { 'y': item.client_name };
    this.business_divi =  item.business_divi ;
    this.product_name = { 'y': item.product_name };
    this.profolio = { 'y': item.profolio };
  }
  edit() {
    if (this.client_name == undefined || this.product_name == undefined || this.profolio == undefined || this.business_divi == undefined || this.business_divi == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "client_name": this.client_name.y,
        "business_divi": this.business_divi,
        "product_name": this.product_name.y,
        "profolio": this.profolio.y,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.products_detatils_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.edit_f = false;
            this.client_name = undefined;
            this.product_name = undefined;
            this.profolio = undefined;
            this.business_divi = undefined;
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
    this._api.products_detatils_delete(a).subscribe(
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
    this.client_name = undefined;
    this.product_name = undefined;
    this.profolio = undefined;
    this.business_divi = undefined;
  }
}
