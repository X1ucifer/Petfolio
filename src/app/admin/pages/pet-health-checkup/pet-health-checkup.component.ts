import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-health-checkup',
  templateUrl: './pet-health-checkup.component.html',
  styleUrls: ['./pet-health-checkup.component.css']
})
export class PetHealthCheckupComponent implements OnInit {
  rows = [];
  searchQR:any;
  value1:any;
  constructor() { }

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

}
