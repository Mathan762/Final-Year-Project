import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeloginComponent } from './componenet/employeelogin/employeelogin.component';
import { AdminloginComponent } from './componenet/adminlogin/adminlogin.component';
import { EmployeenavbarComponent } from './navbar/employeenavbar/employeenavbar.component';
import { AdminnavbarComponent } from './navbar/adminnavbar/adminnavbar.component';
import { OrderComponent } from './componenet/employee/order/order.component';
import { ProductComponent } from './componenet/employee/product/product.component';
import { CustomerComponent } from './componenet/employee/customer/customer.component';
import { AdmincustomerComponent } from './componenet/admin/admincustomer/admincustomer.component';
import { AdminproductComponent } from './componenet/admin/adminproduct/adminproduct.component';
import { AdminemployeeComponent } from './componenet/admin/adminemployee/adminemployee.component';
import { AdminorderComponent } from './componenet/admin/adminorder/adminorder.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeloginComponent,
    AdminloginComponent,
    EmployeenavbarComponent,
    AdminnavbarComponent,
    OrderComponent,
    ProductComponent,
    CustomerComponent,
    AdmincustomerComponent,
    AdminproductComponent,
    AdminemployeeComponent,
    AdminorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
