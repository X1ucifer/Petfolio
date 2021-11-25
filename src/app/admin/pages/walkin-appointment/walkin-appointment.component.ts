


import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ExcelService } from '../../../excel.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-walkin-appointment',
  templateUrl: './walkin-appointment.component.html',
  styleUrls: ['./walkin-appointment.component.css']
})
export class WalkinAppointmentComponent implements OnInit {

  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  searchQR: any;
  appointment_list: any;
  Main_list: any;
  filter_type: any;
  S_Date: any;
  E_Date: any;
  rows: any = [{ type: "Dog", name: "dog1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" }]
  excelData: any[] = [];
  c_list: any = [];
  user : any;
  showlist = [];
  hidelist = [];



  type_array: any = [];
  type_false : any;
  Pet_Type : any;
  pettype : any;
  keyword3 = 'pet_type_title';


  temp_data = [];


  constructor(
    private toastr:ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private datePipe: DatePipe,
    private excelService: ExcelService,

  ) { }

  ngOnInit(): void {

    let login_check = this.storage.get("doctor_login_cache");
    console.log(login_check);
    if(login_check == true){
    }else{
      this.router.navigateByUrl('/doctorlogin');
    }


    this.user = this.storage.get('user');
    console.log(this.user);
    this.showlist = [];
    this.hidelist = [];
    this.listpettype();
    this.listpettype1();
  }


  listpettype1() {
    this._api.pet_type_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.pettype = response.Data;
        for (let i = 0; i < response.Data.length; i++) {
          this.type_array.push({ "pet_type_title": response.Data[i].pet_type_title })
        }
        console.log(this.type_array);
      }
    );
  }



  listpettype() {
    let a = {
      doctor_id : this.user._id
    }
    this._api.walkin_appointment_getlist_id(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        let temp = response.Data;
        this.appointment_list = [];
        console.log(this.appointment_list);
        temp.forEach(element => {
           if(element.visibility == "visible"){
             this.showlist.push(element);
           }else{
            this.hidelist.push(element);
           }
        });
        this.appointment_list = this.showlist;
        this.temp_data = this.appointment_list;
        this.get_c_list();
      }
    );
  }
  view_details(item) {
    this.saveInLocal('view_detail_data', item);
    this.saveInLocal('view_detail', 'Appointment')
    this.router.navigateByUrl('/doctor-admin/appointment-details')

  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  Filter(type) {
    this.appointment_list = this.Main_list;
    this.filter_type = type;
    if (this.filter_type == 'Completed') {
      this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type)
      console.log(this.appointment_list)
      this.get_c_list();
    }
    if (this.filter_type == 'Incomplete') {
      this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type)
      console.log(this.appointment_list)
      this.get_c_list();
    }
    if (this.filter_type == 'Missed') {
      this.appointment_list = this.appointment_list.filter((x: any) => x.appoinment_status == this.filter_type)
      console.log(this.appointment_list)
      this.get_c_list();
    }
    if (this.filter_type == 'All') {
      this.appointment_list = this.Main_list;
      console.log(this.appointment_list)
      this.get_c_list();
    }

  }
  Delete(id){
    let a ={
      "_id": id
    }
    this._api.walkin_appointment_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        //alert('Deleted Successfully');
        this.showSuccess("Deleted Successfully")
        this.ngOnInit();
      }
    );
  }
  filter_date() {
    if ( this.E_Date != undefined && this.S_Date != undefined) {
      // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
      let yourDate= this.E_Date.setDate(this.E_Date.getDate() + 1);

      let a = {
        "fromdate":this.datePipe.transform(new Date(this.S_Date),'yyyy-MM-dd'),
        "todate" : this.datePipe.transform(new Date(yourDate),'yyyy-MM-dd')
        }
      console.log(a);
      this._api.appointment_filter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.appointment_list = response.Data;
          this.get_c_list();
        }
      );
    }
    else{
      this.showWarning("Please select the startdate and enddate")
      //alert('Please select the startdate and enddate');
    }

  }
  refersh(){
    this.listpettype();this.E_Date = undefined ; this.S_Date = undefined;
  }
  exportAsXLSX(): void {
    let final_data = [];
    for(let a  = 0 ; a  < this.excelData.length; a++){
      let c = {
      "Client name" : this.excelData[a].user_id.first_name + " " + this.excelData[a].user_id.last_name,
      "Client phone" : this.excelData[a].user_id.user_phone,
      "Pet Type" : this.excelData[a].pet_id.pet_type,
      "Pet Breed" : this.excelData[a].pet_id.pet_breed,
      "Pet Name" : this.excelData[a].pet_id.pet_name,
      "Doctor Name" : this.excelData[a].doc_business_info[0].dr_name,
      "Payment Type" : this.excelData[a].payment_method,
      "Appointment Date & Time" : this.excelData[a].booking_date_time,
      "Appointment Type" : this.excelData[a].appointment_types,
      "Appointment Status" : this.excelData[a].appoinment_status,
      "Booking Date & Time" :this.excelData[a].booking_date_time,
      "Consultation type" : " Clinic Visit",
      "Amount" :this.excelData[a].amount
      }
     final_data.push(c);
     if(a ==  this.excelData.length - 1){
       this.excelService.exportAsExcelFile(final_data, 'Pet_care_appiontment_List');
     }
    }
  }
  get_c_list() {
    this.c_list = this.appointment_list.reverse();
    console.log(this.c_list)
    this.excelData = this.c_list
    // for (let a = 0; a < this.c_list.length; a++) {
    //   let data = {
    //   }
    //   this.excelData.push(this.c_list)
    // }

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

  service_form() {
    this.saveInLocal('fun_type', 'create');
    this.router.navigateByUrl('/doctor-admin/walkinnew')
  }


  edit(data){
    console.log(data);
    this.saveInLocal('view_detail_data', data);
    this.saveInLocal('view_detail', 'Appointment')
    this.router.navigateByUrl('/doctor-admin/appointment_edit')
  }



  hide(data){
    let a = {
      "_id": data,
      "visibility" : "hide"
      }
    console.log(a);
    this._api.walkin_appointment_edit(a).subscribe(
      (response: any) => {
        this.toastr.successToastr("Updated");
        this.ngOnInit();
      }
    );
  }

  visible(data){
    let a = {
      "_id": data,
      "visibility" : "visible"
      }
    console.log(a);
    this._api.walkin_appointment_edit(a).subscribe(
      (response: any) => {
        this.toastr.successToastr("Updated");
        this.ngOnInit();
      }
    );
  }


  showhidelist(){
    this.appointment_list = this.hidelist;
  }

  showvisiblelist(){
    this.appointment_list = this.showlist;
  }

  selectEvent3(item){
    console.log(item);
    this.Pet_Type = item;
    // this.searchQR = item.pet_type_title
    this.appointment_list = [];
    for(let a  = 0 ; a < this.temp_data.length ; a ++){
      if(this.temp_data[a].pet_id.pet_type == item.pet_type_title){
        this.appointment_list.push(this.temp_data[a]);
      }
    }
  }

  clear(){
    this.searchQR = '';
    this.appointment_list = this.temp_data;
  }

}

