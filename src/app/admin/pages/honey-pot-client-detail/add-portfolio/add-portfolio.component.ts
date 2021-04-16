import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit {
  Name: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;
  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  uploadedFiles: any[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  cancel() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
  addcontact() {

    if (this.con_name != undefined && this.con_name != '' && this.con_role != undefined && this.con_role != '' && this.con_pone != undefined && this.con_pone != '') {
      let obj = { "con_name": this.con_name, "con_role": this.con_role, "con_pone": this.con_pone, }
      this.contactarray.push(obj);
      this.con_name = undefined;
      this.con_role = undefined;
      this.con_pone = undefined;
    }
    else{
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

}
