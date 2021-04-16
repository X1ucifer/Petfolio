import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-log-type',
  templateUrl: './create-log-type.component.html',
  styleUrls: ['./create-log-type.component.css']
})
export class CreateLogTypeComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  LogTypecolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Log Type', field: 'logtype', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];

  LogTypeForm: FormGroup;
  LogTypeList: any[];
  banknameList: any;
  editmode: boolean;
  addmode: boolean;

  constructor(private formBuilder:FormBuilder, private _api:ApiService) { 
    this.LogTypeForm = this.formBuilder.group({
      _id:[''],
      bank_id:['',Validators.required],
      logtype:['',Validators.required],
      status:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.addmode = true;
    this.editmode = false;

    this._api.getlist_new_logtype().subscribe(data=>{
      if (data['Code'] == 200) {
        this.LogTypeList = data['Data'];
      } else {
        this.LogTypeList = [];
      }
    });

    this._api.user_details_list().subscribe(
      (response: any) => {
        console.log(response);
        this.banknameList = [];
       var hash = response.Data.reduce((p,c) => (p[c.bankname] ? p[c.bankname].push(c) : p[c.bankname] = [c],p) ,{});
       var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
       console.log(newData);
        for(let a = 0 ; a < newData.length; a ++){
          let x =  { 'y': newData[a].color}
          this.banknameList.push(x);
        }

      }
    );
  }

  addlogtype(){
    if (this.LogTypeForm.valid) {
      this._api.create_new_logtype(this.LogTypeForm.value).subscribe(data=>{
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

  editlogtype(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.LogTypeForm.patchValue({
        _id:selectedData[0]._id,
        bank_id:selectedData[0].bank_id,
        logtype:selectedData[0].logtype,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updatelogtype(){
    if (this.LogTypeForm.valid) {
      this._api.update_new_logtype(this.LogTypeForm.value).subscribe(data=>{
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

  deletelogtype(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_new_logtype(selectedData[i]._id).subscribe(data => {
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
    this.LogTypeForm.reset();
  }

  onreloadPage(){
    this.cancel();
    this._api.getlist_new_logtype().subscribe(data=>{
      if (data['Code'] == 200) {
        this.LogTypeList = data['Data'];
      } else {
        this.LogTypeList = [];
      }
    });
  }
}
