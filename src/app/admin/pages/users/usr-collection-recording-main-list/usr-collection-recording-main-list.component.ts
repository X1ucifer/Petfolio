import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsrCollectionRecordingComponent } from './../usr-collection-recording/usr-collection-recording.component';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usr-collection-recording-main-list',
  templateUrl: './usr-collection-recording-main-list.component.html',
  styleUrls: ['./usr-collection-recording-main-list.component.css']
})
export class UsrCollectionRecordingMainListComponent implements OnInit {
  rows = [];
  searchQR: any;
  value1: any;
  CollectionList: any;
  CollectionForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private _api:ApiService,
    private router: Router,
    public dialog: MatDialog
  ) { 
    this.CollectionForm = this.formBuilder.group({
      account_no_collection:  ['',Validators.required],
      customer_name_collection : ['',Validators.required],
      dpd_collection : ['',Validators.required],
      card_number_collection : ['',Validators.required],
      branch_collection : ['',Validators.required],
      bucket_collection : ['',Validators.required],
      product_collection : ['',Validators.required],
      queue_collection : ['',Validators.required],
      cardtype_collection : ['',Validators.required],
      pos_collection : ['',Validators.required],
      subproduct_code_collection : ['',Validators.required],
      scheme_collection : ['',Validators.required]
    })
   }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = []
    this._api.list_CollectionDetails_getlist().subscribe(data=>{
      if (data['Code']==200) {
        this.CollectionList = data['Data'];
      } else {
        this.CollectionList = [];
      }
    })
  }
  addCollection(){
    if (this.CollectionForm.valid) {
      this._api.add_CollectionDetails_create(this.CollectionForm.value).subscribe(data=>{
       if (data['Code'] == 200) {
         alert("Successfully added to database "+data['Message'])
       } else {
         alert("Failed: "+data['Message'])
       }
      });
     } else {
       alert("Form not Valid");
     }
  }
  show() {
    const dialogRef = this.dialog.open(UsrCollectionRecordingComponent, {
      height: '600px',
      width:'90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  close() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to close it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.dialog.closeAll();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
}
