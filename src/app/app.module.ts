import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './AdminLogin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './AdminDasboard/admindashboard/admindashboard.component';
import { UserragisterComponent } from './UserRagister/userragister/userragister.component';
import { UserloginComponent } from './UserLogin/userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeProfileComponent } from './Employeprofile/employee-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    UserragisterComponent,
    UserloginComponent,
    EmployeeProfileComponent
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
