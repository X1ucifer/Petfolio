import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-doctor-support',
  templateUrl: './doctor-support.component.html',
  styleUrls: ['./doctor-support.component.css']
})
export class DoctorSupportComponent implements OnInit {

  constructor(
    
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
  ) {
    let login = false
    login = this.getFromLocal('login');
    console.log(login)
    if (login != true) {
      this.router.navigateByUrl('/doctorlogin');

    }
   }

  ngOnInit(): void {
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
