import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ValidatorService } from '../../../../validator.services';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit {
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  Latitude: any;
  Longitude: any;
  address: any;
  zoom: number = 8;
  base_lat: number = 11.1271;
  base_lng: number = 78.6569;
  location_lat: number = 11.1271;
  location_lng: number = 78.6569;
  addVendorForm: FormGroup;
  userForm: FormGroup;
  addmore: boolean;
  radioTitle: string;
  radioItems: Array<string>;
  model   = {option: 'option3'};
  Services: any;
  specializationData:any;
  timeData: any;
  Amount:number;
  serviceData:any;
  Completionarray: any = [];
  Servicearray: any = [];


  public handleAddressChange(address: any) {
    this.zoom = 15;
    this.location_lat = Number(address.geometry.location.lat());
    this.location_lng = Number(address.geometry.location.lng());
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this.address = address.formatted_address;
    this.addVendorForm.patchValue({
      business_lat: this.location_lat,
      business_long: this.location_lng
    });
    console.log(this.address);
  }

  options = {
    types: [],
    componentRestrictions: { country: 'IN' }
  }
  Name: any;
  email: any;
  Contact: any;
  registration: any;
  uploadedFiles: any[] = [];

  tittle: any;
  Validation: any;
  Email: any;
  Phone: any;
  Email_id: any;
  Email_idError: any;
  

  constructor(private router: Router, private _api: ApiService, private formBuilder: FormBuilder, private toastr: ToastrManager,private ValidatorService: ValidatorService) {
    this.addVendorForm = this.formBuilder.group({
      _id: ['', Validators.required],
      business_reg: ['', Validators.required],
      business: ['', Validators.required],
      business_email: ['', Validators.required],
      business_gallery: [''],
      business_lat: ['', Validators.required],
      business_loc: ['', Validators.required],
      business_long: ['', Validators.required],
      business_name: ['', Validators.required],
      business_phone: ['', Validators.required],
      certifi: [''],
      date_and_time: [''],
      delete_status: [''],
      gov_id_proof: [''],
      mobile_type: [''],
      photo_id_proof: [''],
      profile_status: [''],
      profile_verification_status: [''],
      user_email: [''],
      user_id: [''],
      user_name: ['']
    });

    this._api.dropdown_service().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.Services = response.Data;
        console.log("data-->",this.Services);
      }
    );
    // this.userForm = this.formBuilder.group({
    //   first_name:['',Validators.required],
    //   last_name:['',Validators.required],
    //   mobile_type:['',Validators.required],
    //   user_email:['',Validators.required],
    //   user_email_verification:['',Validators.required],
    //   user_phone:['',Validators.required],
    //   user_type:['',Validators.required],
    //   ref_code :['',Validators.required] 
    // });
    this.radioItems = ['Pet Groom'];
  }

  ngOnInit(): void {
    this.addmore = true;
  }
  cancel() {
    this.router.navigateByUrl('/admin_panel/Vendor_Management')
  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles)
    }

  }

  markerDragEnd($event: MouseEvent) {
    this.location_lat = Number($event.coords.lat);
    this.location_lng = Number($event.coords.lng);
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this.addVendorForm.patchValue({
      business_lat: this.location_lat,
      business_long: this.location_lng
    });
    this._api.location_details(this.location_lat, this.location_lng).subscribe(async data => {
      this.address = await data['results'][0]['formatted_address'];
    });
  }

  // addServices() {

  //   if (this.serviceData != undefined && this.serviceData != '') {
  //     let obj = { "Services": this.serviceData }
  //     this.Servicearray.push(obj);
  //     this.serviceData = undefined;
  //   }
  // }
 

  addcompletion() {

    // this.addServices();

    if (this.Servicearray.length != undefined && this.serviceData != '' && this.timeData != undefined && this.timeData != '' && this.Amount != undefined  ) {
      let obj = { "services": this.serviceData, "time": this.timeData,"amount":this.Amount }
      this.Completionarray.push(obj);
      this.serviceData = undefined;
      this.timeData = undefined;
      this.Amount = undefined;
      console.table("-->",this.Completionarray)
    }
    else {
      // alert("Pleasefill all the fields")
      this.showWarning("Please fill all the fields");
    }
  }
  remove_completion(i) {
    this.Completionarray.splice(i, 1);

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

  addUser() {
    // j
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
        "date_of_reg": "17/05/2021 11:45 AM",
        "mobile_type": 'Adminpanel',
        "user_status": "complete",
        "ref_code": ""
      };
      console.log("doc", a);
      this._api.user_create(a).subscribe(data=>{
        if (data['Code']==200) {
          this.addmore = true;
          this.addVendorForm.patchValue({
            user_email:data['Data']['user_details']['user_email'],
            user_id:data['Data']['user_details']['_id'],
            user_name:data['Data']['user_details']['first_name']
          })
          this.showSuccess(data['Message']);
        } else {
          this.showError(data['Message']);
          this.addmore = false;
        }
      })
    }
  }

  addVendor() {
    if (this.addVendorForm.valid) {
      console.log("-->", this.addVendorForm.value)
      this._api.create_Vendor(this.addVendorForm.value).subscribe(data => {
        if (data['Code'] == 200) {
          this.showSuccess(data['Message']);
        } else {
          this.showError(data['Message']);
        }
      });
    } else {
      this.showError("Please all fields");
    }
  }


  updateVendor() {

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
