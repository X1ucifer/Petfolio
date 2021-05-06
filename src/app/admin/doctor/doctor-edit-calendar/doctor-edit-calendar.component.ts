import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-edit-calendar',
  templateUrl: './doctor-edit-calendar.component.html',
  styleUrls: ['./doctor-edit-calendar.component.css']
})
export class DoctorEditCalendarComponent implements OnInit {

  selectedCities: string[] = [];

  checked = false;
  indeterminate = false;

  selectedValues: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Filter(){
    console.log(this.selectedValues);
    this.router.navigateByUrl('/doctor-admin/doctor-edit-calendar-time');
  }
}
