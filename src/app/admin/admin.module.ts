import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';


import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChartModule } from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {OverlayPanelModule} from 'primeng/overlaypanel';
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
import { UsrScreenaccessoneComponent } from './pages/users/usr-screenaccessone/usr-screenaccessone.component';
import { UsrScreenaccesstwoComponent } from './pages/users/usr-screenaccesstwo/usr-screenaccesstwo.component';
import { UsrScreenaccessthreeComponent } from './pages/users/usr-screenaccessthree/usr-screenaccessthree.component';
import { UsrScreenaccesscontrolComponent } from './pages/users/usr-screenaccesscontrol/usr-screenaccesscontrol.component';
import { UsrScreenaccesscontroloneComponent } from './pages/users/usr-screenaccesscontrolone/usr-screenaccesscontrolone.component';
import { UsrScreenaccesscontroltwoComponent } from './pages/users/usr-screenaccesscontroltwo/usr-screenaccesscontroltwo.component';
import { UsrScreenaccesscontrolthreeComponent } from './pages/users/usr-screenaccesscontrolthree/usr-screenaccesscontrolthree.component';
import { UsrUserdetailsComponent } from './pages/users/usr-userdetails/usr-userdetails.component';
import { MatTabsModule } from '@angular/material/tabs';
// import { FlexLayoutModule } from "@angular/flex-layout";

import {MatTooltipModule} from '@angular/material/tooltip';
import { UsrAllocationdetailComponent } from './pages/users/usr-allocationdetail/usr-allocationdetail.component';
import { UsrCollateraldetailssComponent } from './pages/users/usr-collateraldetailss/usr-collateraldetailss.component';
import { UsrAccountsummeryComponent } from './pages/users/usr-accountsummery/usr-accountsummery.component';
import { UsrDelinquencyflowComponent } from './pages/users/usr-delinquencyflow/usr-delinquencyflow.component';
import { UsrStatcardComponent } from './pages/users/usr-statcard/usr-statcard.component';
import { UsrAssetDetailComponent } from './pages/users/usr-asset-detail/usr-asset-detail.component';
import { UsrRepaymentComponent } from './pages/users/usr-repayment/usr-repayment.component';
import { UsrBouncesComponent } from './pages/users/usr-bounces/usr-bounces.component';
import { UsrPaymentHistoryComponent } from './pages/users/usr-payment-history/usr-payment-history.component';
import { UsrForeclosureComponent } from './pages/users/usr-foreclosure/usr-foreclosure.component';
import { UsrWorkflowComponent } from './pages/users/usr-workflow/usr-workflow.component';
import { UsrCollectionRecordingComponent } from './pages/users/usr-collection-recording/usr-collection-recording.component';
import { UsrCollectionRecordingMainListComponent } from './pages/users/usr-collection-recording-main-list/usr-collection-recording-main-list.component';
import { UsrSettlementRecordingMainListComponent } from './pages/users/usr-settlement-recording-main-list/usr-settlement-recording-main-list.component';
import { UsrSettlementRecordingComponent } from './pages/users/usr-settlement-recording/usr-settlement-recording.component';
import { UsrPoliceCaseComponent } from './pages/users/usr-police-case/usr-police-case.component';
import { UsrSkipTracingMainComponent } from './pages/users/usr-skip-tracing-main/usr-skip-tracing-main.component';
import { UsrSkipTracingAssignComponent } from './pages/users/usr-skip-tracing-assign/usr-skip-tracing-assign.component';
import { UsrFiledVisitMainComponent } from './pages/users/usr-filed-visit-main/usr-filed-visit-main.component';
import { UsrFiledVisitAssignComponent } from './pages/users/usr-filed-visit-assign/usr-filed-visit-assign.component';
import { UsrCustomerExplosureComponent } from './pages/users/usr-customer-explosure/usr-customer-explosure.component';
import { UsrSpecialFollowupComponent } from './pages/users/usr-special-followup/usr-special-followup.component';
import { UsrOldFollowupComponent } from './pages/users/usr-old-followup/usr-old-followup.component';
import { ExcelUploadComponent } from './pages/excel-upload/excel-upload.component';

