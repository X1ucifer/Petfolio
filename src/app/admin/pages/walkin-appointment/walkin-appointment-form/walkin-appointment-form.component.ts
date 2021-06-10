
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
  Details: any;
  Vaccinated_date: any;
  vacinated_array: any = [
    { "y": "true" },
    { "y": "false" },
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

  Fname: any;
  Lname: any;
  Email: any;
  Phone: any;
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
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.doc_detail = this.storage.get('user');
    this.listpetbreed();
    this.listpettype();
    this.listdoctorsall();
    console.log("this.doc_detail")
    console.log(this.doc_detail)

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
    if (this.Fname == undefined || this.Fname == '' || this.Lname == undefined || this.Lname == '' || this.Email == undefined || this.Phone == undefined || this.Email_idError == true || this.Phone == '' || this.Phone.length != 10) {
      this.Validation = false;
      console.log(this.Validation)
    }
    else {
      this.Validation = true;
      console.log(this.Validation)
    }
  }
  create() {
    this.validation();
    if (this.Validation == false) {
      // alert("Please enter valid inputs");
      this.showWarning("Please enter valid inputs")
    } else {
      let a = {
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
      this._api.user_check_user_admin(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            // alert('Added Successfully');
            this.showSuccess("Added Successfully");
            this.step = 2;
            this.customer_datails = response.Data;
            this.pet_view();
            this.cus_edit = true;
          } else {
            this.showError(response.Message);
            // alert(response.Message);
          }
        }
      );
    }
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




  // ====add pet ======
  service_form() {
    this.petadd = true;
  }
  Submit() {
    this.step = 3;
  }
  listpettype() {
    this._api.pet_type_list().subscribe(
      (response: any) => {
        console.log(response.Data);
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
    if (this.Pet_Name == undefined || this.Pet_Name == '' || this.Pet_Weight == undefined || this.Pet_Weight == '' || this.Pet_Type == undefined || this.Pet_Breed == undefined || this.Pet_Gender == undefined || this.Pet_Color == undefined || this.Pet_Age == undefined || this.Pet_Age == '' || this.Vaccinated == undefined || this.Vaccinated_date == undefined) {
      this.Validation = false;
      console.log(this.Validation)
    }
    else {
      this.Validation = true;
      console.log(this.Validation)
    }
  }

  createpet() {
    this.validation1();
    if (this.Validation == false) {
      // alert("Please enter valid inputs");
      this.showWarning("Please enter valid inputs");
    } else {
      let vac;
      if (this.Vaccinated.y == "true") {
        vac = true;
      }
      else {
        vac = false
      }
      let a = {
        "user_id": this.customer_datails._id,
        "pet_img": this.img_path,
        "pet_name": this.Pet_Name,
        "pet_type": this.Pet_Type.pet_type_title,
        "pet_breed": this.Pet_Breed.pet_breed,
        "pet_gender": this.Pet_Gender.y,
        "pet_color": this.Pet_Color,
        "pet_weight": +this.Pet_Weight,
        "pet_age": +this.Pet_Age,
        "vaccinated": vac,
        // "pet_dob": "" + this.datepipe.transform(this.dob_date, 'dd-MM-yyyy'),
        "last_vaccination_date": "" + this.datepipe.transform(this.Vaccinated_date, 'dd-MM-yyyy'),
        "default_status": true,
        "date_and_time": "" + this.datepipe.transform(new Date(), 'dd-MM-yyyy hh:mm'),
        "mobile_type": "Admin"
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
    this.petedit = true;
    console.log(item)
  }
  update() {
    this.validation1();
    if (this.Validation == false) {
      // alert("Please enter valid inputs")
      this.showWarning("Please enter valid inputs");
    } else {
      let vac;
      if (this.Vaccinated.y == "true") {
        vac = true;
      }
      else {
        vac = false
      }
      let a = {
        "_id": this.detail._id,
        "user_id": this.customer_datails._id,
        "pet_img": this.img_path,
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
            alert('Please upload the file below 1 MB');
            this.imgType.nativeElement.value = "";
          }
        }
        else {
          alert('Please upload the file size 100 * 100');
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
    if (this.doctor == undefined || this.doctor == '' || this.app_date == undefined || this.app_time == undefined || this.allergies == undefined || this.allergies == '' || this.desc == undefined || this.desc == '') {
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
        "doctor_id": this.doctor._id,
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
        "visit_type": "Clinic"
      };
      console.log(a);
      this._api.appointments_mobile_create(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            this.showSuccess("Appointment added successfully");
            this.router.navigateByUrl('/admin/Walkin_Appointment')

          } else {
            this.showError(response.Message);
            //alert(response.Message);
          }
        }
      );
    }
  }
}
