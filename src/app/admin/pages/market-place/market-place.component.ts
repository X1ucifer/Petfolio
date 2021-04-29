import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  view() {
    this.router.navigateByUrl('/admin_panel/View_Product')
  }
}

