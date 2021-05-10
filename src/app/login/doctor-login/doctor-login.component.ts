
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment'
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  email_id: string;
  passwords: string;
  phone_number: number;
  data: any;
  selectedAudio1: any;
  Pic: any;
  user_phone: string;
  baseURL = environment.apiUrl;
  apiRoute = `${this.baseURL}userdetails/mobile/login`;
  user_data;


  loginDetails: any;
  userData: any;
  validation = false;

  loginError = false;
  loginErrorMsg: any;

  email: any;
  emailError = false;
  emailErrorMsg: any;


  password: any;
  passwordError = false;
  passwordErrorMsg: any;

  phone: any;
  phoneError = false;
  phoneErrorMsg: any;

  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {

  }

  ngOnInit() {

  }
  // emailValidator() {
  //   let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   let emailcheck = reg.test(this.email);
  //   if (this.email === '' || this.email === undefined || this.email === null) {
  //     this.emailError = true;
  //     this.emailErrorMsg = 'Email Address Required.'
  //   } else if (!emailcheck) {
  //     this.emailError = true;
  //     this.emailErrorMsg = 'Enter Valid Email Address.'
  //   } else {
  //     this.emailError = false;
  //   }
  // }
  // passwordValidator() {
  //   if (this.password === '' || this.password === undefined || this.password === null) {
  //     this.passwordError = true;
  //     this.passwordErrorMsg = 'Password Required.'
  //   } else {
  //     this.passwordError = false;
  //   }
  // }

  phoneValidator() {
    if (this.phone === '' || this.phone === undefined || this.phone === null) {
      this.phoneError = true;
      this.phoneErrorMsg = 'Phone number Required.'
    } else {
      this.phoneError = false;
    }
  }
  // emailChange(data) {
  //   //console.log(data);
  //   this.email = data;
  //   this.emailValidator();
  // }

  // passwordChange(data) {
  //   //console.log(data);
  //   this.password = data;
  //   this.passwordValidator();
  // }

  phoneChange(data) {
    this.phone = data;
    this.phoneValidator();
  }

  validator() {
    // this.emailValidator();
    // this.passwordValidator();
    this.phoneValidator();
    if (!this.phoneError) {
      this.validation = true;
    } else {
      this.validation = false;
    }
  }
  // addPerson(user_phone:this.phone): Observable<user_phone> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(person);
  //   console.log(body)
  //   return this.http.post<Person>(this.baseURL + 'people', body,{'headers':headers})
  // }
  postUserData() {
    const json_value = { 'user_phone': this.phone }
    return this.http.post<any>(this.apiRoute, json_value)
  }


  logintest1() {
    try {
      this.validator();
      console.log(this.phone, 'phone');
      if (this.validation) {
        this.postUserData().subscribe(data => {
          this.user_data = data;
          this.storage.set('user', this.user_data.Data.user_details);
          this.router.navigate(['/admin/Otp']);
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // if ((this.email == 'petfolio@gmail.com') && (this.password == '12345')) {
  //   this.router.navigateByUrl('/admin/dashboard');
  // } else {
  //   alert('Invalid Account');
  // }

  // this.baseURL = this.router.navigateByUrl('/admin/Otp');
  // this.http.post<Person>(this.baseURL + 'people', body,{'headers':headers})
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  register() {
    this.router.navigateByUrl('/doctor_register');
  }
}


