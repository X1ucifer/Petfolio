import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-entity-management',
  templateUrl: './entity-management.component.html',
  styleUrls: ['./entity-management.component.css']
})
export class EntityManagementComponent implements OnInit {
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
    this.saveInLocal('Entity_data', undefined);
    this._api.entity_list().subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );

  }
  client_form() {
    // this.saveInLocal('Client_form', 'client');
    this.router.navigateByUrl('admin_panel/Super_admin/EntityForm')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  client_form_view(item) {
    this.saveInLocal('Entity_data', item);
    this.router.navigateByUrl('admin_panel/Super_admin/EntityForm')
  }
  Delete(id){
    let a={
      "_id": id
    }
    this._api.entity_delete(a).subscribe(
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
