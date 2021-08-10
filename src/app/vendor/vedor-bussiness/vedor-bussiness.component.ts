

import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ValidatorService } from '../../validator.services';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { MouseEvent } from '@agm/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-vedor-bussiness',
  templateUrl: './vedor-bussiness.component.html',
  styleUrls: ['./vedor-bussiness.component.css']
})
export class VedorBussinessComponent implements OnInit {


  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  public handleAddressChange(address: any) {
    this.zoom = 15;
    this.location_lat = Number(address.geometry.location.lat());
    this.location_lng = Number(address.geometry.location.lng());
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this.address = address.formatted_address;
    console.log(this.address);

  }

  options = {
    types: [],
    componentRestrictions: { country: 'IN' }
  }

  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  zoom: number = 8;
  base_lat: number = 11.1271;
  base_lng: number = 78.6569;
  location_lat: number = 11.1271;
  location_lng: number = 78.6569;
  Name: any;
  Education: any;
  Specialization: any;
  completion: any;
  Experience: any;
  handled: any;
  Specializationarray: any = [];
  years: any = [];
  address: any;
  tittle: any;
  Clinic_Name: any;
  Latitude: any;
  Longitude: any;
  f_date: number;
  T_date: number;
  chosenYearDate: any;
  CName: any;
  selectedimgae: any;
  signature: any;
  userdetails: any;
  fee: any;
  CType: any;
  users: any;
  dateTime: any;
  date: any;
  communication: any = [
    { "type": "Online" },
    { "type": "Visit" },
    { "type": "Online/Visit" }
  ]
  Exp: any = [
    { "y": "1+ years" },
    { "y": "5+ years" },
    { "y": "10+ years" },
    { "y": "15+ years" },
    { "y": "20+ years" },
    { "y": "25+ years" },
    { "y": "30+ years" },
  ];
  Experiencearray: any = [];
  Completionarray: any = [];
  handledarray: any = [];
  uploadedFiles: any[] = [];
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  img_path: any = undefined;
  clinic_arr: any = [];
  govt_arr: any;
  sign_arr: any = [];
  certificate_arr: any = [];
  photo_arr: any;
  Validation: any;
  Email: any;
  Phone: any;
  Email_id: any;
  Email_idError: any;
  userid: any = undefined;
  type: any;
  detail: any;
  dropdownslist: any;
  timelist: any = [
    { 'time': '00.15' },
    { 'time': '00.30' },
    { 'time': '00.45' },
    { 'time': '01.00' },
    { 'time': '01.15' },
    { 'time': '01.30' },
    { 'time': '01.45' },
  ];;
  datelist: any = [
    { 'day': 'Sunday' },
    { 'day': 'Monday' },
    { 'day': 'Tuesday' },
    { 'day': 'Wednesday' },
    { 'day': 'Thursday' },
    { 'day': 'Friday' },
    { 'day': 'Saturday' },
  ];
  selectdate: any;
  selecttime: any;
  otp: string;
  res_otp: string;
  showOtpComponent = true;
  displayBasic: boolean = false;
  email_verification: boolean = false;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };
  user_data: any;
  otp_input:any;
  constructor(
    private toastr: ToastrManager,
    private location: Location,
    private router: Router,
    private ValidatorService: ValidatorService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    public datepipe: DatePipe
  ) {
    this._api.petdetails_dropdownslist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.dropdownslist = response.Data;
        console.log(this.dropdownslist);
      }
    );
  }

  ngOnInit(): void {
    this.users = this.storage.get("user");
    console.log(this.users, "users");
    this.type = this.getFromLocal('fun_type');
    if (this.type == 'edit') {

      this.detail = this.getFromLocal('view_detail_data');
      console.log(this.detail)
      this.userid = this.detail.user_id._id;
      this.Email = this.detail.user_id.user_email;
      this.Phone = this.detail.user_id.user_phone;
      this.tittle = this.detail.dr_title;
      this.Name = this.detail.dr_name;
      this.Clinic_Name = this.detail.clinic_name;
      this.address = this.detail.clinic_loc;
      this.Latitude = this.detail.clinic_lat;
      this.Longitude = this.detail.clinic_long;
      this.location_lat = this.detail.clinic_lat;
      this.location_lng = this.detail.clinic_long;
      this.base_lat = this.location_lat;
      this.base_lng = this.location_lng;
      this.Completionarray = this.detail.education_details;
      this.Experiencearray = this.detail.experience_details;
      this.Specializationarray = this.detail.specialization;
      this.handledarray = this.detail.pet_handled;
      this.clinic_arr = this.detail.clinic_pic;
      this.certificate_arr = this.detail.certificate_pic;
      this.govt_arr = this.detail.govt_id_pic;
      this.photo_arr = this.detail.photo_id_pic;
      this.sign_arr = this.detail.sign_id_pic;
    }
    for (let i = 1980; i < 2020; i++) {
      this.years.push({ "y": i + 1 })
    }
    // this.Experience = this.T_date - this.f_date;
    // console.log(this.Experience);
    const now = Date.now();
    this.dateTime = this.datepipe.transform(now, 'dd/MM/yyyy h:mm:ss');
    this.date = this.datepipe.transform(now, 'dd/MM/yyyy h:mm a');
    console.log(this.dateTime, "date");
    console.log(this.date, "date");
  }
  cancel() {
    this.router.navigateByUrl('/admin/Doctor')
  }
  addSpecialization() {

    if (this.Specialization != undefined && this.Specialization != '') {
      let obj = { "specialization": this.Specialization }
      this.Specializationarray.push(obj);
      this.Specialization = undefined;
    }
  }
  remove_Specialization(i) {
    this.Specializationarray.splice(i, 1);

  }
  addcompletion() {

    if (this.completion != undefined && this.completion != '' && this.Education != undefined && this.Education != '') {
      let obj = { "education": this.Education, "year": this.completion }
      this.Completionarray.push(obj);
      this.completion = undefined;
      this.Education = undefined;
    }
    else {
      // alert("Pleasefill all the fields")
      this.showWarning("Please fill all the fields");
    }
  }
  remove_completion(i) {
    this.Completionarray.splice(i, 1);

  }
  addExperience() {

    if (this.CName != undefined && this.CName != '' && this.f_date != undefined && this.T_date != undefined) {
      let obj = { "company": this.CName, "from": this.f_date, "to": this.T_date, "yearsofexperience": this.Experience }
      this.Experiencearray.push(obj);
      this.CName = undefined;
      this.f_date = undefined;
      this.T_date = undefined;
      this.Experience = undefined;
    }
    else {
      alert("Pleasefill all the fields")
      this.showWarning("Please fill all the fields");
    }
  }
  remove_Experience(i) {
    this.Experiencearray.splice(i, 1);

  }
  addhandled() {

    if (this.handled != undefined && this.handled != '') {
      let obj = { "pet_handled": this.handled }
      this.handledarray.push(obj);
      this.handled = undefined;
    }
  }
  remove_handled(i) {
    this.handledarray.splice(i, 1);

  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles)
    }

  }

  //////Additional Calling Funcation//////
  fileupload(event, str) {
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
        if (width > 100 && height > 100) {
          let d = this.selectedimgae.size / 100000;
          if (d < 10) {
            this.addfiles(str);
          } else {
            // alert('Please upload the file below 1 MB');
            this.showWarning("Please upload the file below 1 MB");
            this.imgType.nativeElement.value = "";
          }
        }
        else {
          // alert('Please upload the file size 100 * 100');
          this.showWarning("Please upload the file size 200 * 120");
          this.imgType.nativeElement.value = "";
        }
      };
      img.src = fr.result as string; // The data URL
    };
    fr.readAsDataURL(this.selectedimgae);
    // clear the value after upload
  }


  addfiles(data: any) {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post(this.imgUrl, fd)
      .subscribe((res: any) => {
        console.log(res);
        this.img_path = res.Data;
        if (data == 'Clinic') {
          let obj = { "clinic_pic": this.img_path }
          this.clinic_arr.push(obj);
          this.img_path = undefined;

        }
        if (data == 'Govt') {
          // let obj = { "govt_id_pic": this.img_path }
          // this.govt_arr.push(obj);
          this.govt_arr = this.img_path;
          this.img_path = undefined;

        }
        if (data == 'Photo') {
          // let obj = { "photo_id_pic": this.img_path }
          // this.photo_arr.push(obj);
          this.photo_arr = this.img_path;
          this.img_path = undefined;
          console.log(this.photo_arr)

        }
        if (data == 'Certificate') {
          let obj = { "certificate_pic": this.img_path }
          this.certificate_arr.push(obj);
          this.img_path = undefined;

        }
        if (data == 'sign') {
          let obj = { "sign_id_pic": this.img_path }
          this.sign_arr.push(obj);
          this.img_path = undefined;

        }
      });


  }
  remove_clinic_img(i) {
    this.clinic_arr.splice(i, 1);
  }
  remove_govt_img(i) {
    this.govt_arr.splice(i, 1);
  }
  remove_photo_img(i) {
    this.photo_arr.splice(i, 1);
  }
  remove_Certificate_img(i) {
    this.certificate_arr.splice(i, 1);
  }
  remove_sign_img(i) {
    this.sign_arr.splice(i, 1);
  }
  validation_1() {
    if (this.tittle == undefined || this.tittle == '' || this.Name == undefined || this.Name == '' || this.Email == undefined || this.Phone == undefined || this.Email_idError == true || this.Phone == '' || this.Phone.length != 10) {
      this.Validation = false;
      console.log(this.Validation)
    }
    else {
      this.Validation = true;
      console.log(this.Validation)
    }
  }
  validation() {
    // this.addSpecialization();
    // this.addcompletion();
    // this.addExperience();
    // this.addhandled();
    
    let a = {
      "business_reg":this.Clinic_Name,
      "bussiness":this.Clinic_Name,
      "bussiness_email":this.Email,
      "bussiness_gallery":this.clinic_arr,
      "bussiness_lat":+this.Latitude,
      "bussiness_loc":this.address,
      "bussiness_long":+this.Longitude,
      "bussiness_name":this.Clinic_Name,
      "bussiness_phone":this.Phone,
      "certifi":this.certificate_arr,
      "date_and_time":""+new Date(),
      "delete_status":false,
      "govt_id_proof":this.govt_arr,
      "mobile_type":"Adminpanel",
      "photo_id_proof":this.photo_arr,
      "profile_status":true,
      "profile_verification_status":"Not verified",
      "user_email":this.users.user_email,
      "user_id":this.users._id,
      "user_name":this.users.first_name

    }
    console.log(a);
    if ( this.clinic_arr.length == 0 || this.photo_arr == undefined || this.govt_arr == undefined ||  this.certificate_arr.length == 0 || this.Clinic_Name == undefined || this.Clinic_Name == '' || this.address == undefined || this.address == '' || this.Latitude == undefined || this.Longitude == '' || this.Latitude == '' || this.Longitude == undefined ||this.Email == undefined || this.Phone == undefined || this.Email_idError == true || this.Phone == '' || this.Phone.length != 10) {
      this.Validation = false;
      console.log(this.Validation)
    }
    else {
      // this.userdetails = { "date_of_reg": this.date, "first_name": this.tittle, "last_name": this.Name, "mobile_type": "adminpanel", "user_email": this.Email, "user_email_verification": false, "user_phone": this.Phone, "user_type": 4 }
      // console.log(this.userdetails);
      // this._api.DoctorRegister(this.userdetails).subscribe(
      //   (response: any) => {
      //     console.log(response.Data, "res");
      //   }
      // );
      this.Validation = true;
      console.log(this.Validation)
    }
  }
  email() {
    let a = {
      "user_email": this.Email
    }
    this._api.email_verification(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        if (response.Code === 200) {
          this.showSuccess("Otp send successfully");
          // window.location.reload();
          this.res_otp = response.Data.otp;

          this.showBasicDialog()
        } else {
          this.showError(response.Message);
          //alert(response.Message);
        }

      }
    );
  }
  create_1() {
    if (this.email_verification == true) {
      this.validation_1();
      if (this.Validation == false) {
        // alert("Please enter valid inputs");
        this.showWarning("Please enter valid inputs");
      } else {
        let a = {
          "first_name": this.tittle,
          "last_name": this.Name,
          "user_email": this.Email,
          "user_phone": this.Phone,
          "user_type": 3,
          "date_of_reg": '' + new Date(),
          "mobile_type": 'Adminpanel',
          "user_status": "complete",
          "user_email_verification": true,
          "ref_code": '',
        };


        console.log(a);
        this._api.userdetails_create(a).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code === 200) {
              this.userid = response.Data.user_details._id;
              console.log(this.userid)
              // alert('Added Successfully');
              // this.showSuccess("Added Successfully")
              this.user_data = response;
              this.showSuccess("Otp send successfully ");
              this.res_otp = response.Data.user_details.otp;

              this.showBasicDialog()
              this.storage.set('user', this.user_data.Data.user_details);
              // this.router.navigate(['/vendor_otp']);

            } else {
              this.showError(response.Message);
              //alert(response.Message);
            }
          }
        );
      }
    }
    else {
      this.showWarning("Please Verifi Your Email ID");
    }
  }
  create() {
    this.validation();
    if (this.Validation == false) {
      this.showWarning("Please enter valid inputs");
    } else {

      let a = {
        "business_reg":"",
        "bussiness":this.Clinic_Name,
        "bussiness_email":this.Email,
        "bussiness_gallery":this.clinic_arr,
        "bussiness_lat":+this.Latitude,
        "bussiness_loc":this.address,
        "bussiness_long":+this.Longitude,
        "bussiness_name":"",
        "bussiness_phone":this.Phone,
        "certifi":this.certificate_arr,
        "date_and_time":""+new Date(),
        "delete_status":false,
        "govt_id_proof":this.govt_arr,
        "mobile_type":"Adminpanel",
        "photo_id_proof":this.photo_arr,
        "profile_status":true,
        "profile_verification_status":"Not verified",
        "user_email":this.users.user_email,
        "user_id":this.users._id,
        "user_name":this.users.first_name

      }
      console.log(a);
      this._api.userdetails_business(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            // alert('Added Successfully');
            this.showSuccess("Added Successfully");
            this.router.navigateByUrl('/vendorlogin');
            this.saveInLocal('login', true);
          } else {
            this.showError(response.Message);
            //alert(response.Message);
          }
        }
      );
    }
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
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  back() {
    this.location.back();
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }


  markerDragEnd($event: MouseEvent) {
    this.location_lat = Number($event.coords.lat);
    this.location_lng = Number($event.coords.lng);
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this._api.location_details(this.location_lat, this.location_lng).subscribe(async data => {
      this.address = await data['results'][0]['formatted_address'];
    });
  }

  edit() {
    let a = {
      "certificate_pic": this.certificate_arr,
      "clinic_lat": this.Latitude,
      "clinic_loc": this.address,
      "clinic_long": this.Longitude,
      "clinic_name": this.Clinic_Name,
      "clinic_pic": this.clinic_arr,
      "communication_type": "Online",
      "consultancy_fees": 500,
      "date_and_time": "13/05/2021 11:13:28",
      "dr_name": this.Name,
      "dr_title": this.tittle,
      "education_details": this.Completionarray,
      "experience_details": this.Experiencearray,
      "govt_id_pic": this.govt_arr,
      "mobile_type": "adminpanel",
      "pet_handled": this.handledarray,
      "specialization": this.Specializationarray,
      "user_id": this.userid,

      "_id": this.detail._id,
      "photo_id_pic": this.photo_arr,
      "profile_status": 0,
      "profile_verification_status": "Not verified",

    }
    console.log(a);
    // this._api.doctor_details_edit(a).subscribe(
    //   (response: any) => {
    //     console.log(response.Data);
    //     if (response.Code === 200) {
    //       // alert('updated Successfully');
    //       this.showSuccess("updated Successfully");
    //       this.router.navigateByUrl('/admin/Doctor')
    //     } else {
    //       // alert(response.Message);
    //       this.showError(response.Message)
    //     }
    //   }
    // );
  }
  update() {
    this.validation_1();
    if (this.Validation == false) {
      // alert("Please enter valid inputs");
      this.showWarning("Please enter valid inputs");
    } else {
      let a = {
        "first_name": this.tittle,
        "last_name": this.Name,
        "user_email": this.Email,
        "user_email_verification": true,
        "user_id": "60a2713c677cbf4d7d5ab370"
        // phone num: 9876598765
      }
      console.log(a);
      this._api.user_update(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          if (response.Code === 200) {
            // this.userid = response.Data.user_details._id;
            // console.log(this.userid)
            // alert('Added Successfully');
            this.showSuccess("Added Successfully")
          } else {
            this.showError(response.Message);
            //alert(response.Message);
          }
        }
      );
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


  onOtpChange(otp) {
    this.otp = otp;
  }


  submit() {
    // console.log(this.otp, "otp");
    // console.log(this.user.otp, "user_otp");
    
    if (this.otp == this.res_otp) {
      this.showSuccess("Verified Successfully")
      this.displayBasic = false;
      this.email_verification = true;
      this.ngOtpInput.setValue(undefined);
    }
    else {
      console.log('otp error');
      this.toastr.errorToastr("Invalid otp");
      this.ngOtpInput.setValue(undefined)
      // this.showfailed("Invalid otp");
    }

  }
  Resend() {
    if(this.email_verification == false){
      this.email();
    }
    else {
      this.showfailed("Otp not send");
    }

  }
  showfailed(msg) {
    this.toastr.errorToastr(msg);
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

}
