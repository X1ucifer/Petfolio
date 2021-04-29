import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR: any;
  value1: any;
  user_list: any;
  S_Date: any;
  E_Date: any;
  saveAsExcelFile: any;
  title: any;
  sub_title: any;
  message: any;
  Validation: boolean;
  select_list=[];
  chk:boolean = false;
  constructor(
    private toastr:ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private datePipe: DatePipe,

  ) { }

  ngOnInit(): void {
    this._api.user_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.user_list = response.Data;
        console.log(this.user_list);
      }
    );
  }


  validation() {
    if (this.title == undefined || this.title == '' || this.sub_title == undefined || this.sub_title == '' || this.message == undefined || this.message == undefined) {
      this.Validation = false;
      console.log(this.Validation)
    }
    else {
      this.Validation = true;
      console.log(this.Validation)
    }
  }
  send() {
    this.validation();
    if (this.Validation == false) {
      //alert("Please enter valid inputs")
      this.showWarning("Please enter valid inputs");
    } else {
      let a = {
        "title": this.title,
        "subtitle": this.sub_title,
        "message": this.message,
        "date_time": new Date(),
        "user_Details": this.select_list
        };
        console.log(a);
        this._api.notification_send(a).subscribe(
          (response: any) => {
            console.log(response.Data);
            if (response.Code === 200) {
              console.log(response);
              //alert('Notification send uccessfully');
              this.showSuccess("Notification send Successfully")
              // this.router.navigateByUrl('/admin/Customer_Management')
            } else {
              this.showError(response.Message);
              alert(response.Message);
            }
          }
        );
      }
    }
    select(event:any,item:any){
        console.log(event.target.defaultValue)
        if (event.target.checked == true) {
          this.select_list.push(item);
          console.log(this.select_list);
        }
        else if (event.target.checked == false) {
          this.select_list = this.select_list.filter((val: any) => val !== item);
          console.log(this.select_list);
        }
      
    }
    selectall(event:any){
      if (event.target.checked == true) {
        this.select_list = this.user_list
        console.log(this.select_list);
      this.chk = true;
      }
      else if (event.target.checked == false) {
        this.select_list = []
        this.chk = false;
        console.log(this.select_list);
      }
     
    }

    showSuccess(msg) {
      this.toastr.successToastr(msg);
    }
  
    showError(msg) {
        this.toastr.errorToastr(msg);
    }
  
    showWarning(msg) {
        this.toastr.warningToastr(msg);
    }
  }
