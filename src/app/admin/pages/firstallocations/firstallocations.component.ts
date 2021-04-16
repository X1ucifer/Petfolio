import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
// import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-firstallocations',
  templateUrl: './firstallocations.component.html',
  styleUrls: ['./firstallocations.component.css']
})
export class FirstallocationsComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  AllocationcolumnDefs = [
    {headerName: 'CUSTOMER ID', field: 'customer_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'ACCOUNT NUMBER', field: 'acc_no', resizable: true, sortable: true, filter: true},
    {headerName: 'PASSPORT NUMBER', field: 'passport_no', resizable: true, sortable: true, filter: true},
    {headerName: 'AGREEMENT NUMBER', field: 'agreement_id', resizable: true, sortable: true, filter: true},
    {headerName: 'CIF NUMBER', field: 'cif', resizable: true, sortable: true, filter: true},
    {headerName: 'FINTRESTLE ID', field: 'finterstal_id', resizable: true, sortable: true, filter: true},
    {headerName: 'TOTAL OUTSTANDING', field: 'total_out_standing', resizable: true, sortable: true, filter: 'agNumberColumnFilter'},
    {headerName: 'ALLOCATION STATUS',field: 'allocations_status', resizable: true, sortable: true, filter: true},
  ];
  displayPosition: boolean;
  rows = [];
  searchQR: any;
  value1: any;
  rangeValues: number[] = [0,100];

  Finals_excel : any;

  Bank_list_gets : any;
  product_list_gets  : any;
  portfolio_list_gets  : any;
  Bank_list : any;
  portfolio_list : any;
  booleans : any;
  product_list : any;
  User_details1 : any;

  timeLeft: number = 60;
  interval;

  loading: Boolean = false;


  Excel_Datas :  any;
  saved_Fields : any;
  NAT_List =  [{name:"Ethiopia",status:false},{name:"India",status:false},{name:"Pakistan",status:false}];

  AGENT_List =  [{name:"AGENT 1",status:false},{name:"AGENT 2",status:false},{name:"AGENT 3",status:false}];

  user_list_details : any;
  Company_details : any;
  Designation_details2 : any;
  report_to : any;
  report_to_id : any;
  company_name : any;
  report_to_design : any;

  Designation_details1 : any;
  MyuploadList = [];
  tempDefs = [];
  columnDefs = [];
  dataLoaded: boolean;
  selectedData = [];
  login_Details: any;
  bankName: any;
  bankame: any;
  portfolio: any;
  product: any;

  bucket_details : any;

  bucket_detail : any;

  final_data : any;
  allSelected: boolean;
  userFilter: any = { allocations_status: '' };
  NewCount: number;
  ExsistingCount: number;

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    // private router: Router
  ) { }



  ngOnInit(): void {
    this.userFilter.allocations_status = "Not Allocated"
    this.bucket_details = new Date().getTime();
    window.scrollTo(0, 0);
    this.bucket_detail = this.getFromLocal("bucket_detail");
    console.log('bucket_detail',this.bucket_detail);
    let fetch_excel_record = {
      user_id : this.bucket_detail.user_id,
      bucket_id : this.bucket_detail.bucket_id,
      bank_name : this.bucket_detail.bank_name,
      client_id : this.bucket_detail.client_id,
      product_id : this.bucket_detail.product_id,
      portfolio_id : this.bucket_detail.portfolio_id
    }
    this._api.get_excel_records(fetch_excel_record).subscribe(
    (response: any) => {
      console.log("Excel_datas_recodres",response);
      this.loading = true;
      // this.Finals_excel = response.Data;
      this.getUserbyStatus(response.Data);
      this.saved_Fields = response.Data;
      this.saved_Fields.forEach((item, i) => {
        item.select_status = false;
      });
      console.log(this.saved_Fields);




        this._api.user_details_list().subscribe(
          (response: any) => {
            this.user_list_details = response.Data;
            this.Company_details = [];
           var hash = response.Data.reduce((p,c) => (p[c.bankname] ? p[c.bankname].push(c) : p[c.bankname] = [c],p) ,{});
           var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
            for(let a = 0 ; a < newData.length; a ++){
              let x =  { 'y': newData[a].color}
              this.Company_details.push(x);
            }
            // this.rows = response.Data.reverse();
            // console.log(this.rows);
          }
        );



      this._api.designation_type_list().subscribe(
      (response: any) => {
        this.Designation_details1 = [];
        this.Designation_details2 = [];
        for(let a = 0 ; a < response.Data.length; a ++){
          let x =  { 'y': response.Data[a].designation_type}
          let y =  { 'x': response.Data[a].designation_type}
          this.Designation_details1.push(x);
          this.Designation_details2.push(y);
        }
        this.Designation_details1 = this.Designation_details1.reverse();
        this.Designation_details2 = this.Designation_details2.reverse();
      }
    );




      // const result = response.Data.map(value => Object.keys(value));
      // console.log(result);


      // this.columnDefs = result[0];

    //   this.tempDefs = [];
    //   for (let obj of this.saved_Fields) {
    //     console.log("object:", obj);
    //     for (let key in obj) {
    //       this.tempDefs.push({headerName: key, field:obj[key], filter:true, sortable:true , checkboxSelection:false, resizable: false});
    //         console.log("key:", key, "value:", obj[key]);
    //     }
    // }




          // for (let i = 0; i < this.saved_Fields.length; i++) {
          //   if (i == 0) {
          //     // this.tempDefs.push({headerName: "RecordID", field:"insert_id", filter:true, sortable:true , checkboxSelection:true, resizable: false, headerCheckboxSelection: true});
          //     this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: false});
          //   } else {
          //     this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
          //   }
          // }
          // this.columnDefs = this.tempDefs;
          // if (this.columnDefs.length != 0) {
          //   this.dataLoaded = true;
          // } else {
          //   this.dataLoaded = false;
          // }

          // console.log(this.columnDefs);
          // console.log(this.tempDefs);




      // for (let i = 0; i < this.saved_Fields.length; i++) {
      //           if (i == 0) {
      //          this.tempDefs.push({headerName: "RecordID", field:"insert_id", filter:true, sortable:true , checkboxSelection:true, resizable: false, headerCheckboxSelection: true});
      //          this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: false});
      //       } else {
      //     this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
      //   }
      // }



    });




    // this.company_details();
    // this.login_Details = this.getFromLocal("login_Details");
    this.rows = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    ]

    // this.Excel_Datas = this.getFromLocal("excel_final");
    // let fields_mapping_fetch = this.getFromLocal("fields_mapping_fetch");
    // this.bankName = fields_mapping_fetch.bank;
    // this.portfolio = fields_mapping_fetch.portfolio;
    // this.product = fields_mapping_fetch.product;
    // this._api.fields_mapping_fetch(fields_mapping_fetch).subscribe(
    //   (response: any) => {
    //     if(response.Code === 404){
    //       Swal.fire('No Data Found');
    //       this.saved_Fields = [];
    //     }else{
    //       this.saved_Fields = response.Data[0].fields_details;
    //       this.saved_Fields = this.saved_Fields.reverse();

    //       this.tempDefs = [];
    //       for (let i = 0; i < this.saved_Fields.length; i++) {
    //         if (i == 0) {
    //           this.tempDefs.push({headerName: "RecordID", field:"insert_id", filter:true, sortable:true , checkboxSelection:true, resizable: false, headerCheckboxSelection: true});
    //           this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: false});
    //         } else {
    //           this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
    //         }

    //       }
    //       this.columnDefs = this.tempDefs;
    //       if (this.columnDefs.length != 0) {
    //         this.dataLoaded = true;
    //       } else {
    //         this.dataLoaded = false;
    //       }

    //       var datas = [];
    //       var d = new Date();
    //       var n = d.getTime();
    //       for(let b = 0 ;  b < this.Excel_Datas.length ; b ++){
    //         this.Excel_Datas[b].push(false);
    //         var object = {};
    //         object["insert_id"] = n + b ;
    //       for(let a  = 0 ; a < this.saved_Fields.length ; a ++)
    //       {
    //         object[this.saved_Fields[a].fields] = this.Excel_Datas[b][a];
    //         if(a == this.saved_Fields.length - 1){
    //           datas.push(object);
    //         }
    //       }
    //         if(b == this.Excel_Datas.length - 1){
    //            this.Finals_excel = datas;
    //            this.startTimer();
    //       }
    //       }
    //     }
    //   }
    // );



  }


  fetchuser_1(){

    let req = {
      "bankname" : "",
      "designation" : this.report_to_design.y
    }
    this._api.user_details_list_by_com(req).subscribe(
      (response: any) => {
        if(response.Data.length == 0){
         alert("There is no user with this designations");
        }else {
          this.User_details1 = [];
          for(let a = 0 ; a < response.Data.length; a ++){
            let x =  { 'y': response.Data[a].email_id}
            this.User_details1.push(x);
          }
          this.User_details1 = this.User_details1.reverse();
        }
      }
    );
  }


  Report_fetch(){
    for(let a = 0 ; a < this.user_list_details.length; a ++){
      if(this.user_list_details[a].email_id == this.report_to.y){
         this.report_to_id = this.user_list_details[a]._id;
      }
    }
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  toggleEditable(status: any, index: any){
   console.log(status,index);
   this.saved_Fields[index].select_status = status;
  }


  submit_allocation(){
      this.final_data = [];
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data );
      if (selectedData.length > 0) {
        for (let i = 0; i < selectedData.length; i++) {
          this.final_data.push(selectedData[i]);
        }
        this.start_allocation();
      } else {
        alert("Please Select atleast one Customer");
      }
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


  start_allocation(){
    if(this.report_to_id == undefined){
      alert('Please Select the user');
    } else {
      console.log(this.final_data);
      this.bucket_detail = this.getFromLocal("bucket_detail");
      console.log('bucket_detail',this.bucket_detail);
      this.timeLeft = this.final_data.length;

      console.log(this.timeLeft);
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          console.log(this.timeLeft);
          this.timeLeft--;
      let c = {
      client_id : this.getFromLocal("Client_ID"),
      bank_id : this.bucket_detail.bank_name._id,
      product_id : this.bucket_detail.product_id._id,
      porfolio_id : this.bucket_detail.portfolio_id._id,
      bucket_id : this.bucket_detail.bucket_id,
      bank_name : this.bucket_detail.bank_name.bank_name,
      customer_id : this.final_data[this.timeLeft].customer_id,
      assigned_by : this.getFromLocal("User_ID"),
      assigned_to : this.report_to_id,
      date_of_assign : ""+new Date(),
      touch_status : 'Not Touched',
      acc_no : this.final_data[this.timeLeft].acc_no,
      agreement_id : this.final_data[this.timeLeft].agreement_id,
      allocated_to : this.final_data[this.timeLeft].allocated_to,
      allocations_status : this.final_data[this.timeLeft].allocations_status,
      cif : this.final_data[this.timeLeft].cif,
      customer_details : this.final_data[this.timeLeft].customer_details,
      date_of_allocations : this.final_data[this.timeLeft].date_of_allocations,
      finterstal_id : this.final_data[this.timeLeft].finterstal_id,
      passport_no : this.final_data[this.timeLeft].passport_no,
      total_out_standing :this.final_data[this.timeLeft].total_out_standing,
          }
          console.log(c);
            this._api.allocation_details_adds(c).subscribe(
              (response: any) => {
                console.log(response.Data);
                console.log("allocation Done1");
                let d = {
                  user_id : this.getFromLocal("User_ID"),
                  bucket_id : this.bucket_detail.bucket_id,
                  customer_id : this.final_data[this.timeLeft].customer_id,
                  assigned_to : this.report_to_id
                }
                console.log(d);
                this._api.excel_details_update(d).subscribe(
                  (response: any) => {
                    console.log("allocation Done2");
                  }
                );
              }
            );
        } else {
          this.timeLeft = 0;
          alert("Allocated succesfully");
          this.ngOnInit();
          this.pauseTimer();
        }
      },1500);
    }
  }


  showPositionDialog() {
    this.displayPosition = true;
  }


  getCustomer(page,data){
    console.log(data.customer_details);
    
    data.customer_details = JSON.parse(data.customer_details)

  
    var convDatav = data.customer_details;
    console.log(convDatav['length']);
    var jsonObject = convDatav[0];
    var keyCount  = Object.keys(jsonObject).length;
    console.log(keyCount);
    
    this.router.navigateByUrl(page);
    let dataList = [];
    for (let i = 0; i < convDatav.length; i++) {
          for (let i = 0; i < keyCount; i++) {
            var key = Object.keys(jsonObject)[i];
            var value = jsonObject[key];
            dataList.push({column:key,row:value});
          }
        }

      this.storage.set("_storedRecord",{dataList,"keyvalue":data});

  }

  getallSelected(event){
    if (event.target.checked) {
      this.allSelected =  true;
      for (let i = 0; i < this.saved_Fields.length; i++) {
        this.saved_Fields[i].select_status = true;
      }
      alert("All Records Selected");
    } else {
      this.allSelected =  false;
      for (let i = 0; i < this.saved_Fields.length; i++) {
        this.saved_Fields[i].select_status = false;
      }
      alert("All Records Deselected")
    }
  }


  getNaT(event,item){
    console.log(event);
    console.log(item);
    this.userFilter.NATION_NAME = item.name;
  }


  getAgenT(event,item){
    console.log(event);
    console.log(item);
    // this.userFilter.NATION_NAME = item.name;
  }


  getUserbyStatus(data){
    this.NewCount = 0;
    this.ExsistingCount = 0;
    for (let i = 0; i < data.length; i++) {
      const custData = {
        passport_no: data[i].passport_no,
        acc_no:data[i].acc_no
      }
      console.log(data);
      
      this._api.getAccountStatus(custData).subscribe(data=>{
        if (data['Status'] == 'Success') {
          console.log(data['Data']);
          if (data['userType'] =="New") {
            this.NewCount = this.NewCount + 1;
          } else {
            this.ExsistingCount = this.ExsistingCount + 1;
          }
        } else {
          console.log(data['Data']);
          
        }
      });      
    }
  }

}
