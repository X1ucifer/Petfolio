import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dedupe',
  templateUrl: './dedupe.component.html',
  styleUrls: ['./dedupe.component.css']
})
export class DedupeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
