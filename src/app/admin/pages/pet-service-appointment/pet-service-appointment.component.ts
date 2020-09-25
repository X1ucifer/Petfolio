import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-service-appointment',
  templateUrl: './pet-service-appointment.component.html',
  styleUrls: ['./pet-service-appointment.component.css']
})
export class PetServiceAppointmentComponent implements OnInit {
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


  constructor() { }

  ngOnInit(): void {
  }

}