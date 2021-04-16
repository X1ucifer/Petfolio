import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-createapproval',
  templateUrl: './createapproval.component.html',
  styleUrls: ['./createapproval.component.css']
})
export class CreateapprovalComponent implements OnInit {

  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  ApprovalStatuscolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Approval Status', field: 'approval_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];
  
  ApprovalStatusForm: FormGroup;
  banknameList: any[];
  addmode: boolean;
  editmode: boolean;
  ApprovalStatusList: any;

  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService) { 
    this.ApprovalStatusForm = this.formBuilder.group({
      _id:[''],
      bank_id:['',Validators.required],
      approval_name:['',Validators.required],
      status:['',Validators.required]
    });
  }

  ngOnInit(): void {

    this.addmode = true;
    this.editmode = false;

    this._api.getlist_approvalstatus().subscribe(data=>{
      if (data['Code'] == 200) {
        this.ApprovalStatusList = data['Data'];
      } else {
        this.ApprovalStatusList = [];
      }
    });

    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let a = {
      client_id : this.getFromLocal("Client_ID")
    }
    this._api.fetch_bank_list_by_client_id(a).subscribe(
      (response: any) => {
        console.log(response);
        this.banknameList = [];
       var hash = response.Data.reduce((p,c) => (p[c.bank_name] ? p[c.bank_name].push(c) : p[c.bank_name] = [c],p) ,{});
       var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
       console.log(newData);
        for(let a = 0 ; a < newData.length; a ++){
          let x =  { 'y': newData[a].color}
          this.banknameList.push(x);
        }
        // this.rows = response.Data.reverse();
        // console.log(this.rows);
      });
  }

  
  getFromLocal(key): any {
    return this.storage.get(key);
  }


  addapprovalStatus(){
    if (this.ApprovalStatusForm.valid) {
      this._api.create_approvalstatus(this.ApprovalStatusForm.value).subscribe(data=>{
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

  editapprovalStatus(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.ApprovalStatusForm.patchValue({
        _id:selectedData[0]._id,
        bank_id:selectedData[0].bank_id,
        approval_name:selectedData[0].approval_name,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updateapprovalStatus(){
    if (this.ApprovalStatusForm.valid) {
      this._api.update_approvalstatus(this.ApprovalStatusForm.value).subscribe(data=>{
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

  deleteapprovalStatus(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_approvalstatus(selectedData[i]._id).subscribe(data => {
          if (data['Code'] == 200) {
            this.onreloadPage();
          } else {
            alert(data['Message']);
          }
        });
      }
      
    } else {
      alert("Select atleast one Record");
    }
  }

  cancel(){
    this.addmode = true;
    this.editmode = false;
    this.ApprovalStatusForm.reset();
  }

  onreloadPage(){
    this.cancel();
    this._api.getlist_approvalstatus().subscribe(data=>{
      if (data['Code'] == 200) {
        this.ApprovalStatusList = data['Data'];
      } else {
        this.ApprovalStatusList = [];
      }
    });
  }
}
