import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';


import { HttpClientModule } from '@angular/common/http';


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
import { PettypeComponent } from './pages/pettype/pettype.component';
import { PetBreedTypeComponent } from './pages/pet-breed-type/pet-breed-type.component';
import { PetHealthCheckupComponent } from './pages/pet-health-checkup/pet-health-checkup.component';
import { ServiceTypeComponent } from './pages/service-type/service-type.component';
import { CustomerManagementComponent } from './pages/customer-management/customer-management.component';
import { VendorManagementComponent } from './pages/vendor-management/vendor-management.component';
import { ServiceProviderManagementComponent } from './pages/service-provider-management/service-provider-management.component';
import { CategoryManagementComponent } from './pages/category-management/category-management.component';
import { SubCategoryManagementComponent } from './pages/sub-category-management/sub-category-management.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorFormComponent } from './pages/doctor/doctor-form/doctor-form.component';
import { VendorFormComponent } from './pages/vendor-management/vendor-form/vendor-form.component';
import { ServiceProviderFormComponent } from './pages/service-provider-management/service-provider-form/service-provider-form.component';
import { CustomerFormComponent } from './pages/customer-management/customer-form/customer-form.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { PetlistComponent } from './pages/customer-management/petlist/petlist.component';
import { EcommerceOrderComponent } from './pages/ecommerce-order/ecommerce-order.component';
import { PetCareAppointmentComponent } from './pages/pet-care-appointment/pet-care-appointment.component';
import { PetServiceAppointmentComponent } from './pages/pet-service-appointment/pet-service-appointment.component';
import { MarketPlaceComponent } from './pages/market-place/market-place.component';
import { ViewOrderComponent } from './pages/ecommerce-order/view-order/view-order.component';
import { ProductViewComponent } from './pages/market-place/product-view/product-view.component';
import {TabViewModule} from 'primeng/tabview';
import { CreateEmpComponent } from './pages/create-emp/create-emp.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CouponCodeComponent } from './pages/coupon-code/coupon-code.component';
import { HomebannerComponent } from './pages/master/homebanner/homebanner.component';
import { PetcarebannerComponent } from './pages/master/petcarebanner/petcarebanner.component';
import { PetservicebannerComponent } from './pages/master/petservicebanner/petservicebanner.component';
import { EcombannerComponent } from './pages/master/ecombanner/ecombanner.component';
import { MarketplacebannerComponent } from './pages/master/marketplacebanner/marketplacebanner.component';
import { SplashScreenComponent } from './pages/master/splash-screen/splash-screen.component';
import { LocationsComponent } from './Pages/master/locations/locations.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { DocSpecializationComponent } from './pages/doc-specialization/doc-specialization.component';
import { DocPetHandledComponent } from './pages/doc-pet-handled/doc-pet-handled.component';
import { ActivityLogComponent } from './pages/activity-log/activity-log.component';
import { DetailViewComponent } from './pages/detail-view/detail-view.component';
import { PetCarePaymentComponent } from './pages/payment/pet-care-payment/pet-care-payment.component';
import { CustomerCreateComponent } from './pages/customer-management/customer-create/customer-create.component';
import { ServiceProviderSpecializationComponent } from './pages/service-provider-management/service-provider-specialization/service-provider-specialization.component';
import { CreateTimeComponent } from './pages/create-time/create-time.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { LiveDoctorDetailsComponent } from './pages/live-doctor-details/live-doctor-details.component';
import { ServiceproviderDetailsComponent } from './pages/serviceprovider-details/serviceprovider-details.component';
import { LiveServiceproviderDetailsComponent } from './pages/live-serviceprovider-details/live-serviceprovider-details.component';
import { DoctorAppointmentComponent } from './pages/doctor-appointment/doctor-appointment.component';
import { CancelAppointmentComponent } from './pages/cancel-appointment/cancel-appointment.component';
import { PaymentManagementComponent } from './pages/payment-management/payment-management.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { SpDetailViewComponent } from './pages/service-provider-management/sp-detail-view/sp-detail-view.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { DoctorDashbaordComponent } from './doctor/doctor-dashbaord/doctor-dashbaord.component';
import { DoctorAppointmentListComponent } from './doctor/doctor-appointment-list/doctor-appointment-list.component';
import { DoctorAppointmentDetailsComponent } from './doctor/doctor-appointment-details/doctor-appointment-details.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { DoctorHeaderComponent } from './doctor/doctor-header/doctor-header.component';
import { DoctorSidebarComponent } from './doctor/doctor-sidebar/doctor-sidebar.component';
import { DoctorAdminComponent } from './doctor/doctor-admin/doctor-admin.component';
import { AddVendorComponent } from './pages/add-vendor/add-vendor.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ViewVendorProductsComponent } from './pages/vendor-management/view-vendor-products/view-vendor-products.component';
import { PayemntvendorComponent } from './pages/payemntvendor/payemntvendor.component';
import { OtpComponent } from './pages/otp/otp.component';
import { DoctorEditCalendarComponent } from './doctor/doctor-edit-calendar/doctor-edit-calendar.component';
import { DoctorPaymentDetailsComponent } from './doctor/doctor-payment-details/doctor-payment-details.component';
import { DoctorNotificationComponent } from './doctor/doctor-notification/doctor-notification.component';
import { DoctorRescheduleAppointmentComponent } from './doctor/doctor-reschedule-appointment/doctor-reschedule-appointment.component';
import { DoctorSupportComponent } from './doctor/doctor-support/doctor-support.component';
import { NgOtpInputModule } from 'ng-otp-input'
import {CheckboxModule} from 'primeng/checkbox';
import { DoctorEditCalendarTimeComponent } from './doctor/doctor-edit-calendar-time/doctor-edit-calendar-time.component';
import { DoctorHolidayComponent } from './doctor/doctor-holiday/doctor-holiday.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { DiagnosisComponent } from './pages/diagnosis/diagnosis.component';
import { SubDiagnosisComponent } from './pages/sub-diagnosis/sub-diagnosis.component';
import { WalkinAppointmentComponent } from './pages/walkin-appointment/walkin-appointment.component';
import { WalkinAppointmentFormComponent } from './pages/walkin-appointment/walkin-appointment-form/walkin-appointment-form.component';
import { ViewappointmentdetailsComponent } from './doctor/viewappointmentdetails/viewappointmentdetails.component';
import { HealthissueComponent } from './pages/healthissue/healthissue.component';
import { MinibannerComponent } from './pages/master/minibanner/minibanner.component';
import { AppointmenteditComponent } from './doctor/appointmentedit/appointmentedit.component';
import { PrescriptionaddComponent } from './doctor/prescriptionadd/prescriptionadd.component';
import { PrescriptionviewComponent } from './doctor/prescriptionview/prescriptionview.component';
import { SpSpecComponent } from './pages/sp-spec/sp-spec.component';
import { WalkinpaymentComponent } from './doctor/walkinpayment/walkinpayment.component';
import { ApppaymentComponent } from './doctor/apppayment/apppayment.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ShowhidenappointmentComponent } from './doctor/showhidenappointment/showhidenappointment.component';
import { ClientdetailsComponent } from './doctor/clientdetails/clientdetails.component';
import { WalkinnewComponent } from './pages/walkinnew/walkinnew.component';
import { ViewcustomerdetailComponent } from './pages/viewcustomerdetail/viewcustomerdetail.component';
import { DoctorEditCalendarFulltimeComponent } from './doctor/doctor-edit-calendar-fulltime/doctor-edit-calendar-fulltime.component';
import { AddnewproductComponent } from './pages/addnewproduct/addnewproduct.component';

