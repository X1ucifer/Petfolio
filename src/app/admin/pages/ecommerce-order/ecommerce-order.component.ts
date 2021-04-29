import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-ecommerce-order',
  templateUrl: './ecommerce-order.component.html',
  styleUrls: ['./ecommerce-order.component.css']
})
export class EcommerceOrderComponent implements OnInit {
  searchQR:any;
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
    { type: "Cat", name: "cat1" }]


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  view_order(){
    this.router.navigateByUrl('/admin_panel/View_order')
  }
}
