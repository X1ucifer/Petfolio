import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit {
  Name:any;
  email:any;
  Contact:any;
  registration:any;
  uploadedFiles: any[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
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
}
