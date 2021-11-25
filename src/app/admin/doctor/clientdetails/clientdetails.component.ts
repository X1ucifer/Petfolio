import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { environment } from '../../../../environments/environment';
import { ExcelService } from '../../../excel.service';
import { ToastrManager } from 'ng6-toastr-notifications';

declare var $: any;
@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit {

  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR: any;
  value1: any;
  user_list: any;
  S_Date: any;
  E_Date: any;
  saveAsExcelFile: any;
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

    let login_check = this.storage.get("doctor_login_cache");
    console.log(login_check);
    if(login_check == true){
    }else{
      this.router.navigateByUrl('/doctorlogin');
    }


    this.rows = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" }];
    this.list();


  }


  list() {

    let user = this.storage.get('user');
    console.log(user);
    let a  = {
      doctor_id : user._id
    }
    this._api.appointment_list_doctor(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        // this.user_list = response.Data;

        var temp = [];
        this.rows.forEach(element => {
          temp.push(element.user_id);
        });


        function removeDuplicates(originalArray, prop) {
          var newArray = [];
          var lookupObject  = {};

          for(var i in originalArray) {
             lookupObject[originalArray[i][prop]] = originalArray[i];
          }

          for(i in lookupObject) {
              newArray.push(lookupObject[i]);
          }
           return newArray;
      }

      var uniqueArray = removeDuplicates(temp, "user_phone");
      console.log(uniqueArray);
      this.user_list = uniqueArray;


        this.get_c_list();
      }
    );

    // this._api.user_list().subscribe(
    //   (response: any) => {
    //     console.log(response.Data);
    //     this.rows = response.Data;
    //     this.user_list = response.Data;
    //     console.log(this.user_list);
    //     this.get_c_list();
    //   }
    // );
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
        this.router.navigateByUrl('/doctor-admin/view_customer')
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
        //alert('Deleted Successfully');
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
    if (this.E_Date != undefined && this.S_Date != undefined) {
      // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
      let yourDate = this.E_Date.setDate(this.E_Date.getDate());

      let a = {
        "fromdate": this.datePipe.transform(new Date(this.S_Date), 'yyyy-MM-dd'),
        "todate": this.datePipe.transform(new Date(yourDate), 'yyyy-MM-dd')
      }
      console.log(a);
      this._api.user_filter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.user_list = response.Data;
          this.get_c_list();
        }
      );
    }
    else {
      //alert('Please select the startdate and enddate');
      this.showWarning("Please select the startdate and enddate")
    }

  }
  refersh() {
    this.list();this.E_Date = undefined ; this.S_Date = undefined;
  }

  head = [['S.No', 'Name', 'Email', 'Phone', 'Created Date', 'Device type']]


  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'customerlists.xlsx');
  }
  get_c_list() {
    this.c_list = this.user_list.reverse();
    console.log(this.c_list)
    this.excelData = this.c_list
    // for (let a = 0; a < this.c_list.length; a++) {
    //   let data = {
    //   }
    //   this.excelData.push(this.c_list)
    // }

  }

  exportAsXLSX(): void {
     let final_data = [];
     for(let a  = 0 ; a  < this.excelData.length; a++){
      let c = {
       "Name" : this.excelData[a].first_name + " " + this.excelData[a].last_name,
       "Email" :  this.excelData[a].user_email,
       "Phone" : this.excelData[a].user_phone
      }
      final_data.push(c);
      if(a ==  this.excelData.length - 1){
        this.excelService.exportAsExcelFile(final_data, 'Customer_List');
      }
     }
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
