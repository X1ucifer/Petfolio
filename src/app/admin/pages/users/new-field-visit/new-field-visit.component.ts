import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import * as moment from 'moment';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-field-visit',
  templateUrl: './new-field-visit.component.html',
  styleUrls: ['./new-field-visit.component.css']
})
export class NewFieldVisitComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  FieldVisitcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Territory Name', field: 'fieldvisitterritory', resizable: true, sortable: true, filter: true},
    {headerName: 'Area Name', field: 'fieldvisitarea', resizable: true, sortable: true, filter: true},
    {headerName: 'First Address', field: 'firstaddress', resizable: true, sortable: true, filter: true},
    {headerName: 'Second Address', field: 'secondaddress', resizable: true, sortable: true, filter: true},
    {headerName: 'Requested Date', field: 'fvrqdate', resizable: true, sortable: true, filter: true},
    {headerName: 'Remarks', field: 'remarks', resizable: true, sortable: true, filter: true},
    {headerName: 'Attachment URL', field: 'attachment_url', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', resizable: true, sortable: true, filter: true},
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
  ];
  
  FieldVisitForm: FormGroup;
  areaCodeList: any;
  bankCodeList: any;
  fieldvisitCodeList: any;
  mStatusList: any;
  sStatusList: any;
  FieldVisitList = [];
  login_Details: any;
  TracingToolsList: any;
  actionstakenList: any;
  uploaded: boolean;
  CoordinatorsList: any;
  coordinatorArea: any;
  coordinatorTRT: any;
  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { 
    this.FieldVisitForm = this.formBuilder.group({
      _id:['',Validators.required],
      account_id:['',Validators.required],
      fieldvisitterritory:['',Validators.required],
      fieldvisitarea:['',Validators.required],
      firstaddress:['',Validators.required],
      secondaddress:[''],
      fvrqdate:['',Validators.required],
      remarks:['',Validators.required],
      reportingto_id:['',Validators.required],
      assigned_coordinator:['',Validators.required],
      assigned_agent:[''],
      approval_status :[''],
      attachment_url :[''],
      createdby:['',Validators.required],
      creator_name:['',Validators.required],
      status :['',Validators.required],
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
    this.coordinatorTRT = "";
    this.coordinatorArea = "";
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

    this.login_Details = this.getFromLocal("login_Details");
    this.FieldVisitForm.patchValue({
      createdby: this.login_Details.email_id,
      creator_name: this.login_Details.name,
      customer_id: localStorage.getItem("Customer_ID"),
      account_id:localStorage.getItem("Account_ID"),
      client_id : localStorage.getItem("Client_ID"),
      bank_id : localStorage.getItem("Bank_ID"),
      product_id : localStorage.getItem("Product_ID"),
      portfolio_id : localStorage.getItem("Portfolio_ID"),
      bucket_id : localStorage.getItem("Bucket_ID"),
      finterstal_id : localStorage.getItem("Fintrestle_ID"),
      passport_no : localStorage.getItem("Passport_Number"),
    })
    this._api.getlist_new_fieldvisit(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.FieldVisitList = data['Data'];
      } else {
        this.FieldVisitList = null;
      }
    });
    this._api.findReportTo(this.login_Details._id).subscribe(data=>{
      if (data['Code'] == 200) {
        this.FieldVisitForm.patchValue({
          reportingto_id: data['Data'].member_reporting_to_id
        });
      } else {
        this.FieldVisitForm.patchValue({
          reportingto_id: ""
        });
      }
    })
  }

  getFile(event){
    this.uploaded = false;
    const File = event.target.files[0];
    console.log(File);
    this._api.uploadFile(File).subscribe(data=>{
      if (data['Code'] = 200) {
        this.FieldVisitForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = true;
      } else {
        this.FieldVisitForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = false;
      }
    })
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  addNewFieldVisit(){
    this.FieldVisitForm.patchValue({
      _id:new Date().getTime(),
      log_date:new Date()
    });
    console.log(this.FieldVisitForm.value);
    
    if (this.FieldVisitForm.valid) {
      this._api.create_new_fieldvisit(this.FieldVisitForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          this.onPagereload();
          alert(data['Message']);
        } else {
          alert(data['Message']);
        }
      });
    } else {
      console.log(this.FieldVisitForm.value);
      
      alert('Form No Valid');
    }
  }

  ontrtchange(event){
    this.coordinatorTRT = event.target.value;
    this.getCoordinatorsList(this.coordinatorArea,this.coordinatorTRT,"Field Visit Coordinator");
  }
  onareachange(event){
    this.coordinatorArea = event.target.value;
    this.getCoordinatorsList(this.coordinatorArea,this.coordinatorTRT,"Field Visit Coordinator");
  }

  getCoordinatorsList(area, territory, designation){
    const data = {
      fieldvisitterritory:territory,
      fieldvisitarea:area,
      designation:designation
    }
    this._api.getFieldVisitagents(data).subscribe(data=>{
      if (data['Code'] == 200) {
        this.CoordinatorsList = data['Data'];
      } else {
        this.CoordinatorsList = [];
      }
    });

  }

  onPagereload(){
      this._api.getlist_new_fieldvisit(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.FieldVisitList = data['Data'];
        } else {
          this.FieldVisitList = null;
        }
      });
  }
}
