import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-agent-to-do-list',
  templateUrl: './agent-to-do-list.component.html',
  styleUrls: ['./agent-to-do-list.component.css']
})
export class AgentTODOListComponent implements OnInit {
  rows = [];
  searchQR: any;
  value1: any;
  Name: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;
  rangeValues: number[] = [0,100];
  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  type: any = [
    { "y": "Direct" },
    { "y": "Transferred" },
    { "y": "Temporary" },
  ];
  typ: any = [
    { "y": "New" },
    { "y": "updated" },
    { "y": "re-activated" },
  ];
  constructor(
    private router: Router
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
  acc_list() {
    this.router.navigateByUrl('/admin_panel/user/user_form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
  cus360(){
    this.router.navigateByUrl('/admin_panel/user/createuser')
  }
}