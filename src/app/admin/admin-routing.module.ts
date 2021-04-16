import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoneyPotClientDetailComponent } from './pages/honey-pot-client-detail/honey-pot-client-detail.component';
import { HoneyPotClientDetailFormComponent } from './pages/honey-pot-client-detail/honey-pot-client-detail-form/honey-pot-client-detail-form.component';
import { ClientProfileComponent } from './pages/honey-pot-client-detail/client-profile/client-profile.component';
import { CountryComponent } from './pages/country/country.component';
import { LicenseComponent } from './pages/license/license.component';
import { LicenseFormComponent } from './pages/license/license-form/license-form.component';
import { AccAccountlistComponent } from './pages/accounts/acc-accountlist/acc-accountlist.component';
import { AccLegalComponent } from './pages/accounts/acc-legal/acc-legal.component';
import { AccAuthorizationComponent } from './pages/accounts/acc-authorization/acc-authorization.component';
import { AccAuthorViewComponent } from './pages/accounts/acc-author-view/acc-author-view.component';
import { UsrContactrecordingComponent } from './pages/users/usr-contactrecording/usr-contactrecording.component';
import { UsrActioncodeComponent } from './pages/users/usr-actioncode/usr-actioncode.component';
import { UsrAddnewaddressComponent } from './pages/users/usr-addnewaddress/usr-addnewaddress.component';
import { UsrAddressdetailsComponent } from './pages/users/usr-addressdetails/usr-addressdetails.component';
import { UsrAdhocscreenComponent } from './pages/users/usr-adhocscreen/usr-adhocscreen.component';
import { UsrAllocationhistoryComponent } from './pages/users/usr-allocationhistory/usr-allocationhistory.component';
import { UsrCustomerdetailsComponent } from './pages/users/usr-customerdetails/usr-customerdetails.component';
import { UsrCustomerleaccountComponent } from './pages/users/usr-customerleaccount/usr-customerleaccount.component';
import { UsrDocumnetretrievalComponent } from './pages/users/usr-documnetretrieval/usr-documnetretrieval.component';
import { UsrExcelexportComponent } from './pages/users/usr-excelexport/usr-excelexport.component';
import { UsrFollowupsaveComponent } from './pages/users/usr-followupsave/usr-followupsave.component';
import { UsrFollowuptakeComponent } from './pages/users/usr-followuptake/usr-followuptake.component';
import { UsrFollowuptakeoneComponent } from './pages/users/usr-followuptakeone/usr-followuptakeone.component';
import { UsrFollowuptrailsComponent } from './pages/users/usr-followuptrails/usr-followuptrails.component';
import { UsrGurantordetailsComponent } from './pages/users/usr-gurantordetails/usr-gurantordetails.component';
import { UsrLoandetailsComponent } from './pages/users/usr-loandetails/usr-loandetails.component';
import { UsrLogoffusersComponent } from './pages/users/usr-logoffusers/usr-logoffusers.component';
import { UsrOverduedetailsoneComponent } from './pages/users/usr-overduedetailsone/usr-overduedetailsone.component';
import { UsrOverduedetailstwoComponent } from './pages/users/usr-overduedetailstwo/usr-overduedetailstwo.component';
import { UsrPaymentdetailsComponent } from './pages/users/usr-paymentdetails/usr-paymentdetails.component';
import { UsrPaymentdetailsoneComponent } from './pages/users/usr-paymentdetailsone/usr-paymentdetailsone.component';
import { UsrPhonedetailsComponent } from './pages/users/usr-phonedetails/usr-phonedetails.component';
import { UsrReferaccountComponent } from './pages/users/usr-referaccount/usr-referaccount.component';
import { UsrReportComponent } from './pages/users/usr-report/usr-report.component';
import { UsrRpoComponent } from './pages/users/usr-rpo/usr-rpo.component';
import { UsrScreenaccesscontrolComponent } from './pages/users/usr-screenaccesscontrol/usr-screenaccesscontrol.component';
import { UsrScreenaccesscontroloneComponent } from './pages/users/usr-screenaccesscontrolone/usr-screenaccesscontrolone.component';
import { UsrScreenaccesscontrolthreeComponent } from './pages/users/usr-screenaccesscontrolthree/usr-screenaccesscontrolthree.component';
import { UsrScreenaccesscontroltwoComponent } from './pages/users/usr-screenaccesscontroltwo/usr-screenaccesscontroltwo.component';
import { UsrScreenaccessoneComponent } from './pages/users/usr-screenaccessone/usr-screenaccessone.component';
import { UsrScreenaccesstwoComponent } from './pages/users/usr-screenaccesstwo/usr-screenaccesstwo.component';
import { UsrUserdetailsComponent } from './pages/users/usr-userdetails/usr-userdetails.component';
import { UsrAllocationdetailComponent } from './pages/users/usr-allocationdetail/usr-allocationdetail.component';
import { UsrCollateraldetailssComponent } from './pages/users/usr-collateraldetailss/usr-collateraldetailss.component';

