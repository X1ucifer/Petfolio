import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsrCustomerdetailsComponent } from '../usr-customerdetails/usr-customerdetails.component';
import { UsrActioncodeComponent } from '../usr-actioncode/usr-actioncode.component';
import { UsrAddnewaddressComponent } from '../usr-addnewaddress/usr-addnewaddress.component';
import { UsrAdhocscreenComponent } from '../usr-adhocscreen/usr-adhocscreen.component';
import { UsrAllocationhistoryComponent } from '../usr-allocationhistory/usr-allocationhistory.component';
import { UsrCustomerleaccountComponent } from '../usr-customerleaccount/usr-customerleaccount.component';
import { UsrDocumnetretrievalComponent } from '../usr-documnetretrieval/usr-documnetretrieval.component';
import { UsrExcelexportComponent } from '../usr-excelexport/usr-excelexport.component';
import { UsrFollowupsaveComponent } from '../usr-followupsave/usr-followupsave.component';
import { UsrFollowuptakeComponent } from '../usr-followuptake/usr-followuptake.component';
import { UsrFollowuptakeoneComponent } from '../usr-followuptakeone/usr-followuptakeone.component';
import { UsrFollowuptrailsComponent } from '../usr-followuptrails/usr-followuptrails.component';
import { UsrGurantordetailsComponent } from '../usr-gurantordetails/usr-gurantordetails.component';
import { UsrLoandetailsComponent } from '../usr-loandetails/usr-loandetails.component';
import { UsrLogoffusersComponent } from '../usr-logoffusers/usr-logoffusers.component';
import { UsrOverduedetailsoneComponent } from '../usr-overduedetailsone/usr-overduedetailsone.component';
import { UsrOverduedetailstwoComponent } from '../usr-overduedetailstwo/usr-overduedetailstwo.component';
import { UsrPaymentdetailsComponent } from '../usr-paymentdetails/usr-paymentdetails.component';
import { UsrPaymentdetailsoneComponent } from '../usr-paymentdetailsone/usr-paymentdetailsone.component';
import { UsrPhonedetailsComponent } from '../usr-phonedetails/usr-phonedetails.component';
import { UsrReferaccountComponent } from '../usr-referaccount/usr-referaccount.component';
import { UsrReportComponent } from '../usr-report/usr-report.component';
import { UsrRpoComponent } from '../usr-rpo/usr-rpo.component';
import { UsrScreenaccessoneComponent } from '../usr-screenaccessone/usr-screenaccessone.component';
import { UsrScreenaccesstwoComponent } from '../usr-screenaccesstwo/usr-screenaccesstwo.component';
import { UsrScreenaccessthreeComponent } from '../usr-screenaccessthree/usr-screenaccessthree.component';
import { UsrScreenaccesscontrolComponent } from '../usr-screenaccesscontrol/usr-screenaccesscontrol.component';
import { UsrScreenaccesscontroloneComponent } from '../usr-screenaccesscontrolone/usr-screenaccesscontrolone.component';
import { UsrScreenaccesscontroltwoComponent } from '../usr-screenaccesscontroltwo/usr-screenaccesscontroltwo.component';
import { UsrScreenaccesscontrolthreeComponent } from '../usr-screenaccesscontrolthree/usr-screenaccesscontrolthree.component';
import { UsrUserdetailsComponent } from '../usr-userdetails/usr-userdetails.component';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { UsrAllocationdetailComponent } from '../usr-allocationdetail/usr-allocationdetail.component';
import { UsrCollateraldetailssComponent } from './../usr-collateraldetailss/usr-collateraldetailss.component';
import { UsrWorkflowComponent } from './../usr-workflow/usr-workflow.component';
import { UsrCollectionRecordingComponent } from './../usr-collection-recording/usr-collection-recording.component';
import { UsrCollectionRecordingMainListComponent } from './../usr-collection-recording-main-list/usr-collection-recording-main-list.component';
import { UsrSettlementRecordingMainListComponent } from './../usr-settlement-recording-main-list/usr-settlement-recording-main-list.component';

import { UsrPoliceCaseComponent } from './../usr-police-case/usr-police-case.component';

