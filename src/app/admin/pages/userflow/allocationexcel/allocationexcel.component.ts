import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { AgGridAngular } from 'ag-grid-angular';


type AOA = any[][];
@Component({
  selector: 'app-allocationexcel',
  templateUrl: './allocationexcel.component.html',
  styleUrls: ['./allocationexcel.component.css']
})
export class AllocationexcelComponent implements OnInit {

  @ViewChild('fileControl') fileControl: ElementRef;


  excel_final : any = [];

  Table_header : any ;

  final_header_excel : any = [];
  final_save_fields : any = [];
  final_not_match : any = [];


  original_bank_list : any = [];
  original_product_list : any = [];
  original_portfolio_list : any = [];

  Bank_list_gets : any;
  product_list_gets  : any;
  portfolio_list_gets  : any;
  saved_Fields = [];
  missed_datas = [];


  ErrorShow: boolean = true;
  Error: any = [];
  displayMaximizable: boolean = false;
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  file: any;
  arrayBuffer: any;
  filelist: any;
  check: any = 0;
  checking: any;
  displayPosition: any;
  displayPosition1: any;
  displayPosition2 :boolean = false;

  Bank_list_type : any;
  product_list_type : any;
  portfolio_list_type : any;
  booleans = false;


  Bank_list : any = [];
  product_list :  any = [];
  portfolio_list :  any = [];

  requered_fields : any = ['passport_no','acc_no','cif','agreement_id','total_out_standing','finterstal_id'];

  requered_status : Boolean =  false;

  requered_missing_text = '';


