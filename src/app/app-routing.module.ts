import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeloginComponent } from './componenet/employeelogin/employeelogin.component';
import { AdminloginComponent } from './componenet/adminlogin/adminlogin.component';
import { OrderComponent } from './componenet/employee/order/order.component';
import { ProductComponent } from './componenet/employee/product/product.component';
import { CustomerComponent } from './componenet/employee/customer/customer.component';
import { AdmincustomerComponent } from './componenet/admin/admincustomer/admincustomer.component';
import { AdminproductComponent } from './componenet/admin/adminproduct/adminproduct.component';
import { AdminemployeeComponent } from './componenet/admin/adminemployee/adminemployee.component';
import { AdminorderComponent } from './componenet/admin/adminorder/adminorder.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: EmployeeloginComponent
  },
  {
    path:'admin',
    component: AdminloginComponent
  },
  {
    path:'employee/product',
    component: ProductComponent
  },
  {
    path:'employee/order',
    component: OrderComponent
  },
  {
    path:'employee/receiver',
    component: CustomerComponent
  },
  {
    path:'admin/product',
    component: AdminproductComponent
  },
  {
    path:'admin/order',
    component: AdminorderComponent
  },
  {
    path:'admin/receiver',
    component: AdmincustomerComponent
  },
  {
    path:'admin/employee',
    component: AdminemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