import { UsrSkipTracingMainComponent } from './../usr-skip-tracing-main/usr-skip-tracing-main.component';
import { UsrFiledVisitMainComponent } from './../usr-filed-visit-main/usr-filed-visit-main.component';
import Swal from 'sweetalert2';
import { UsrCustomerExplosureComponent } from './../usr-customer-explosure/usr-customer-explosure.component';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { UsrNewFollowupComponent } from '../usr-new-followup/usr-new-followup.component';
import { ApiService } from 'src/app/api.service';
import { NewFieldVisitComponent } from '../new-field-visit/new-field-visit.component';

import * as moment from 'moment';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-usr-contactrecording',
  templateUrl: './usr-contactrecording.component.html',
  styleUrls: ['./usr-contactrecording.component.css']
})
export class UsrContactrecordingComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  FollowUpcolumnDefs = [
    // {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Log Date', field: 'log_date', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Log Type', field: 'log_type', resizable: true, sortable: true, filter: true},
    {headerName: 'FollowUp Date', field: 'fdate', resizable: true, sortable: true, filter: true},
    {headerName: 'Main Status', field: 'mstatus', resizable: true, sortable: true, filter: true},
    {headerName: 'Sub Status', field: 'substatus', resizable: true, sortable: true, filter: true},
    {headerName: 'Remarks', field: 'remarks', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank Code', field: 'bcode', resizable: true, sortable: true, filter: true},
    {headerName: 'Action To Taken', field: 'actiontotake', resizable: true, sortable: true, filter: true},
    {headerName: 'Tracing Tools', field: 'tracingtool', resizable: true, sortable: true, filter: true},
    {headerName: 'Tracing Link', field: 'tracinglink', resizable: true, sortable: true, filter: true},
    {headerName: 'Attachment URL', field: 'attachment_url', resizable: true, sortable: true, filter: true},
    {headerName: 'Created By', field: 'createdby', resizable: true, sortable: true, filter: true},
    {headerName: 'Creator Name', field: 'creator_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Customer ID', field: 'customer_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Client ID', field: 'client_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Product ID', field: 'product_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Portfolio ID', field: 'portfolio_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bucket ID', field: 'bucket_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Fintresle ID', field: 'finterstal_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Passport Numbet', field: 'passport_no', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];

  SettlementcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Settlement Type', field: 'settlement_type', resizable: true, sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Current Total', field: 'current_total', resizable: true, sortable: true, filter: true},
    {headerName: 'Payment Date', field: 'payment_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Amount', field: 'amount', resizable: true, sortable: true, filter: true},
    {headerName: 'No of Installment', field: 'no_of_installments', resizable: true, sortable: true, filter: true},
    {headerName: 'First Installment', field: 'fst_installment', resizable: true, sortable: true, filter: true},
    {headerName: 'Approval Status', field: 'approval_status', resizable: true, sortable: true, filter: true},
    {headerName: 'Details', field: 'details_notes', resizable: true, sortable: true, filter: true},
    {headerName: 'Attachment URL', field: 'attachment_url', resizable: true, sortable: true, filter: true},
    {headerName: 'Created By', field: 'createdby', resizable: true, sortable: true, filter: true},
    {headerName: 'Creator Name', field: 'creator_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Customer ID', field: 'customer_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Client ID', field: 'client_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Product ID', field: 'product_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Portfolio ID', field: 'portfolio_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bucket ID', field: 'bucket_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Fintresle ID', field: 'finterstal_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Passport Numbet', field: 'passport_no', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
  ];
  PaymentscolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Payment Date', field: 'payment_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Payment Amount', field: 'payment_amount', resizable: true, sortable: true, filter: true},
    {headerName: 'Due amount', field: 'due_amount', resizable: true, sortable: true, filter: true},
    {headerName: 'Paid Date', field: 'paid_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Last Payment Date', field: 'last_paid_amount', resizable: true, sortable: true, filter: true},
    {headerName: 'Next Payment Date', field: 'next_payment_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Attachment URL', field: 'attachment_url', resizable: true, sortable: true, filter: true},
    {headerName: 'Created By', field: 'createdby', resizable: true, sortable: true, filter: true},
    {headerName: 'Creator Name', field: 'creator_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Customer ID', field: 'customer_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Client ID', field: 'client_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Product ID', field: 'product_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Portfolio ID', field: 'portfolio_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bucket ID', field: 'bucket_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Fintresle ID', field: 'finterstal_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Passport Numbet', field: 'passport_no', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
  ];


  FieldVisitcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Territory Name', field: 'fieldvisitterritory', resizable: true, sortable: true, filter: true},
    {headerName: 'Area Name', field: 'fieldvisitarea', resizable: true, sortable: true, filter: true},
    {headerName: 'First Address', field: 'firstaddress', resizable: true, sortable: true, filter: true},
    {headerName: 'Second Address', field: 'secondaddress', resizable: true, sortable: true, filter: true},
    {headerName: 'Requested Date', field: 'fvrqdate', resizable: true, sortable: true, filter: true},
    {headerName: 'Remarks', field: 'remarks', resizable: true, sortable: true, filter: true},
    {headerName: 'Attachment URL', field: 'attachment_url', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', resizable: true, sortable: true, filter: true},
    {headerName: 'Created By', field: 'createdby', resizable: true, sortable: true, filter: true},
    {headerName: 'Creator Name', field: 'creator_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Customer ID', field: 'customer_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Client ID', field: 'client_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Product ID', field: 'product_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Portfolio ID', field: 'portfolio_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bucket ID', field: 'bucket_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Fintresle ID', field: 'finterstal_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Passport Numbet', field: 'passport_no', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true, cellRenderer: (data) => {
      return moment(data.value).format('LLLL');
    }},
  ];
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  rows = [];
  searchQR: any;
  value1: any;
  del:boolean = false;
  show:any;
  assets:boolean = false;
  payment:boolean = false;
  displayPosition :boolean = false;
  multipleAccountInformation = [];
  loadedRecord: any;
  row: any;
  column: any;
  dataList: any;
  CustomerData: any;
  FollowUpList = [];
  LinkedAccounts: any[];
  MappedAccounts: any[];
  SettlementList: any;
  userFilter: any = { settlement_type: '' };
  PaymentsList: any;
  FieldVisitList: any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    public dialog: MatDialog,
    private _api:ApiService
    ) { }


  ngOnInit(): void {
    // window.scrollTo(0, 0);
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

    this.multipleAccountInformation = [
      { LoanNumber:"123456", Product: "Auto Loan", LoanAmount: "10,00000", OutstandingAmount: "50,0000", TotalOverdueAmount: "2000", NextInstallmentAmount: "20000", NextInstallmentDueDate: "20-10-2020", Bucket: "23", MinimumamountforBucketmovement: "5", UnitCode: "BC23", },
      { LoanNumber:"789654", Product: "NA", LoanAmount: "NA", OutstandingAmount: "NA", TotalOverdueAmount: "NA", NextInstallmentAmount: "NA", NextInstallmentDueDate: "NA", Bucket: "NA", MinimumamountforBucketmovement: "NA", UnitCode: "NA", },
      { LoanNumber:"786786", Product: "Auto Loan", LoanAmount: "15,00000", OutstandingAmount: "55,0000", TotalOverdueAmount: "4000", NextInstallmentAmount: "40000", NextInstallmentDueDate: "20-01-2021", Bucket: "32", MinimumamountforBucketmovement: "5", UnitCode: "BC23", },
    ]


    if (this.storage.get("_storedRecord")) {
      this.loadedRecord = this.storage.get("_storedRecord")
      console.log(this.loadedRecord);
      this.dataList = this.loadedRecord.dataList;
      this.CustomerData = this.loadedRecord.keyvalue.customer_details[0];
      // Assigned Unique ID
      localStorage.setItem("Account_ID",this.loadedRecord.keyvalue.acc_no);
      localStorage.setItem("Customer_ID",this.loadedRecord.keyvalue.customer_id);
      localStorage.setItem("Passport_Number",this.loadedRecord.keyvalue.passport_no);
      localStorage.setItem("Portfolio_ID",this.loadedRecord.keyvalue.porfolio_id);
      localStorage.setItem("Product_ID",this.loadedRecord.keyvalue.product_id);
      localStorage.setItem("Client_ID",this.loadedRecord.keyvalue.client_id);
      localStorage.setItem("Bucket_ID",this.loadedRecord.keyvalue.bucket_id);
      localStorage.setItem("Bank_ID",this.loadedRecord.keyvalue.bank_id); 
      localStorage.setItem("Fintrestle_ID",this.loadedRecord.keyvalue.finterstal_id);
      const LinkedData = {
        bucket_id: this.loadedRecord.keyvalue.bucket_id,
        passport_no : this.loadedRecord.keyvalue.passport_no

      }
      const MappedData = {
        passport_no: this.loadedRecord.keyvalue.passport_no
      }
      this._api.getLinkedaccounts(LinkedData).subscribe(data=>{
        if (data['Code']==200) {
          this.LinkedAccounts = data['Data'];
        } else {
          this.LinkedAccounts = [];
        }
      });
      this._api.getMappedaccounts(MappedData).subscribe(data=>{
        if (data['Code']==200) {
          this.MappedAccounts = data['Data'];
        } else {
          this.MappedAccounts = [];
        }
      });
      this._api.getlist_new_FollowUp(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.FollowUpList = data['Data'];
        } else {
          this.FollowUpList = null;
        }
      });
      this._api.getlist_new_settlement(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.SettlementList = data['Data'];
        } else {
          this.SettlementList = null;
        }
      });
      this._api.getlist_new_payment(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.PaymentsList = data['Data'];
        } else {
          this.PaymentsList = null;
        }
      });
      this._api.getlist_new_fieldvisit(localStorage.getItem("Fintrestle_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.FieldVisitList = data['Data'];
        } else {
          this.FieldVisitList = null;
        }
      });
    } else {
      this.loadedRecord = null;
    }
    
    
  }
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }

  onTypeChange(event){
    this.userFilter.settlement_type = event.target.value;
  }

  showPositionDialog() {
    this.displayPosition = true;
}

  show1() {
    const dialogRef = this.dialog.open(UsrNewFollowupComponent, {
      height: '550px',
      width:'90%',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show1';
    // this.followuptake = true;
    // this.selectedIndex = 21;
  }


  show2() {
    const dialogRef = this.dialog.open(UsrWorkflowComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show2';
    // this.workflow = true;
    // this.selectedIndex = 22;
  }
  show3() {
    const dialogRef = this.dialog.open(UsrCollectionRecordingMainListComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show3';
  }
  show4() {
    const dialogRef = this.dialog.open(UsrSettlementRecordingMainListComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show4';
  }

  show5() {
    const dialogRef = this.dialog.open(UsrPoliceCaseComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show5';
  }
  show6() {
    const dialogRef = this.dialog.open(UsrCustomerleaccountComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  show7() {
    const dialogRef = this.dialog.open(UsrOverduedetailsoneComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  show8() {
    const dialogRef = this.dialog.open(UsrSkipTracingMainComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show8';
  }
  show9() {
    const dialogRef = this.dialog.open(NewFieldVisitComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show9';
  }
  show10() {
    const dialogRef = this.dialog.open(UsrPaymentdetailsComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show11() {
    const dialogRef = this.dialog.open(UsrPhonedetailsComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show12() {
    const dialogRef = this.dialog.open(UsrOverduedetailstwoComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show13() {
    const dialogRef = this.dialog.open(UsrCustomerExplosureComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show14() {
    const dialogRef = this.dialog.open(UsrAllocationhistoryComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  close(){
    this.dialog.closeAll();
  }

  openworklist(){
    Swal.fire({
      // title: 'Are you sure?',
      text: 'You want to open in a new tab!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        let url: any = '#/admin_panel/accounts/accounts';
        window.open(url, '_blank');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigateByUrl('/admin_panel/accounts/accounts')
      }
    })

  }

  openworklist1(){
    Swal.fire({
      // title: 'Are you sure?',
      text: 'You want to make a call',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
    });

  }

  openworklist2(){
    Swal.fire({
      // title: 'Are you sure?',
      text: 'You want to send the mail',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {

    });

  }


  asset(){
    this.assets = !this.assets;
  }
  pay(){
    this.payment = !this.payment;
  }

}


