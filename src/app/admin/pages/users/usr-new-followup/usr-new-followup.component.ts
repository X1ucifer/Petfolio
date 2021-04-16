import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';
import { UserNewPaymentComponent } from '../user-new-payment/user-new-payment.component';
import { UserNewSettlementComponent } from '../user-new-settlement/user-new-settlement.component';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-usr-new-followup',
  templateUrl: './usr-new-followup.component.html',
  styleUrls: ['./usr-new-followup.component.css']
})
export class UsrNewFollowupComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  FollowUpcolumnDefs = [
    // {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Log Date', field: 'log_date', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Log Type', field: 'log_type', resizable: true, sortable: true, filter: true},
    {headerName: 'FollowUp Date', field: 'fdate', resizable: true, sortable: true, filter: true},
    {headerName: 'Main Status', field: 'mstatus', resizable: true, sortable: true, filter: true},
    {headerName: 'Sub Status', field: 'substatus', resizable: true, sortable: true, filter: true},
    {headerName: 'Remarks', field: 'remarks', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank Code', field: 'bcode', resizable: true, sortable: true, filter: true},
    {headerName: 'Action To Taken', field: 'actiontotake', resizable: true, sortable: true, filter: true},
    {headerName: 'Tracing Tools', field: 'tracingtool', resizable: true, sortable: true, filter: true},
    {headerName: 'Tracing Link', field: 'tracinglink', resizable: true, sortable: true, filter: true},
    {headerName: 'Attachment URL', field: 'attachment_url', resizable: true, sortable: true, filter: true},
    {headerName: 'Created By', field: 'createdby', resizable: true, sortable: true, filter: true},
    {headerName: 'Creator Name', field: 'creator_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Customer ID', field: 'customer_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Client ID', field: 'client_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Product ID', field: 'product_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Portfolio ID', field: 'portfolio_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bucket ID', field: 'bucket_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Fintresle ID', field: 'finterstal_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Passport Numbet', field: 'passport_no', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];
  
  FollowUpForm: FormGroup;
  areaCodeList: any;
  bankCodeList: any;
  fieldvisitCodeList: any;
  mStatusList: any;
  sStatusList: any;
  FollowUpList = [];
  login_Details: any;
  TracingToolsList: any;
  actionstakenList: any;
  userFilter: any = { mstatus_id: '' };
  userFilter2: any = { fvterritary: '' };
  LogTypeList: any[];
  uploaded: boolean;
  showPTP: boolean;
  constructor(public dialog: MatDialog, private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { 
    this.FollowUpForm = this.formBuilder.group({
      _id:['',Validators.required],
      log_date:['',Validators.required],
      log_type:[''],
      no_mapped_account:[''],
      request_type:[''],
      territory:[''],
      fvarea:[''],
      remarks:['',Validators.required],
      mstatus:['',Validators.required],
      substatus:['',Validators.required],
      fdate:[''],
      bcode:['',Validators.required],
      ptp_amount:[''],
      ptp_status:[''],
      actiontotake:[''],
      actiontaken:[''],
      tracingtool:[''],
      tracinglink:[''],
      createdby:['',Validators.required],
      creator_name:['',Validators.required],
      customer_id:['',Validators.required],
      client_id :['',Validators.required],
      bank_id :['',Validators.required],
      product_id :['',Validators.required],
      portfolio_id :['',Validators.required],
      bucket_id :['',Validators.required],
      finterstal_id :['',Validators.required],
      passport_no :['',Validators.required]
    })
  }

  ngOnInit(): void {

    this.showPTP = false;
    
    this._api.getlist_area_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.areaCodeList = data['Data'];
      } else {
        this.areaCodeList = [];
      }
    });
    this._api.getlist_bank_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.bankCodeList = data['Data'];
      } else {
        this.bankCodeList = [];
      }
    });
    this._api.getlist_fieldvisit_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.fieldvisitCodeList = data['Data'];
      } else {
        this.fieldvisitCodeList = [];
      }
    });
    this._api.getlist_mainStatus_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.mStatusList = data['Data'];
      } else {
        this.mStatusList = [];
      }
    });

    this._api.getlist_subStatus_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.sStatusList = data['Data'];
      } else {
        this.sStatusList = [];
      }
    });

    this._api.getlist_tracingtools().subscribe(data=>{
      if (data['Code'] == 200) {
        this.TracingToolsList = data['Data'];
      } else {
        this.TracingToolsList = [];
      }
    });

    this._api.getlist_actionstaken().subscribe(data=>{
      if (data['Code'] == 200) {
        this.actionstakenList = data['Data'];
      } else {
        this.actionstakenList = [];
      }
    });

    this._api.getlist_new_logtype().subscribe(data=>{
      if (data['Code'] == 200) {
        this.LogTypeList = data['Data'];
      } else {
        this.LogTypeList = [];
      }
    });

    

    this.login_Details = this.getFromLocal("login_Details");
    this.FollowUpForm.patchValue({
      createdby: this.login_Details.email_id,
      creator_name: this.login_Details.name,
      customer_id: localStorage.getItem("Customer_ID"),
      client_id : localStorage.getItem("Client_ID"),
      bank_id : localStorage.getItem("Bank_ID"),
      product_id : localStorage.getItem("Product_ID"),
      portfolio_id : localStorage.getItem("Portfolio_ID"),
      bucket_id : localStorage.getItem("Bucket_ID"),
      finterstal_id : localStorage.getItem("Fintrestle_ID"),
      passport_no : localStorage.getItem("Passport_Number"),
    })
    this._api.getlist_new_FollowUp(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.FollowUpList = data['Data'];
      } else {
        this.FollowUpList = null;
      }
    });
  }

  getFile(event){
    this.uploaded = false;
    const File = event.target.files[0];
    console.log(File);
    this._api.uploadFile(File).subscribe(data=>{
      if (data['Code'] = 200) {
        this.FollowUpForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = true;
      } else {
        this.FollowUpForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = false;
      }
    })
  }

  onMstatus(event){
    this.userFilter.mstatus_id = event.target.value;
    console.log(event.target.value);
    
    if (event.target.value == "PTP") {
      this.showPTP = true;
    } else {
      this.showPTP = false;
    }
  }

  onterritory(event){
    this.userFilter2.fvterritary = event.tagert.value;
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  ShowPaymentsRecord(){
    const dialogRef = this.dialog.open(UserNewPaymentComponent, {
      height: '550px',
      width:'90%',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ShowSettlementsRecord(){
    const dialogRef = this.dialog.open(UserNewSettlementComponent, {
      height: '550px',
      width:'90%',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addNewFollowUp(){
    this.FollowUpForm.patchValue({
      _id:new Date().getTime(),
      log_date:new Date()
    })
    if (this.FollowUpForm.valid) {
      this._api.create_new_FollowUp(this.FollowUpForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          this.onPagereload();
          alert(data['Message']);
        } else {
          alert(data['Message']);
        }
      });
    } else {
      console.log(this.FollowUpForm.value);
      
      alert('Form No Valid');
    }
  }

  onPagereload(){
      this._api.getlist_new_FollowUp(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.FollowUpList = data['Data'];
        } else {
          this.FollowUpList = null;
        }
      });
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

}
