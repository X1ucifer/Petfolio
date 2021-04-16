import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';
declare var $:any;

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  @ViewChild('agGrid2',{static:false}) agGrid2: AgGridAngular;
  assingedto : any;
  userList : any;
  Excel_Datas = [];
  saved_Fields = [];
  Finals_excel: any[];
  login_Details: any;
  searchQR:any;
  Agentselected: boolean;
  Excel_Datas2: any;
  Finals_excel2: any[];
  saved_Fields2: any;
  noData: boolean;
  assignee: any;
  tableData: any;
  selectedIndex: any;
  rowData = [];
  myHeaders = [];
  tempDefs = [];
  columnDefs = [];
  dataLoaded: boolean;
  result: {};
  myrowData=[];
  selectedData = [];
  rowData2 = [];
  myHeaders2 = [];
  tempDefs2 = [];
  columnDefs2 = [];
  dataLoaded2: boolean;
  result2: {};
  myrowData2 = [];
  transferData: any[];
  keyValues = [];
  designationList: any[];
  designationof: any;
  userFilter: any = { designation: '', bankname:'' };
  userFilter2: any = { designation: '', bankname:'' };
  accountList: string;
  displayBasic: boolean;
  myrowData3 = [];
  reallocateto: any;
  rdesignationof: any;
  removeBucket_id: any;
  bankname: any;
  product: any;
  portfoliotype: any;
  bankName: any;
  portfolio: any;
  productname: any;
  removedbucket_email_id: any;
  myrowData4 = [];
  ReallocationTable: boolean;
  result3: any;
  dataLoaded3: boolean;
  assignee2: any;
  tableData2: any;
  addedBucket_id: any;
  addedBucket_email_id: any;
  Excel_Datas3 = [];
  saved_Fields3 = [];
  rowData3 = [];
  myHeaders3 = [];
  tempDefs3 = [];
  columnDefs3 = [];
  selectedData2: any[];
  selectedData3: any;
  constructor(private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService, private router:Router) { }

  ngOnInit(): void {
    this.login_Details = this.getFromLocal("login_Details");
    this.accountList = localStorage.getItem('account_List');
    console.log(this.accountList);
    
    this.designationof = "";
    this.assingedto = "";

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

    this.Agentselected = false;
   
    let req = {
      "to" : this.login_Details.email_id,
    }
    console.log(req);
    this._api.allocation_details_id(this.accountList).subscribe(
      (response: any) => {
        // this.tableData = response.Data;
        this.bankname = response.Data[0].bankname;
        this.productname = response.Data[0].productname;
        this.portfoliotype = response.Data[0].portfoliotype;

        if( response.Data.length == 0){
          this.Excel_Datas = [];
          this.saved_Fields = [];
          alert("no data found");
        }else{
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
         
            if (i == 0) {
              this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:true, resizable: false});
            } else {
              this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
            }
            
          }
          this.columnDefs = this.tempDefs;
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
    for (var i = 0; i < cols.length; i++) {
            this.result[cols[i]] = rows[i];
    }
    this.mainArray(this.result);
  }

  mainArray(data){
    this.myrowData.push(data);
    this.dataLoaded = true;
  }

  
  getFromLocal(key): any {
    return this.storage.get(key);
  }

  getassignedto(event){
    this.myrowData2 = [];
    this.Agentselected = true;
    this.dataLoaded2 = false;
    this.assignee = event.target.value;
    let req = {
      "to" : this.assignee,
    }
    console.log(req);
    this._api.allocation_details_getassignedto(this.assignee).subscribe(
      (response: any) => {

        this.tableData = response.Data;
        this.removeBucket_id = response.Data[0]._id;
        this.removedbucket_email_id = response.Data[0].user_email
        console.log(this.removedbucket_email_id);
        
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
              if (i == 0) {
                this.tempDefs2.push({headerName: this.saved_Fields2[i].fields, field:this.saved_Fields2[i].fields, filter:true, sortable:true , checkboxSelection:true, resizable: false});
              } else {
                this.tempDefs2.push({headerName: this.saved_Fields2[i].fields, field:this.saved_Fields2[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
              }
              
            }
            this.columnDefs2 = this.tempDefs2;
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
    for (var i = 0; i < cols.length; i++) {
            this.result2[cols[i]] = rows[i];
    }
    this.mainArray2(this.result2);
  }

  mainArray2(data){
    this.myrowData2.push(data);
    this.dataLoaded2 = true;
  }

  getdesignationType(event){
    this.userFilter.designation = event.target.value;
    this.userFilter.bankname = this.login_Details.bankname;
  }

  getRdesignationType(event){
    this.userFilter2.designation = event.target.value;
    this.userFilter2.bankname = this.login_Details.bankname;
  }

  getReallocatedto(event){
    console.log(this.myrowData4);
    
    this.Agentselected = true;
    this.dataLoaded3 = false;
    this.assignee2 = event.target.value;
    let req = {
      "to" : this.assignee,
    }
    console.log(req);
    this._api.allocation_details_getassignedto(this.assignee2).subscribe(
      (response: any) => {
        this.tableData2 = response.Data;
        this.addedBucket_id = response.Data[0]._id;
        this.addedBucket_email_id = response.Data[0].user_email
        //console.log(this.removedbucket_email_id);
        
        if( response.Data.length == 0){
          this.Excel_Datas3 = [];
          this.saved_Fields3 = [];
          alert("no data found");
        }else{
                this.rowData3 = [];
                this.saved_Fields3 = response.Data[0].headers;
                this.rowData3 = response.Data[0].datas; 
              for (let i = 0; i < this.saved_Fields3.length; i++) {
                this.myHeaders3[i] = this.saved_Fields3[i].fields;
              }
              for (let i = 0; i < this.rowData3.length; i++) {
                this.subArray3(this.myHeaders3,this.rowData3[i]);
              }
            this.tempDefs3 = [];
            for (let i = 0; i < this.saved_Fields3.length; i++) {
              if (i == 0) {
                this.tempDefs3.push({headerName: this.saved_Fields3[i].fields, field:this.saved_Fields3[i].fields, filter:true, sortable:true , checkboxSelection:true, resizable: false});
              } else {
                this.tempDefs3.push({headerName: this.saved_Fields3[i].fields, field:this.saved_Fields3[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
              }
              
            }
            this.columnDefs3 = this.tempDefs3;
            if (this.columnDefs3.length != 0) {
               this.dataLoaded3 = true;
            } else {
              this.dataLoaded3 = false;
            }
            }
      }
    );        
  }


  subArray3(cols,rows){
    this.result3 = {};  
    for (var i = 0; i < cols.length; i++) {
            this.result3[cols[i]] = rows[i];
    }
    this.mainArray3(this.result3);
  }

  mainArray3(data){
    this.myrowData4.push(data);
    this.ReallocationTable = true;
  }

  onRowClick(event:any){

  }


  rellocate(){
    const selectedNodes = this.agGrid2.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedData.length; i++) {
        for (let j = 0; j < this.rowData2.length; j++) {

          if ( selectedData[i].CID === this.rowData2[j][0]) { 
            this.rowData2.splice(j, 1); 
          }
        }
      }
      
      for (let i = 0; i < selectedData.length; i++) {
        this.myrowData4.push(selectedData[i]);
      }

      this.displayBasic = true;
      
      
  
    }else{
      alert("Select aleast one record to reallocate");
    }
      
  
  }

  allocatetodata(){
    this.removedBucket();
    this.addedBucket();
  }


  cancel(){
      this.displayBasic = false;
  
  }
  assignto(){

    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    
    if (selectedData.length >= 1) {
      this.selectedData = [];
      for (let i = 0; i < selectedData.length; i++) {
        var obj = selectedData[i];
        delete obj.insert_id;
        var result = Object.values(obj);
        console.log(result);
        this.selectedData.push(result);
      }

      let req = {
        "bucket_id": new Date().getTime(),
        "user_email" : this.login_Details.email_id,
        "user_id" : this.login_Details.email_id,
        "Date" : ""+new Date(),
        "headers" : this.saved_Fields,
        "datas" : this.selectedData,
        "Date_and_Time" : ""+new Date(),
        "assigner_id":this.login_Details.email_id,
        "assignee_id":this.assignee,
        "bankname":this.bankName,
        "product":this.product,
        "portfoliotype":this.portfolio,
        "allocationType":"New Allocation"

      }
      console.log(req);
      this._api.allocation_details_add(req).subscribe(
        (response: any) => {
          console.log(response);
          if (response['Code'] = 200) {
            alert("Successfully Allocated");
          } else {
            alert(response['Message']);
          }
        }
      );

    }else {
      alert("Select atleast one Record");
    }

    
  }

  onSelect(data,event, index){
    if (event.target.checked) {
      this.Excel_Datas2.push(data)
    } else {
      this.Excel_Datas2 = [];
      var pushData = this.Excel_Datas2.splice(index,1);
      this.Excel_Datas2 = pushData;
    }
    
  }

  getselectedTable(index,ite){
    this.selectedIndex = index;
    console.log(ite)
  }



  goto(page){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    console.log(selectedData);
    
    this.transferData = [];
      for (let i = 0; i < selectedData.length; i++) {
        var obj = selectedData[i];
        delete obj.insert_id;
        var result = Object.values(obj);
        console.log(result);
        this.transferData.push(result);
    }

    if (selectedData.length == 1) {
      this.router.navigateByUrl(page);
      let dataList = [];

      var myrow = [];
      for (let i = 0; i < result.length; i++) {
        myrow.push(result[i])
      }
      for (let i = 0; i < selectedData.length; i++) {
        for (let i = 0; i < this.saved_Fields.length; i++) {
          dataList.push({column:this.saved_Fields[i].fields,row:myrow[i]});
        }
      }
      
      this.storage.set("_storedRecord",{dataList,"keyvalue":selectedData[0]});
    } else {
      alert("Select Only One Record");
    }  
  }

  onPagereload(){

  }


  removedBucket(){

      this.selectedData2 = [];
      for (let i = 0; i < this.rowData2.length; i++) {
        var obj = this.rowData2[i];
        delete obj.insert_id;
        var result = Object.values(obj);
        console.log(result);
        this.selectedData2.push(result);
      }
    let req = {
      "_id": this.removeBucket_id,
      "user_email" : this.removedbucket_email_id,
      "user_id" : this.removedbucket_email_id,
      "Date" : ""+new Date(),
      "headers" : this.saved_Fields2,
      "datas" : this.selectedData2,
      "Date_and_Time" : ""+new Date(),
      "assigner_id":this.login_Details.email_id,
      "assignee_id":this.assignee,
      "bankname":this.bankname,
      "product":this.productname,
      "portfoliotype":this.portfoliotype,
      "allocationType":"New Allocation",
    }
    console.log(req);
    
    this._api.allocation_details_update(req).subscribe(data=>{
      if (data['Code']==200) {
        alert(data['Message']);
      } else {
        alert(data['Message']);
      }
    });
  }


  addedBucket(){
    this.selectedData3 = [];
      for (let i = 0; i < this.myrowData4.length; i++) {
        var obj = this.myrowData4[i];
        delete obj.insert_id;
        var result = Object.values(obj);
        console.log(result);
        this.selectedData3.push(result);
      }
    let req = {
      "_id": this.addedBucket_id,
      "user_email" : this.addedBucket_email_id,
      "user_id" : this.addedBucket_email_id,
      "Date" : ""+new Date(),
      "headers" : this.saved_Fields,
      "datas" : this.selectedData3,
      "Date_and_Time" : ""+new Date(),
      "assigner_id":this.login_Details.email_id,
      "assignee_id":this.assignee2,
      "bankname":this.bankname,
      "product":this.productname,
      "portfoliotype":this.portfoliotype,
      "allocationType":"Reallocation"
    }
    this._api.allocation_details_update(req).subscribe(data=>{
      if (data['Code']==200) {
        alert(data['Message']);
      } else {
        alert(data['Message']);
      }
    });
  }
}
