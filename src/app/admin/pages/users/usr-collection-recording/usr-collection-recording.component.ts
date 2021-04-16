import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-usr-collection-recording',
  templateUrl: './usr-collection-recording.component.html',
  styleUrls: ['./usr-collection-recording.component.css']
})
export class UsrCollectionRecordingComponent implements OnInit {
  table_v:boolean = false;
  rows = [];
  searchQR: any;
  value1: any;
  CollectioninfoForm: FormGroup;
  CollectionInfoList: any;

  constructor(
    private _api:ApiService,
    private formBuilder:FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UsrCollectionRecordingComponent>
  ) { 
    this.CollectioninfoForm = this.formBuilder.group({
      payment_type_collection_info:  ['',Validators.required],
      bookcode_collection_info : ['',Validators.required],
      payment_date_collection_info : ['',Validators.required],
      reciept_no_collection_info : ['',Validators.required],
      remarks_collection_info : ['',Validators.required],
      total_amount_collection_info : ['',Validators.required]
    })
   }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = [];
    this._api.list_CollectionInfo_getlist().subscribe(data=>{
      if (data['Code']==200) {
        this.CollectionInfoList = data['Data'];
      } else {
        this.CollectionInfoList = []
      }
    });
  }

  
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }

  close() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to go back!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.dialogRef.close();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
}