import { LocalaccworkedComponent } from './pages/userflow/localaccworked/localaccworked.component';
import { LocalaccpendingComponent } from './pages/userflow/localaccpending/localaccpending.component';
import { LocalaccptpComponent } from './pages/userflow/localaccptp/localaccptp.component';
import { LocalaccallocComponent } from './pages/userflow/localaccalloc/localaccalloc.component';
import { CreditcardlistComponent } from './pages/userflow/creditcardlist/creditcardlist.component';
import { VechicleloanlistComponent } from './pages/userflow/vechicleloanlist/vechicleloanlist.component';
import { PersonalloanlistComponent } from './pages/userflow/personalloanlist/personalloanlist.component';
import { HomeloanlistComponent } from './pages/userflow/homeloanlist/homeloanlist.component';


import { AllocationsingleComponent } from './pages/userflow/allocationsingle/allocationsingle.component';
import { AllocationexcelComponent } from './pages/userflow/allocationexcel/allocationexcel.component';
import { WithdrawsingleComponent } from './pages/userflow/withdrawsingle/withdrawsingle.component';
import { WithdrawexcelComponent } from './pages/userflow/withdrawexcel/withdrawexcel.component';
import { ReallowsingleComponent } from './pages/userflow/reallowsingle/reallowsingle.component';
import { ReallowexcelComponent } from './pages/userflow/reallowexcel/reallowexcel.component';
import { DedupeComponent } from './pages/userflow/dedupe/dedupe.component';
import { LinkdelinkComponent } from './pages/userflow/linkdelink/linkdelink.component';
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
import { CreateDocumentTypeComponent } from './pages/honey-pot-client-detail/create-document-type/create-document-type.component';
import { AccessRightsComponent } from './pages/access-rights/access-rights.component';
import {CarouselModule} from 'primeng/carousel';
import {SliderModule} from 'primeng/slider';
import { DualTemporaryAllocationComponent } from './pages/userflow/dual-temporary-allocation/dual-temporary-allocation.component';
import { AgentInboxComponent } from './pages/agent-inbox/agent-inbox.component';
import { AgentAccListComponent } from './pages/agent-acc-list/agent-acc-list.component';
import { AgentTODOListComponent } from './pages/agent-to-do-list/agent-to-do-list.component';
import { EntityManagementComponent } from './pages/entity-management/entity-management.component';
import { EntityFormComponent } from './pages/entity-management/entity-form/entity-form.component';
import { CreateAccountTypeComponent } from './pages/create-account-type/create-account-type.component';
import { CreateReportingToComponent } from './pages/create-reporting-to/create-reporting-to.component';
import { CreateStateComponent } from './pages/create-state/create-state.component';
import { CreateDesignationComponent } from './pages/create-designation/create-designation.component';
import { CreateUserTypeComponent } from './pages/user-management/create-user-type/create-user-type.component';
import { AutoaddfiledsComponent } from './pages/userflow/autoaddfileds/autoaddfileds.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { MegreinguserComponent } from './megreinguser/megreinguser.component';
import { NewallocationComponent } from './pages/newallocation/newallocation.component';
import { AgentDashboardComponent } from './dashboard/agent-dashboard/agent-dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NewreallocationComponent } from './pages/newreallocation/newreallocation.component';
import { UsrNewFollowupComponent } from './pages/users/usr-new-followup/usr-new-followup.component';
import { CreatestatusComponent } from './pages/createstatus/createstatus.component';
import { CreatebankcodeComponent } from './pages/createbankcode/createbankcode.component';
import { CreatefieldvisitcodeComponent } from './pages/createfieldvisitcode/createfieldvisitcode.component';
import { CreateareacodeComponent } from './pages/createareacode/createareacode.component';
import { CreateactiontakenComponent } from './pages/createactiontaken/createactiontaken.component';
import { CreatetracingtoolsComponent } from './pages/createtracingtools/createtracingtools.component';
import { CreateapprovalComponent } from './pages/createapproval/createapproval.component';
import { UserNewSettlementComponent } from './pages/users/user-new-settlement/user-new-settlement.component';
import { UserNewPaymentComponent } from './pages/users/user-new-payment/user-new-payment.component';
import { BankdetailsComponent } from './pages/bankdetails/bankdetails.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SettlementtrackerComponent } from './pages/report/settlementtracker/settlementtracker.component';
import { PtpreportComponent } from './pages/report/ptpreport/ptpreport.component';
import { StatusreportComponent } from './pages/report/statusreport/statusreport.component';
import { CreateLogTypeComponent } from './pages/create-log-type/create-log-type.component';
import { NewFieldVisitComponent } from './pages/users/new-field-visit/new-field-visit.component';
import { CreateTeamComponent } from './pages/users/create-team/create-team.component';
import { CreateMembersComponent } from './pages/users/create-members/create-members.component';
import { ApprovalRequestComponent } from './pages/approval-request/approval-request.component';
import { SetApprovalRequestComponent } from './pages/set-approval-request/set-approval-request.component';
import { AllocationComponent } from './pages/allocation/allocation.component';
import { ReallocationComponent } from './pages/reallocation/reallocation.component';
import { WorklistComponent } from './pages/worklist/worklist.component';
import { BucketDetailsComponent } from './pages/bucket-details/bucket-details.component';
import { FirstallocationsComponent } from './pages/firstallocations/firstallocations.component';
import { PortfiloBucketsComponent } from './pages/portfilo-buckets/portfilo-buckets.component';
import { PortfiloRecordlistComponent } from './pages/portfilo-recordlist/portfilo-recordlist.component';
import { WorklistBucketsComponent } from './pages/worklist-buckets/worklist-buckets.component';
import { WorklistRecordlistComponent } from './pages/worklist-recordlist/worklist-recordlist.component';
import { AgentRequestComponent } from './pages/agent-request/agent-request.component';

