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

///Banner//
import { HomebannerComponent } from './pages/master/homebanner/homebanner.component';
import { PetcarebannerComponent } from './pages/master/petcarebanner/petcarebanner.component';
import { PetservicebannerComponent } from './pages/master/petservicebanner/petservicebanner.component';
import { EcombannerComponent } from './pages/master/ecombanner/ecombanner.component';
import { MarketplacebannerComponent } from './pages/master/marketplacebanner/marketplacebanner.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Pet_type', component: PettypeComponent },
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



  ///Master ////
   /////////Banners//////
   { path: 'master/banner/homebanner', component: HomebannerComponent },
   { path: 'master/banner/petcarebanner', component: PetcarebannerComponent },
   { path: 'master/banner/petservicebanner', component: PetservicebannerComponent },
   { path: 'master/banner/ecombanner', component: EcombannerComponent },
   { path: 'master/banner/marketplacebanner', component: MarketplacebannerComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
