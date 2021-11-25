import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-admin',
  templateUrl: './doctor-admin.component.html',
  styleUrls: ['./doctor-admin.component.css']
})
export class DoctorAdminComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit(): void {



    let login_check = this.storage.get("doctor_login_cache");
    console.log(login_check);
    if(login_check == true){
    }else{
      this.router.navigateByUrl('/doctorlogin');
    }



  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

}
