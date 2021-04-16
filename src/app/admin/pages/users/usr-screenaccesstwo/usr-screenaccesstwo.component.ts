import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-screenaccesstwo',
  templateUrl: './usr-screenaccesstwo.component.html',
  styleUrls: ['./usr-screenaccesstwo.component.css']
})
export class UsrScreenaccesstwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
