import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-usr-workflow',
  templateUrl: './usr-workflow.component.html',
  styleUrls: ['./usr-workflow.component.css']
})
export class UsrWorkflowComponent implements OnInit {
  table_v: boolean = false;
  types: any = [
    { "y": "Promise to Pay" },
    { "y": "Action2" },
    { "y": "Action3" },
    { "y": "Action4" },
    { "y": "Action5" },
  ];
  types1: any = [
    { "y": "Group1" },
    { "y": "Group2" },
    { "y": "Group3" },
    { "y": "Group4" },
    { "y": "Group5" },
  ];
  types2: any = [
    { "y": "Collector1" },
    { "y": "Collector2" },
    { "y": "Collector3" },
    { "y": "Collector4" },
    { "y": "Collector5" },
  ];
  types3: any = [
    { "y": "Reason1" },
    { "y": "Reason2" },
    { "y": "Reason3" },
    { "y": "Reason4" },
    { "y": "Reason5" },
  ];
  rows = [];
  searchQR: any;
   value1: any;
  workFlowList: any;
  workflowForm: FormGroup;
  login_Details: any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api:ApiService,
    private router: Router,
    public dialog: MatDialog,
    private formBuilder:FormBuilder
  ) { 
    this.workflowForm = this.formBuilder.group({
      createdby:  ['',Validators.required],
      creator_name:  ['',Validators.required],
      customer_id:  ['',Validators.required],
      main_action_workflow:  ['',Validators.required],
      action_workflow : ['',Validators.required],
      togroup_workflow : ['',Validators.required],
      tocollector_workflow : ['',Validators.required],
      reason_workflow : ['',Validators.required],
      notes_workflow : ['',Validators.required],
    });
    
  }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = [];
    
    this.login_Details = this.getFromLocal("login_Details");
    this.workflowForm.patchValue({
      createdby: this.login_Details.email_id,
      creator_name: this.login_Details.name,
      customer_id: localStorage.getItem("Customer_ID"),
    });

    this._api.list_WorkFlow_getlist(localStorage.getItem("Customer_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.workFlowList = data['Data'];
      } else {
        this.workFlowList = [];
      }
    });
  }


  getFromLocal(key): any {
    return this.storage.get(key);
  }

  getMainaction(event){
    this.workflowForm.patchValue({
      main_action_workflow:event.target.value
    });
 
  }
  addWorkFlow(){
    if (this.workflowForm.valid) {
      this._api.add_WorkFlow_create(this.workflowForm.value).subscribe(data=>{
        if (data['Code']==200) {
          this.refreshList();
        } else {
          alert("Error: "+data['Message']);
        }
      });
    } else {
      alert("Please fill all fields");
    }
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

  refreshList(){
    this._api.list_WorkFlow_getlist(localStorage.getItem("Customer_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.workFlowList = data['Data'];
      } else {
        this.workFlowList = [];
      }
    });
  }
}
