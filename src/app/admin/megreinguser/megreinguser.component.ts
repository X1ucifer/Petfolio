import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-megreinguser',
  templateUrl: './megreinguser.component.html',
  styleUrls: ['./megreinguser.component.css']
})
export class MegreinguserComponent implements OnInit {

  user_list_details : any;

  Company_details : any;
  Designation_details1 : any;
  User_details1 : any;
  Designation_details2 : any;
  User_details2 : any;

  Merge_details : [];

  searchQR : any;
  rows : any;


  company_name : any;
  company_id : any;
  report_to_design : any;
  report_to_design_id : any;
  report_to : any;
  report_to_id : any;
  user_to_design : any;
  user_to_design_id : any;
  user : any;
  user_id : any;
  create_at :any;
  create_by : any;





  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

     this.company_name = '';
     this.report_to_design = '';
     this.report_to = '';
     this.user_to_design = '';
     this.user = '';




    this._api.user_details_list().subscribe(
      (response: any) => {
        console.log(response);
        this.user_list_details = response.Data;
        this.Company_details = [];
       var hash = response.Data.reduce((p,c) => (p[c.bankname] ? p[c.bankname].push(c) : p[c.bankname] = [c],p) ,{});
       var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
       console.log(newData);
        for(let a = 0 ; a < newData.length; a ++){
          let x =  { 'y': newData[a].color}
          this.Company_details.push(x);
        }
        // this.rows = response.Data.reverse();
        // console.log(this.rows);
      }
    );



    this._api.designation_type_list().subscribe(
      (response: any) => {
        console.log(response);
        this.Designation_details1 = [];
        this.Designation_details2 = [];
        for(let a = 0 ; a < response.Data.length; a ++){
          let x =  { 'y': response.Data[a].designation_type}
          let y =  { 'x': response.Data[a].designation_type}
          this.Designation_details1.push(x);
          this.Designation_details2.push(y);
        }
        this.Designation_details1 = this.Designation_details1.reverse();
        this.Designation_details2 = this.Designation_details2.reverse();
        // console.log(this.rows);
      }
    );


    this._api.merge_details_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data.reverse();
        this.Merge_details =  this.rows;
        // console.log(this.rows);
      }
    );


  }


  Reporter_fetch(){
    console.log(this.user);
    for(let a = 0 ; a < this.user_list_details.length; a ++){
      if(this.user_list_details[a].email_id == this.user.y){
         this.user_id = this.user_list_details[a]._id;
         console.log(this.user_id);
      }
    }
  }

  Report_fetch(){
    console.log(this.report_to);
    for(let a = 0 ; a < this.user_list_details.length; a ++){
      if(this.user_list_details[a].email_id == this.report_to.y){
         this.report_to_id = this.user_list_details[a]._id;
         console.log(this.report_to_id);
      }
    }
  }

  company_type_select(data){
   console.log(data);
  }

  fetchuser_1(){
    console.log(this.company_name);
    console.log(this.report_to_design);

    let req = {
      "bankname" : this.company_name.y,
      "designation" : this.report_to_design.y
    }
    console.log(req);
    this._api.user_details_list_by_com(req).subscribe(
      (response: any) => {
        console.log(response);
        if(response.Data.length == 0){
         alert("There is no user with this designations");
        }else {
          this.User_details1 = [];
          for(let a = 0 ; a < response.Data.length; a ++){
            let x =  { 'y': response.Data[a].email_id}
            this.User_details1.push(x);
          }
          this.User_details1 = this.User_details1.reverse();
          // console.log(this.rows);
        }
      }
    );
  }


  fetchuser_2(){
    console.log(this.company_name);
    console.log(this.user_to_design);

    let req = {
      "bankname" : this.company_name.y,
      "designation" : this.user_to_design.x
    }
    console.log(req);
    this._api.user_details_list_by_com(req).subscribe(
      (response: any) => {
        console.log(response);
        if(response.Data.length == 0){
         alert("There is no user with this designations");
        }else {
          this.User_details2 = [];
          for(let a = 0 ; a < response.Data.length; a ++){
            let x =  { 'y': response.Data[a].email_id}
            this.User_details2.push(x);
          }
          this.User_details2 = this.User_details2.reverse();
          // console.log(this.rows);
        }
      }
    );
  }

  merge(){

    for(let a = 0 ; a < this.user_list_details.length; a ++){
      if(this.user_list_details[a].bankname == this.company_name.y){
         this.company_id = this.user_list_details[a]._id;
         console.log(this.company_id);
      }
    }


  console.log(
    this.company_id,
    this.company_name.y,
    this.report_to.y,
    this.report_to_id,
    this.user.y,
    this.user_id,
  );


  let req = {
    "company_id" : this.company_id,
    "company_name":  this.company_name.y,
    "report_to" : this.report_to.y,
    "report_to_id" : this.report_to_id,
    "user" : this.user.y,
    "user_id" : this.user_id,
    "created_by" : "Admin",
    "status" : "Available",
  }
  this._api.merge_details_add(req).subscribe(
    (response: any) => {
      console.log(response);
      if(response.Data.length == 0){
       alert("There is no user with this designations");
      }else {
        this.User_details2 = [];
        for(let a = 0 ; a < response.Data.length; a ++){
          let x =  { 'y': response.Data[a].email_id}
          this.User_details2.push(x);
        }
        this.User_details2 = this.User_details2.reverse();
        this.ngOnInit();
        // console.log(this.rows);
      }
    }
  );




  }


  delete(id) {
    let a = {
      "_id": id
    }
    this._api.merge_details_delete(a).subscribe(
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








}