@NgModule({
  declarations: [AdminHeaderComponent,
    AdminSidebarComponent,
    DashboardComponent,
    PettypeComponent,
    PetBreedTypeComponent,
    PetHealthCheckupComponent,
    ServiceTypeComponent,
    CustomerManagementComponent,
    VendorManagementComponent,
    ServiceProviderManagementComponent,
    CategoryManagementComponent,
    SubCategoryManagementComponent,
    ProductManagementComponent,
    DoctorComponent,
    DoctorFormComponent,
    VendorFormComponent,
    ServiceProviderFormComponent,
    CustomerFormComponent,
    PetlistComponent,
    EcommerceOrderComponent,
    PetCareAppointmentComponent,
    PetServiceAppointmentComponent,
    MarketPlaceComponent,
    ViewOrderComponent,
    ProductViewComponent,
    CreateEmpComponent,
    CouponCodeComponent,
    HomebannerComponent,
    PetcarebannerComponent,
    PetservicebannerComponent,
    EcombannerComponent,
    MarketplacebannerComponent,
    SplashScreenComponent,
    LocationsComponent,
    UserTypeComponent,
    DemoPageComponent,
    DocSpecializationComponent,
    DocPetHandledComponent,
    ActivityLogComponent,
    DetailViewComponent,
    PetCarePaymentComponent,
    CustomerCreateComponent,
    ServiceProviderSpecializationComponent,
    CreateTimeComponent,
    DoctorDetailsComponent,
    LiveDoctorDetailsComponent,
    ServiceproviderDetailsComponent,
    LiveServiceproviderDetailsComponent,
    DoctorAppointmentComponent,
    CancelAppointmentComponent,
    PaymentManagementComponent,
    NotificationComponent,
    SpDetailViewComponent,
    DoctorDashbaordComponent,
    DoctorAppointmentListComponent,
    DoctorAppointmentDetailsComponent,
    DoctorProfileComponent,
    DoctorHeaderComponent,
    DoctorSidebarComponent,
    DoctorAdminComponent,
    AddVendorComponent,
    ViewVendorProductsComponent,
    PayemntvendorComponent,
    OtpComponent,
    DoctorEditCalendarComponent,
    DoctorPaymentDetailsComponent,
    DoctorNotificationComponent,
    DoctorRescheduleAppointmentComponent,
    DoctorSupportComponent,
    DoctorEditCalendarTimeComponent,
    DoctorHolidayComponent,
    AddproductComponent,
    DiagnosisComponent,
    SubDiagnosisComponent,
    WalkinAppointmentComponent,
    WalkinAppointmentFormComponent,
    ViewappointmentdetailsComponent,
    HealthissueComponent,
    MinibannerComponent,
    AppointmenteditComponent,
    PrescriptionaddComponent,
    PrescriptionviewComponent,
    SpSpecComponent,
    WalkinpaymentComponent,
    ApppaymentComponent,
    ShowhidenappointmentComponent,
    ClientdetailsComponent,
    WalkinnewComponent,
    ViewcustomerdetailComponent,
    DoctorEditCalendarFulltimeComponent,
    AddnewproductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    DialogModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    AutocompleteLibModule,
    Ng2SearchPipeModule,
    TableModule,
    FileUploadModule,
    TooltipModule,
    MultiSelectModule,
    TabViewModule,
    NgOtpInputModule,
    CheckboxModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'
    }),
    GooglePlaceModule,
    FilterPipeModule,
    ReactiveFormsModule
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
    AdminSidebarComponent
  ]
})
export class AdminModule { }
