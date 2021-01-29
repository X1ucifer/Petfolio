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


live_status_change(status, id) {
  let a = {
    '_id': id,
    "live_by": "Super Admin",
    "live_status": status
  };
  this._api.doctor_details_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert("Updated Successfully");
      this.ngOnInit();
    }
  );
}

delete_pet(data) {
  let a = {
    '_id': data
  };
  console.log(a);
  this._api.pet_detail_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert('Deleted Successfully');
      let b = {
        'user_id': this.view_detail_data.userdetailsModels[0]._id
      };
      console.log(b);
      this._api.single_user_detail(b).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.view_detail_data = response.Data;
          console.log(this.view_detail_data);
        }
      );
    }
  );
}
delete_loc(data) {
  let a = {
    '_id': data
  };
  console.log(a);
  this._api.customer_location_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert('Deleted Successfully');
      let b = {
        'user_id': this.view_detail_data.userdetailsModels[0]._id
      };
      console.log(b);
      this._api.single_user_detail(b).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.view_detail_data = response.Data;
          console.log(this.view_detail_data);
        }
      );
    }
  );
}
}
