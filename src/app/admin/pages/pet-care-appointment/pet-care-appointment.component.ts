import { Component, OnInit ,Inject} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router, RouterModule } from '@angular/router'; 
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-pet-care-appointment',
  templateUrl: './pet-care-appointment.component.html',
  styleUrls: ['./pet-care-appointment.component.css']
})
export class PetCareAppointmentComponent implements OnInit {
  searchQR:any;
  appointment_list:any;
  rows:any = [{ type: "Dog", name: "dog1" },
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
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.listpettype();
  }

  listpettype() {
    this._api.appointment_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.appointment_list = response.Data;
        console.log(this.appointment_list);
      }
    );
  }
  view_details(item) {
    this.saveInLocal('view_detail_data', item);
    this.saveInLocal('view_detail', 'Appointment')
    this.router.navigateByUrl('/admin/View_details')
 
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
