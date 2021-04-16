import { Component, Inject, OnInit } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-usr-phonedetails',
  templateUrl: './usr-phonedetails.component.html',
  styleUrls: ['./usr-phonedetails.component.css']
})
export class UsrPhonedetailsComponent implements OnInit {
  loadedRecord: any;
  dataList: any;
  CustomerData: any;

  constructor( @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.storage.get("_storedRecord")) {
      this.loadedRecord = this.storage.get("_storedRecord")
      console.log(this.loadedRecord);
      this.dataList = this.loadedRecord.dataList;
      this.CustomerData = this.loadedRecord.keyvalue;
      
      localStorage.setItem("Customer_ID",this.CustomerData.Passport_Number);
    } else {
      this.loadedRecord = null;
    }
  }

}
