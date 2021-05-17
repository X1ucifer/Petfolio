import { Component, OnInit, Inject,ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router, RouterModule } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';
import { ExcelService } from '../../../excel.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.css']
})
export class PaymentManagementComponent implements OnInit {
  rows = [];
  searchQR: any;
  counts:any;
  Price_counts : any;
  Sp_total_price: any;
  pay_list: any;
  value1: any;
  S_Date: any;
  E_Date: any;
  doctor_list:any;
  sp_list:any;
  Vendor_list:any;

  showtabel = 'Ecom';


  Ecom_list : any;
  SP_list : any;
  PET_list : any;
  Doc_list : any;


  vendor_total_price = 0;
  sp_total_price = 0;
  user_total_price = 0;
  app_total_price = 0;

  payment_management : any;
  excelData: any[] = [];
  c_list: any = [];


  constructor(
    private toastr:ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private datePipe: DatePipe,
    private excelService: ExcelService,

  ) { }

  @ViewChild('TABLE') table: ElementRef;

  ngOnInit(): void {
    this.list();
  }

  list() {
    this._api.payment_managements().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.payment_management = response.Data;
        console.log(this.payment_management);
        this.get_c_list();
        this.vendor_total_price = this.payment_management.vendor_total_price;
        this.sp_total_price = this.payment_management.sp_total_price;
        this.user_total_price = this.payment_management.user_total_price;
        this.app_total_price = this.payment_management.app_total_price;

        this.Ecom_list = this.payment_management.vendor_order_details;
        this.SP_list = this.payment_management.sp_appoint_details;
        this.PET_list = this.payment_management.user_appoint_details;
        this.Doc_list = this.payment_management.doc_appoint_details;

        // this.SP_list : any;
        // this.PET_list : any;
        // this.Doc_list : any;
      }
    );
  }
  pet_view(item) {
    window.scrollTo(0, 0);
    let a = {
      'user_id': item._id
    };
    console.log(a)
    this._api.single_user_detail(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.saveInLocal('pet_list', response.Data);
        this.router.navigateByUrl('/admin/Pet_list')
      }
    );


  }
  view_details(item) {
    this.saveInLocal('fun_type', 'create');
    window.scrollTo(0, 0);
    let a = {
      'user_id': item._id
    };
    this._api.single_user_detail(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.saveInLocal('view_detail_data', response.Data);
        this.saveInLocal('view_detail', 'User');
        this.router.navigateByUrl('/admin/View_details')
      }
    );


  }
  Delete(data) {
    let a = {
      '_id': data
    };
    console.log(a);
    this._api.user_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        // alert('Deleted Successfully');
        this.showSuccess("Deleted Successfully");
        this.ngOnInit();
      }
    );
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  service_form() {
    this.saveInLocal('fun_type', 'create');
    this.router.navigateByUrl('/admin/Customer_create')
  }

  edit_details(item) {
    this.saveInLocal('view_detail_data', item);
    this.saveInLocal('fun_type', 'edit');
    this.router.navigateByUrl('/admin/Customer_create')

  }

  filter_date() {
    if ( this.E_Date != undefined && this.S_Date != undefined) {
      // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
      let yourDate= this.E_Date.setDate(this.E_Date.getDate() + 1);

      let a = {
        "fromdate":this.datePipe.transform(new Date(this.S_Date),'yyyy-MM-dd'),
        "todate" : this.datePipe.transform(new Date(yourDate),'yyyy-MM-dd')
        }
      console.log(a);
      this._api.pay_filter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.pay_list = response.Data;
          this.get_c_list()
        }
      );
    }
    else{
      this.showWarning("Please select the startdate and enddate");
      // alert('Please select the startdate and enddate');
    }

  }
  refersh(){
    this.list();this.E_Date = undefined ; this.S_Date = undefined;
  }


  showdatas(datas){
  console.log(this.SP_list);
  this.showtabel = datas;
  }

  ExportTOExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'sheetExcel.xlsx');
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.excelData, 'Payment_List');
  }
  get_c_list() {
    this.c_list = this.Ecom_list;
    console.log(this.c_list)
    this.excelData = this.c_list
    // for (let a = 0; a < this.c_list.length; a++) {
    //   let data = {  
    //   }
    //   this.excelData.push(this.c_list)
    // }

  }

  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
      this.toastr.errorToastr(msg);
  }

  showWarning(msg) {
      this.toastr.warningToastr(msg);
  }
}