  bank_id = '';
  product_id = '';
  portfolio_id = '';
  product_name = '';




  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  cli_type:any;
  section:any=1;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
    this.Bank_list_get();
    this.product_list_get();
    this.portfolio_list_get();
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  onFileChange(evt: any) {

    this.requered_status = false;
    this.requered_fields = ['passport_no','acc_no','cif','agreement_id','total_out_standing','finterstal_id'];
    var req_field_length  = this.requered_fields.length;


    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log("excel data", this.data);

      this.excel_final = [];
      for(let x = 1 ; x < this.data.length - 1 ; x ++){
        //  console.log(this.data[x][1]);
        if(this.data[x][1] !== undefined && this.data[x][2] !== undefined ){
          this.excel_final.push(this.data[x]);
        }
        if(x == this.data.length - 2){
          console.log(this.excel_final);
          // this.saveInLocal("excel_final",this.excel_final);
          this._api.setExcelData(this.excel_final);
        }
      }
      this.final_not_match = []
      this.Table_header = this.data[0];
      this.final_header_excel = [];
      this.final_save_fields = [];
      console.log(this.Table_header);
      console.log(this.saved_Fields);
      for(let a = 0 ; a < this.Table_header.length ; a ++){
       var check = 0;
       console.log(req_field_length);
       for(let y = 0 ;y < req_field_length; y++){
        let  test1 = true;
        console.log(this.Table_header[a],this.requered_fields[y]);
        if(this.Table_header[a] == this.requered_fields[y]){
          test1 = false;
          console.log("Having");
          this.requered_fields.splice(y, 1);
         }
       if(y == req_field_length - 1){
           if(test1 == true){
            this.requered_status = true;
            console.log("Not Having");
           }
       }
       }


       if(this.saved_Fields.length == 0){
        let c = {
          final_not_match : this.Table_header[a],
          final_not_index : a,
          saved_data : this.Table_header[a],
          saved_data_index : a
        }
        this.final_not_match.push(c) ;
       } else {
        for(let b = 0 ; b < this.saved_Fields.length; b++){
          if(this.Table_header[a] == this.saved_Fields[b].fields){
            check = 1;
            console.log("Check in");
              let c = {
                table_head : this.Table_header[a],
                table_head_index : a,
                saved_data : this.saved_Fields[b].fields,
                saved_data_index : b
              }
              this.final_header_excel.push(c);
          }
          if(b == this.saved_Fields.length - 1){
            if(check == 0){
              let c = {
                final_not_match : this.Table_header[a],
                final_not_index : a,
                saved_data : this.saved_Fields[b].fields,
                saved_data_index : b
              }
              this.final_not_match.push(c);
            }
          }
        }
      }
        if(a == this.Table_header.length -1){

          if(this.requered_status == true && this.requered_fields.length !== 0){
            Swal.fire({
              title: 'Missing fields',
              text: this.requered_fields.toString(),
              icon: 'warning',
              html: `<ul><li>${this.requered_fields.toString()}</li></ul>`
            })
          }



          console.log(this.final_not_match);
          console.log(this.final_header_excel);
          console.log(this.final_save_fields);
          var a1 = this.saved_Fields;
          var a2 = this.final_header_excel;
          const results = a1.filter(({ fields: id1 }) => !a2.some(({ table_head: id2 }) => id2 === id1));
          console.log("Resulated adf",results);
          this.missed_datas = results;
          if(this.missed_datas.length) {
            let datas =[];
            this.missed_datas.forEach(element => {
              datas.push(element.fields);
            })
            Swal.fire({
              title: 'Missing fields',
              text: datas.toString(),
              icon: 'warning',
              html: `<ul><li>${datas.toString()}</li></ul>`
            })
          }
        }
      }
    };
    if (this.Error.length != 0) {
      this.ErrorShow = false;
    }
    reader.readAsBinaryString(target.files[0]);
    this.section = 3;
  }







  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  goback() {
    this.section = 1;
  }
  closeExcel() {
    this.fileControl.nativeElement.value = null;
    this.section = 2;
     this.final_not_match = [];
     this.final_header_excel = [];
     this.final_save_fields = [];
  }
  showPositionDialog() {
    this.displayPosition = true;
    this.displayPosition1 = false;
  }
  showPositionDialog1() {
    this.displayPosition1 = true;
  }
  Assign() {
    this.displayPosition1 = true;
    this.checking = setInterval(() => {
      this.check++;

      if (this.check == 4) {
        clearInterval(this.checking);
      }
    }, 2000);

  }
  list() {
    this.router.navigateByUrl('admin_panel/userflow/allocationsingle')
  }
  Field_mapping(){
    this.router.navigateByUrl('admin_panel/Field_mapping')
  }
  field_form() {
    this.router.navigateByUrl('/admin_panel/fieldset')
  }
  cancel() {
    this.router.navigateByUrl('/admin_panel/Clients')
  }

  bulk_upload() {
    this.displayPosition2 = true;
    this.saveInLocal("final_not_match", this.final_not_match);
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  acc_list() {
    window.scrollTo(0,0);
    this.router.navigateByUrl('/admin_panel/uploaded_list');
  }
  entry(){

    this.bank_id = '';
    this.product_id = '';
    this.portfolio_id = '';
    console.log(this.original_bank_list);
    console.log(this.original_product_list);
    console.log(this.original_portfolio_list);


    console.log(this.Bank_list_gets);
    console.log(this.portfolio_list_gets);
    console.log(this.product_list_gets);


    for(let v = 0 ; v < this.original_product_list.length ; v ++){
         if(this.original_product_list[v]._id == this.product_list_gets){
           this.product_name = this.original_product_list[v].product_type;
         }
    }
    for(let a = 0 ; a < this.original_bank_list.length ; a ++){
      if(this.original_bank_list[a].bank_name == this.Bank_list_gets.y){
        this.bank_id = this.original_bank_list[a]._id;
        console.log("Bank Id Found");
      }
      if(a == this.original_bank_list.length - 1){
      for(let b = 0 ; b < this.original_portfolio_list.length ; b ++){
        console.log(this.original_portfolio_list[b].portfolio_type,this.portfolio_list_gets.y);
        if(this.original_portfolio_list[b].portfolio_type == this.portfolio_list_gets.y){
          this.portfolio_id = this.original_portfolio_list[b]._id;
          console.log("Portfoli Id Found");
        }
      if(b == this.original_portfolio_list.length - 1){
      this.product_id = this.product_list_gets;
      console.log(this.bank_id,this.product_id,this.portfolio_id,this.product_name);
      this.fetch_field_list();
          }
        }
      }
    }










  }


  Bank_list_get() {
    // this._api.client_list().subscribe(
    //   (response: any) => {
    //     let list = response.Data.reverse();
    //     for (let i = 0; i < list.length; i++) {
    //       let obj = { "y": list[i].Clinet_name};
    //       this.Bank_list.push(obj);
    //     }

    //   }
    // );

    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let a = {
      client_id : this.getFromLocal("Client_ID")
    }
    this._api.fetch_bank_list_by_client_id(a).subscribe(
      (response: any) => {
        console.log(response);
        this.original_bank_list = response.Data;
        this.Bank_list = [];
       var hash = response.Data.reduce((p,c) => (p[c.bank_name] ? p[c.bank_name].push(c) : p[c.bank_name] = [c],p) ,{});
       var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
       console.log(newData);
        for(let a = 0 ; a < newData.length; a ++){
          let x =  { 'y': newData[a].color}
          this.Bank_list.push(x);
        }
        // this.rows = response.Data.reverse();
        // console.log(this.rows);
      }
    );



  }

  product_list_get() {
    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let a = {
      client_id : this.getFromLocal("Client_ID")
    }
    this._api.product_type_list(a).subscribe(
      (response: any) => {
        this.product_list = response.Data;
        this.original_product_list = response.Data;
      }
    );
  }


  portfolio_list_get() {
    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let a = {
      client_id : this.getFromLocal("Client_ID")
    }
    this._api.portfolio_type_list(a).subscribe(
      (response: any) => {
        this.original_portfolio_list = response.Data;
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].portfolio_type};
          this.portfolio_list.push(obj);
        }
        this.booleans = true;
      }
    );
  }


  fetch_field_list() {
    this.ngOnInit();
    console.log(this.Bank_list_gets);
    if(this.Bank_list_gets ==  undefined){
      Swal.fire('Select Bank type');
    }else if(this.product_list_gets ==  undefined){
      Swal.fire('Select Product type');
    }else if(this.portfolio_list_gets ==  undefined){
      Swal.fire('Select Portfolio type');
    } else {
      this.section = 2;
      let a = {
        bank : this.Bank_list_gets.y,
        product : this.product_list_gets,
        portfolio : this.portfolio_list_gets.y,
        product_name : this.product_name,
        bank_id : this.bank_id,
        product_id : this.product_id,
        portfolio_id : this.portfolio_id
      }
      this.saveInLocal("fields_mapping_fetch",a);
      this._api.fields_mapping_fetch(a).subscribe(
        (response: any) => {
          if(response.Code === 404){
            Swal.fire('No Data Found');
            this.saved_Fields = [];
          }else{
            this.saved_Fields = response.Data[0].fields_details;
            console.log(this.saved_Fields);
          }
        }
      );
    }
    // console.log(this.Bank_list_gets.y);
    // console.log(this.product_list_gets.y);
    // console.log(this.portfolio_list_gets.y);
  }


  reloadsonce(){


    console.log("excel data", this.data);

    this.excel_final = [];
    for(let x = 1 ; x < this.data.length - 1 ; x ++){
      //  console.log(this.data[x][1]);
      if(this.data[x][1] !== undefined && this.data[x][2] !== undefined ){
        this.excel_final.push(this.data[x]);
      }
      if(x == this.data.length - 2){
        console.log(this.excel_final);
      }
    }
    this.final_not_match = []
    this.Table_header = this.data[0];
    this.final_header_excel = [];
    this.final_save_fields = [];
    console.log(this.Table_header);
    console.log(this.saved_Fields);
    for(let a = 0 ; a < this.Table_header.length ; a ++){
     var check = 0;
     if(this.saved_Fields.length == 0){
      let c = {
        final_not_match : this.Table_header[a],
        final_not_index : a,
        saved_data : this.Table_header[a],
        saved_data_index : a
      }
      this.final_not_match.push(c) ;
     } else {
      for(let b = 0 ; b < this.saved_Fields.length; b++){
        if(this.Table_header[a] == this.saved_Fields[b].fields){
          check = 1;
          console.log("Check in");
            let c = {
              table_head : this.Table_header[a],
              table_head_index : a,
              saved_data : this.saved_Fields[b].fields,
              saved_data_index : b
            }
            this.final_header_excel.push(c);
        }
        if(b == this.saved_Fields.length - 1){
          if(check == 0){
            let c = {
              final_not_match : this.Table_header[a],
              final_not_index : a,
              saved_data : this.saved_Fields[b].fields,
              saved_data_index : b
            }
            this.final_not_match.push(c);
          }
        }
      }
    }
      if(a == this.Table_header.length -1){
        console.log(this.final_not_match);
        console.log(this.final_header_excel);
        console.log(this.final_save_fields);
        var a1 = this.saved_Fields;
        var a2 = this.final_header_excel;
        const results = a1.filter(({ fields: id1 }) => !a2.some(({ table_head: id2 }) => id2 === id1));
        console.log("Resulated adf",results);
        this.missed_datas = results;
        if(this.missed_datas.length) {
          let datas =[];
          this.missed_datas.forEach(element => {
            datas.push(element.fields);
          })
          Swal.fire({
            title: 'Missing fields',
            text: datas.toString(),
            icon: 'warning',
            html: `<ul><li>${datas.toString()}</li></ul>`
          })
        }
      }
    }



  }


  Reloaddatas(){


    let a = {
      bank : this.Bank_list_gets.y,
      product : this.product_list_gets,
      portfolio : this.portfolio_list_gets.y,
      product_name : this.product_name,
      bank_id : this.bank_id,
      product_id : this.product_id,
      portfolio_id : this.portfolio_id
    }
    this.saveInLocal("fields_mapping_fetch",a);
    this._api.fields_mapping_fetch(a).subscribe(
      (response: any) => {
        if(response.Code === 404){
          Swal.fire('No Data Found');
          this.saved_Fields = [];
          this.reloadsonce();
        }else{
          this.saved_Fields = response.Data[0].fields_details;
          console.log(this.saved_Fields);
          this.reloadsonce();
        }
      }
    );



  }


}



