import { Component, OnInit, Inject } from '@angular/core';
import * as XLSX from 'xlsx';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
type AOA = any[][];
@Component({
  selector: 'app-reallowexcel',
  templateUrl: './reallowexcel.component.html',
  styleUrls: ['./reallowexcel.component.css']
})
export class ReallowexcelComponent implements OnInit {
  displayPosition: boolean;
  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    // private router: Router
  ) { }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    ]



  }
  client_form() {
    // this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    // this.router.navigateByUrl('/admin_panel/Client_profile')
  }

  showPositionDialog() {
    this.displayPosition = true;
}
cus360(){
  // this.router.navigateByUrl('/admin_panel/user/createuser')
}
}