@NgModule({
  declarations: [AdminHeaderComponent,
    AdminSidebarComponent,
    DashboardComponent,
    HoneyPotClientDetailComponent,
    HoneyPotClientDetailFormComponent,
    ClientProfileComponent,
    CountryComponent,
    LicenseComponent,
    LicenseFormComponent,
    AccAccountlistComponent,
    AccLegalComponent,
    AccAuthorizationComponent,
    AccAuthorViewComponent,
    UsrContactrecordingComponent,
    UsrActioncodeComponent,
    UsrAddnewaddressComponent,
    UsrAddressdetailsComponent,
    UsrAdhocscreenComponent,
    UsrAllocationhistoryComponent,
    UsrCustomerdetailsComponent,
    UsrCustomerleaccountComponent,
    UsrDocumnetretrievalComponent,
    UsrExcelexportComponent,
    UsrFollowupsaveComponent,
    UsrFollowuptakeComponent,
    UsrFollowuptakeoneComponent,
    UsrFollowuptrailsComponent,
    UsrGurantordetailsComponent,
    UsrLoandetailsComponent,
    UsrLogoffusersComponent,
    UsrOverduedetailsoneComponent,
    UsrOverduedetailstwoComponent,
    UsrPaymentdetailsComponent,
    UsrPaymentdetailsoneComponent,
    UsrPhonedetailsComponent,
    UsrReferaccountComponent,
    UsrReportComponent,
    UsrRpoComponent,
    UsrScreenaccessoneComponent,
    UsrScreenaccesstwoComponent,
    UsrScreenaccessthreeComponent,
    UsrScreenaccesscontrolComponent,
    UsrScreenaccesscontroloneComponent,
    UsrScreenaccesscontroltwoComponent,
    UsrScreenaccesscontrolthreeComponent,
    UsrUserdetailsComponent,
    UsrAllocationdetailComponent,
    UsrCollateraldetailssComponent,
    UsrAccountsummeryComponent,
    UsrDelinquencyflowComponent,
    UsrStatcardComponent,
    UsrAssetDetailComponent,
    UsrRepaymentComponent,
    UsrBouncesComponent,
    UsrPaymentHistoryComponent,
    UsrForeclosureComponent,
    UsrWorkflowComponent,
    UsrCollectionRecordingComponent,
    UsrCollectionRecordingMainListComponent,
    UsrSettlementRecordingMainListComponent,
    UsrSettlementRecordingComponent,
    UsrPoliceCaseComponent,
    UsrSkipTracingMainComponent,
    UsrSkipTracingAssignComponent,
    UsrFiledVisitMainComponent,
    UsrFiledVisitAssignComponent,
    UsrCustomerExplosureComponent,
    UsrSpecialFollowupComponent,
    UsrOldFollowupComponent,
    ExcelUploadComponent,
    LocalaccworkedComponent,
    LocalaccpendingComponent,
    LocalaccptpComponent,
    LocalaccallocComponent,
    CreditcardlistComponent,
    VechicleloanlistComponent,
    PersonalloanlistComponent,
    HomeloanlistComponent,
    AllocationsingleComponent,
    AllocationexcelComponent,
    WithdrawsingleComponent,
    WithdrawexcelComponent,
    ReallowsingleComponent,
    ReallowexcelComponent,
    DedupeComponent,
    LinkdelinkComponent,
    ConfigurationComponent,
    UserManagementComponent,
    UserFormComponent,
    UserGroupComponent,
    UserRoleComponent,
    AgencyManagementComponent,
    AgencyFieldAddComponent,
    FieldMappingComponent,
    AddPortfolioComponent,
    UploadedListComponent,
    AddProductComponent,
    DocumentManagementComponent,
    BucketComponent,
    UserStatusMarkingComponent,
    ClientStatusMarkingComponent,
    CreatePortfolioComponent,
    CreateProductComponent,
    CreateClientTypeComponent,
    CreateDocumentTypeComponent,
    AccessRightsComponent,
    DualTemporaryAllocationComponent,
    AgentInboxComponent,
    AgentAccListComponent,
    AgentTODOListComponent,
    EntityManagementComponent,
    EntityFormComponent,
    CreateAccountTypeComponent,
    CreateReportingToComponent,
    CreateStateComponent,
    CreateDesignationComponent,
    CreateUserTypeComponent,
    AutoaddfiledsComponent,
    AdminUserComponent,
    MegreinguserComponent,
    NewallocationComponent,
    AgentDashboardComponent,
    NewreallocationComponent,
    UsrNewFollowupComponent,
    CreatestatusComponent,
    CreatebankcodeComponent,
    CreatefieldvisitcodeComponent,
    CreateareacodeComponent,
    CreateactiontakenComponent,
    CreatetracingtoolsComponent,
    CreateapprovalComponent,
    UserNewSettlementComponent,
    UserNewPaymentComponent,
    BankdetailsComponent,
    UserDetailsComponent,
    SettlementtrackerComponent,
    PtpreportComponent,
    StatusreportComponent,
    CreateLogTypeComponent,
    NewFieldVisitComponent,
    CreateTeamComponent,
    CreateMembersComponent,
    ApprovalRequestComponent,
    SetApprovalRequestComponent,
    AllocationComponent,
    ReallocationComponent,
    WorklistComponent,
    BucketDetailsComponent,
    FirstallocationsComponent,
    PortfiloBucketsComponent,
    PortfiloRecordlistComponent,
    WorklistBucketsComponent,
    WorklistRecordlistComponent,
    AgentRequestComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    HttpClientModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    DialogModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    Ng2SearchPipeModule,
    TableModule,
    FileUploadModule,
    TooltipModule,
    MultiSelectModule,
    ChartModule,
    MatTabsModule,
    // FlexLayoutModule,
    MatTooltipModule,
    CarouselModule,
    SliderModule,
    CheckboxModule,
    OverlayPanelModule,
    AgGridModule.withComponents([]),
    FilterPipeModule,
    NgSelectModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    DatePipe
  ],
  exports: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    UsrContactrecordingComponent,
    UsrActioncodeComponent,
    UsrAddnewaddressComponent,
    UsrAddressdetailsComponent,
    UsrAdhocscreenComponent,
    UsrAllocationhistoryComponent,
    UsrCustomerdetailsComponent,
    UsrCustomerleaccountComponent,
    UsrDocumnetretrievalComponent,
    UsrExcelexportComponent,
    UsrFollowupsaveComponent,
    UsrFollowuptakeComponent,
    UsrFollowuptakeoneComponent,
    UsrFollowuptrailsComponent,
    UsrGurantordetailsComponent,
    UsrLoandetailsComponent,
    UsrLogoffusersComponent,
    UsrOverduedetailsoneComponent,
    UsrOverduedetailstwoComponent,
    UsrPaymentdetailsComponent,
    UsrPaymentdetailsoneComponent,
    UsrPhonedetailsComponent,
    UsrReferaccountComponent,
    UsrReportComponent,
    UsrRpoComponent,
    UsrScreenaccessoneComponent,
    UsrScreenaccesstwoComponent,
    UsrScreenaccessthreeComponent,
    UsrScreenaccesscontrolComponent,
    UsrScreenaccesscontroloneComponent,
    UsrScreenaccesscontroltwoComponent,
    UsrScreenaccesscontrolthreeComponent,
    UsrUserdetailsComponent,
    UsrCollateraldetailssComponent,
    UsrAccountsummeryComponent,
    UsrDelinquencyflowComponent,
    UsrStatcardComponent,
    UsrAssetDetailComponent,
    UsrRepaymentComponent,
    UsrBouncesComponent,
    UsrPaymentHistoryComponent,
    UsrForeclosureComponent,
    UsrSpecialFollowupComponent,
    UsrOldFollowupComponent,
    ExcelUploadComponent
  ]
})
export class AdminModule { }
