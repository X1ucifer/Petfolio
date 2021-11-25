

import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common'
import { ValidatorService } from '../../../validator.services';

@Component({
  selector: 'app-walkinnew',
  templateUrl: './walkinnew.component.html',
  styleUrls: ['./walkinnew.component.css']
})
export class WalkinnewComponent implements OnInit {

  /////Textvalue //////
  phone_number : Number;
  first_name : string = '';
  last_name : string = '';
  email_id : string = '';
  pet_select : any = '';

  pet_details : any;

  Pet_Name: any = '';
  Pet_Type: any = {"pet_type_title":""};
  Pet_Breed: any = {"pet_breed":""};
  Pet_Gender: any = { "y": "Male" };
  Pet_Color: any = '';
  Pet_Weight: any = 0;
  Pet_Age: any = 0;
  update_pet_button = false;
  customer_datails : any;
  Vaccinated: any = {"y": "No"};
  type_array: any = [];
  breed_array: any = [];
  pet_list: any = [];
  Vaccinated_date: any = '';
  vacinated_array: any = [
    { "y": "Yes" },
    { "y": "No" },
  ];
  gender_array: any = [
    { "y": "Male" },
    { "y": "Female" },
  ];
  title = 'autocomplete-using-angular-ng-autocomplete-example';
  keyword = 'diagnosis';
  keyword1 = 'sub_diagnosis';
  keyword2 = 'pet_breed';
  keyword3 = 'pet_type_title';
  keyword4 = 'health_issue_title';
  pettype  = [];

  diagnosis_type = [];
  sub_diagnosis_type = [];
  health_issue_type = [];
  diagnosis : any = '';
  sub_diagnosis : any = '';
  diagnosis_text : any;
  desc : any = '';

  app_date : any = '';
  app_time : any = '';
  allergies : any = '';
  bread_false : any;
  type_false : any;
  detail : any;
  doc_detail : any;







  // validation ////
  phone_number_valid = false;
  last_name_valid = false;
  first_name_valid = false;
  email_id_valid = false;

  Pet_Name_valid = false;
  Pet_Type_valid = false;
  Pet_breed_valid = false;
  Pet_Gender_valid = false;
  Pet_Color_valid = false;
  Pet_Weight_valid = false;
  Pet_Age_valid = false;
  vaccination_select = false;
  vaccination_date = false;


  app_date_valid = false;
  app_time_valid = false;
  allergies_valid = false;
  desc_valid = false;






  ////show////

  stage1 = false;
  stage2 = false;
  stage3 = false;
  stage4 = false;
  stage5 = false;
  stage6 = false;
  doctor : any;
  rows : any;






  constructor(
    private toastr: ToastrManager,
    private router: Router,
    private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private http: HttpClient,
    public datepipe: DatePipe,
    private ValidatorService: ValidatorService,

  ) { }

  ngOnInit(): void {
    this.doc_detail = this.storage.get('user');
    this.stage1 = true;
    this.listpetbreed();
    this.listpettype();
    this.listdoctorsall();
    this.list_diagnosis();
    this.list_healthissue();
  }


