import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-user-status-marking',
  templateUrl: './user-status-marking.component.html',
  styleUrls: ['./user-status-marking.component.css']
})
export class UserStatusMarkingComponent implements OnInit {
  Name: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;
  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  uploadedFiles: any[] = [];
   rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.saveInLocal('client_data', undefined);
    this._api.useradd_list().subscribe(
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
  client_form_view(item) {
    this.saveInLocal('client_data', item);
    this.router.navigateByUrl('/admin_panel/user/user_form')
  }
  client_view(item) {
    this.saveInLocal('client_data', item);
    this.router.navigateByUrl('admin_panel/Client_profile')
  }
  Delete(id) {
    let a = {
      "_id": id
    }
    this._api.useradd_delete(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 200) {
          alert("Deleted successfully");
          this.ngOnInit();
        }
        else {
          alert('Somthing went wrong');
        }

      }
    );
  }
}
