import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DoctorLoginComponent } from './login/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './login/doctor-register/doctor-register.component';
import { DoctorInfoComponent } from './login/doctor-info/doctor-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login', },
  { path: 'login', component: LoginComponent, },
  { path: 'doctor_login', component: DoctorLoginComponent, },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
