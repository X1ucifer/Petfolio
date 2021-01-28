import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorFormComponent } from './pages/doctor/doctor-form/doctor-form.component';
import { VendorFormComponent } from './pages/vendor-management/vendor-form/vendor-form.component';
import { ServiceProviderFormComponent } from './pages/service-provider-management/service-provider-form/service-provider-form.component';
import { CustomerFormComponent } from './pages/customer-management/customer-form/customer-form.component';
import { PetlistComponent } from './pages/customer-management/petlist/petlist.component';
import { EcommerceOrderComponent } from './pages/ecommerce-order/ecommerce-order.component';
import { PetCareAppointmentComponent } from './pages/pet-care-appointment/pet-care-appointment.component';
import { PetServiceAppointmentComponent } from './pages/pet-service-appointment/pet-service-appointment.component';
import { MarketPlaceComponent } from './pages/market-place/market-place.component';
import { ViewOrderComponent } from './pages/ecommerce-order/view-order/view-order.component';
import { ProductViewComponent } from './pages/market-place/product-view/product-view.component';
import { CreateEmpComponent } from './pages/create-emp/create-emp.component';
import { CouponCodeComponent } from './pages/coupon-code/coupon-code.component';

///Banner//
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

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Pet_type', component: PettypeComponent },
  { path: 'Pet_handle', component: DocPetHandledComponent },
  { path: 'Pet_Breed_Type', component: PetBreedTypeComponent },
  { path: 'Pet_Health_Checkup', component: PetHealthCheckupComponent },
  { path: 'Service_Type', component: ServiceTypeComponent },
  { path: 'Customer_Management', component: CustomerManagementComponent },
  { path: 'Vendor_Management', component: VendorManagementComponent },
  { path: 'Service_Provider_Management', component: ServiceProviderManagementComponent },
  { path: 'Category_Management', component: CategoryManagementComponent },
  { path: 'Sub_Category_Management', component: SubCategoryManagementComponent },
  { path: 'Product_Management', component: ProductManagementComponent },
  { path: 'Doctor', component: DoctorComponent },

  { path: 'Doctor_form', component: DoctorFormComponent },
  { path: 'Vendor_form', component: VendorFormComponent },
  { path: 'Service_Provider_form', component: ServiceProviderFormComponent },
  { path: 'Customer_form', component: CustomerFormComponent },
  { path: 'Pet_list', component: PetlistComponent },
  { path: 'Ecommerce_order', component: EcommerceOrderComponent },
  { path: 'Pet_care_appointment', component: PetCareAppointmentComponent },
  { path: 'Pet_Service_appointment', component: PetServiceAppointmentComponent },
  { path: 'Market_place', component: MarketPlaceComponent },
  { path: 'View_order', component: ViewOrderComponent },
  { path: 'View_Product', component: ProductViewComponent },
  { path: 'View_Product', component: ProductViewComponent },
  { path: 'doctor_details', component: DoctorDetailsComponent },
  { path: 'live_doctor_details', component: LiveDoctorDetailsComponent },
  { path: 'serviceprovider_details', component: ServiceproviderDetailsComponent },
  { path: 'live_serviceprovider_details', component: LiveServiceproviderDetailsComponent },
  { path: 'Doctor_appointment', component: DoctorAppointmentComponent },
  { path: 'cancel_appointment', component: CancelAppointmentComponent },
  { path: 'payment_management', component: PaymentManagementComponent },
  { path: 'notification', component: NotificationComponent },

  ///Master ////
   /////////Banners//////
   { path: 'master/banner/homebanner', component: HomebannerComponent },
   { path: 'master/banner/petcarebanner', component: PetcarebannerComponent },
   { path: 'master/banner/petservicebanner', component: PetservicebannerComponent },
   { path: 'master/banner/ecombanner', component: EcombannerComponent },
   { path: 'master/banner/marketplacebanner', component: MarketplacebannerComponent },
   { path: 'master/banner/splashscreen', component: SplashScreenComponent },
   { path: 'master/locations/addlocation', component: LocationsComponent },


   { path: 'Coupon_Code', component: CouponCodeComponent },
   { path: 'Create_Employee', component: CreateEmpComponent },
   { path: 'user_type', component: UserTypeComponent },
   { path: 'demo_page', component: DemoPageComponent },
   { path: 'doc_specialization', component: DocSpecializationComponent },
   { path: 'Activity', component: ActivityLogComponent },
   { path: 'View_details', component: DetailViewComponent },
   { path: 'Customer_create', component: CustomerCreateComponent },
   { path: 'Service_provider_specialization', component: ServiceProviderSpecializationComponent },
   { path: 'Time_create', component: CreateTimeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
