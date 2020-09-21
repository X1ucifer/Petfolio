import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {
  rows = [];
  searchQR:any;
  value1:any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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
service_form() {
    this.router.navigateByUrl('/admin_panel/Customer_form')
  }
  back(){
    this.router.navigateByUrl('/admin_panel/Customer_Management')
  }
}
