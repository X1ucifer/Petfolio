import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-prescriptionadd',
  templateUrl: './prescriptionadd.component.html',
  styleUrls: ['./prescriptionadd.component.css']
})
export class PrescriptionaddComponent implements OnInit {

  datas = [];

  Tablet_name = '';
  Quantity = '';
  consumption = '';
  update_id = '';

  view_detail : any;
  view_detail_data : any;
  user_id : any;
  sub_diagnosis : any;
  diagnosis : any;

  button_action :  boolean = false;


  morning : any = false;
  evening : any = false;
  night : any = false;



  constructor(
    private toastr:ToastrManager,
    private location: Location,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
  ) {
    let login = false
    login = this.getFromLocal('login');
    console.log(login)
    if (login != true) {
      this.router.navigateByUrl('/doctorlogin');

    }
  }

  ngOnInit(): void {

    this.view_detail = this.getFromLocal('view_detail');
    this.view_detail_data = this.getFromLocal('view_detail_data');
    console.log(this.view_detail);
    console.log(this.view_detail_data);
    this.user_id = this.view_detail_data.user_id._id;
    this.sub_diagnosis = this.view_detail_data.sub_diagnosis;
    this.diagnosis =  this.view_detail_data.diagnosis;

    let id = {
      "Appointment_ID": this.view_detail_data._id
    }
    console.log(id)
    this._api.fetch_prescription(id).subscribe(
      (response: any) => {
        console.log(response);
        if(response.Data.length == 0){
          this.view_detail_data.prescription_details = 'add';
          this.button_action = false;
        }else{
          this.view_detail_data.prescription_details = 'edit';
          this.datas = response.Data[0].Prescription_data;
          this.update_id = response.Data[0]._id;
          this.button_action = true;
        }
      }
    );


  }

  update_appointment(){

  }

  back(){

  }


  add(){
    let a = {"Quantity":this.Quantity,"Tablet_name":this.Tablet_name,"consumption":{night:this.night,evening:this.evening,morning:this.morning}}
    this.datas.push(a);
    this.Quantity = '';
    this.Tablet_name = '';
    this.consumption = '';
    this.night = false;
    this.evening = false;
    this.morning = false;
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }


  remove(index){
    this.datas.splice(index, 1);
  }


  save(){

     if(this.datas.length == 0){
      alert("Add Tablets");
     }else{
      let a = {
        "Appointment_ID":this.view_detail_data._id,
        "Date": this.view_detail_data.display_date,
        "Doctor_Comments":this.view_detail_data.doctor_comment,
        "PDF_format":"",
        "Prescription_data":this.datas,
        "Prescription_img":"",
        "Prescription_type":"PDF",
        "Treatment_Done_by":"",
        "diagnosis":this.diagnosis,
        "doctor_id": this.view_detail_data.doctor_id,
        "sub_diagnosis": this.sub_diagnosis
      }
      console.log(a);
      this._api.create_prescription(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          alert("Updated Successfully");
          // this.ngOnInit();
        }
      );
     }
  }


  update(){
    if(this.datas.length == 0){
      alert("Add Tablets");
     }else{
      let a = {
        "_id" : this.update_id,
        "Appointment_ID":this.view_detail_data._id,
        "Date": this.view_detail_data.display_date,
        "Doctor_Comments":this.view_detail_data.doctor_comment,
        "PDF_format":"",
        "Prescription_data":this.datas,
        "Prescription_img":"",
        "Prescription_type":"PDF",
        "Treatment_Done_by":"",
        "diagnosis":this.diagnosis,
        "doctor_id": this.view_detail_data.doctor_id,
        "sub_diagnosis": this.sub_diagnosis
      }
      console.log(a);
      this._api.update_prescription(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          alert("Updated Successfully");
          this.router.navigateByUrl('/doctor-admin/Walkin_Appointment');
          // this.ngOnInit();
        }
      );
     }
  }

}
