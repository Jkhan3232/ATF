
import { EmpDataService } from "../../services/emp-data.service"
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import {Ragister ,admin , UpdateId} from "../../data-typs";



// import { map, tap } from 'rxjs';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],

})



export class AdmindashboardComponent {
  isEdit : boolean = false
  employeUpate =  {
  firstname : "",
  lastname : "",
  email : "",
  phone: "",
  designation: "",
  password : ""
}
empdata: any=[];
constructor(private empData: EmpDataService , private router : Router){}

ngOnInit(): void {
   this.getempData()
}

getempData(){
 this.empData.empData().subscribe((data) => {
  this.empdata = data
  console.log(data);
})
}

deleteEmp(id:UpdateId) {
    if(window.confirm('Do you want to go ahead?')) {
      this.empData.deleteUser(id).subscribe((res) => {
        this.getempData()
      })
  }
}

updateEmploye(emp : any ) {
  this.employeUpate  = emp
  this.isEdit = true;
}

updateEmp() {
  this.empData.updateEmployee(this.employeUpate).subscribe((data) =>{
    this.isEdit = false;
  }
)
}

adminLogout(){
  this.empData.adminlogout().subscribe((data) =>{
    debugger
    console.log(data);
    localStorage.removeItem("token")
    this.router.navigate(['adminlogin'])
  })
}
}

// empData.empData().subscribe((data) => {
//   this.empdata = data
//   console.log(data);
// })
