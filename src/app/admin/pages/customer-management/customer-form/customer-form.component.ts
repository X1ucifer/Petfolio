import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  Name:any;
  Type:any;
  Breed:any;
  Gender:any;
  Color:any;
  Weight:any;
  Age:any;
  Vaccinated:any=[];
  Details:any;
  Vaccinated_date:any;
  vacinated_array:any=[
    {"y":"Yes"},
    {"y":"No"},
  ];
  gender_array:any=[
    {"y":"Male"},
    {"y":"Female"},
  ];
  breed_array:any=[];
  type_array:any=[];
  color_array:any=[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }
  cancel() {
    this.router.navigateByUrl('/admin_panel/Pet_list')
  }
}
