import { Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-honey-pot-client-detail-form',
  templateUrl: './honey-pot-client-detail-form.component.html',
  styleUrls: ['./honey-pot-client-detail-form.component.css']
})
export class HoneyPotClientDetailFormComponent implements OnInit {
  Existing: any;
  Account_Type: any;
  Set_Primary: any;
  Primary_Account: any;

  License: any;
  Type: any;
  Country: any;
  Currency1: any;
  Short_code: any;
  System_code: any;
  Name: any;
  Website: any;
  email_id: any;
  Ho_Address: any;
  Office_Address: any;
  logo: any;

  ref_name: any;
  ref_email: any;
  ref_pone: any;
  ref_whats_pone: any;
  ref_lanline: any;
  ref_extension: any;
  ref_Staff_no: any;
  ref_Internal_ID: any;
  ref_Designation: any;
  ref_Reporting_to: any;
  ref_persons_array: any = [];

  Document_Type: any;
  Document_Name: any;
  Start_date: any;
  End_date: any;
  Document_link: any
  Documents_array: any = [];

  Account_No: any;
  IFSC: any;
  IBAN: any;
  Bank_Name: any;
  Branch: any;
  Bank_address: any;
  Bnak_Country: any;
  Bank_Currency: any;
  Swift_Code: any;
  Account_array: any = [];

