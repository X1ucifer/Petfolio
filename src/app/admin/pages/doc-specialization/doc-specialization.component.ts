import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-specialization',
  templateUrl: './doc-specialization.component.html',
  styleUrls: ['./doc-specialization.component.css']
})
export class DocSpecializationComponent implements OnInit {
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

