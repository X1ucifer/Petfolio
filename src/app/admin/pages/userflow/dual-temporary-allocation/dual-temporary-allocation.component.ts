import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dual-temporary-allocation',
  templateUrl: './dual-temporary-allocation.component.html',
  styleUrls: ['./dual-temporary-allocation.component.css']
})
export class DualTemporaryAllocationComponent implements OnInit {
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
