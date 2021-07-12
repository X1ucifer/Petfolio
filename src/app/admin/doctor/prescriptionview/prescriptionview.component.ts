import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-prescriptionview',
  templateUrl: './prescriptionview.component.html',
  styleUrls: ['./prescriptionview.component.css']
})
export class PrescriptionviewComponent implements OnInit {

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
