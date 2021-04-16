import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-usr-screenaccesscontrolone',
  templateUrl: './usr-screenaccesscontrolone.component.html',
  styleUrls: ['./usr-screenaccesscontrolone.component.css']
})
export class UsrScreenaccesscontroloneComponent implements OnInit {

 
  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = [{ type: "Dog", name: "dog1" }]

  }
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
}