  listdoctorsall() {
    this._api.doctor_details_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        console.log(this.rows);
        let arr = response.Data.filter((x) => x.user_id._id == this.doc_detail._id)
        this.doctor = arr[0]
        console.log("this.rows");
        console.log(this.doctor);
      }
    );
  }



  check_user(){
     this.phone_number_valid = false;
     console.log(""+this.phone_number);
    if(this.phone_number == undefined){
      this.phone_number_valid = true;
    }else if(+this.phone_number < 1000000000){
      this.phone_number_valid = true;
    }else if(+this.phone_number > 10000000000){
      this.phone_number_valid = true;
    }else{
        console.log(this.phone_number);
        let a = {
          user_phone : ""+this.phone_number
        }
        this._api.check_user(a).subscribe(
          (response: any) => {
            console.log(response.Data);
            if(response.Data == null){
              this.clear_all_stage();
              this.stage2 = true;
            }else{
             this.create();
            }
          }
        );











    }
  }


  create() {
    // this.validation();
    // if (this.Validation == false) {
    //   // alert("Please enter valid inputs");
    //   this.showWarning("Please enter valid inputs")
    // } else {
      let a = {
        "first_name": this.first_name || "" ,
        "last_name": this.last_name || "" ,
        "user_email": this.email_id || "" ,
        "user_phone": this.phone_number,
        "user_type": 1,
        "date_of_reg": new Date(),
        "mobile_type": 'Admin',
        "user_status": "complete"
      };
      console.log(a);
      this._api.user_check_user_admin(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            this.customer_datails = response.Data;
            this.first_name = response.Data.first_name;
            this.last_name = response.Data.last_name;
            this.email_id = response.Data.user_email;
            this.phone_number = response.Data.user_phone;
            this.pet_view();
          } else {
            // this.showError(response.Message);
          }
        }
      );
    // }
  }

  create_user(){
    console.log(this.email_id,this.phone_number,this.first_name,this.last_name);
    this.first_name_valid = false;
    this.last_name_valid = false;
    this.email_id_valid = false;
    if(this.first_name == undefined || this.first_name == ''){
      this.first_name_valid = true;
    }
    if(this.last_name == undefined || this.last_name == ''){
      this.last_name_valid = true;
    }
    if(this.email_id == undefined || this.email_id == ''){
      this.email_id_valid = true;
    }
    if(this.email_id_valid == false && this.first_name_valid == false && this.last_name_valid == false){

          let a = {
            "first_name": this.first_name || "" ,
            "last_name": this.last_name || "" ,
            "user_email": this.email_id || "" ,
            "user_phone": this.phone_number,
            "user_type": 1,
            "date_of_reg": new Date(),
            "mobile_type": 'Admin',
            "user_status": "complete"
          };
          console.log(a);
          this._api.user_check_user_admin(a).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code === 200) {
                this.customer_datails = response.Data;
                this.first_name = response.Data.first_name;
                this.last_name = response.Data.last_name;
                this.email_id = response.Data.user_email;
                this.phone_number = response.Data.user_phone;
                this.pet_view();
              } else {
                // this.showError(response.Message);
                // alert(response.Message);
              }
            }
          );
    }
  }


  listpetbreed_id(data)
  {
    for(let c  = 0; c < this.pettype.length; c++){
      console.log(this.pettype[c].pet_type_title,data.pet_type_title);
     if(this.pettype[c].pet_type_title == data.pet_type_title){
    let a = {
      pet_type_id : this.pettype[c]._id
    }
    this._api.pet_breed_type(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.breed_array = [];
        for (let i = 0; i < response.Data.length; i++) {
          this.breed_array.push({ "pet_breed": response.Data[i].pet_breed })
        }
        console.log(this.breed_array);
      }
    );
     }
  }
  }

  pet_view() {
    window.scrollTo(0, 0);
    let a = {
      'user_id': this.customer_datails._id
    };
    console.log(a)
    this._api.single_user_detail(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.pet_list = response.Data.petdetailsModels;
        if(this.pet_list.length == 0){
          this.clear_all_stage();
          this.stage3 = true;
        }else{
          this.clear_all_stage();
          this.stage4 = true;
        }
      }
    );
  }

  selectEvent3(item){
    console.log(item);
    this.Pet_Type = item;
    this.bread_false = {pet_breed: ''};
    this.listpetbreed_id(item);
  }

  selectEvent2(item) {
    console.log(item);
    // this.Pet_Breed = '';
    this.Pet_Breed = item;
    // here we can write code for doing something with selected item
  }


  createpet() {
      let vac;
      if (this.Vaccinated.y == "Yes") {
        vac = true;
      }
      else {
        vac = false
      }
      let a = {
          "pet_img": [
              {
                  "pet_img": "http://54.212.108.156:3000/api/uploads/Pic_empty.jpg"
              }
          ],
          "user_id": this.customer_datails._id || "",
          "pet_name":this.Pet_Name || "",
          "pet_type":  this.Pet_Type.pet_type_title  || "",
          "pet_breed": this.Pet_Breed.pet_breed|| "",
          "pet_gender":  this.Pet_Gender.y || "",
          "pet_color": this.Pet_Color || "",
          "pet_weight": +this.Pet_Weight || 0,
          "pet_age": +this.Pet_Age|| 0,
          "pet_dob": "",
          "pet_spayed": false,
          "pet_purebred": false,
          "pet_frnd_with_dog": false,
          "pet_frnd_with_cat": false,
          "pet_frnd_with_kit": false,
          "pet_microchipped": false,
          "pet_tick_free": false,
          "pet_private_part": false,
          "vaccinated": vac,
          "last_vaccination_date": "" + this.datepipe.transform(this.Vaccinated_date, 'dd-MM-yyyy'),
          "default_status": true,
          "date_and_time": "" + this.datepipe.transform(new Date(), 'dd-MM-yyyy hh:mm'),
          "mobile_type": "Admin",
          "delete_status": false,
          "updatedAt": "2021-07-01T11:19:46.741Z",
          "createdAt": "2021-07-01T11:19:46.741Z",
          "__v": 0
      };
      console.log(a);
      this._api.pet_create(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            //alert('Added Successfully');
            // this.showSuccess("Added Successfully");
            this.pet_view();
            this.Pet_Name = undefined;
            this.Pet_Type = undefined;
            this.Pet_Breed = undefined;
            this.Pet_Color = undefined;
            this.Pet_Weight = undefined;
            this.Pet_Age = undefined;
            this.Pet_Gender = undefined;
            this.Vaccinated_date = undefined;
            this.Vaccinated = undefined;
          } else {
            //alert(response.Message);
          }
        }
      );
  }

  update_pet(){

  }

  edit_pet_details(data){




  }

  select_pet(){
    if(this.pet_select == ''){
     this.toastr.warningToastr('Please select pet');
    }else{
      this.clear_all_stage();
      this.stage5 = true;
    }


  }


  backpet(){
    this.clear_all_stage();
    this.stage3 = true;
  }



  list_healthissue() {
    this._api.health_issue_type_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.health_issue_type = response.Data
      }
    );
  }


  list_diagnosis() {
    this._api.diagnosis_getlist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.diagnosis_type = response.Data
      }
    );
  }


  list_sub_diagnosis() {
    console.log(this.diagnosis);
    for(let c  =  0 ; c < this.diagnosis_type.length ; c++){
     if(this.diagnosis_type[c]._id == this.diagnosis._id){
       this.diagnosis_text = this.diagnosis_type[c].diagnosis;
     }
    }



    console.log(this.diagnosis._id);
    let a = {
      "diagnosis_id" :this.diagnosis._id
    }
    this._api.sub_diagnosis_getlist_byid(a).subscribe(
      (response: any) => {
        console.log(response.Data);
       this.sub_diagnosis_type = response.Data;
      }
    );
  }


  selectEvent4(item){
    this.desc = item.health_issue_title;
    console.log(this.desc);
  }

  Preview(){
    this.clear_all_stage1();
    console.log(this.app_date,this.app_time,this.allergies,this.desc);
    console.log(this.app_date);
    let temp_app_date = this.app_date.toLocaleString();
    let temp_app_time = this.app_time.toLocaleString();
    console.log(temp_app_date,temp_app_time);


    let temps1  =   ""+temp_app_date.split(",");
    let temps2 =   ""+temp_app_time.split(",");
    console.log(temps1,temps2);

    let ti = ""+temps1[0]+","+temps2[1];
    console.log(ti);

    let times =  this.datepipe.transform(new Date(), 'yyyy-MM-dd');


     let selected =  this.datepipe.transform(this.app_date, 'yyyy-MM-dd');
     let current_date =  this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    if(selected < current_date || this.app_date == ''){
     this.app_date_valid = true;
    }
    console.log(
      new Date(this.app_time),
      new Date()
    )
    if(new Date(this.app_time) <= new Date() || this.app_time == ''){
      this.app_time_valid = true;
    }
    if(this.allergies == ''){
      this.allergies_valid = true;
    }
    if(this.desc == ''){
      this.desc_valid = true;
    }
    if(this.app_date_valid == false &&
      this.app_time_valid == false &&
      this.allergies_valid == false &&
      this.desc_valid == false
      ){
       this.clear_all_stage();
       this.stage6 = true;


       console.log(this.pet_select);
      //  pet_details
       for(let a = 0 ; a < this.pet_list.length ; a ++){
         if(this.pet_list[a]._id == this.pet_select){
            this.pet_details = this.pet_list[a];
            console.log(this.pet_details);
           }
       }
      }
  }

  backpetselect(){
    this.clear_all_stage();
    this.stage4 = true;
  }


  clear_all_stage(){
    this.stage1 = false;
    this.stage2 = false;
    this.stage3 = false;
    this.stage4 = false;
    this.stage5 = false;
    this.stage6 = false;
  }

  clear_all_stage1(){
    this.phone_number_valid = false;
    this.last_name_valid = false;
    this.first_name_valid = false;
    this.email_id_valid = false;
    this.Pet_Name_valid = false;
    this.Pet_Type_valid = false;
    this.Pet_breed_valid = false;
    this.Pet_Gender_valid = false;
    this.Pet_Color_valid = false;
    this.Pet_Weight_valid = false;
    this.Pet_Age_valid = false;
    this.vaccination_select = false;
    this.vaccination_date = false;

    this.app_date_valid = false;
    this.app_time_valid = false;
    this.allergies_valid = false;
    this.desc_valid = false;

  }


  backaction1() {
    this.clear_all_stage();
    this.stage1 = true;
  }

  skip(){
    this.clear_all_stage();
    this.stage4 = true;
  }


  appointmentback(){
    this.clear_all_stage();
    this.stage5 = true;
  }

  listpetbreed() {
    this._api.pet_breed_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        for (let i = 0; i < response.Data.length; i++) {
          this.breed_array.push({ "pet_breed": response.Data[i].pet_breed })
        }
        console.log(this.breed_array);

      }
    );
  }

  listpettype() {
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









  add_petvalidation(){
    this.clear_all_stage1();
    if(this.Pet_Name == undefined || this.Pet_Name == ''){
     this.Pet_Name_valid = true;
    }
    if(this.Pet_Type.pet_type_title == ''){
     this.Pet_Type_valid = true;
    }
    if(this.Pet_Breed.pet_breed == ''){
     this.Pet_breed_valid = true;
    }
    if(this.Vaccinated.y == 'Yes'){
       if(this.Vaccinated_date == ''){
         this.vaccination_date = true;
       }
    }
    if(new Date(this.Vaccinated_date) > new Date()){
      this.vaccination_date = true;
    }
    if(this.Pet_Weight > 950){
      this.Pet_Weight_valid = true;
    }
    if(this.Pet_Age > 99){
      this.Pet_Age_valid = true;
    }

    if(
      this.Pet_Name_valid == false &&
      this.Pet_Type_valid == false &&
      this.Pet_breed_valid == false &&
      this.vaccination_date == false &&
      this.Pet_Weight_valid == false &&
      this.Pet_Age_valid == false
      ){
         this.createpet();
      }






    console.log(
      this.Pet_Name,
      this.Pet_Type,
      this.Pet_Breed,
      this.Pet_Gender,
      this.Pet_Weight,
      this.Pet_Age,
      this.Vaccinated_date,
      this.Vaccinated,
    )








  }


   edit_details(item) {
    console.log(item);
    this.clear_all_stage();
    this.stage3 = true;
    this.update_pet_button = true;
    let detail = item;
    this.detail = item;
    this.Pet_Name = detail.pet_name;
    this.Pet_Type = { "pet_type_title": detail.pet_type };
    this.type_false = { "pet_type_title": detail.pet_type };
    this.Pet_Breed = { "pet_breed": detail.pet_breed };
    this.bread_false =  { "pet_breed": detail.pet_breed };
    this.Pet_Gender = { "y": detail.pet_gender };
    this.Pet_Color = detail.pet_color;
    this.Pet_Weight = detail.pet_weight;
    this.Pet_Age = detail.pet_age;
    this.Vaccinated_date = new Date(detail.last_vaccination_date);
    // this.dob_date = new Date(this.detail.pet_dob);
    this.Vaccinated = { "y": "" + detail.vaccinated }
  }

  update() {
    let vac = false;
    if (this.Vaccinated.y == "Yes") {
      vac = true;
    }
    else {
      vac = false
    }
      let a = {
        "_id": this.detail._id,
        "user_id": this.customer_datails._id,
        "pet_name": this.Pet_Name,
        "pet_type": this.Pet_Type.pet_type_title,
        "pet_breed": this.Pet_Breed.pet_breed,
        "pet_gender": this.Pet_Gender.y,
        "pet_color": this.Pet_Color,
        "pet_weight": +this.Pet_Weight,
        "pet_age": +this.Pet_Age,
        // "pet_dob": "" + this.datepipe.transform(this.dob_date, 'dd-MM-yyyy'),
        "vaccinated": vac,
        "last_vaccination_date": "" + this.Vaccinated_date,
      };
      console.log(a);
      this._api.pet_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            // alert('Update Successfully');
            this.pet_view();
          } else {
            // alert(response.Message);
          }
        }
      );

  }


  doc_app_create() {
      let doctordetails = this.storage.get("user");
      console.log(doctordetails);
      let a = {
        "allergies": this.allergies,
        "amount": this.doctor.consultancy_fees,
        "appointment_types": "Normal",
        "booking_date": "" + this.datepipe.transform(this.app_date, 'dd-MM-yyyy'),
        "booking_date_time": "" + this.datepipe.transform(this.app_date, 'dd-MM-yyyy') + ' ' + this.datepipe.transform(this.app_time, 'h:mm a'),
        "booking_time": "" + this.datepipe.transform(this.app_time, 'h:mm a'),
        "communication_type": "Visit",
        "date_and_time": "" + this.datepipe.transform(new Date(), 'dd-MM-yyyy h:mm a'),
        "display_date": "" + this.datepipe.transform(this.app_date, 'yyyy-MM-dd ') + ' ' + this.datepipe.transform(this.app_time, 'HH:mm:ss'),
        "doc_attched": [],
        "doc_feedback": "",
        "doc_rate": 0,
        "doctor_id": this.doc_detail._id,
        "location_id": "",
        "mobile_type": "Admin",
        "payment_id": "",
        "payment_method": "",
        "pet_id": this.pet_select,
        "problem_info": this.desc,
        "server_date_time": "",
        "service_amount": "",
        "service_name": "",
        "user_feedback": "",
        "user_id": this.customer_datails._id,
        "user_rate": 0.0,
        "video_id": "",
        "visit_type": "Clinic",
        diagnosis :  '',
        sub_diagnosis : '',
      };
      console.log(a);
      this._api.appointments_mobile_create(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            this.toastr.successToastr("Appointment added successfully");
            this.router.navigateByUrl('/doctor-admin/Walkin_Appointment')

          } else {
            this.toastr.warningToastr(response.Message);
            //alert(response.Message);
          }
        }
      );

  }

}
