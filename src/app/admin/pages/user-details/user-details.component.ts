import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  designation :any;
  bankname : any;
  email_id = "";
  name = "";
  password = "";
  phone_number = "";
  access = [];
  created_by  = "Admin";

  company_types = '';

  country = [];

  company_title : boolean = false;

  menu_details = [
   {"title":"Dashboard","Status":false},
   {"title":"Client type","Status":false},
   {"title":"Portfolio","Status":false},
   {"title":"Product","Status":false},
   {"title":"Client Managements","Status":false},
   {"title":"Client Status Marking","Status":false},
   {"title":"User Type Create","Status":false},
   {"title":"User Role","Status":false},
   {"title":"User Group","Status":false},
   {"title":"User Management","Status":false},
   {"title":"User Status Marking","Status":false},
   {"title":"Portfolio Inbox","Status":false},
   {"title":"Notification Incox","Status":false},
   {"title":"Customer 360","Status":false},
   {"title":"Configurations Screen","Status":false},
   {"title":"Field Visit Coordinator","Status":false},
   {"title":"Field Visit Agent","Status":false},
   {"title":"Settlement Approval","Status":false},
   {"title":"Configurations Screen","Status":false},
   {"title":"Allocation","Status":false},
   {"title":"Work list","Status":false},
   {"title":"Re allocations","Status":false},

  ]




  company_type: any = [
  { 'y': "New Company"},
  { 'y': "Exists Company"}];


  company_name: any = [
    { 'y': "Triton IT Solutions"},
    { 'y': "Triton IT Solutions1"},
    { 'y': "Triton IT Solutions2"},
    { 'y': "Triton IT Solutions3"},
    { 'y': "Triton IT Solutions4"},
    { 'y': "Triton IT Solutions5"},
    { 'y': "Triton IT Solutions6"},
    { 'y': "Triton IT Solutions7"},
    { 'y': "Triton IT Solutions8"}
  ];


  designation_type: any = [
    { 'y': "Admin"},
    { 'y': "Manager"},
    { 'y': "Team Leader"},
    { 'y': "Office Manager"},
    { 'y': "Field Officer"}
  ];

  Country: any;
  State: any;
  type: any;
  rows: any;
  searchQR: any;
  id: any;
  edit_f: boolean = false;


   designation_empty_check : boolean =  false;
   emp_name_empty_check  : boolean =  false;
   emp_email_empty_check  : boolean =   false;
   emp_password_empty_check  : boolean =   false;
   emp_phone_empty_check  : boolean =   false;
   emp_email_validation_check  : boolean =   false;
   emp_password_length_check  : boolean =  false;
   emp_access_check  : boolean =   false;
  areaCodeList: any;
  fieldvisitCodeList: any;
  fieldvisitterritory: any;
  fieldvisitarea: any;

  fvca:any;








  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
     this.company_types = '';
     this.bankname = '';
     this.designation = '';
     this.name = '';
     this.email_id = '';
     this.password = '';
     this.phone_number = '';
     this.fvca = false;
     this.menu_details = [
      {"title":"Dashboard","Status":false},
      {"title":"Client type","Status":false},
      {"title":"Portfolio","Status":false},
      {"title":"Product","Status":false},

      {"title":"Document type","Status":false},
      {"title":"Product Mapping","Status":false},
      {"title":"Bucket / Managements","Status":false},
      {"title":"Table / Field","Status":false},
      {"title":"Account type","Status":false},
      // {"title":"Designation","Status":false},
      // {"title":"Country & Currency","Status":false},
      // {"title":"State","Status":false},
      {"title":"Predefined Fields","Status":false},

      {"title":"Field Visit Coordinator","Status":false},
      {"title":"Field Visit Agent","Status":false},
      {"title":"Settlement Approval","Status":false},
      {"title":"Configurations Screen","Status":false},
      {"title":"Allocation","Status":false},
      {"title":"Work list","Status":false},
      {"title":"Re allocations","Status":false},
      // {"title":"Client Managements","Status":false},
      // {"title":"Client Status Marking","Status":false},
      // {"title":"User Type Create","Status":false},
      // {"title":"User Role","Status":false},
      // {"title":"User Group","Status":false},
      // {"title":"User Management","Status":false},
      // {"title":"User Status Marking","Status":false},
      {"title":"Portfolio Inbox","Status":false},
      // {"title":"Notification Incox","Status":false},
      // {"title":"Customer 360","Status":false},
      // {"title":"Configurations Screen","Status":false},



      // {"title":"Organization Management","Status":false},


     ]
    this._api.user_details_list().subscribe(
      (response: any) => {
        console.log(response);
        this.company_name = [];
       var hash = response.Data.reduce((p,c) => (p[c.bankname] ? p[c.bankname].push(c) : p[c.bankname] = [c],p) ,{});
       var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
       console.log(newData);
        for(let a = 0 ; a < newData.length; a ++){
          let x =  { 'y': newData[a].color}
          this.company_name.push(x);
        }
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );



    this._api.designation_type_list().subscribe(
      (response: any) => {
        console.log(response);
        this.designation_type = [];
        for(let a = 0 ; a < response.Data.length; a ++){
          let x =  { 'y': response.Data[a].designation_type}
          this.designation_type.push(x);
        }
        this.designation_type = this.designation_type.reverse();
        // console.log(this.rows);
      }
    );

    this._api.getlist_area_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.areaCodeList = data['Data'];
      } else {
        this.areaCodeList = [];
      }
    });

    this._api.getlist_fieldvisit_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.fieldvisitCodeList = data['Data'];
      } else {
        this.fieldvisitCodeList = [];
      }
    });


  }


  getdesctype(event){
    const desc = event.target.value;
    if (desc == "Field Visit Agent" || desc == "Field Visit Coordinator") {
      this.fvca = true;
    } else {
      this.fvca = false;
    }
  }


  company_type_select(data){
    console.log(data);
    if(data.y == 'New Company'){
      this.company_title = true;
    } else {
      this.company_title = false;
    }
  }

  changeStatus(a,b){
    console.log(a,b);
    this.menu_details[a].Status = b;
  }

  add(data) {
   if(data == true){

   }
   else{
    this.access = this.menu_details;
    if(this.company_title == false){
     this.bankname = this.bankname.y;
    }
    console.log(
     this.designation.y,
     this.bankname,
     this.email_id,
     this.password,
     this.phone_number,
     this.access,
     this.created_by,
     this.name,
    );
    let a = {
         "designation": this.designation,
         "bankname": this.getFromLocal('client_id'),
         "email_id": this.email_id,
         "password": this.password,
         "phone_number": this.phone_number,
         "access": this.access,
         "created_by": this.getFromLocal('client_name'),
         "status" : "Available",
         "name" : this.name,
         "fieldvisitterritory" : this.fieldvisitterritory,
         "fieldvisitarea" : this.fieldvisitarea
       }
       this._api.user_details_add(a).subscribe(
       (response: any) => {
           console.log(response);
           if(response.Code == 200){
             alert("User Details Added Successfully");
             this.ngOnInit();
           }else if(response.Code == 500){
             alert("Email Id already exists");
           }
           else{
             alert("Something went wrong, try later");
           }
         }
       );
   }
  }

  show_edit(item) {
    console.log(item);
    this.edit_f = true;
    this.id = item._id;
    this.designation = item.designation;
    this.bankname = item.bankname;
    this.email_id = item.email_id;
    this.password = item.password;
    this.phone_number = item.phone_number;
    this.access = item.access;
    this.created_by = item.created_by;
    this.name = item.name;
    for (let i = 0; i < this.access.length; i++) {
      this.menu_details[i].Status = this.access[i].Status;
    }
  }

  edit() {
 
     this.access = this.menu_details;
     if(this.company_title == false){
      this.bankname = this.bankname;
     }
     console.log(
      this.designation.y,
      this.bankname,
      this.email_id,
      this.password,
      this.phone_number,
      this.access,
      this.created_by,
      this.name,
     );
     let a = {
          "_id":this.id,
          "designation": this.designation,
          "bankname": this.getFromLocal('client_id'),
          "email_id": this.email_id,
          "password": this.password,
          "phone_number": this.phone_number,
          "access": this.access,
          "created_by": this.getFromLocal('client_name'),
          "status" : "Available",
          "name" : this.name,
          "fieldvisitterritory" : this.fieldvisitterritory,
          "fieldvisitarea" : this.fieldvisitarea
        }
        this._api.user_details_edit(a).subscribe(
        (response: any) => {
            console.log(response);
            if(response.Code == 200){
              alert("User Details Updated Successfully");
              this.ngOnInit();
              this.edit_f = false;
            }else if(response.Code == 500){
              alert("Email Id already exists");
            }
            else{
              alert("Something went wrong, try later");
            }
          });

  }

  delete(id) {
    let a = {
      "_id": id
    }
    this._api.user_details_delete(a).subscribe(
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
    this.Country = undefined;
    this.State = undefined;
    this.id = undefined;
    this.designation = undefined;
    this.bankname = undefined;
    this.email_id = undefined;
    this.password = undefined;
    this.phone_number = undefined;
    this.access = undefined;
    this.created_by = undefined;
    this.name = undefined;
    this.menu_details = [
      {"title":"Dashboard","Status":false},
      {"title":"Client type","Status":false},
      {"title":"Portfolio","Status":false},
      {"title":"Product","Status":false},

      {"title":"Document type","Status":false},
      {"title":"Product Mapping","Status":false},
      {"title":"Bucket / Managements","Status":false},
      {"title":"Table / Field","Status":false},
      {"title":"Account type","Status":false},
      // {"title":"Designation","Status":false},
      // {"title":"Country & Currency","Status":false},
      // {"title":"State","Status":false},
      {"title":"Predefined Fields","Status":false},

      {"title":"Field Visit Coordinator","Status":false},
      {"title":"Field Visit Agent","Status":false},
      {"title":"Settlement Approval","Status":false},
      {"title":"Configurations Screen","Status":false},
      {"title":"Allocation","Status":false},
      {"title":"Work list","Status":false},
      {"title":"Re allocations","Status":false},
      // {"title":"Client Managements","Status":false},
      // {"title":"Client Status Marking","Status":false},
      // {"title":"User Type Create","Status":false},
      // {"title":"User Role","Status":false},
      // {"title":"User Group","Status":false},
      // {"title":"User Management","Status":false},
      // {"title":"User Status Marking","Status":false},
      {"title":"Portfolio Inbox","Status":false},
      // {"title":"Notification Incox","Status":false},
      // {"title":"Customer 360","Status":false},
      // {"title":"Configurations Screen","Status":false},



      // {"title":"Organization Management","Status":false},


     ];
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }



  Condition_check_add(){
    let check_status =  false;
    this.designation_empty_check = false;
    this.emp_name_empty_check = false;
    this.emp_email_empty_check = false;
    this.emp_password_empty_check = false;
    this.emp_phone_empty_check = false;
    if(this.designation == ''){
      this.designation_empty_check = true;
      check_status = true;
    }
    if(this.name == ''){
      this.emp_name_empty_check = true;
      check_status = true;
    }
    if(this.email_id == ''){
      this.emp_email_empty_check = true;
      check_status = true;
    }
    if(this.password == ''){
      this.emp_password_empty_check = true;
      check_status = true;
    }
    if(this.phone_number == ''){
      this.emp_phone_empty_check = true;
      check_status = true;
    }

    this.add(check_status);

  }


  Condition_check(){
    let check_status =  false;
    this.designation_empty_check = false;
    this.emp_name_empty_check = false;
    this.emp_email_empty_check = false;
    this.emp_password_empty_check = false;
    this.emp_phone_empty_check = false;
    if(this.designation == ''){
      this.designation_empty_check = true;
      check_status = true;
    }
    if(this.name == ''){
      this.emp_name_empty_check = true;
      check_status = true;
    }
    if(this.email_id == ''){
      this.emp_email_empty_check = true;
      check_status = true;
    }
    if(this.password == ''){
      this.emp_password_empty_check = true;
      check_status = true;
    }
    if(this.phone_number == ''){
      this.emp_phone_empty_check = true;
      check_status = true;
    }

    this.add(check_status);

  }
}

