import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-status-marking',
  templateUrl: './client-status-marking.component.html',
  styleUrls: ['./client-status-marking.component.css']
})
export class ClientStatusMarkingComponent implements OnInit {
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
  User_form() {
    this.router.navigateByUrl('/admin_panel/user/user_form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
}
