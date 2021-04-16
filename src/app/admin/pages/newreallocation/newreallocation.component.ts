import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-newreallocation',
  templateUrl: './newreallocation.component.html',
  styleUrls: ['./newreallocation.component.css']
})
export class NewreallocationComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  @ViewChild('agGrid2',{static:false}) agGrid2: AgGridAngular;
  reallocationList: string;
  Excel_Datas = [];
  saved_Fields = [];
  rowData = [];
  keyValues = [];
  myHeaders = [];
  tempDefs = [];
  columnDefs = [];
  dataLoaded: boolean;
  result: {};
  myrowData = [];
  BankName: any;
  portfoliotype: any;
  product: any;
  userList: any;
  designationList: any;
  myrowData2 = [];
  Agentselected: boolean;
  dataLoaded2: boolean;
  assignee: any;
  tableData: any;
  Excel_Datas2: any[];
  saved_Fields2: any[];
  rowData2 = [];
  myHeaders2: any;
  tempDefs2: any[];
  columnDefs2: any;
  result2: {};
  userFilter: any = { designation: '', bankname:'' };
  userFilter2: any = { designation: '', bankname:'' };
  login_Details: any;
  designationof: any;
  assingedto: any;
  Tdesignationof: any;
  Tassingedto: any;
  
  constructor(private _api: ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { }

  ngOnInit(): void {
    this.designationof = "";
    this.assingedto = "";
    this.Tdesignationof = "";
    this.Tassingedto = "";
    this.login_Details = this.getFromLocal("login_Details");
    this.reallocationList = localStorage.getItem("reallocation_account_List")
    this.dataLoaded = false;

    this._api.user_details_list().subscribe(data=>{
      if (data['Code']==200) {
        this.userList = data['Data'];
      } else {
        this.userList = [];
      }
    });

    this._api.designation_type_list().subscribe( data => {
        if (data['Code']==200) {
          this.designationList = data['Data'];
        } else {
          this.designationList = [];
        }
      }
    );
    
    this._api.allocation_details_id(this.reallocationList).subscribe( (response: any) => {
        console.log(response);
        // this.tableData = response.Data;
        if( response.Data.length == 0){
          this.Excel_Datas = [];
          this.saved_Fields = [];
          alert("no data found");
        }else{
           this.BankName = response.Data[0].bankname;
           this.portfoliotype = response.Data[0].portfoliotype;
           this.product = response.Data[0].product;
           this.saved_Fields = response.Data[0].headers;
           this.rowData = response.Data[0].datas;
           this.keyValues = response.Data[0].datasKeyval;  
            for (let i = 0; i < this.saved_Fields.length; i++) {
              this.myHeaders[i] = this.saved_Fields[i].fields;
            }
           for (let i = 0; i < this.rowData.length; i++) {
             this.subArray(this.myHeaders,this.rowData[i]);
           }
           this.tempDefs = [];
          for (let i = 0; i < this.saved_Fields.length; i++) {
            console.log(this.saved_Fields[i].fields);
            if (i == 0) {
              this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:true, resizable: false});
            } else {
              this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
            }
            
          }
          this.columnDefs = this.tempDefs;
          console.log(this.columnDefs);
          if (this.columnDefs.length != 0) {
            this.dataLoaded = true;
          } else {
            this.dataLoaded = false;
          }
        }
      }
    );
  }
  subArray(cols,rows){

    this.result = {};
    console.log(cols);
    console.log(rows);
    
    for (var i = 0; i < cols.length; i++) {
            this.result[cols[i]] = rows[i];
    }
    this.mainArray(this.result);
  }

  mainArray(data){
    this.myrowData.push(data);
    console.log(this.myrowData);
    this.dataLoaded = true;
  }


  getassignedto(event){
    this.myrowData2 = null;
    this.rowData2 = null;
    this.Agentselected = true;
    this.dataLoaded2 = false;
    this.assignee = event.target.value;
    let req = {
      "to" : this.assignee,
    }
    console.log(req);
    this._api.allocation_details_getassignedto_id(this.assignee, this.reallocationList).subscribe(
      (response: any) => {
        console.log(response);
        this.tableData = response.Data;
        if( response.Data.length == 0){
          this.Excel_Datas2 = [];
          this.saved_Fields2 = [];
          alert("no data found");
        }else{
                this.saved_Fields2 = response.Data[0].headers;
                this.rowData2 = response.Data[0].datas; 
              for (let i = 0; i < this.saved_Fields2.length; i++) {
                this.myHeaders2[i] = this.saved_Fields2[i].fields;
              }
              
              for (let i = 0; i < this.rowData2.length; i++) {
                this.subArray2(this.myHeaders2,this.rowData2[i]);
              }
            this.tempDefs2 = [];
            for (let i = 0; i < this.saved_Fields2.length; i++) {
              console.log(this.saved_Fields2[i].fields);
              if (i == 0) {
                this.tempDefs2.push({headerName: this.saved_Fields2[i].fields, field:this.saved_Fields2[i].fields, filter:true, sortable:true , checkboxSelection:true, resizable: false});
              } else {
                this.tempDefs2.push({headerName: this.saved_Fields2[i].fields, field:this.saved_Fields2[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
              }
              
            }
            this.columnDefs2 = this.tempDefs2;
            console.log(this.columnDefs2);
            if (this.columnDefs2.length != 0) {
              // this.dataLoaded2 = true;
            } else {
              this.dataLoaded2 = false;
            }
            }
      }
    );        
  }


  subArray2(cols,rows){

    this.result2 = {};
    console.log(cols);
    console.log(rows);
    
    for (var i = 0; i < cols.length; i++) {
            this.result2[cols[i]] = rows[i];
    }
    this.mainArray2(this.result2);
  }

  mainArray2(data){
    this.myrowData2.push(data);
    console.log(this.myrowData2);
    this.dataLoaded2 = true;
  }


  getdesignationType(event){
    this.userFilter.designation = event.target.value;
    this.userFilter.bankname = this.login_Details.bankname;
  }
  getTdesignationType(event){
    this.userFilter2.designation = event.target.value;
    this.userFilter2.bankname = this.login_Details.bankname;
  }


  getTassignedto(event){

  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

}
