import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-createstatus',
  templateUrl: './createstatus.component.html',
  styleUrls: ['./createstatus.component.css']
})
export class CreatestatusComponent implements OnInit {

  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  MstatuscolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Main Status', field: 'mstatus_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];

  @ViewChild('agGrid2',{static:false}) agGrid2: AgGridAngular;
  SstatuscolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Main Status ID', field: 'mstatus_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Sub Status', field: 'sstatus_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];

  MstatusForm: FormGroup;
  SstatusForm: FormGroup;

  list = ["M1","M2","M3","M4"];
  mStatusList: any[];
  meditmode: boolean;
  maddmode: boolean;
  sStatusList: any[];
  saddmode: boolean;
  seditmode: boolean;
  banknameList: any[];

  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService) {

    this.MstatusForm = this.formBuilder.group({
      _id:[''],
      bank_id:['',Validators.required],
      mstatus_name:['',Validators.required],
      status:['',Validators.required],
    });

    this.SstatusForm = this.formBuilder.group({
      _id:[''],
      bank_id:['',Validators.required],
      mstatus_id:['',Validators.required],
      sstatus_name:['',Validators.required],
      status:['',Validators.required],
    });

   }

  ngOnInit(): void {
    this.maddmode = true;
    this.meditmode = false;
    this.saddmode = true;
    this.seditmode = false;
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


  addmstatus(){
    if (this.MstatusForm.valid) {
      this._api.create_mainStatus_code(this.MstatusForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          alert(data['Message']);
          this.monreloadPage();
        } else {
          alert(data['Message']);
        }
      });
    } else {
      alert("Please Fill all fields");
    }
  }

  editmstatus(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.maddmode = false;
      this.meditmode = true;
      this.MstatusForm.patchValue({
        _id:selectedData[0]._id,
        bank_id:selectedData[0].bank_id,
        mstatus_name:selectedData[0].mstatus_name,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updatemstatus(){
    if (this.MstatusForm.valid) {
      this._api.update_mainStatus_code(this.MstatusForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          alert(data['Message']);
          this.monreloadPage();
        } else {
          alert(data['Message']);
        }
      });
    } else {
      alert("Please Fill all fields");
    }
  }

  deletemstatus(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_mainStatus_code(selectedData[i]._id).subscribe(data => {
          if (data['Code'] == 200) {
            this.monreloadPage();
          } else {
            
          }
        });
      }
      
    } else {
      alert("Select atleast one Record");
    }
  }

  mcancel(){
    this.maddmode = true;
    this.meditmode = false;
    this.MstatusForm.reset();
  }

  monreloadPage(){
    this.mcancel();
    this._api.getlist_mainStatus_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.mStatusList = data['Data'];
      } else {
        this.mStatusList = [];
      }
    });
  }


  addsstatus(){
    if (this.SstatusForm.valid) {
      this._api.create_subStatus_code(this.SstatusForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          alert(data['Message']);
          this.sonreloadPage();
        } else {
          alert(data['Message']);
        }
      });
    } else {
      alert("Please Fill all fields");
    }
  }

  editsstatus(){
    const selectedNodes = this.agGrid2.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.saddmode = false;
      this.seditmode = true;
      this.SstatusForm.patchValue({
        _id:selectedData[0]._id,
        bank_id:selectedData[0].bank_id,
        mstatus_id:selectedData[0].mstatus_id,
        sstatus_name:selectedData[0].sstatus_name,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updatesstatus(){
    if (this.SstatusForm.valid) {
      this._api.update_subStatus_code(this.SstatusForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          alert(data['Message']);
          this.sonreloadPage();
        } else {
          alert(data['Message']);
        }
      });
    } else {
      alert("Please Fill all fields");
    }
  }

  deletesstatus(){
    const selectedNodes = this.agGrid2.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_subStatus_code(selectedData[i]._id).subscribe(data => {
          if (data['Code'] == 200) {
            this.sonreloadPage();
          } else {
            
          }
        });
      }
      
    } else {
      alert("Select atleast one Record");
    }
  }

  scancel(){
    this.saddmode = true;
    this.seditmode = false;
    this.SstatusForm.reset();
  }

  sonreloadPage(){
    this.scancel();
    this._api.getlist_subStatus_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.sStatusList = data['Data'];
      } else {
        this.sStatusList = [];
      }
    });
  }

}
