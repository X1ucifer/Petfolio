import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent implements OnInit {
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
    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let a = {
      client_id : this.getFromLocal("Client_ID")
    }
    this._api.portfolio_type_list(a).subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
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
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "portfolio_type": this.type,
        "addedby": this.getFromLocal("User_ID"),
        "client_id" : this.getFromLocal("Client_ID")
      };
      console.log(a);
      this._api.portfolio_type_add(a).subscribe(
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
    this.type = item.portfolio_type
  }
  edit() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "portfolio_type": this.type,
        // "addedby": this.getFromLocal("User_ID"),
      };
      console.log(a);
      this._api.portfolio_type_edit(a).subscribe(
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
      "_id": id
    }
    this._api.portfolio_type_delete(a).subscribe(
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
