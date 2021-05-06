import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-edit-calendar-time',
  templateUrl: './doctor-edit-calendar-time.component.html',
  styleUrls: ['./doctor-edit-calendar-time.component.css']
})
export class DoctorEditCalendarTimeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedCities: string[] = [];

  Filter(){
  console.log("submitted");
  }
}
