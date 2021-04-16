import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  isLoading: boolean = false;
  email_id: any;
  password: any;
  forget: boolean = false;
  validation = false;

  loginError = false;
  loginErrorMsg: any;

  email: any;
  emailError = false;
  emailError1 = false;
  emailErrorMsg: any;
  validation1 = false;
  email_id1:any;
  passwordError = false;
  passwordErrorMsg: any;
  constructor(private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  login() {
    // if(this.name == 'salveo@gmail.com' && this.password == '123456'){
    //   this.router.navigate(['admin_panel']);
    // }
    // else{
    //   alert('Invalid Login Details')
    // }
    this.router.navigate(['Dashboard_Main']);
  }

  forgot() {
    this.forget = true;
  }
  backtologin() {
    this.forget = false;
  }

  emailValidator() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.email);
    if (this.email === '' || this.email === undefined || this.email === null) {
      this.emailError = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError = false;
    }
  }
  passwordValidator() {
    if (this.password === '' || this.password === undefined || this.password === null) {
      this.passwordError = true;
      this.passwordErrorMsg = 'Password Required.'
    } else {
      this.passwordError = false;
    }
  }

  emailChange(data) {
    //console.log(data);
    this.email = data;
    this.emailValidator();
  }

  passwordChange(data) {
    //console.log(data);
    this.password = data;
    this.passwordValidator();
  }


  emailValidator1() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.email);
    if (this.email === '' || this.email === undefined || this.email === null) {
      this.emailError1 = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError1 = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError1 = false;
    }
  }
  emailChange1(data) {
    //console.log(data);
    this.email = data;
    this.emailValidator1();
  }
  validator() {
    this.emailValidator();
    this.passwordValidator();
    if (!this.emailError && !this.passwordError) {
      this.validation = true;
    } else {
      this.validation = false;
    }
  }
  logintest1() {
    // this.router.navigateByUrl('/Dashboard_Main');
    this.validator();
    if (this.validation) {
      let a = {
        "email_id": this.email_id,
        "password": this.password
      }
      this._api.login(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          if (response.Code == 200) {

            console.log("login_detail",response.Data);

            this.saveInLocal("login_detail", response.Data);
            this.saveInLocal("User_ID",response.Data['_id']);
            this.saveInLocal("Client_ID",response.Data['client_id'] || '1');
            this.saveInLocal("Designation_ID",response.Data['client_id'] || '1');
            this.saveInLocal("Designation_Name",response.Data['designation']);

            Swal.fire({
              // title: 'Are you sure?',
              text: 'Welcome to Fintrestle',
              icon: 'success',
              showCancelButton: false,
              timer: 1800
            }).then(()=>{
              this.router.navigateByUrl('/admin_panel');
            });
            this.saveInLocal("login_Details", response.Data);
            
            // this.saveInLocal("client_id", '1');
            // this.saveInLocal("client_name", 'Mohammed Client');
            // if(response.Data.Clinet_name != undefined){
            //   this.saveInLocal("login_type", "Organization")
            //
            //   let a = this.getFromLocal("login_type")
            //   console.log(a)
            // }
            // else{
            //   this.saveInLocal("login_type", "Super_Admin")
            //   this.router.navigateByUrl('/Dashboard_Main');
            //   let a = this.getFromLocal("login_type")
            //   console.log(a)
            // }

          }
          else {
            alert('Invalid Account');
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

  validator1() {
    this.emailValidator1();
    if (!this.emailError1) {
      this.validation1 = true;
    } else {
      this.validation1 = false;
    }
    console.log( this.validation1)
  }
  Forgotpass() {
    // this.router.navigateByUrl('/Dashboard_Main');
    this.validator1();
    if (this.validation) {
      let a = {
        "username": this.email_id1,
      }
      console.log(a)
      this._api.Forgot_password(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          if (response.Code == 200) {
            alert('Password sent to your mail id successfully');
            this.forget = false;
          }
          else {
            alert('Invalid Account');
          }

        }
      );
    }
  }
}
