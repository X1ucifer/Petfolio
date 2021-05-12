import { Component, OnInit, Inject } from '@angular/core';
import { ExcelService } from '../../../excel.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../../api.service';
import { Router, RouterModule } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-doctor-notification',
  templateUrl: './doctor-notification.component.html',
  styleUrls: ['./doctor-notification.component.css']
})
export class DoctorNotificationComponent implements OnInit {

  notification_list: any;
  searchQR: any;
  user_detail;
  rows: any = [{ type: "Dog", name: "dog1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" }]

  constructor(
    private toastr: ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private datePipe: DatePipe,
    private excelService: ExcelService,
  ) { }

  ngOnInit(): void {
    this.notifications();
  }

  notifications() {
    this.user_detail = { "user_id": "603e27792c2b43125f8cb802" };
    this._api.notification_list(this.user_detail).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.notification_list = response.Data;
      }
    )
  }
}
