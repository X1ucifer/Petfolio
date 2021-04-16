import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-bucket-details',
  templateUrl: './bucket-details.component.html',
  styleUrls: ['./bucket-details.component.css']
})
export class BucketDetailsComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  ActionsTakencolumnDefs = [
    {headerName: 'Bucket ID', field: 'bucket_id', width: 250, checkboxSelection: true,sortable: true, filter: true},
    {headerName: 'BANK NAME', field: 'bank_name.bank_name', resizable: true, sortable: true, filter: true},
    {headerName: 'PRODUCT NAME', field: 'product_id.product_type', resizable: true, sortable: true, filter: true},
    {headerName: 'PORTFOLIO NAME', field: 'portfolio_id.portfolio_type', resizable: true, sortable: true, filter: true},
    {headerName: 'TOTAL RECORDS', field: 'record_count', resizable: true, sortable: true, filter: true},
    {headerName: 'ALLOCATED RECORDS', field: 'allocated_record', resizable: true, sortable: true, filter: true},
    {headerName: 'NOT ALLOCATED RECORDS', field: 'not_allocated_record', resizable: true, sortable: true, filter: true},
    {headerName: 'CREATED AT', field: 'createdAt', resizable: true, sortable: true, filter: 'agDateColumnFilter',},
    {headerName: 'Status', field: 'status', sortable: true, filter: true}
  ];
  rows = [];
  searchQR: any;
  value1: any;
  loadTable: boolean;
  paginationPageSize:number;
  pageSize: number;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.pageSize = 25;
    this.saveInLocal('Entity_data', undefined);

    let a  = {
      user_id : ""+this.getFromLocal("User_ID")
    }
    this.loadTable = false;
    this._api.get_bucket_details(a).subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
        this.loadTable = true;
        this.paginationPageSize = 10;
      }
    );

  }
  client_form() {
    // this.saveInLocal('Client_form', 'client');
    this.router.navigateByUrl('admin_panel/Super_admin/EntityForm')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  getPageSize(event){
    console.log(event.target.value);
    this.paginationPageSize = Number(event.target.value);
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }
  client_form_view(item) {
    this.saveInLocal('Entity_data', item);
    this.router.navigateByUrl('admin_panel/Super_admin/EntityForm')
  }
  Delete(id){
    let a={
      "_id": id
    }
    this._api.entity_delete(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 200) {
          alert("Deleted successfully");
          this.ngOnInit();
        }
        else {
          alert('Somthing went wrong');
        }

      }
    );
  }


  viewBucket(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    this.move_to_select(selectedData[0]);
  }


  move_to_select(item){
    console.log(item);
    this.saveInLocal('bucket_detail', item);
    this.router.navigateByUrl('admin_panel/firstallocations')
  }

}
