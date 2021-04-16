import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';


@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
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
    this._api.usergroup_list().subscribe(
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
        "usergroup": this.type,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.usergroup_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert("User Type Added Successfully");
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
    this.type = item.usergroup
  }
  edit() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "usergroup": this.type,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.usergroup_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert("User Type Updated Successfully");
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
    this._api.usergroup_delete(a).subscribe(
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

