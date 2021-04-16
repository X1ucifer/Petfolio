import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import * as moment from 'moment';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-new-payment',
  templateUrl: './user-new-payment.component.html',
  styleUrls: ['./user-new-payment.component.css']
})
export class UserNewPaymentComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  PaymentscolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Payment Date', field: 'payment_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Payment Amount', field: 'payment_amount', resizable: true, sortable: true, filter: true},
    {headerName: 'Due amount', field: 'due_amount', resizable: true, sortable: true, filter: true},
    {headerName: 'Paid Date', field: 'paid_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Last Payment Date', field: 'last_paid_amount', resizable: true, sortable: true, filter: true},
    {headerName: 'Next Payment Date', field: 'next_payment_date', resizable: true, sortable: true, filter: true},
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
  ];
  
  PaymentsForm: FormGroup;
  areaCodeList: any;
  bankCodeList: any;
  fieldvisitCodeList: any;
  mStatusList: any;
  sStatusList: any;
  PaymentsList = [];
  login_Details: any;
  TracingToolsList: any;
  actionstakenList: any;
  uploaded: boolean;
  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { 
    this.PaymentsForm = this.formBuilder.group({
      _id:['',Validators.required],
      account_id:['',Validators.required],
      payment_date:['',Validators.required],
      payment_amount:['',Validators.required],
      due_amount:['',Validators.required],
      paid_date:['',Validators.required],
      total_installments:[''],
      current_installment:[''],
      attachment_url:[''],
      last_paid_amount:['',Validators.required],
      next_payment_date:['',Validators.required],
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
    this.PaymentsForm.patchValue({
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
    this._api.getlist_new_payment(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.PaymentsList = data['Data'];
      } else {
        this.PaymentsList = null;
      }
    });
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  getFile(event){
    this.uploaded = false;
    const File = event.target.files[0];
    console.log(File);
    this._api.uploadFile(File).subscribe(data=>{
      if (data['Code'] = 200) {
        this.PaymentsForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = true;
      } else {
        this.PaymentsForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = false;
      }
    })
  }

  addNewPayments(){
    this.PaymentsForm.patchValue({
      _id:new Date().getTime(),
      log_date:new Date()
    })
    if (this.PaymentsForm.valid) {
      this._api.create_new_payment(this.PaymentsForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          this.onPagereload();
          alert(data['Message']);
        } else {
          alert(data['Message']);
        }
      });
    } else {
      console.log(this.PaymentsForm.value);
      
      alert('Form No Valid');
    }
  }

  onPagereload(){
      this._api.getlist_new_payment(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.PaymentsList = data['Data'];
        } else {
          this.PaymentsList = null;
        }
      });
  }
}
