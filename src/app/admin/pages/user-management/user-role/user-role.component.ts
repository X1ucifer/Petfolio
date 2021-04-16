import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
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
    this._api.userrole_list().subscribe(
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
        "userrole": this.type,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.userrole_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert("User Role Added Successfully");
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
    this.type = item.userrole
  }
  edit() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "userrole": this.type,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.userrole_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert("User Role Updated Successfully");
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
    this._api.userrole_delete(a).subscribe(
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

