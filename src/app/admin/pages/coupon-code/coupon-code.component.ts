import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coupon-code',
  templateUrl: './coupon-code.component.html',
  styleUrls: ['./coupon-code.component.css']
})
export class CouponCodeComponent implements OnInit {
  Name: any;
  Email: any;
  Designation: any;
  Phone: string = '';
  Access: any;
  selectaccess: any;
  dropdownSettings: IDropdownSettings = {};
  Category : any = [
    { label: "E-Commerce", value: "E-Commerce" },
    { label: "Pet care", value: "Pet care" },
    { label: "Pet services", value: "Pet services" }
  ];
  Vendors : any = [
    { label: "E-Commerce", value: "E-Commerce" },
    { label: "Pet care", value: "Pet care" },
    { label: "Pet services", value: "Pet services" }
  ];
  emailError: boolean = false;
  emailErrorMsg: any;
  phoneError: any;
  Password: any;
  valid: boolean = false;
  selectedItems:any;
  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'label',
      textField: 'value',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {

  }
  onSelectAll(items: any) {

  }
  create() {
   
  };
  refresh() {
    this.Name = undefined;
    this.Email = undefined;
    this.Designation = undefined;
    this.Phone = '';
    this.selectaccess = [];
    this.emailError = false;
    this.phoneError = false;
    this.Password = undefined;
  };
  emailChange(event) {
    this.emailValidator();
  }
  phonechange() {
    if (+this.Phone.length != 10) {
      this.phoneError = true;
      console.log(+this.Phone.length)
    }
    else {
      this.phoneError = false;
    }
  }

  emailValidator() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.Email);
    if (this.Email === '' || this.Email === undefined || this.Email === null) {
      this.emailError = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError = false;
    }
  }
  _keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
  validation() {
    if (
      (this.Name != undefined && this.Name != '') &&
      (this.Email != undefined && this.Email != '') &&
      (this.Designation != undefined && this.Designation != '') &&
      (this.Phone != '' && this.Phone != undefined) &&
      this.selectaccess.length > 0 &&
      this.emailError != true && this.phoneError != true &&
      (this.Password != undefined && this.Password != '')
    ) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }
}