  Validation: boolean;
  emailError: any;
  emailError1: any;
  emailErrorMsg: any;
  selectedimgae: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  id: any = undefined;
  entity_data: any = undefined;
  entity: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;
  client_type_list: any = [];
  Account_list: any = [];
  country: any = [];
  Reporting_to_list: any = [];
  State_l: any = [];
  State_l1: any = [];
  State: any;
  State1: any;
  Town_District: any;
  Town_District1: any;
  doct: any = [];
  Currency: any = [
    { "y": "INR" },
    { "y": "Real" },
    { "y": "Dinar" },
    { "y": "Dollar" },
  ]
  type: any = [
    { "y": "Existing" },
    { "y": "New" },
  ];
  typ: any = [
    { "y": "Primary office" },
    { "y": "Sister concern" },
    { "y": "Branch" },
    { "y": "Business Division" },
  ];
  form_act: boolean = false;
  form_type: any;
  field_set: boolean = false;
  uploadedFiles: any[] = [];
  System_email_id: any;
  emailError0: any;
  Pincode: any;
  Pincode1: any;
  Pincode2: any;
  PO_Box: any;
  PO_Box1: any;
  PO_Box2: any;
  entity_all: any = [];
  currency_handling: any;
  ref_id: any;
  Doc_id: any;
  Acc_id: any;

  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,

  ) {
    this.code();

  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form_type = this.getFromLocal('Client_form')
    this.entity_data = this.getFromLocal('client_data');
    if (this.entity_data != undefined) {
      this.form_act = true;
    }

    this._api.client_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].Clinet_name };
          this.entity_all.push(obj);
        }
        console.log(this.entity_all);
      }
    );
    this.acc_list();
    this.Client_type_list_get();
    this.country_list_get();
    this.reporting_to_get();
    this.doc_list_get();
    console.log(this.entity_data);
    this.set_field_data();

  }



  code() {
    this.System_code = this.getRandomString(4);
    this.Short_code = this.getRandomString1(4);
    console.log(this.System_code);
    console.log(this.Short_code);
    let a = {
      "client_short_code": this.Short_code,
      "Client_system_code": this.System_code
    }
    console.log(a)
    this._api.Code_checker(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code != 200) {
          // this.code();
        }
      }
    );
  }
  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomChars1 = '0123456789';
    var result1 = '';
    var result2 = '';
    var result = '';
    for (var i = 0; i < length; i++) {
      result1 += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      result2 += randomChars1.charAt(Math.floor(Math.random() * randomChars1.length));
    }

    return result = result1 + result2;
  }

  getRandomString1(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomChars1 = '0123456789';
    var result1 = '';
    var result2 = '';
    var result = '';
    for (var i = 0; i < length; i++) {
      result1 += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      result2 += randomChars1.charAt(Math.floor(Math.random() * randomChars1.length));
    }

    return result = result1 + result2;
  }








  set_field_data() {
    if (this.entity_data != undefined) {
      console.log(this.entity_data);
      this.id = this.entity_data._id;
      this.Existing = { 'y': this.entity_data.exising_new };
      this.Account_Type = { 'y': this.entity_data.account_type };
      console.log(this.Account_Type)
      this.Set_Primary = { 'y': this.entity_data.setprimary };
      this.Primary_Account = { 'y': this.entity_data.primary_accont };
      // this.License = this.entity_data.no_of_lincenese;
      this.Type = this.entity_data.clienttype;
      this.State = { 'y': this.entity_data.state };
      this.Town_District = this.entity_data.Town;
      this.System_email_id = this.entity_data.communication_email;
      this.Short_code = this.entity_data.client_short_code;
      this.System_code = this.entity_data.Client_system_code;
      this.Name = this.entity_data.Clinet_name;
      this.Website = this.entity_data.website;
      this.email_id = this.entity_data.comm_email;
      this.logo = this.entity_data.logo;
      this.Ho_Address = this.entity_data.ho_address;
      this.PO_Box = this.entity_data.ho_po_box;
      this.Pincode = this.entity_data.ho_pincode;
      this.Pincode1 = this.entity_data.off_pincode;
      this.PO_Box1 = this.entity_data.off_po_box;
      this.Office_Address = this.entity_data.off_address;
      this.currency_handling = this.entity_data.currency_handling;
      this.ref_persons_array = this.entity_data.contact_persons;
      this.Documents_array = this.entity_data.documents;
      this.Account_array = this.entity_data.Account;

    }
    else {
      this.field_set = true;
    }
  }
  acc_list() {
    this._api.account_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].account_type };
          this.Account_list.push(obj);
        }
        console.log(this.Account_list);
      }
    );
  }

  Client_type_list_get() {
    this._api.client_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].client_type, '_id': list[i]._id };
          this.client_type_list.push(obj);
        }
        console.log(this.client_type_list);
      }
    );
  }
  country_list_get() {
    this._api.currency_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].country_name, 'x': list[i].currency_type, '_id': list[i]._id };
          this.country.push(obj);
        }
        console.log(this.country);
        if (this.country.length > 0 && this.entity_data != undefined) {
          let z = this.country.filter((val) => val.y == this.entity_data.country);
          this.Country = z[0];
          console.log(this.Country);
          this.set_currency();
        }
        this.field_set = true;
      }
    );
  }
  set_currency() {
    this.Currency1 = this.Country.x;
    console.log(this.Country.y);
    if (this.Country.x != undefined) {
      this._api.state_details_list().subscribe(
        (response: any) => {
          console.log(response);
          let lis = response.Data.reverse();
          console.log(lis);
          this.State_l = [];
          for (let i = 0; i < lis.length; i++) {
            if (lis[i].country_name == this.Country.y) {
              let obj = { 'y': lis[i].state };
              this.State_l.push(obj);
            }
            console.log(this.State_l);
          }
        }
      );
    }

  }
  set_currency1() {
    this.Bank_Currency = this.Bnak_Country.x;
    if (this.Bnak_Country.x != undefined) {
      this._api.state_details_list().subscribe(
        (response: any) => {
          console.log(response);
          let lis = response.Data.reverse();
          console.log(lis);
          this.State_l1 = [];
          for (let i = 0; i < lis.length; i++) {
            if (lis[i].country_name == this.Country.y) {
              let obj = { 'y': lis[i].state, '_id': lis[i]._id };
              this.State_l1.push(obj);
            }
            console.log(this.State_l1);
          }
        }
      );
    }
  }
  reporting_to_get() {
    this._api.designation_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].designation_type };
          this.Reporting_to_list.push(obj);
        }
        console.log(this.Reporting_to_list);
      }
    );
  }
  doc_list_get() {
    this._api.document_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].document_type, '_id': list[i]._id };
          this.doct.push(obj);
        }
        console.log(this.doct);
      }
    );
  }
  edit() {
    this.form_act = false;
  }
  cancel() {
    this.router.navigateByUrl('admin_panel/Super_admin/EntityManagement');
    this.saveInLocal('Entity_data', undefined);
  }
  addcontact() {
    if (this.ref_name != undefined && this.ref_name != '' &&
      this.ref_email != undefined && this.ref_email != '' && this.emailError1 != true &&
      this.ref_pone != undefined && this.ref_pone != '' &&
      this.ref_whats_pone != undefined && this.ref_whats_pone != '' &&
      this.ref_lanline != undefined && this.ref_lanline != '' &&
      // this.ref_extension != undefined && this.ref_extension != '' &&
      // this.ref_Staff_no != undefined && this.ref_Staff_no != '' &&
      // this.ref_Internal_ID != undefined && this.ref_Internal_ID != '' &&
      this.ref_Designation != undefined && this.ref_Designation != '' &&
      this.ref_Reporting_to != undefined && this.ref_Reporting_to != '') {
      let obj = {
        "ref_name": this.ref_name,
        "ref_email": this.ref_email,
        "ref_pone": this.ref_pone,
        "ref_whats_pone": this.ref_whats_pone,
        "ref_lanline": this.ref_lanline,
        "ref_extension": this.ref_extension,
        "ref_Staff_no": this.ref_Staff_no,
        "ref_Internal_ID": this.ref_Internal_ID,
        "ref_Designation": this.ref_Designation.y,
        "ref_Reporting_to": this.ref_Reporting_to
      }
      this.ref_persons_array.push(obj);
      this.ref_name = undefined;
      this.ref_email = undefined;
      this.ref_pone = undefined;
      this.ref_whats_pone = undefined;
      this.ref_lanline = undefined;
      this.ref_extension = undefined;
      this.ref_Staff_no = undefined;
      this.ref_Internal_ID = undefined;
      this.ref_Designation = undefined;
      this.ref_Reporting_to = undefined;
      console.log(this.ref_name)
    }
    else {
      alert("fill all the required fields")
    }
  }
  remove_contact(i) {
    console.log(this.ref_persons_array);
    this.ref_persons_array = this.ref_persons_array.splice(i, 1);
    console.log(this.ref_persons_array);
    let a = {
      "_id": this.id,
      "contact_persons": this.ref_persons_array,

    };
    console.log(a);
    this._api.client_edit(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          this.ref_persons_array = response.Data.contact_persons
          alert(response.Message);
        } else {
          alert(response.Message);
        }
      }
    );
  }


  adddocuments() {
    if (this.Document_Type != undefined && this.Document_Type != '' &&
      this.Document_Name != undefined && this.Document_Name != '' &&
      this.Start_date != undefined && this.Start_date != '' &&
      this.End_date != undefined && this.End_date != '' &&
      this.Document_link != undefined && this.Document_link != '') {
      let obj = {
        "Document_Type": this.Document_Type.y,
        "Document_Name": this.Document_Name,
        "Start_date": this.Start_date,
        "End_date": this.End_date,
        "Document_link": this.Document_link,
      }
      this.Documents_array.push(obj);
      this.Document_Type = undefined;
      this.Document_Name = undefined;
      this.Start_date = undefined;
      this.End_date = undefined;
      console.log(this.Documents_array)
    }
    else {
      alert("fill all the required fields")
    }
  }
  remove_doc(i) {
    this.Documents_array = this.Documents_array.splice(i, 1);
    let a = {
      "_id": this.id,
      "documents": this.Documents_array,
    };
    console.log(a);
    this._api.client_edit(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          alert(response.Message);
          this.Documents_array = response.Data.documents
        } else {
          alert(response.Message);
        }
      }
    );
  }

  addACC() {
    if (this.Account_No != undefined && this.Account_No != '' &&
      this.IFSC != undefined && this.IFSC != '' &&
      this.IBAN != undefined && this.IBAN != '' &&
      this.Bank_Name != undefined && this.Bank_Name != '' &&
      this.Branch != undefined && this.Branch != '' &&
      this.Bank_Currency != undefined && this.Bank_Currency != '' &&
      this.State1 != undefined && this.State1 != '' &&
      this.Town_District1 != undefined && this.Town_District1 != '' &&
      this.Bank_address != undefined && this.Bank_address != '' &&
      this.Bnak_Country != undefined && this.Bnak_Country != '' &&
      this.Swift_Code != undefined && this.Swift_Code != ''
    ) {
      let obj = {
        "Account_No": this.Account_No,
        "IFSC": this.IFSC,
        "IBAN": this.IBAN,
        "Bank_Name": this.Bank_Name,
        "Branch": this.Branch,
        "Bank_address": this.Bank_address,
        "Bnak_Country": this.Bnak_Country.y,
        "Bank_State": this.State1.y,
        "Bank_Town": this.Town_District1,
        "Bank_Currency": this.Bank_Currency,
        "Swift_Code": this.Swift_Code,
      }
      this.Account_array.push(obj);
      this.Account_array[this.Acc_id] = obj;
      this.Account_No = undefined;
      this.IFSC = undefined;
      this.IBAN = undefined;
      this.Bank_Name = undefined;
      this.Branch = undefined;
      this.Bank_Currency = undefined;
      this.Bank_address = undefined;
      this.Bnak_Country = undefined;
      this.Swift_Code = undefined;
      this.State1 = undefined;
      this.Town_District1 = undefined;
      console.log(this.Account_array)
    }
    else {
      alert("fill all the required fields")
    }
  }
  remove_Acc(i) {
    this.Account_array = this.Account_array.splice(i, 1);
    let a = {
      "_id": this.id,
      "Account": this.Account_array

    };
    console.log(a);
    this._api.client_edit(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          alert(response.Message);
          this.Account_array = response.Data.Account
        } else {
          alert(response.Message);
        }
      }
    );
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles)
    }

  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  goToLink1(url: string) {
    window.open(url, "_blank");
  }
  emailValidator() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.email_id);
    if (this.email_id === '' || this.email_id === undefined || this.email_id === null) {
      this.emailError = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError = false;
    }
  }
  emailValidator0() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.System_email_id);
    if (this.System_email_id === '' || this.System_email_id === undefined || this.System_email_id === null) {
      this.emailError0 = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError0 = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError0 = false;
    }
  }
  emailValidator1() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.ref_email);
    if (this.ref_email === '' || this.ref_email === undefined || this.ref_email === null) {
      this.emailError1 = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError1 = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError1 = false;
    }
  }
  emailChange(data) {
    //console.log(data);
    this.email_id = data;
    this.emailValidator();
  }
  emailChange0(data) {
    //console.log(data);
    this.System_email_id = data;
    this.emailValidator0();
  }
  emailChange1(data) {
    //console.log(data);
    this.ref_email = data;
    this.emailValidator1();
  }
  _keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }

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
        this.addfiles();
      };
      img.src = fr.result as string; // The data URL
    };
    fr.readAsDataURL(this.selectedimgae);
    // clear the value after upload
  }
  addfiles() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://52.25.163.13:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.logo = res.Data;
      });


  }

  Documentupload(event) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    console.log(this.selectedimgae.size / 100000);
    let fr = new FileReader();

    let d = this.selectedimgae.size / 100000;
    if (d < 10) {
      this.addDoc();
    }
    else {
      alert('Please upload the file below 1 MB');
      // this.imgType.nativeElement.value = "";
    }
    // clear the value after upload
  }
  addDoc() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://52.25.163.13:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Document_link = res.Data;
      });


  }

  validation() {
    console.log(this.Set_Primary)
    if (this.Set_Primary != undefined) {
      if(this.Set_Primary.y == 'Primary office'){
        console.log(this.Set_Primary)
        this.Primary_Account = { 'y': this.Name };
        console.log(this.Primary_Account)
      }
     
    }
   
    if (
      this.Type == undefined ||
      this.Country == undefined ||
      this.Existing == undefined ||
      this.Account_Type == undefined ||
      this.Set_Primary == undefined ||
      this.Primary_Account == undefined ||
      this.State == undefined ||
      this.Town_District == undefined ||
      this.Currency1 == undefined ||
      this.System_email_id == undefined || this.System_email_id == '' || this.emailError0 == true ||
      // this.Short_code == undefined ||
      // this.Short_code == '' ||
      // this.System_code == undefined ||
      // this.System_code == '' ||
      this.PO_Box == undefined || this.PO_Box == '' ||
      this.PO_Box1 == undefined || this.PO_Box1 == '' ||
      this.Pincode == undefined || this.Pincode == '' ||
      this.Pincode1 == undefined || this.Pincode1 == '' ||
      this.currency_handling == undefined ||
      this.Name == undefined ||
      this.Name == '' ||
      this.Website == undefined || this.Website == '' ||
      this.email_id == undefined || this.email_id == '' || this.emailError == true ||
      this.Ho_Address == undefined || this.Ho_Address == '' ||
      this.Office_Address == undefined || this.Office_Address == '' ||
      this.logo == undefined) {
      this.Validation = false;
      console.log(this.Validation)
     
    }
    else {
      this.Validation = true;
      console.log(this.Validation);
      let a = {

        "exising_new": this.Existing.y,
        "account_type": this.Account_Type.y,
        "setprimary": this.Set_Primary.y,
        "primary_accont": this.Primary_Account.y,
        "clienttype": this.Type,
        "country": this.Country.y,
        "state": this.State.y,
        "Town": this.Town_District,
        "currency": this.Country.x,
        "Clinet_name": this.Name,
        "website": this.Website,
        "client_short_code": this.Short_code,
        "Client_system_code": this.System_code,
        "communication_email": this.System_email_id,
        "comm_email": this.email_id,
        "logo": this.logo,
        "ho_address": this.Ho_Address,
        "ho_po_box": this.PO_Box,
        "ho_pincode": this.Pincode,
        "off_address": this.Office_Address,
        "off_po_box": this.PO_Box1,
        "off_pincode": this.Pincode1,
        // "no_of_lincenese": this.License,
        "currency_handling": this.currency_handling,
        "password": "1234567890",
        "contact_persons": this.ref_persons_array,
        "documents": this.Documents_array,
        "Account": this.Account_array
  
      };
      console.log(a);
    }
  }

  create() {
    this.validation();
    if (this.Validation == false) {
      alert("Please enter valid inputs")
    } else {
      if (this.Set_Primary.y == 'Primary office') {
        console.log(this.Set_Primary)
        this.Primary_Account = { 'y': this.Name };
        console.log(this.Primary_Account)
      }
      let a = {
        "exising_new": this.Existing.y,
        "account_type": this.Account_Type.y,
        "setprimary": this.Set_Primary.y,
        "primary_accont": this.Primary_Account.y,
        "clienttype": this.Type,
        "country": this.Country.y,
        "state": this.State.y,
        "Town": this.Town_District,
        "currency": this.Country.x,
        "Clinet_name": this.Name,
        "website": this.Website,
        "client_short_code": this.Short_code,
        "Client_system_code": this.System_code,
        "communication_email": this.System_email_id,
        "comm_email": this.email_id,
        "logo": this.logo,
        "ho_address": this.Ho_Address,
        "ho_po_box": this.PO_Box,
        "ho_pincode": this.Pincode,
        "off_address": this.Office_Address,
        "off_po_box": this.PO_Box1,
        "off_pincode": this.Pincode1,
        // "no_of_lincenese": this.License,
        "currency_handling": this.currency_handling,
        "password": "1234567890",
        "contact_persons": this.ref_persons_array,
        "documents": this.Documents_array,
        "Account": this.Account_array

      };
      console.log(a);
      this._api.client_create(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.id = response.Data._id;
            this.entity_data = response.Data;
            this.form_act = true;
            this.set_field_data();
            console.log(this.id)
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  update() {
    console.log(this.id)
    this.validation();
    if (this.Validation == false) {
      alert("Please enter valid inputs")
    } else {
      if (this.Set_Primary.y == 'Primary office') {
        console.log(this.Set_Primary)
        this.Primary_Account = { 'y': this.Name };
        console.log(this.Primary_Account)
      }
      let a = {
        "_id": this.id,
        "exising_new": this.Existing.y,
        "account_type": this.Account_Type.y,
        "setprimary": this.Set_Primary.y,
        "primary_accont": this.Primary_Account.y,
        "clienttype": this.Type,
        "country": this.Country.y,
        "state": this.State.y,
        "Town": this.Town_District,
        "currency": this.Country.x,
        "Clinet_name": this.Name,
        "website": this.Website,
        "client_short_code": this.Short_code,
        "Client_system_code": this.System_code,
        "communication_email": this.System_email_id,
        "comm_email": this.email_id,
        "logo": this.logo,
        "ho_address": this.Ho_Address,
        "ho_po_box": this.PO_Box,
        "ho_pincode": this.Pincode,
        "off_address": this.Office_Address,
        "off_po_box": this.PO_Box1,
        "off_pincode": this.Pincode1,
        // "no_of_lincenese": this.License,
        "currency_handling": this.currency_handling,
        "password": "1234567890",
        "contact_persons": this.ref_persons_array,
        "documents": this.Documents_array,
        "Account": this.Account_array

      };
      console.log(a);
      this._api.client_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.id = response.Data._id;
            this.entity_data = response.Data;
            this.set_field_data();
            console.log(this.id)
            this.form_act = true;
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  create_ref() {
    this.addcontact();
    if (this.ref_persons_array.length == 0) {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "_id": this.id,
        "contact_persons": this.ref_persons_array,
      };
      console.log(a);
      this._api.client_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.ref_persons_array = response.Data.contact_persons
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  edit_ref(arr, i) {
    this.ref_id = i
    this.ref_name = arr.ref_name
    this.ref_email = arr.ref_email
    this.ref_pone = arr.ref_pone
    this.ref_whats_pone = arr.ref_whats_pone
    this.ref_lanline = arr.ref_lanline
    this.ref_extension = arr.ref_extension
    this.ref_Staff_no = arr.ref_Staff_no
    this.ref_Internal_ID = arr.ref_Internal_ID
    this.ref_Designation = { 'y': arr.ref_Designation }
    this.ref_Reporting_to = arr.ref_Reporting_to
    console.log(this.ref_Designation)
  }
  update_ref() {
    if (this.ref_name != undefined && this.ref_name != '' &&
      this.ref_email != undefined && this.ref_email != '' && this.emailError1 != true &&
      this.ref_pone != undefined && this.ref_pone != '' &&
      this.ref_whats_pone != undefined && this.ref_whats_pone != '' &&
      this.ref_lanline != undefined && this.ref_lanline != '' &&
      // this.ref_extension != undefined && this.ref_extension != '' &&
      // this.ref_Staff_no != undefined && this.ref_Staff_no != '' &&
      // this.ref_Internal_ID != undefined && this.ref_Internal_ID != '' &&
      this.ref_Designation != undefined && this.ref_Designation != '' &&
      this.ref_Reporting_to != undefined && this.ref_Reporting_to != '') {
      let obj = {
        "ref_name": this.ref_name,
        "ref_email": this.ref_email,
        "ref_pone": this.ref_pone,
        "ref_whats_pone": this.ref_whats_pone,
        "ref_lanline": this.ref_lanline,
        "ref_extension": this.ref_extension,
        "ref_Staff_no": this.ref_Staff_no,
        "ref_Internal_ID": this.ref_Internal_ID,
        "ref_Designation": this.ref_Designation.y,
        "ref_Reporting_to": this.ref_Reporting_to
      }
      this.ref_persons_array[this.ref_id] = obj;
      this.ref_name = undefined;
      this.ref_email = undefined;
      this.ref_pone = undefined;
      this.ref_whats_pone = undefined;
      this.ref_lanline = undefined;
      this.ref_extension = undefined;
      this.ref_Staff_no = undefined;
      this.ref_Internal_ID = undefined;
      this.ref_Designation = undefined;
      this.ref_Reporting_to = undefined;
      console.log(this.ref_name)
      this.ref_id = undefined;
      let a = {
        "_id": this.id,
        "contact_persons": this.ref_persons_array,
      };
      console.log(a);
      this._api.client_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.ref_persons_array = response.Data.contact_persons
          } else {
            alert(response.Message);
          }
        }
      );

    }
    else {
      alert("fill all the required fields")
    }
  }
  create_Doc() {
    this.adddocuments();
    if (this.Documents_array.length == 0) {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "_id": this.id,
        "documents": this.Documents_array,
      };
      console.log(a);
      this._api.client_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            this.Documents_array = response.Data.documents,
              alert(response.Message);
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  edit_Doc(arr, i) {
    this.Doc_id = i;
    this.Document_Type = { 'y': arr.Document_Type }
    this.Document_Name = arr.Document_Name
    this.Start_date = arr.Start_date
    this.End_date = arr.End_date
    this.Document_link = arr.Document_link
  }
  update_Doc() {
    if (this.Document_Type != undefined && this.Document_Type != '' &&
      this.Document_Name != undefined && this.Document_Name != '' &&
      this.Start_date != undefined && this.Start_date != '' &&
      this.End_date != undefined && this.End_date != '' &&
      this.Document_link != undefined && this.Document_link != '') {
      let obj = {
        "Document_Type": this.Document_Type.y,
        "Document_Name": this.Document_Name,
        "Start_date": this.Start_date,
        "End_date": this.End_date,
        "Document_link": this.Document_link,
      }
      this.Documents_array[this.Doc_id] = obj;
      this.Document_Type = undefined;
      this.Document_Name = undefined;
      this.Start_date = undefined;
      this.End_date = undefined;
      console.log(this.Documents_array)
      this.Doc_id = undefined;
      let a = {
        "_id": this.id,
        "documents": this.Documents_array,
      };
      console.log(a);
      this._api.client_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            this.Documents_array = response.Data.documents,
              alert(response.Message);
          } else {
            alert(response.Message);
          }
        }
      );
    }
    else {
      alert("fill all the required fields")
    }
  }
  create_Acc() {
    this.addACC();
    if (this.Account_array.length == 0) {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "_id": this.id,
        "Account": this.Account_array

      };
      console.log(a);
      this._api.client_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.Account_array = response.Data.Account
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  edit_Acc(arr, i) {
    this.Doc_id = i;
    this.Document_Type = { 'y': arr.Document_Type }
    this.Document_Name = arr.Document_Name
    this.Start_date = arr.Start_date
    this.End_date = arr.End_date
    this.Document_link = arr.Document_link
  }
  update_Acc() {
    if (this.Account_No != undefined && this.Account_No != '' &&
      this.IFSC != undefined && this.IFSC != '' &&
      this.IBAN != undefined && this.IBAN != '' &&
      this.Bank_Name != undefined && this.Bank_Name != '' &&
      this.Branch != undefined && this.Branch != '' &&
      this.Bank_Currency != undefined && this.Bank_Currency != '' &&
      this.State1 != undefined && this.State1 != '' &&
      this.Town_District1 != undefined && this.Town_District1 != '' &&
      this.Bank_address != undefined && this.Bank_address != '' &&
      this.Bnak_Country != undefined && this.Bnak_Country != '' &&
      this.Swift_Code != undefined && this.Swift_Code != ''
    ) {
      let obj = {
        "Account_No": this.Account_No,
        "IFSC": this.IFSC,
        "IBAN": this.IBAN,
        "Bank_Name": this.Bank_Name,
        "Branch": this.Branch,
        "Bank_address": this.Bank_address,
        "Bnak_Country": this.Bnak_Country.y,
        "Bank_State": this.State1.y,
        "Bank_Town": this.Town_District1,
        "Bank_Currency": this.Bank_Currency,
        "Swift_Code": this.Swift_Code,
      }
      this.Account_array[this.Acc_id] = obj;
      this.Account_No = undefined;
      this.IFSC = undefined;
      this.IBAN = undefined;
      this.Bank_Name = undefined;
      this.Branch = undefined;
      this.Bank_Currency = undefined;
      this.Bank_address = undefined;
      this.Bnak_Country = undefined;
      this.Swift_Code = undefined;
      this.State1 = undefined;
      this.Town_District1 = undefined;
      console.log(this.Account_array);
      this.Acc_id = undefined;
      let a = {
        "_id": this.id,
        "Account": this.Account_array

      };
      console.log(a);
      this._api.client_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.Account_array = response.Data.Account
          } else {
            alert(response.Message);
          }
        }
      );
    }
    else {
      alert("fill all the required fields")
    }
  }
  set_primary_acc() {
    // if (this.Set_Primary.y == 'Primary office') {
    //   this.Primary_Account = this.Set_Primary
    // }
  }
  can() {
    this.form_act = true;
    this.ngOnInit();
  }
}