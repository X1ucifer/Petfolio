import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reallowsingle',
  templateUrl: './reallowsingle.component.html',
  styleUrls: ['./reallowsingle.component.css']
})
export class ReallowsingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
