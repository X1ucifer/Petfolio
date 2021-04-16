import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
// import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { AgGridAngular, } from 'ag-grid-angular';
import {GridOptions} from "ag-grid-community";


@Component({
  selector: 'app-agent-inbox',
  templateUrl: './agent-inbox.component.html',
  styleUrls: ['./agent-inbox.component.css']
})
export class AgentInboxComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  AllocationcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 150, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Bank Name', field: 'bankname', resizable: true, sortable: true, filter: true},
    {headerName: 'Portfolio Name', field: 'portfoliotype', resizable: true, sortable: true, filter: true},
    {headerName: 'Product Name', field: 'product', resizable: true, sortable: true, filter: true},
    {headerName: 'Total No.of accounts Allocated', field: 'datas', width: 120,cellRenderer: function(params) {
      return params.value.length;
    }},
    {headerName: 'Date of Allocation', field: 'Date', sortable: true, filter: true},
    {headerName: 'Total Outstanding', field: 'OST', sortable: true, filter: true},
    {headerName: 'Target', field: 'target', sortable: true, filter: true},

  ];
  portfolioTypeList: any;
  bankTypeList: any;
  bankname:any;
  portfolio_type:any;
  allocation_type:any;
  login_Details: any;
  Excel_Datas: any[];
  saved_Fields: any[];
  rowData: any;
  keyValues: any;
  myHeaders: any;
  tempDefs: any[];
  columnDefs: any;
  dataLoaded: boolean;
  result: {};
  myrowData: any;
  dataList: any;
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    this.bankname = "";
    this.portfolio_type = "";
    this.allocation_type = "";
    this.login_Details = this.getFromLocal("login_Details");


    let a = {
      client_id:this.getFromLocal('Client_ID'),
   }
    this._api.portfolio_type_list(a).subscribe(data=>{
      if (data['Code'] == 200) {
        this.portfolioTypeList = data['Data'];
      } else {
        this.portfolioTypeList = [];
      }
    });

    this._api.user_details_list().subscribe((data:any) =>{
      if (data['Code'] == 200) {
        this.bankTypeList = [];
        var hash = data.Data.reduce((p,c) => (p[c.bankname] ? p[c.bankname].push(c) : p[c.bankname] = [c],p) ,{});
        var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
        console.log(newData);
          for(let a = 0 ; a < newData.length; a ++){
            let x =  { 'y': newData[a].color}
            this.bankTypeList.push(x);
          }

      } else {
        this.bankTypeList = [];
      }
    });

    let req = {
      "to" : this.login_Details.email_id,
    }
    console.log(req);
    this._api.allocation_details_getassignedto(this.login_Details.email_id).subscribe(
      (response: any) => {
        console.log(response);
        this.dataList = response.Data;
      }
    );
  }


  getFromLocal(key): any {
    return this.storage.get(key);
  }

  goto1(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData:any = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      localStorage.setItem("account_List", selectedData[0]._id);
      this.router.navigateByUrl('admin_panel/accounts/worklist');
    }else {
      alert("Select atleast one Bucket");
    }
  }

  goto2(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData:any = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      localStorage.setItem("account_List", selectedData[0]._id);
      this.router.navigateByUrl('admin_panel/accounts/reallocation');
    }else {
      alert("Select atleast one Bucket");
    }
  }

  goto3(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData:any = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      localStorage.setItem("account_List", selectedData[0]._id);
      this.router.navigateByUrl('admin_panel/accounts/allocation');
    }else {
      alert("Select atleast one Bucket");
    }
  }

  // goto2(){
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData:any = selectedNodes.map(node => node.data );
  //   if (selectedData.length >= 1) {
  //     localStorage.setItem("reallocation_account_List", selectedData[0]._id);
  //     this.router.navigateByUrl('admin_panel/userflow/newreallocation');
  //   } else {
  //     alert("Select atleast one Portfolio type to reallocate");
  //   }
  // }

}
