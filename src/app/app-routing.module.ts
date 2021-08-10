import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DoctorLoginComponent } from './login/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './login/doctor-register/doctor-register.component';
import { DoctorInfoComponent } from './login/doctor-info/doctor-info.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { LoginOtpComponent } from './login/login-otp/login-otp.component';
import { VendorLoginComponent } from './vendor/vendor-login/vendor-login.component';
import { VendorAdminComponent } from './vendor/vendor-admin/vendor-admin.component';
import { VendoRegisterComponent } from './vendor/vendo-register/vendo-register.component';
import { VendoOtpComponent } from './vendor/vendo-otp/vendo-otp.component';
import { VedorBussinessComponent } from './vendor/vedor-bussiness/vedor-bussiness.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login', },
  { path: 'login', component: LoginComponent, },
  { path: 'doctorlogin', component: DoctorLoginComponent, },
  { path: 'doctor_otp', component: LoginOtpComponent, },
  { path: 'doctor_register', component: DoctorRegisterComponent, },
  { path: 'doctor_info', component: DoctorInfoComponent, },
  { path: 'vendorlogin', component: VendorLoginComponent, },
  { path: 'vendor_register', component: VendoRegisterComponent, },
  { path: 'vendor_business_info', component: VedorBussinessComponent, },
  { path: 'vendor_otp', component: VendoOtpComponent, },

  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule)
      },]
  },
  {
    path: 'homepage', component: HomepageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
      },]
  },
  {
    path: 'service_provider', component: ServiceProviderComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`./service-provider/service-provider.module`).then(m => m.ServiceProviderModule)
      },]
  },
  {
    path: 'vendor', component: VendorAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`./vendor/vendor.module`).then(m => m.VendorModule)
      },]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
