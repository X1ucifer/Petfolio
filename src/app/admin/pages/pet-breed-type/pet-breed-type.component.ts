import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-breed-type',
  templateUrl: './pet-breed-type.component.html',
  styleUrls: ['./pet-breed-type.component.css']
})
export class PetBreedTypeComponent implements OnInit {
  rows = [];
  searchQR:any;
  value1:any;
  selectedtype:any;
  type:any=[];
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
