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
const routes: Routes = [
  { path: '', component: DashboardComponent },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