import { ExcelUploadComponent } from './pages/excel-upload/excel-upload.component';
import { LocalaccallocComponent } from './pages/userflow/localaccalloc/localaccalloc.component';
import { LocalaccpendingComponent } from './pages/userflow/localaccpending/localaccpending.component';
import { LocalaccworkedComponent } from './pages/userflow/localaccworked/localaccworked.component';
import { LocalaccptpComponent } from './pages/userflow/localaccptp/localaccptp.component';
import { VechicleloanlistComponent } from './pages/userflow/vechicleloanlist/vechicleloanlist.component';
import { PersonalloanlistComponent } from './pages/userflow/personalloanlist/personalloanlist.component';
import { HomeloanlistComponent } from './pages/userflow/homeloanlist/homeloanlist.component';
import { CreditcardlistComponent } from './pages/userflow/creditcardlist/creditcardlist.component';
import { WithdrawexcelComponent } from './pages/userflow/withdrawexcel/withdrawexcel.component';
import { WithdrawsingleComponent } from './pages/userflow/withdrawsingle/withdrawsingle.component';
import { ReallowsingleComponent } from './pages/userflow/reallowsingle/reallowsingle.component';
import { ReallowexcelComponent } from './pages/userflow/reallowexcel/reallowexcel.component';
import { LinkdelinkComponent } from './pages/userflow/linkdelink/linkdelink.component';
import { DedupeComponent } from './pages/userflow/dedupe/dedupe.component';
import { AllocationsingleComponent } from './pages/userflow/allocationsingle/allocationsingle.component';
import { AllocationexcelComponent } from './pages/userflow/allocationexcel/allocationexcel.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { UserFormComponent } from './pages/user-management/user-form/user-form.component';
import { UserGroupComponent } from './pages/user-management/user-group/user-group.component';
import { UserRoleComponent } from './pages/user-management/user-role/user-role.component';
import { AgencyManagementComponent } from './pages/agency-management/agency-management.component';
import { AgencyFieldAddComponent } from './pages/agency-management/agency-field-add/agency-field-add.component';
import { FieldMappingComponent } from './pages/honey-pot-client-detail/field-mapping/field-mapping.component';
import { AddPortfolioComponent } from './pages/honey-pot-client-detail/add-portfolio/add-portfolio.component';
import { UploadedListComponent } from './pages/userflow/uploaded-list/uploaded-list.component';
import { AddProductComponent } from './pages/honey-pot-client-detail/add-product/add-product.component';
import { DocumentManagementComponent } from './pages/honey-pot-client-detail/document-management/document-management.component';
import { BucketComponent } from './pages/honey-pot-client-detail/bucket/bucket.component';
import { UserStatusMarkingComponent } from './pages/user-management/user-status-marking/user-status-marking.component';
import { ClientStatusMarkingComponent } from './pages/honey-pot-client-detail/client-status-marking/client-status-marking.component';
import { CreatePortfolioComponent } from './pages/honey-pot-client-detail/create-portfolio/create-portfolio.component';
import { CreateProductComponent } from './pages/honey-pot-client-detail/create-product/create-product.component';
import { CreateClientTypeComponent } from './pages/honey-pot-client-detail/create-client-type/create-client-type.component';
import { AccessRightsComponent } from './pages/access-rights/access-rights.component';
import { CreateDocumentTypeComponent } from './pages/honey-pot-client-detail/create-document-type/create-document-type.component';
import { DualTemporaryAllocationComponent } from './pages/userflow/dual-temporary-allocation/dual-temporary-allocation.component';
import { AgentInboxComponent } from './pages/agent-inbox/agent-inbox.component';
import { AgentAccListComponent } from './pages/agent-acc-list/agent-acc-list.component';
import { AgentTODOListComponent } from './pages/agent-to-do-list/agent-to-do-list.component';
import { EntityFormComponent } from './pages/entity-management/entity-form/entity-form.component';
import { EntityManagementComponent } from './pages/entity-management/entity-management.component';
import { CreateAccountTypeComponent } from './pages/create-account-type/create-account-type.component';
import { CreateReportingToComponent } from './pages/create-reporting-to/create-reporting-to.component';
import { CreateStateComponent } from './pages/create-state/create-state.component';
import { CreateDesignationComponent } from './pages/create-designation/create-designation.component';
import { CreateUserTypeComponent } from './pages/user-management/create-user-type/create-user-type.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { MegreinguserComponent } from './megreinguser/megreinguser.component';
import { NewallocationComponent } from './pages/newallocation/newallocation.component';
import { AgentDashboardComponent } from './dashboard/agent-dashboard/agent-dashboard.component';
import { NewreallocationComponent } from './pages/newreallocation/newreallocation.component';
import { CreatestatusComponent } from './pages/createstatus/createstatus.component';
import { CreatefieldvisitcodeComponent } from './pages/createfieldvisitcode/createfieldvisitcode.component';
import { CreatebankcodeComponent } from './pages/createbankcode/createbankcode.component';
import { CreateareacodeComponent } from './pages/createareacode/createareacode.component';
import { CreateactiontakenComponent } from './pages/createactiontaken/createactiontaken.component';
import { CreatetracingtoolsComponent } from './pages/createtracingtools/createtracingtools.component';
import { CreateapprovalComponent } from './pages/createapproval/createapproval.component';
import { BankdetailsComponent } from './pages/bankdetails/bankdetails.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SettlementtrackerComponent } from './pages/report/settlementtracker/settlementtracker.component';
import { PtpreportComponent } from './pages/report/ptpreport/ptpreport.component';
import { StatusreportComponent } from './pages/report/statusreport/statusreport.component';
import { CreateLogTypeComponent } from './pages/create-log-type/create-log-type.component';
import { CreateTeamComponent } from './pages/users/create-team/create-team.component';
import { CreateMembersComponent } from './pages/users/create-members/create-members.component';
import { ApprovalRequestComponent } from './pages/approval-request/approval-request.component';
import { SetApprovalRequestComponent } from './pages/set-approval-request/set-approval-request.component';
import { WorklistComponent } from './pages/worklist/worklist.component';
import { ReallocationComponent } from './pages/reallocation/reallocation.component';
import { AllocationComponent } from './pages/allocation/allocation.component';
import { BucketDetailsComponent } from './pages/bucket-details/bucket-details.component';
import { FirstallocationsComponent } from './pages/firstallocations/firstallocations.component';
import { PortfiloBucketsComponent } from './pages/portfilo-buckets/portfilo-buckets.component';
import { PortfiloRecordlistComponent } from './pages/portfilo-recordlist/portfilo-recordlist.component';
import { WorklistBucketsComponent } from './pages/worklist-buckets/worklist-buckets.component';
import { WorklistRecordlistComponent } from './pages/worklist-recordlist/worklist-recordlist.component';
import { AgentRequestComponent } from './pages/agent-request/agent-request.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch:'full'},
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client_form', component: HoneyPotClientDetailFormComponent },
  { path: 'Clients', component: HoneyPotClientDetailComponent },
  { path: 'Client_profile', component: ClientProfileComponent },
  { path: 'Country', component: CountryComponent },
  { path: 'License', component: LicenseComponent },
  { path: 'License_Form', component: LicenseFormComponent },
  { path: 'Excel_Upload', component: ExcelUploadComponent },

  { path: 'bank_details', component: BankdetailsComponent },
  { path: 'user_details', component: UserDetailsComponent },


  { path: 'settlement_report', component: SettlementtrackerComponent },
  { path: 'ptpreport', component: PtpreportComponent },
  { path: 'statusreport', component: StatusreportComponent },

  //////Accounts//////
  { path: 'accounts/accounts', component: AccAccountlistComponent },
  { path: 'accounts/legal', component: AccLegalComponent },
  { path: 'accounts/authorization', component: AccAuthorizationComponent },
  { path: 'accounts/view_authorization', component: AccAuthorViewComponent },

  /////user//////
  { path: 'user/createuser', component: UsrContactrecordingComponent },
  { path: 'user/create-team', component: CreateTeamComponent },
  { path: 'user/create-members', component: CreateMembersComponent },
  { path: 'user/createuser', component: UsrContactrecordingComponent },
  { path: 'user/actioncode', component: UsrActioncodeComponent },
  { path: 'user/addnewaddres', component: UsrAddnewaddressComponent },
  { path: 'user/addresdetails', component: UsrAddressdetailsComponent },
  { path: 'user/adhoc', component: UsrAdhocscreenComponent },
  { path: 'user/allocationhistroy', component: UsrAllocationhistoryComponent },
  { path: 'user/customerdetails', component: UsrCustomerdetailsComponent },
  { path: 'user/customeraccounts', component: UsrCustomerleaccountComponent },
  { path: 'user/documentretrieval', component: UsrDocumnetretrievalComponent },
  { path: 'user/excelexport', component: UsrExcelexportComponent },
  { path: 'user/followupsave', component: UsrFollowupsaveComponent },
  { path: 'user/followuptake', component: UsrFollowuptakeComponent },
  { path: 'user/followuptake1', component: UsrFollowuptakeoneComponent },
  { path: 'user/followuptrails', component: UsrFollowuptrailsComponent },
  { path: 'user/guarantordetails', component: UsrGurantordetailsComponent },
  { path: 'user/loandetails', component: UsrLoandetailsComponent },
  { path: 'user/logoffuser', component: UsrLogoffusersComponent },
  { path: 'user/overduedetails', component: UsrOverduedetailsoneComponent },
  { path: 'user/overduedetails1', component: UsrOverduedetailstwoComponent },
  { path: 'user/paymentsdetails', component: UsrPaymentdetailsComponent },
  { path: 'user/paymentsdetails1', component: UsrPaymentdetailsoneComponent },
  { path: 'user/phonedetails', component: UsrPhonedetailsComponent },
  { path: 'user/referaccount', component: UsrReferaccountComponent },
  { path: 'user/reports', component: UsrReportComponent },
  { path: 'user/rpodetails', component: UsrRpoComponent },
  { path: 'user/screenaccess', component: UsrScreenaccesscontrolComponent },
  { path: 'user/screenaccess1', component: UsrScreenaccesscontroloneComponent },
  { path: 'user/screenaccess2', component: UsrScreenaccesscontroltwoComponent },
  { path: 'user/screenaccess3', component:  UsrScreenaccesscontrolthreeComponent},
  { path: 'user/screencontrol', component:  UsrScreenaccessoneComponent },
  { path: 'user/screencontrol1', component: UsrScreenaccesstwoComponent },
  { path: 'user/screen1', component: UsrContactrecordingComponent },
  { path: 'user/screen2', component: UsrContactrecordingComponent },
  { path: 'user/screen3', component: UsrContactrecordingComponent },
  { path: 'user/userdetails', component: UsrUserdetailsComponent },
  { path: 'user/usercollateraldetails', component: UsrCollateraldetailssComponent },
  { path: 'user/user_management', component: UserManagementComponent },
  { path: 'user/user_form', component: UserFormComponent },
  { path: 'user/user_group', component: UserGroupComponent },
  { path: 'user/user_role', component: UserRoleComponent },
  { path: 'user/user_type', component: CreateUserTypeComponent },


  { path: 'userflow/accallocate', component:  LocalaccallocComponent},
  { path: 'userflow/accworked', component: LocalaccworkedComponent },
  { path: 'userflow/accpending', component: LocalaccpendingComponent },
  { path: 'userflow/accptptoken', component: LocalaccptpComponent },

  { path: 'userflow/creditcardlist', component:  CreditcardlistComponent},
  { path: 'userflow/vehicleloanlist', component: VechicleloanlistComponent },
  { path: 'userflow/personaloanlist', component: PersonalloanlistComponent },
  { path: 'userflow/homeloanlist', component: HomeloanlistComponent },



  { path: 'userflow/allocationexcel', component:  AllocationexcelComponent},
  { path: 'userflow/newallocation', component:  NewallocationComponent},
  { path: 'userflow/newreallocation', component:  NewreallocationComponent},
  { path: 'userflow/allocationsingle', component: AllocationsingleComponent },
  { path: 'userflow/dedupe', component: DedupeComponent },
  { path: 'userflow/linkdeliknk', component: LinkdelinkComponent },
  { path: 'userflow/reallowexcel', component : ReallowexcelComponent },
  { path: 'userflow/reallowsingle', component: ReallowsingleComponent },
  { path: 'userflow/withdrawexcel', component: WithdrawexcelComponent },
  { path: 'userflow/withdrawsingle', component: WithdrawsingleComponent },
  { path: 'userflow/Dual_Temporary_allocation', component: DualTemporaryAllocationComponent },

  { path: 'userflow/newallocation', component: NewallocationComponent},


  { path: 'Configuration', component: ConfigurationComponent },
  { path: 'Agency', component: AgencyManagementComponent },
  { path: 'fieldset', component: AgencyFieldAddComponent },
  { path: 'field_mapping', component: FieldMappingComponent },
  { path: 'Portfolio', component: AddPortfolioComponent },

  { path: 'uploaded_list', component: UploadedListComponent },
  { path: 'client/product', component: AddProductComponent },
  { path: 'Document', component: DocumentManagementComponent },
  { path: 'client/Bucket', component: BucketComponent },
  { path: 'create/status', component: CreatestatusComponent },
  { path: 'create/fvcode', component: CreatefieldvisitcodeComponent },
  { path: 'create/bankcode', component: CreatebankcodeComponent },
  { path: 'create/areacode', component: CreateareacodeComponent },
  { path: 'create/actiontaken', component: CreateactiontakenComponent },
  { path: 'create/tracingtools', component: CreatetracingtoolsComponent },
  { path: 'create/approval_status', component: CreateapprovalComponent },
  { path: 'create/logtype', component: CreateLogTypeComponent },
  { path: 'user/user_status_marking', component: UserStatusMarkingComponent },
  { path: 'client/client_status_marking', component: ClientStatusMarkingComponent },
  { path: 'client/Create_portfolio', component: CreatePortfolioComponent },
  { path: 'client/Create_product', component: CreateProductComponent },
  { path: 'client/Create_client_type', component: CreateClientTypeComponent },
  { path: 'client/Create_document_type', component: CreateDocumentTypeComponent },
  { path: 'Access_Rights', component: AccessRightsComponent },
  { path: 'Agent_Inbox', component: AgentInboxComponent },
  { path: 'Agent_acc_list', component: AgentAccListComponent },
  { path: 'Agent_TO_DO_list', component: AgentTODOListComponent },
  { path: 'Super_admin/EntityManagement', component: EntityManagementComponent },
  { path: 'Super_admin/EntityForm', component: EntityFormComponent },
  { path: 'Create_Account_Type', component: CreateAccountTypeComponent },
  { path: 'Create_Designation', component: CreateDesignationComponent },
  { path: 'Create_State', component: CreateStateComponent },
  { path: 'allocation/approval-request', component: ApprovalRequestComponent },
  { path: 'allocation/set-approval-request', component: SetApprovalRequestComponent },
  { path: 'allocation/agent-request', component: AgentRequestComponent },
  { path: 'accounts/allocation', component: AllocationComponent },
  { path: 'accounts/reallocation', component: ReallocationComponent },
  { path: 'accounts/worklist', component: WorklistComponent },



  ////// Admin create /////
  { path: 'admin_create', component: AdminUserComponent},
  { path: 'megreinguser', component: MegreinguserComponent},
  { path: 'Agent_Dashboard', component: AgentDashboardComponent},

  { path: 'bucket_details', component: BucketDetailsComponent },
  { path: 'firstallocations', component: FirstallocationsComponent },


  { path: 'porfilo_buckets', component: PortfiloBucketsComponent },
  { path: 'portfilo_recordlist', component: PortfiloRecordlistComponent },

  { path: 'worklist_buckets', component: WorklistBucketsComponent },
  { path: 'worklist_recordlist', component: WorklistRecordlistComponent },







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
