import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-care-appointment',
  templateUrl: './pet-care-appointment.component.html',
  styleUrls: ['./pet-care-appointment.component.css']
})
export class PetCareAppointmentComponent implements OnInit {
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
