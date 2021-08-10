
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-vendo-header',
  templateUrl: './vendo-header.component.html',
  styleUrls: ['./vendo-header.component.css']
})
export class VendoHeaderComponent implements OnInit {

  displayBasic: boolean;
  admin: string;
  user;
  constructor(

    private router: Router,

    private http: HttpClient,

    @Inject(SESSION_STORAGE) private storage: StorageService


  ) { }

  ngOnInit(): void {
    this.user = this.storage.get('user');
    console.log(this.user.first_name, "header");
    this.admin = this.user.first_name;
  }
  showBasicDialog() {
    this.displayBasic = true;
  }

  logout() {
    this.router.navigateByUrl('/doctorlogin');
  }


}
