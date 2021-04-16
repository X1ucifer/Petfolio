import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-set-approval-request',
  templateUrl: './set-approval-request.component.html',
  styleUrls: ['./set-approval-request.component.css']
})
export class SetApprovalRequestComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  SettlementcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Settlement Type', field: 'settlement_type', resizable: true, sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Current Total', field: 'current_total', resizable: true, sortable: true, filter: true},
    {headerName: 'Payment Date', field: 'payment_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Amount', field: 'amount', resizable: true, sortable: true, filter: true},
    {headerName: 'No of Installment', field: 'no_of_installments', resizable: true, sortable: true, filter: true},
    {headerName: 'First Installment', field: 'fst_installment', resizable: true, sortable: true, filter: true},
    {headerName: 'Approval Status', field: 'approval_status', resizable: true, sortable: true, filter: true},
    {headerName: 'Details', field: 'details_notes', resizable: true, sortable: true, filter: true},
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
  ];
  
  SettlementForm: FormGroup;
  areaCodeList: any;
  bankCodeList: any;
  fieldvisitCodeList: any;
  mStatusList: any;
  sStatusList: any;
  SettlementList = [];
  login_Details: any;
  TracingToolsList: any;
  actionstakenList: any;
  showOTSFS: boolean;
  uploaded: boolean;
  addmode: boolean;
  editmode: boolean;
  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { 
    this.SettlementForm = this.formBuilder.group({
      _id:['',Validators.required],
      settlement_type:['',Validators.required],
      account_id:['',Validators.required],
      current_total:['',Validators.required],
      payment_date:['',Validators.required],
      amount:['',Validators.required],
      attachment_url:[''],
      no_of_installments:[''],
      fst_installment:[''],
      approval_status:['',Validators.required],
      reportingto_id :['',Validators.required],
      details_notes:['',Validators.required],
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
    this.addmode = true;
    this.editmode = false;
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

    // this.SettlementForm.patchValue({
    //   createdby: this.login_Details.email_id,
    //   creator_name: this.login_Details.name,
    //   customer_id: localStorage.getItem("Customer_ID"),
    //   account_id:localStorage.getItem("Customer_ID")
    // });
    const data = {
      user_id:this.login_Details._id
    }
    this._api.getlist_sem_approval_request(data).subscribe(data=>{
      if (data['Code']==200) {
        this.SettlementList = data['Data'];
      } else {
        this.SettlementList = null;
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
        this.SettlementForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = true;
      } else {
        this.SettlementForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = false;
      }
    })
  }

  editapprovalRequest(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.SettlementForm.patchValue({
        _id:selectedData[0]._id,
        settlement_type:selectedData[0].settlement_type,
        account_id:selectedData[0].account_id,
        current_total:selectedData[0].current_total,
        payment_date:selectedData[0].payment_date,
        amount:selectedData[0].amount,
        attachment_url:selectedData[0].attachment_url,
        no_of_installments:selectedData[0].no_of_installments,
        fst_installment:selectedData[0].fst_installment,
        approval_status:selectedData[0].approval_status,
        reportingto_id:selectedData[0].reportingto_id,
        details_notes:selectedData[0].details_notes,
        createdby:selectedData[0].createdby,
        creator_name:selectedData[0].creator_name,
        customer_id:selectedData[0].customer_id,
        client_id :selectedData[0].client_id,
        bank_id :selectedData[0].bank_id,
        product_id :selectedData[0].product_id,
        portfolio_id :selectedData[0].portfolio_id,
        bucket_id :selectedData[0].bucket_id,
        finterstal_id :selectedData[0].finterstal_id,
        passport_no :selectedData[0].passport_no,
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  addNewSettlement(){
    
    if (this.SettlementForm.valid) {
      this._api.update_new_settlement(this.SettlementForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          this.onPagereload();
          alert(data['Message']);
        } else {
          alert(data['Message']);
        }
      });
    } else {
      console.log(this.SettlementForm.value);
      
      alert('Form No Valid');
    }
  }

  onPagereload(){
    const data = {
      user_id:this.login_Details._id
    }
      this._api.getlist_sem_approval_request(data).subscribe(data=>{
        if (data['Code']==200) {
          this.SettlementList = data['Data'];
        } else {
          this.SettlementList = null;
        }
      });
  }

  cancel(){
    this.addmode = true;
    this.editmode = false;
    this.SettlementForm.reset();
  }

  getSettlementType(event){
    if (event.target.value == "MTS") {
      this.showOTSFS = true;
    } else {
      this.showOTSFS = false;
    }
  }
}
