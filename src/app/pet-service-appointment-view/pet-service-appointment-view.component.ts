import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-pet-service-appointment-view',
  templateUrl: './pet-service-appointment-view.component.html',
  styleUrls: ['./pet-service-appointment-view.component.css']
})
export class PetServiceAppointmentViewComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.storage.get('View_Pet_Service_appointment'));
    if (this.storage.get('View_Pet_Service_appointment') == null || this.storage.get('View_Pet_Service_appointment') == undefined) {
      this.router.navigateByUrl('admin/Pet_Service_appointment');
    } else {
      
    }
  }

}
