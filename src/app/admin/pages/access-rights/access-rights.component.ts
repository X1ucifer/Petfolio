import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-rights',
  templateUrl: './access-rights.component.html',
  styleUrls: ['./access-rights.component.css']
})
export class AccessRightsComponent implements OnInit {
  Country: any;
  Currency: any;
  searchQR: any;
  rows: any;
  typ: any = [{ "y": "User-1" },
  { "y": "User-2" }];
  Cli:any;
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = [{ name: "Dashboard" },
    { name: "Client Master/Clients Management" },
    { name: "Client Master/Product Management" },
    { name: "Client Master/Bucket management" },
    { name: "Client Master/Table/Field Creation" },
    { name: "Client Master/Client Status Marking" },
    { name: "User Master/User Role" },
    { name: "User Master/User Group" },
    { name: "User Master/User Management" },
    { name: "User Master/User Status Marking" },
    { name: "Access Rights" },
    { name: "Master/Set Predefined Fields" },
    { name: "Master/Country & Currency Management" }]

  }

}
