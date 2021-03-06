import { Component, OnInit, ViewChild, ElementRef, Inject, ComponentFactoryResolver } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ValidatorService } from '../../../validator.services';
import { environment } from '../../../../environments/environment';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-vendoredit-form',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  @ViewChild('imgType', { static: false }) imgType: ElementRef;

  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  view_detail: any;
  view_detail_data: any;
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
  model = { option: 'option3' };
  Services: any;
  specializationData: any;
  time_slots: any;
  amount: number;
  bus_service_list: any;
  Completionarray: any = [];
  Servicearray: any = [];
  selectedimgae: any;
  signature: any;
  img_path: any = undefined;
  govt_arr: any = [];
  serviceGallery_arr: any = [];
  certificate_arr: any = [];
  photo_arr: any = [];
  Specarray: any = [];
  img: any = [];
  gTableOpen: boolean;
  pTableOpen: boolean;
  cTableOpen: boolean;
  GaTableOpen: boolean;
  userId: any;



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
  businessname: any;
  businessemail: any;

  constructor(private router: Router, private _api: ApiService, private formBuilder: FormBuilder, private toastr: ToastrManager, private ValidatorService: ValidatorService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private routes: ActivatedRoute,
    public datepipe: DatePipe
  ) {
    // this.addVendorForm = this.formBuilder.group({
    //   _id: ['', Validators.required],
    //   business_reg: ['', Validators.required],
    //   business: ['', Validators.required],
    //   business_email: ['', Validators.required],
    //   business_gallery: [''],
    //   business_lat: ['', Validators.required],
    //   business_loc: ['', Validators.required],
    //   business_long: ['', Validators.required],
    //   business_name: ['', Validators.required],
    //   business_phone: ['', Validators.required],
    //   certifi: [''],
    //   date_and_time: [''],
    //   delete_status: [''],
    //   gov_id_proof: [''],
    //   mobile_type: [''],
    //   photo_id_proof: [''],
    //   profile_status: [''],
    //   profile_verification_status: [''],
    //   user_email: [''],
    //   user_id: [''],
    //   user_name: ['']
    // });
    this.view_detail = this.getFromLocal('view_detail');
    this.view_detail_data = this.getFromLocal('view_detail_data');
    console.log(this.view_detail);
    console.log("sessiondata-->",this.view_detail_data)

    this._api.dropdown_service().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.Services = response.Data;
        console.log("data-->", this.Services);
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
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }


  ngOnInit(): void {
    this.addmore = true;
    this.gTableOpen = false;
    this.pTableOpen = false;
    this.cTableOpen = false;
    this.GaTableOpen = false;
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
        console.log("imagesRes", res);
        this.img_path = res.Data;

        if (data == 'Govt') {
          var obj1 = { "govt_img": this.img_path }
          let obj_data = { "bus_service_gall": this.img_path }
          console.log("img-->", obj1)
          this.gTableOpen = true
          this.govt_arr.push(obj1);
          this.img.push(obj_data)
          this.img_path = undefined;

        }
        if (data == 'Photo') {
          var obj2 = { "photo_id_img": this.img_path }
          let obj_data = { "bus_service_gall": this.img_path }
          this.pTableOpen = true
          this.photo_arr.push(obj2);
          this.img.push(obj_data)
          this.img_path = undefined;
          // console.log(this.photo_arr)

        }
        if (data == 'Certificate') {
          var obj3 = { "certificate_img": this.img_path }
          let obj_data = { "bus_service_gall": this.img_path }
          this.cTableOpen = true
          this.certificate_arr.push(obj3);
          this.img.push(obj_data)
          this.img_path = undefined;

        }
        if (data == 'Gallery') {
          var obj4 = { "gallery_img": this.img_path }
          let obj_data = { "bus_service_gall": this.img_path }
          this.GaTableOpen = true
          this.img.push(obj_data)
          this.serviceGallery_arr.push(obj4);
          this.img_path = undefined;

        }

      });

    console.log("----->", this.img)


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
    this.serviceGallery_arr.splice(i, 1);
  }



  addcompletion() {

    // this.addServices();

    if (this.Servicearray.length != undefined && this.bus_service_list != '' && this.time_slots != undefined && this.time_slots != '' && this.amount != undefined) {
      let obj = { "bus_service_list": this.bus_service_list, "time_slots": this.time_slots, "amount": this.amount }
      // this.serve = obj;
      this.view_detail_data.bus_service_list.push(obj);
      this.bus_service_list = undefined;
      this.time_slots = undefined;
      this.amount = undefined;
      console.table("-->", this.Completionarray)
    }
    else {
      // alert("Pleasefill all the fields")
      this.showWarning("Please fill all the fields");
    }
  }
  obj(arg0: string, obj: any) {
    throw new Error('Method not implemented.');
  }
  remove_completion(i) {
    this.view_detail_data.bus_service_list.splice(i, 1);

  }

  addcompletion1() {

    if (this.Servicearray.length != undefined && this.specializationData != '' && this.specializationData != undefined) {
      let obj = { "bus_spec_list": this.specializationData }
      // this.serve = obj;
      this.view_detail_data.bus_spec_list.push(obj);
      this.specializationData = undefined;

      console.table("-->", this.Specarray)
    }
    else {
      // alert("Pleasefill all the fields")
      this.showWarning("Please fill all the fields");
    }

  }

  remove_completion1(i) {
    this.view_detail_data.bus_spec_list.splice(i, 1);

  }

  validation_1() {
    if (this.view_detail_data.bus_user_name !== undefined && this.view_detail_data.bus_user_name !== '' &&  this.view_detail_data.bus_user_email !== undefined || this.view_detail_data.bus_user_email !== '' && this.view_detail_data.bus_user_phone == '' || this.view_detail_data.bus_user_phone.length != 10) {
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
    // this.validation_1();
    if (this.Validation == false) {
      // alert("Please enter valid inputs");
      this.showWarning("Please enter valid inputs");
    } else {
      let a = {
        '_id': this.view_detail_data._id,
        "first_name": this.view_detail_data.bus_user_name,
        "last_name": this.Name,
        "user_email": this.view_detail_data.bus_user_email,
        "user_phone": this.view_detail_data.bus_user_phone,
        "user_type": 3,
        "date_of_reg": new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
        "mobile_type": 'Adminpanel',
        "user_status": "complete",
        "ref_code": ""
      };
      console.log("doc", a);

      this._api.user_edit(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          //alert("Updated Successfully");
          this.showSuccess("Updated Successfully")
        }
      );
    }

    console.log("akhil-->", this.userId)
  }



  addVendor() {
  
    if (this.view_detail_data.bussiness_name != undefined && this.view_detail_data.bussiness_name != '' && this.view_detail_data.bus_user_email != undefined && this.view_detail_data.bus_user_email != '' && this.img.length > 0 && this.view_detail_data.bus_service_list.length > 0 && this.view_detail_data.bus_spec_list.length > 0 && this.view_detail_data.city_name != undefined && this.view_detail_data.city_name != '') {

      var a = {
        '_id': this.view_detail_data._id,
        "bussiness_name": this.view_detail_data.bussiness_name,
        "bus_user_email": this.view_detail_data.bus_user_email,
        "bus_user_name": this.tittle,
        "bus_user_phone": this.Phone,
        "bus_service_list": this.view_detail_data.bus_service_list,
        "bus_spec_list": this.view_detail_data.bus_spec_list,
        "city_name": this.view_detail_data.city_name,
        "sp_loc": this.view_detail_data.city_name,
        "bus_service_gall": this.img,
        "date_and_time": new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
        "mobile_type": 'Adminpanel',
        "user_id": this.userId,
        "profile_verification_status": false,
        "bus_certif": this.certificate_arr

      }

      this._api.service_provider_edit(a).subscribe(data => {
        if (data['Code'] == 200) {
          this.showSuccess(data['Message']);
          this.router.navigateByUrl('/admin/serviceprovider_details')
        } else {
          this.showError(data['Message']);
        }
      });
    } else {
      this.showError("Please enter all fields!");
    }
    console.log("Vendordata--->", a)

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
