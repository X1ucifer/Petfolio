import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsrAddressdetailsComponent } from '../usr-addressdetails/usr-addressdetails.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-usr-customerdetails',
  templateUrl: './usr-customerdetails.component.html',
  styleUrls: ['./usr-customerdetails.component.css']
})
export class UsrCustomerdetailsComponent implements OnInit {

  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" }]

  }
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }

 
}

