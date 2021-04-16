import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-createbankcode',
  templateUrl: './createbankcode.component.html',
  styleUrls: ['./createbankcode.component.css']
})
export class CreatebankcodeComponent implements OnInit {

  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  BankCodecolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank CODE', field: 'bcode', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];

  bankcodeForm: FormGroup;
  bankCodeList: any[];
  banknameList: any;
  editmode: boolean;
  addmode: boolean;
  bankNames: any;

  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService) { 
    this.bankcodeForm = this.formBuilder.group({
      _id:[''],
      bank_id:['',Validators.required],
      bcode:['',Validators.required],
      status:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.addmode = true;
    this.editmode = false;

    this._api.getlist_bank_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.bankCodeList = data['Data'];
      } else {
        this.bankCodeList = [];
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

  addbcode(){
    if (this.bankcodeForm.valid) {
      for (let i = 0; i < this.bankcodeForm.value.bank_id.length; i++) {
        const data = {
          bank_id:this.bankcodeForm.value.bank_id[i],
          bcode:this.bankcodeForm.value.bcode,
          status:this.bankcodeForm.value.status
        }
        this._api.create_bank_code(data).subscribe(data=>{
          if (data['Code'] == 200) {
            alert(data['Message']);
            this.onreloadPage();
          } else {
            alert(data['Message']);
          }
        });
      }
    } else {
      alert("Please Fill all fields");
    }
  }

  editbcode(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    console.log(selectedData);
    
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.bankcodeForm.patchValue({
        _id:selectedData[0]._id,
        bank_id:[selectedData[0].bank_id],
        bcode:selectedData[0].bcode,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updatebcode(){
    console.log(this.bankcodeForm.value);
  

    if (this.bankcodeForm.valid) {
      for (let i = 0; i < this.bankcodeForm.value.bank_id.length; i++) {
        const data = {
          _id:this.bankcodeForm.value._id,
          bank_id:this.bankcodeForm.value.bank_id[i],
          bcode:this.bankcodeForm.value.bcode,
          status:this.bankcodeForm.value.status
        }
        this._api.update_bank_code(data).subscribe(data=>{
          if (data['Code'] == 200) {
            alert(data['Message']);
            this.onreloadPage();
          } else {
            alert(data['Message']);
          }
        });
      }
    } else {
      alert("Please Fill all fields");
    }
  }

  deletebcode(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_bank_code(selectedData[i]._id).subscribe(data => {
          if (data['Code'] == 200) {
            this.onreloadPage();
          } else {
            
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
    this.bankcodeForm.reset();
  }

  onreloadPage(){
    this.cancel();
    this._api.getlist_bank_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.bankCodeList = data['Data'];
      } else {
        this.bankCodeList = [];
      }
    });
  }

}
