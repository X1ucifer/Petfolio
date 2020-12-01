import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  view_detail: any;
  view_detail_data:any;
  rows = [{ type: "Dog", name: "dog1" },
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
    private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.view_detail = this.getFromLocal('view_detail');
    this.view_detail_data = this.getFromLocal('view_detail_data');
    console.log(this.view_detail_data);
  }
  back() {
    this.location.back();
  }
  goToLink1(url: string) {
    window.open(url, "_blank");
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  verify(status,id){
    let a = {
      '_id' : id,
      'profile_verification_status' : status,
     };
    this._api.doctor_details_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert("Updated Successfully");
      this.ngOnInit();
    }
  );
}
}
