import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageModule } from './homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { AgmCoreModule } from '@agm/core';
import { PetServiceAppointmentViewComponent } from './pet-service-appointment-view/pet-service-appointment-view.component';
import { DoctorLoginComponent } from './login/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './login/doctor-register/doctor-register.component';
import { DoctorInfoComponent } from './login/doctor-info/doctor-info.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ServiceProviderModule } from './service-provider/service-provider.module';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { LoginOtpComponent } from './login/login-otp/login-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { VendorLoginComponent } from './vendor/vendor-login/vendor-login.component';
import { VendorAdminComponent } from './vendor/vendor-admin/vendor-admin.component';
import { VendoSideBarComponent } from './vendor/vendo-side-bar/vendo-side-bar.component';
import { VendoHeaderComponent } from './vendor/vendo-header/vendo-header.component'

import {VendorModule} from './vendor/vendor.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    HomepageComponent,
    LoginComponent,
    PetServiceAppointmentViewComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    DoctorInfoComponent,
    ServiceProviderComponent,
    LoginOtpComponent,
    VendorLoginComponent,
    VendorAdminComponent,
    
    VendoSideBarComponent,
    VendoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AdminModule,
    HomepageModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RadioButtonModule, TableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9sxe06VnCg13SIyxJjTxq0gd4vj4bA48'
    }),
    GooglePlaceModule,
    MatStepperModule,
    CalendarModule,
    MultiSelectModule,
    MatStepperModule,
    ServiceProviderModule,
    NgOtpInputModule,
    DialogModule,
    ButtonModule,
    VendorModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
