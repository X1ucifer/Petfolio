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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login', },
  { path: 'login', component: LoginComponent, },
  { path: 'doctorlogin', component: DoctorLoginComponent, },
  { path: 'doctor_otp', component: LoginOtpComponent, },
  { path: 'doctor_register', component: DoctorRegisterComponent, },
  { path: 'doctor_info', component: DoctorInfoComponent, },

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
