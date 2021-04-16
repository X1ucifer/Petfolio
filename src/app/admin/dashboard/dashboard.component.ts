// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {MegaMenuItem,MenuItem} from 'primeng/api';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayBasic: boolean;
  payment: boolean = false;
  assets: boolean = false;
  assets1: boolean = false;
  assets2: boolean = false;

  matMenu : any;


  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';


  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';



  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  rows: any = [{ type: "Dog", name: "dog1" },
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
  { type: "Cat", name: "cat1" }];
  searchQR: any;


  data:any = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    };


    data1:any = {
      labels: ['January', 'February', 'March',],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80,]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40,]
          }
      ]
  }

  data2:any= {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    };



  items: MegaMenuItem[];
  login_detail:any;
  DashboardData: any;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.login_detail = this.getFromLocal("login_detail");
    const data = {
      assigned_by: this.login_detail._id
    }
    this._api.getDashboardCount(data).subscribe(data=>{
      if (data['Code'] == 200) {
        this.DashboardData = data['Data'];
      } else {
        this.DashboardData = [];
      }
    })
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  dash() {
    // if(this.name == 'salveo@gmail.com' && this.password == '123456'){
    //   this.router.navigate(['admin_panel']);
    // }
    // else{
    //   alert('Invalid Login Details')
    // }
    // this.router.navigate(['admin_panel/accounts/accounts']);
  }

  logout() {
    this.router.navigate(['']);
  }
  Entity_List() {
    //this.router.navigate(['admin_panel/Super_admin/EntityManagement']);
  }
  Add_Entity() {
    //this.router.navigate(['admin_panel/Super_admin/EntityForm']);
  }
  Client_List() {
    //this.router.navigate(['admin_panel/Clients']);
  }
  Add_Client() {
    //this.router.navigate(['admin_panel/client-form']);
  }
  accallocate() {
    //this.router.navigate(['admin_panel/userflow/accallocate']);
  }
  accworked() {
    //this.router.navigate(['admin_panel/userflow/accworked']);
  }
  accpending() {
    //this.router.navigate(['admin_panel/userflow/accpending']);
  }
  accptptoken() {
    //this.router.navigate(['admin_panel/userflow/accptptoken']);
  }

  creditcardlist() {
    //this.router.navigate(['admin_panel/userflow/creditcardlist']);
  }
  vehicleloanlist() {
    //this.router.navigate(['admin_panel/userflow/vehicleloanlist']);
  }
  personalloanlist() {
    //this.router.navigate(['admin_panel/userflow/personaloanlist']);
  }
  homeloanlist() {
    //this.router.navigate(['admin_panel/userflow/homeloanlist']);
  }
  subsriptionlist() {
    // this.router.navigate(['']);
  }
  organlist() {
    // this.router.navigate(['']);
  }
  clientlist() {
    //this.router.navigate(['admin_panel/Clients']);
  }
  userlist() {
    // this.router.navigate(['']);
  }

  showBasicDialog() {
    //this.displayBasic = true;
  }
  Adhoc() {
    //this.router.navigate(['admin_panel/user/adhoc']);
  }

  pay() {
    this.payment = !this.payment;
  }

  asset() {
    this.assets = !this.assets;
  }

  asset1() {
    this.assets1 = !this.assets1;
  }

  asset2() {
    this.assets2 = !this.assets2;
  }


}
