import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BookType } from 'xlsx/types';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  expanded: boolean = true;
  expand: boolean = true;
  expand1: boolean = true;
  expand2: boolean = true;
  expand3: boolean = true;
  expand4: boolean = true;
  expand5: boolean = true;
  expand6: boolean = true;
  expand7: boolean = true;
  expand8: boolean = true;
  expand9 : boolean = true;

  menu_slider: boolean = true;
  login_Details:any;
  Dashboard_show  = false;
  clienttype_show = false;
  portfolio_show = false;
  product_show = false;
  clientmanagement_show = false;
  clienstatusmaking_show = false;
  usertypecreate_show = false;
  userrol_show = false
  usergroup_show = false;
  usermanagemnt_show = false;
  userstautsamking_show = false;
  portfolioinbox_show = false;
  notificationinbox_show = false;
  customer_show = false;
  configurationsscreen_show = false;
  documents_type_show = false;
  productmaping_show = false;
  bucket_mang_show = false;
  table_field_show = false;
  account_type_show = false;
  desingation_show = false;
  country_currency_show = false;
  state_show = false;
  predefined_filed_show = false;
  organization_mag_show = false;
  
  allocation_show = false;
  reallocation_show = false;
  re_allocations = false;
  work_list_show = false;
  field_visit_approval_request = false;
  field_visit_agent_approval_request = false;
  settlement_approval_request = false;

  Mennu2_show = false;
  Mennu3_show = false;
  Mennu4_show = false;
  Mennu5_show = false;
  Mennu6_show = false;
  Mennu7_show = false;
  Mennu8_show = true;


  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
   this.login_Details = this.getFromLocal("login_Details");
   console.log(this.login_Details)




   for(let a  = 0 ; a < this.login_Details.access.length; a ++){
        if(this.login_Details.access[a].title == 'Dashboard' && this.login_Details.access[a].Status ==  true){
          this.Dashboard_show = true;
        }
        if(this.login_Details.access[a].title == 'Client type'  && this.login_Details.access[a].Status ==  true){
          this.clienttype_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Portfolio'  && this.login_Details.access[a].Status ==  true){
          this.portfolio_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Product'  && this.login_Details.access[a].Status ==  true){
          this.product_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Client Managements'  && this.login_Details.access[a].Status ==  true){
          this.clientmanagement_show = true;
          this.Mennu3_show = true;
        }
        if(this.login_Details.access[a].title == 'Client Status Marking'  && this.login_Details.access[a].Status ==  true){
          this.clienstatusmaking_show = true;
          this.Mennu3_show = true;
        }
        if(this.login_Details.access[a].title == 'User Type Create'  && this.login_Details.access[a].Status ==  true){
          this.usertypecreate_show = true;
          this.Mennu4_show = true;
        }
        if(this.login_Details.access[a].title == 'User Role'  && this.login_Details.access[a].Status ==  true){
          this.userrol_show = true;
          this.Mennu4_show = true;
        }
        if(this.login_Details.access[a].title == 'User Group'  && this.login_Details.access[a].Status ==  true){
          this.usergroup_show = true;
          this.Mennu4_show = true;
        }
        if(this.login_Details.access[a].title == 'User Management'  && this.login_Details.access[a].Status ==  true){
          this.usermanagemnt_show = true;
          this.Mennu4_show = true;
        }
        if(this.login_Details.access[a].title == 'User Status Marking'  && this.login_Details.access[a].Status ==  true){
          this.userstautsamking_show = true;
          this.Mennu4_show = true;
        }

        if(this.login_Details.access[a].title == 'Field Visit Coordinator'  && this.login_Details.access[a].Status ==  true){
          this.field_visit_approval_request = true;
          this.Mennu4_show = true;
        }

        if(this.login_Details.access[a].title == 'Field Visit Agent'  && this.login_Details.access[a].Status ==  true){
          this.field_visit_agent_approval_request = true;
          this.Mennu4_show = true;
        }

        if(this.login_Details.access[a].title == 'Settlement Approval'  && this.login_Details.access[a].Status ==  true){
          this.settlement_approval_request = true;
          this.Mennu4_show = true;
        }

        if(this.login_Details.access[a].title == 'Portfolio Inbox'  && this.login_Details.access[a].Status ==  true){
          this.portfolioinbox_show = true;
          this.Mennu6_show = true;
        }

        if(this.login_Details.access[a].title == 'Allocation'  && this.login_Details.access[a].Status ==  true){
          this.allocation_show = true;
          this.Mennu6_show = true;
        }

        if(this.login_Details.access[a].title == 'Work list'  && this.login_Details.access[a].Status ==  true){
          this.reallocation_show = true;
          this.Mennu6_show = true;
        }

        if(this.login_Details.access[a].title == 'Re allocations'  && this.login_Details.access[a].Status ==  true){
          this.re_allocations = true;
          this.Mennu6_show = true;
        }

        if(this.login_Details.access[a].title == 'Notification Incox'  && this.login_Details.access[a].Status ==  true){
          this.notificationinbox_show = true;
          this.Mennu6_show = true;
        }
        if(this.login_Details.access[a].title == 'Customer 360'  && this.login_Details.access[a].Status ==  true){
          this.customer_show = true;
          this.Mennu7_show = true;
        }
        if(this.login_Details.access[a].title == 'Configurations Screen'  && this.login_Details.access[a].Status ==  true){
          this.configurationsscreen_show = true;
          this.Mennu7_show = true;
        }


        if(this.login_Details.access[a].title == 'Document type'  && this.login_Details.access[a].Status ==  true){
          this.documents_type_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Product Mapping'  && this.login_Details.access[a].Status ==  true){
          this.productmaping_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Bucket / Managements'  && this.login_Details.access[a].Status ==  true){
          this.bucket_mang_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Table / Field'  && this.login_Details.access[a].Status ==  true){
          this.table_field_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Account type'  && this.login_Details.access[a].Status ==  true){
          this.account_type_show = true;
          this.Mennu2_show = true;
        }












        if(this.login_Details.access[a].title == 'Designation'  && this.login_Details.access[a].Status ==  true){
          this.desingation_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Country & Currency'  && this.login_Details.access[a].Status ==  true){
          this.country_currency_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'State'  && this.login_Details.access[a].Status ==  true){
          this.state_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Predefined Fields'  && this.login_Details.access[a].Status ==  true){
          this.predefined_filed_show = true;
          this.Mennu2_show = true;
        }
        if(this.login_Details.access[a].title == 'Organization Management'  && this.login_Details.access[a].Status ==  true){
          this.organization_mag_show = true;
        }

   }





  }
  formtype() {
    this.saveInLocal('Company_detail', undefined);
    this.saveInLocal('Form_type', 'create');
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  menuslide() {
    this.menu_slider = !this.menu_slider;
  }
  act() {
    this.expand1 = true;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act1() {
    this.expand1 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act2() {
    this.expand2 = false;
    this.expand1 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act3() {
    this.expand3 = false;
    this.expand2 = true;
    this.expand1 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act4() {
    this.expand4 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand1 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act5() {
    this.expand5 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand1 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act6() {
    this.expand6 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand1 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act7() {
    this.expand7 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand1 = true;
    this.expand8 = true;
  }
  act8() {
    this.expand8 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand1 = true;
  }
  logout(){
    this.saveInLocal("login_detail", undefined)
    this.router.navigate(['']);
  }
  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)

}
}
