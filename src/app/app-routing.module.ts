import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './AdminDasboard/admindashboard/admindashboard.component';
import { AdminloginComponent } from './AdminLogin/adminlogin/adminlogin.component';
import { UserragisterComponent } from './UserRagister/userragister/userragister.component';
import { UserloginComponent } from './UserLogin/userlogin/userlogin.component';
import { EmployeeProfileComponent} from './Employeprofile/employee-profile.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path : "",
    redirectTo : "/adminlogin",
    pathMatch : "full"
  },

  {
    component:AdminloginComponent,
    path: "adminlogin"
  },

  {
   component:UserloginComponent,
   path: "userlogin"
  },

  {
    component:AdmindashboardComponent,
    path: "admindashboard",
    canActivate: [authGuard]
   },

   {
    component: UserragisterComponent,
    path:"userragister",

   },

   {
    component: EmployeeProfileComponent,
    path:"employee-profile"
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
