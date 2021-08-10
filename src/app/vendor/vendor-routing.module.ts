import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{VendorDashboardComponent} from './vendor-dashboard/vendor-dashboard.component'

import { ManageProductComponent } from './manage-product/manage-product.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { NotificationComponent } from './notification/notification.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: VendorDashboardComponent },
  { path: 'manage_product', component: ManageProductComponent },
  { path: 'my_orders', component: MyOrdersComponent },
  { path: 'add_product', component: AddProductsComponent },
  { path: 'notification', component: NotificationComponent },

  { path: 'payment_details', component: PaymentDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
