import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-portfilo-buckets',
  templateUrl: './portfilo-buckets.component.html',
  styleUrls: ['./portfilo-buckets.component.css']
})
export class PortfiloBucketsComponent implements OnInit {
  rows = [];
  searchQR: any;
  value1: any;
  final_data : any;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.saveInLocal('Entity_data', undefined);


    let a  = {
      assigned_to : this.getFromLocal("User_ID"),
      client_id : this.getFromLocal("Client_ID")
    }
    this._api.fetch_data_using_allocated_list(a).subscribe(
      (response: any) => {
        console.log(response);
        let rows = response.Data.reverse();
        const group = (data) =>
        data.reduce((acc, { bucket_id, client_id }) => {
          const item = acc.find((el) => el.bucket_id === bucket_id);
          if (item) item.client_id += client_id;
          else acc.push({ bucket_id, client_id });
          return acc;
        }, []);
        console.log(group(rows));
        this.rows = group(rows);
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


  move_to_select(item){
    console.log(item);
    this.saveInLocal('portfolio_bucket_id', item);
    this.router.navigateByUrl('/admin_panel/portfilo_recordlist');
  }


  internal_allocation(){
    this.router.navigateByUrl('/admin_panel/worklist_buckets');
  }


}
