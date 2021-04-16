import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HomepageModule} from './homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import { DashboardMainComponent } from './admin/pages/dashboard-main/dashboard-main.component';
import {ToolbarModule} from 'primeng/toolbar';
import {MegaMenuModule} from 'primeng/megamenu';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';
import { TooltipModule } from 'primeng/tooltip';
import { AgGridModule } from 'ag-grid-angular';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomepageComponent,
    LoginComponent,
    DashboardMainComponent,
   ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    HomepageModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RadioButtonModule,
    ToolbarModule,
    MegaMenuModule,
    MatMenuModule,
    MatIconModule,
    TooltipModule,
    AgGridModule.withComponents([]),
    FilterPipeModule,
    NgSelectModule
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
