
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common'
import { ValidatorService } from '../../../../validator.services';

@Component({
  selector: 'app-walkin-appointment-form',
  templateUrl: './walkin-appointment-form.component.html',
  styleUrls: ['./walkin-appointment-form.component.css']
})
export class WalkinAppointmentFormComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  Pet_Name: any;
  Pet_Type: any;
  Pet_Breed: any;
  Pet_Gender: any;
  Pet_Color: any;
  Pet_Weight: any;
  Pet_Age: any;
  Vaccinated: any = [];
  Catagories_list: any;
  Details: any;
  Vaccinated_date: any;
  vacinated_array: any = [
    { "y": "Yes" },
    { "y": "No" },
  ];
  gender_array: any = [
    { "y": "Male" },
    { "y": "Female" },
  ];
  breed_array: any = [];
  type_array: any = [];
  color_array: any = [];
  Detail: any;
  Validation: any;
  selectedimgae: any;
  img_path: string = 'http://54.212.108.156:3000/api/uploads/1622546855684.png';
  type: any;
  detail: any;
  dob_date: any;

  check_old : Boolean = true;

  Fname: any;
  Lname: any;
  Email: any;
  Phone: any = '';
  Email_id: any;
  Email_idError: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  step: any = 1;
  customer_datails: any;
  pet_list: any = [];
  petadd: boolean = false;
  rows: any = [];
  doctor: any;
  app_date: any;
  app_time: any;
  pet_select: any;
  desc: any;
  allergies: any;
  preview: boolean = false;
  petedit: boolean = false;
  cus_edit: boolean = false;
  doc_detail:any;
  diagnosis_type = [];
  sub_diagnosis_type = [];
  health_issue_type = [];
  diagnosis : any = '';
  sub_diagnosis : any = '';


  diagnosis_text : any = '';
  sub_diagnosis_text : any = '';

  pettype  = [];



  title = 'autocomplete-using-angular-ng-autocomplete-example';
  keyword = 'diagnosis';
  keyword1 = 'sub_diagnosis';
  keyword2 = 'pet_breed';
  keyword3 = 'pet_type_title';
  keyword4 = 'health_issue_title';







  constructor(
    private toastr: ToastrManager,
    private router: Router,
    private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private http: HttpClient,
    public datepipe: DatePipe,
    private ValidatorService: ValidatorService,

  ) {
    let login = false
    login = this.getFromLocal('login');
    console.log(login)
    if (login != true) {
      this.router.navigateByUrl('/doctorlogin');

    }
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.doc_detail = this.storage.get('user');
    this.listpetbreed();
    this.listpettype();
    this.listdoctorsall();
    this.list_diagnosis();
    this.list_healthissue();
    console.log("this.doc_detail")
    console.log(this.doc_detail)
    let doctordetails = this.storage.get("user");
    console.log(doctordetails);


    this.app_date = new Date();
    this.app_time = new Date();




  }

  // ==================  customer==================
  cancel() {
    this.router.navigateByUrl('/admin/Customer_Management')
  }
  EmailidChange(data) {
    this.Email_id = data;
    this.Email_idError = this.ValidatorService.emailValidator(this.Email_id);
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }

  validation() {
    console.log(
      this.Fname,
      this.Lname,
      this.Email,
      this.Email_idError,
      this.Phone,)
    if (this.Fname == undefined || this.Fname == '' || this.Lname == undefined || this.Lname == '' || this.Email == undefined || this.Phone == undefined || this.Phone == '' || this.Phone.length != 10) {
      this.Validation = false;
      console.log(this.Validation)
    }
    else {
      this.Validation = true;
      console.log(this.Validation)
    }
  }
  create() {
    // this.validation();
    // if (this.Validation == false) {
    //   // alert("Please enter valid inputs");
    //   this.showWarning("Please enter valid inputs")
    // } else {
      let a = {
        "first_name": this.Fname || "" ,
        "last_name": this.Lname || "" ,
        "user_email": this.Email || "" ,
        "user_phone": this.Phone,
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
            // alert('Added Successfully');
            // this.showSuccess("Added Successfully");
            this.step = 2;
            this.preview == true;
            this.petadd = true;
            this.customer_datails = response.Data;
            this.Fname = response.Data.first_name;
            this.Lname = response.Data.last_name;
            this.Email = response.Data.user_email;
            this.Phone = response.Data.user_phone;
            this.pet_view();
            this.cus_edit = true;
          } else {
            this.showError(response.Message);
            // alert(response.Message);
          }
        }
      );
    // }
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
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

  check_user(){
    console.log(this.Phone);
    if(this.Phone == '' || this.Phone == undefined){
       this.toastr.warningToastr('Please fill the phone number');
    }else{
      console.log(this.Phone);
      let a = {
        user_phone : this.Phone
      }
      this._api.check_user(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          if(response.Data == null){
            this.check_old = false;
          } else{
            // this.check_old = false;
             this.create();
            //  this.step = 2;
            //  this.preview == true;
          }
        }
      );
    }




  }




  // ====add pet ======
  service_form() {
    this.petadd = true;
  }
  Submit() {
    this.step = 3;
    this.petadd = false;
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

  validation1() {
    console.log(
      this.Pet_Name,
      this.Pet_Type,
      this.Pet_Breed,
      this.Pet_Gender
      )

    if (this.Pet_Name == undefined || this.Pet_Name == '' ||  this.Pet_Type == undefined  || this.Pet_Type == '' || this.Pet_Breed == undefined || this.Pet_Breed == '' || this.Pet_Gender == undefined || this.Pet_Gender == '') {
      this.Validation = false;
      console.log(this.Validation);
    }
    else {
      this.Validation = true;
      console.log(this.Validation);
    }
  }

  createpet() {
    this.validation1();
    if (this.Validation == false) {
      // alert("Please enter valid inputs");
      this.showWarning("Please enter valid inputs");
    } else {
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
          "pet_weight": +this.Pet_Weight || "",
          "pet_age": +this.Pet_Age|| "",
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
            this.showSuccess("Added Successfully");
            this.pet_view();
            this.petadd = false;
            this.img_path = undefined;
            this.Pet_Name = undefined;
            this.Pet_Type = undefined;
            this.Pet_Breed = undefined;
            this.Pet_Color = undefined;
            this.Pet_Weight = undefined;
            this.Pet_Age = undefined;
            this.Pet_Gender = undefined;
            this.dob_date = undefined;
            this.Vaccinated_date = undefined;
            this.Vaccinated = undefined;
          } else {
            this.showError(response.Message);
            //alert(response.Message);
          }
        }
      );
    }
  }
  edit_details(item) {
    this.petedit = true;
    this.petadd = false;
    this.detail = item;
    this.img_path = this.detail.pet_img;
    this.Pet_Name = this.detail.pet_name;
    this.Pet_Type = { "pet_type_title": this.detail.pet_type };
    this.Pet_Breed = { "pet_breed": this.detail.pet_breed };
    this.Pet_Gender = { "y": this.detail.pet_gender };
    this.Pet_Color = this.detail.pet_color;
    this.Pet_Weight = this.detail.pet_weight;
    this.Pet_Age = this.detail.pet_age;
    this.Vaccinated_date = new Date(this.detail.last_vaccination_date);
    // this.dob_date = new Date(this.detail.pet_dob);
    this.Vaccinated = { "y": "" + this.detail.vaccinated }
    console.log(item)
  }
  update() {
    this.validation1();
    if (this.Validation == false) {
      // alert("Please enter valid inputs")
      this.showWarning("Please enter valid inputs");
    } else {
      let vac;
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
        "default_status": true,
        "date_and_time": "" + new Date(),
        "mobile_type": "Admin"
      };
      console.log(a);
      this._api.pet_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            // alert('Update Successfully');
            this.showSuccess("Update Successfully");
            this.pet_view();
            this.petedit = false;
            this.img_path = undefined;
            this.Pet_Name = undefined;
            this.Pet_Type = undefined;
            this.Pet_Breed = undefined;
            this.Pet_Color = undefined;
            this.Pet_Weight = undefined;
            this.Pet_Age = undefined;
            this.Pet_Gender = undefined;
            this.dob_date = undefined;
            this.Vaccinated_date = undefined;
            this.Vaccinated = undefined;
          } else {
            this.showError(response.Message);
            // alert(response.Message);
          }
        }
      );
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
      }
    );


  }

  //////Additional Calling Funcation//////
  fileupload(event) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    console.log(this.selectedimgae.size / 100000);
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
      var img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        console.log(width, height);
        if (width == 100 && height == 100) {
          let d = this.selectedimgae.size / 100000;
          if (d < 10) {
            this.addfiles1();
          } else {
            this.toastr.warningToastr('Please upload the file below 1 MB');
            this.imgType.nativeElement.value = "";
          }
        }
        else {
          this.toastr.warningToastr('Please upload the file size 100 * 100');
          this.imgType.nativeElement.value = "";
        }
      };
      img.src = fr.result as string; // The data URL
    };
    fr.readAsDataURL(this.selectedimgae);
    // clear the value after upload
  }


  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post(this.imgUrl, fd)
      .subscribe((res: any) => {
        console.log(res);
        this.img_path = res.Data;
      });
  }


  // =======================doctor===============


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

  Book() {
    this.preview = true;
  }


  validation3() {
    // this.doctor = this.doc_detail;
    console.log(
      this.app_date,
      this.app_time,
      this.doctor,
      this.allergies,
      this.app_time,
      this.app_time
      );

    if (this.doctor == undefined || this.doctor == '' || this.app_date == undefined || this.app_time == undefined ) {
      this.Validation = false;
      console.log(this.Validation)
    }
    else {
      this.Validation = true;
      console.log(this.Validation)
    }
  }


  edit() {
    this.validation();
    if (this.Validation == false) {
      // alert("Please enter valid inputs");
      this.showWarning("Please enter valid inputs")
    } else {
      let a = {
        "_id": this.customer_datails._id,
        "first_name": this.Fname,
        "last_name": this.Lname,
        "user_email": this.Email,
        "user_phone": this.Phone,
        "user_type": 1,
        "date_of_reg": new Date(),
        "mobile_type": 'Admin',
        "user_status": "complete"
      };
      console.log(a);
      this._api.user_edit(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          if (response.Code === 200) {
            this.doc_app_create()
            // alert('updated Successfully');
            // this.showSuccess("updated Successfully")
            // this.router.navigateByUrl('/admin/Customer_Management')
          } else {
            this.showError(response.Message)
            // alert(response.Message);
          }
        }
      );
    }
  }

  doc_app_create() {
    this.validation3();
    if (this.Validation == false) {
      // alert("Please enter valid inputs");
      this.showWarning("Please enter valid inputs");
    } else {
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
        diagnosis :  this.diagnosis_text,
        sub_diagnosis : this.sub_diagnosis_text,
      };
      console.log(a);
      this._api.appointments_mobile_create(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            this.showSuccess("Appointment added successfully");
            this.router.navigateByUrl('/doctor-admin/Walkin_Appointment')

          } else {
            this.showError(response.Message);
            //alert(response.Message);
          }
        }
      );
    }
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



  fetch_text(data){
    for(let c  =  0 ; c < this.diagnosis_type.length ; c++){
      if(this.diagnosis_type[c]._id == this.diagnosis){
        this.diagnosis_text = this.diagnosis_type[c].diagnosis;
        console.log(this.diagnosis_text);
      }
     }
    console.log(this.sub_diagnosis_type,data);
     for(let d  =  0 ; d < this.sub_diagnosis_type.length ; d++){
       console.log(this.sub_diagnosis_type[d]._id,this.sub_diagnosis);
      if(this.sub_diagnosis_type[d]._id == this.sub_diagnosis){
        this.sub_diagnosis_text = this.sub_diagnosis_type[d].sub_diagnosis;
        console.log(this.sub_diagnosis_text);
      }
     }
  }

  subcate() {
    console.log(this.diagnosis_text);
  }


  selectEvent(item) {
    console.log(item);
    this.diagnosis = item;
    this.list_sub_diagnosis();
    // here we can write code for doing something with selected item
  }

  onChangeSearch(val: string) {
    // here we can fetch data from remote location here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){
    // here we can write our code for doing something when input is focused
  }


  selectEvent1(item) {
    console.log(item);
    // here we can write code for doing something with selected item
  }


  selectEvent2(item) {
    console.log(item);
    // this.Pet_Breed = '';
    this.Pet_Breed = item;
    // here we can write code for doing something with selected item
  }


  selectEvent3(item){
    console.log(item);
    this.Pet_Type = item;
    this.listpetbreed_id(item);
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


  selectEvent4(item){
    this.desc = item.health_issue_title;
    console.log(this.desc);
  }





}
