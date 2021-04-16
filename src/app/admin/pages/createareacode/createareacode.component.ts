import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-createareacode',
  templateUrl: './createareacode.component.html',
  styleUrls: ['./createareacode.component.css']
})
export class CreateareacodeComponent implements OnInit {

  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  AreaCodecolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Area CODE', field: 'areacode', resizable: true, sortable: true, filter: true},
    {headerName: 'Field Visit Territary', field: 'fvterritary', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];
  
  areacodeForm: FormGroup;
  banknameList: any[];
  addmode: boolean;
  editmode: boolean;
  areaCodeList: any;
  fieldvisitCodeList: any;

  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService) { 
    this.areacodeForm = this.formBuilder.group({
      _id:[''],
      bank_id:['',Validators.required],
      areacode:['',Validators.required],
      fvterritary:['',Validators.required],
      status:['',Validators.required]
    });
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

    this._api.getlist_fieldvisit_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.fieldvisitCodeList = data['Data'];
      } else {
        this.fieldvisitCodeList = [];
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
    if (this.areacodeForm.valid) {
      this._api.create_area_code(this.areacodeForm.value).subscribe(data=>{
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

  editbcode(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.areacodeForm.patchValue({
        _id:selectedData[0]._id,
        bank_id:selectedData[0].bank_id,
        areacode:selectedData[0].areacode,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updatebcode(){
    if (this.areacodeForm.valid) {
      this._api.update_area_code(this.areacodeForm.value).subscribe(data=>{
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

  deletebcode(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_area_code(selectedData[i]._id).subscribe(data => {
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
    this.areacodeForm.reset();
  }

  onreloadPage(){
    this.cancel();
    this._api.getlist_area_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.areaCodeList = data['Data'];
      } else {
        this.areaCodeList = [];
      }
    });
  }
}
