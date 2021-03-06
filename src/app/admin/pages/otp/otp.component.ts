import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  baseURL = environment.apiUrl;
  apiRoute = `${this.baseURL}userdetails/mobile/login`;
  user_data;
  user;
  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.user = this.storage.get('user');
  }
  otp: string;
  showOtpComponent = true;
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
  onOtpChange(otp) {
    this.otp = otp;
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  toggleDisable() {
    if (this.ngOtpInput.otpForm) {
      if (this.ngOtpInput.otpForm.disabled) {
        this.ngOtpInput.otpForm.enable();
      } else {
        this.ngOtpInput.otpForm.disable();
      }
    }
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }
  postUserData() {
    const json_value = { 'user_phone': this.user.user_phone }
    return this.http.post<any>(this.apiRoute, json_value)
  }
  submit() {
    // console.log(this.otp, "otp");
    // console.log(this.user.otp, "user_otp");
    if (this.otp == this.user.otp) {
      const name = `${this.user.first_name}_${this.user.last_name}`

      this.router.navigate(['/admin/dashboard', name]);
    }
    else {
      console.log('otp error');
    }

  }
  Resend() {
    console.log(this.user.user_phone);
    this.postUserData().subscribe(data => {
      this.user_data = data;
      this.storage.set('user', this.user_data.Data.user_details);
    })
    this.submit();
  }
}
