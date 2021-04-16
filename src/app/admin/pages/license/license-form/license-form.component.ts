import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-license-form',
  templateUrl: './license-form.component.html',
  styleUrls: ['./license-form.component.css']
})
export class LicenseFormComponent implements OnInit {
  Name: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;
  License: any;
  admin: any;
  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  email:any;
  adminlist: any = [
    { "y": "User-1" },
  ];
  Password:any;
  uploadedFiles: any[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  cancel() {
    this.router.navigateByUrl('/admin_panel/License')
  }
  addcontact() {

    if (this.con_name != undefined && this.con_name != '' && this.email != undefined && this.email != '' && this.con_pone != undefined && this.con_pone != '' && this.Password != undefined && this.Password != '') {
      let obj = { "con_name": this.con_name,"email": this.email,"password":this.Password, "con_role": this.con_role, "con_pone": this.con_pone, }
      this.contactarray.push(obj);
      this.con_name = undefined;
      this.con_role = undefined;
      this.con_pone = undefined;
    }
    else {
      alert("fill all the required fields")
    }
  }
  remove_contact(i) {
    this.contactarray.splice(i, 1);

  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles)
    }

  }

  adduser() {
    if (this.admin != undefined) {
      this.con_name = "User-1";
      this.email = "test@gmail.com";
      this.con_pone = "9876543210";
    }
  }
}
