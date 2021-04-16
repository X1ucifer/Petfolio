import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-collateraldetailss',
  templateUrl: './usr-collateraldetailss.component.html',
  styleUrls: ['./usr-collateraldetailss.component.css']
})
export class UsrCollateraldetailssComponent implements OnInit {

  rows = [];
  searchQR: any;
  value1: any;
  constructor() { }

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

}

