import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-repayment',
  templateUrl: './usr-repayment.component.html',
  styleUrls: ['./usr-repayment.component.css']
})
export class UsrRepaymentComponent implements OnInit {

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
