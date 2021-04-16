import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-report',
  templateUrl: './usr-report.component.html',
  styleUrls: ['./usr-report.component.css']
})
export class UsrReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
