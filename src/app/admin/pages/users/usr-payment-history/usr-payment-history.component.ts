import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-payment-history',
  templateUrl: './usr-payment-history.component.html',
  styleUrls: ['./usr-payment-history.component.css']
})
export class UsrPaymentHistoryComponent implements OnInit {

  
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
