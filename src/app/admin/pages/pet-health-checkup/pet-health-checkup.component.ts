import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pet-health-checkup',
  templateUrl: './pet-health-checkup.component.html',
  styleUrls: ['./pet-health-checkup.component.css']
})
export class PetHealthCheckupComponent implements OnInit {
  rows = [];
  searchQR:any;
  checkup_type:any;
  CheckupList: any;
  constructor(public toastr: ToastrManager, private apiService:ApiService) { }

  ngOnInit(): void {

    this.ListCheckup();
  }

  ListCheckup() {
    this.apiService.pet_list_checkup_type().subscribe(data=>{
      if (data['success']) {
        this.showSuccess(data['message']);
        this.CheckupList = data['data'];
      } else {
        this.showError(data['message']);
      }
    });
  }

  getUploadFile(event){
    const File = event.tagert.files[0];
    console.log(File);
    
  }

  addCheckupType(){
    if (this.checkup_type != null || this.checkup_type != undefined) {
      this.apiService.pet_add_checkup_type({}).subscribe(data=>{
        if (data['success']) {
          this.showSuccess(data['message']);
          this.OnreloadPage();
        } else {
          this.showSuccess(data['message']);
        }
      })
    } else {
      this.showWarning("Please Fill Checkup TYPE !");
    }
  }

  viewCheckupType(id){

  }

  editCheckupType(id){

  }

  updateCheckupType(){

  }

  deleteCheckupType(id){

  }

  OnreloadPage(){
    this.ListCheckup();
  }

  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
      this.toastr.errorToastr(msg);
  }

  showWarning(msg) {
      this.toastr.warningToastr(msg);
  }



}
