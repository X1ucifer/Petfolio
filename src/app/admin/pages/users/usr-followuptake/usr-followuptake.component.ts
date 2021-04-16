import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UsrSettlementRecordingComponent } from './../usr-settlement-recording/usr-settlement-recording.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-usr-followuptake',
  templateUrl: './usr-followuptake.component.html',
  styleUrls: ['./usr-followuptake.component.css']
})
export class UsrFollowuptakeComponent implements OnInit {
  table_v:boolean = false;
  table_s:boolean = false;
  rows = [];
  searchQR: any;
  value1: any;
  FollowUpForm: FormGroup;
  followupList: any;
  login_Details: any;

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api:ApiService,
    private formBuilder:FormBuilder,
    private router: Router,
    public dialog: MatDialog,
  ) {
    
  }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.FollowUpForm = this.formBuilder.group({
      createdby:  ['',Validators.required],
      creator_name:  ['',Validators.required],
      customer_id:  ['',Validators.required],
      action_date:  ['',Validators.required],
      action_start_time : ['',Validators.required],
      action_code : ['',Validators.required],
      contact_mode : ['',Validators.required],
      person_contacted : ['',Validators.required],
      place_contacted : ['',Validators.required],
      currency: ['',Validators.required],
      action_amount: ['',Validators.required],
      action_amount_base_currency: ['',Validators.required],
      next_action_date: ['',Validators.required],
      next_action_time: ['',Validators.required],
      remainder_mode: ['',Validators.required],
      contacted_by: ['',Validators.required],
      remarks: ['',Validators.required],
      cutsomer_memo_line: ['',Validators.required],
    });
    this.login_Details = this.getFromLocal("login_Details");
    this.FollowUpForm.patchValue({
      createdby: this.login_Details.email_id,
      creator_name: this.login_Details.name,
      customer_id: localStorage.getItem("Customer_ID"),
    })
    this._api.list_FollowUp_getlist(localStorage.getItem("Customer_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.followupList = data['Data'];
      } else {
        this.followupList = null;
      }
    });
    
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  getMemo(event){
    this.FollowUpForm.patchValue({
      cutsomer_memo_line:event.target.value
    })
  }

  addFollowup(){
    
    console.log(this.FollowUpForm.value);
    
    this.FollowUpForm.patchValue({
      action_date:new Date(this.FollowUpForm.value.action_date),
      next_action_date:new Date(this.FollowUpForm.value.next_action_date)
    })
    if (this.FollowUpForm.valid) {
     this._api.add_FollowUp_create(this.FollowUpForm.value).subscribe(data=>{
      if (data['Code'] == 200) {
        alert("Successfully added to database "+data['Message'])
      } else {
        alert("Failed: "+data['Message'])
      }
     });
    } else {
      alert("Form not Valid");
    }
  }

  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
  close(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to close it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.dialog.closeAll();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
    
  }
  show() {
    const dialogRef = this.dialog.open(UsrSettlementRecordingComponent, {
      height: '600px',
      width:'90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  refreshList(){
    this._api.list_FollowUp_getlist(localStorage.getItem("Customer_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.followupList = data['Data'];
      } else {
        this.followupList = null;
      }
    }); 
  }
  
}

