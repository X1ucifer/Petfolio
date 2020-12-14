import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counts:any;
  rows:any = [{ type: "Dog", name: "dog1" },
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
    searchQR:any;
    doctor_list:any;
    
  constructor(
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this._api.dashboard_count().subscribe((res:any)=>{
      console.log(res)
      this.counts = res.Data;
    });
    this._api.doctor_details_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.doctor_list = response.Data;
        console.log(this.doctor_list);
      }
    );
  }

}
