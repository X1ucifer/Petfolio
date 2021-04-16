import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-agent-request',
  templateUrl: './agent-request.component.html',
  styleUrls: ['./agent-request.component.css']
})
export class AgentRequestComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  approvalRequestcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Territory Name', field: 'fieldvisitterritory', resizable: true, sortable: true, filter: true},
    {headerName: 'Area Name', field: 'fieldvisitarea', resizable: true, sortable: true, filter: true},
    {headerName: 'First Address', field: 'firstaddress', resizable: true, sortable: true, filter: true},
    {headerName: 'Second Address', field: 'secondaddress', resizable: true, sortable: true, filter: true},
    {headerName: 'Requested Date', field: 'fvrqdate', resizable: true, sortable: true, filter: true},
    {headerName: 'Remarks', field: 'remarks', resizable: true, sortable: true, filter: true},
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

  UserData: any;
  approvalRequestForm: FormGroup;
  banknameList: any[];
  addmode: boolean;
  editmode: boolean;
  approvalRequestList: any;
  areaCodeList: any;
  bankCodeList: any;
  fieldvisitCodeList: any;
  mStatusList: any;
  sStatusList: any;
  TracingToolsList: any;
  actionstakenList: any;
  uploaded: boolean;
  coordinatorArea: any;
  coordinatorTRT: any;
  agentList: any[];

  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { 
    this.approvalRequestForm = this.formBuilder.group({
      _id:['',Validators.required],
      account_id:['',Validators.required],
      fieldvisitterritory:['',Validators.required],
      fieldvisitarea:['',Validators.required],
      firstaddress:['',Validators.required],
      secondaddress:['',Validators.required],
      fvrqdate:['',Validators.required],
      remarks:['',Validators.required],
      reportingto_id:['',Validators.required],
      assigned_coordinator:['',Validators.required],
      assigned_agent:['',Validators.required],
      approval_status :['',Validators.required],
      attachment_url :[''],
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
    });
  }

  ngOnInit(): void {

    this.addmode = true;
    this.editmode = false;
    this.UserData = this.storage.get("login_Details");
    this._api.getlist_fvapproval_request({assigned_agent:this.UserData._id}).subscribe(data=>{
      if (data['Code']==200) {
        this.approvalRequestList = data['Data']
      } else {
        this.approvalRequestList = [];
      }
    });
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
  }

  ontrtchange(event){
    this.coordinatorTRT = event.target.value;
    this.getCoordinatorsList(this.coordinatorArea,this.coordinatorTRT,"Field Visit Agent");
  }
  onareachange(event){
    this.coordinatorArea = event.target.value;
    this.getCoordinatorsList(this.coordinatorArea,this.coordinatorTRT,"Field Visit Agent");
  }

  getCoordinatorsList(area, territory, designation){
    const data = {
      fieldvisitterritory:territory,
      fieldvisitarea:area,
      designation:designation
    }
    this._api.getFieldVisitagents(data).subscribe(data=>{
      if (data['Code'] == 200) {
        this.agentList = data['Data'];
      } else {
        this.agentList = [];
      }
    });

  }

  getFile(event){
    this.uploaded = false;
    const File = event.target.files[0];
    console.log(File);
    this._api.uploadFile(File).subscribe(data=>{
      if (data['Code'] = 200) {
        this.approvalRequestForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = true;
      } else {
        this.approvalRequestForm.patchValue({
          attachment_url:data['Data']
        })
        this.uploaded = false;
      }
    })
  }


  editapprovalRequest(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    this.getCoordinatorsList(selectedData[0].fieldvisitarea, selectedData[0].fieldvisitterritory, "Field Visit Agent");
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.approvalRequestForm.patchValue({
        _id:selectedData[0]._id,
        account_id:selectedData[0].account_id,
        fieldvisitterritory:selectedData[0].fieldvisitterritory,
        fieldvisitarea:selectedData[0].fieldvisitarea,
        firstaddress:selectedData[0].firstaddress,
        secondaddress:selectedData[0].secondaddress,
        fvrqdate:selectedData[0].fvrqdate,
        remarks:selectedData[0].remarks,
        reportingto_id:selectedData[0].reportingto_id,
        approval_status :selectedData[0].approval_status,
        attachment_url :selectedData[0].attachment_url,
        createdby:selectedData[0].createdby,
        creator_name:selectedData[0].creator_name,
        assigned_coordinator:selectedData[0].assigned_coordinator,
        assigned_agent:selectedData[0].assigned_agent,
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

  updateapprovalRequest(){
    console.log(this.approvalRequestForm.value);
    
    if (this.approvalRequestForm.valid) {
      this._api.update_new_fieldvisit(this.approvalRequestForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          alert(data['Message']);
          this.onreloadPage();
        } else {
          alert(data['Message']);
        }
      });
    } else {
      alert("Please Fill all fields");
    }
  }


  cancel(){
    this.addmode = true;
    this.editmode = false;
    this.approvalRequestForm.reset();
  }

  onreloadPage(){
    this.cancel();
    this._api.getlist_approval_request({assigned_agent:this.UserData._id}).subscribe(data=>{
      if (data['Code']==200) {
        this.approvalRequestList = data['Data']
      } else {
        this.approvalRequestList = [];
      }
    });
  }
}
