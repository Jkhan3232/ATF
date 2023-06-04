import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Ragister ,admin , UpdateId} from "../data-typs";
import {EmpDataService} from "../services/emp-data.service"
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})


export class EmployeeProfileComponent {


  isEdit : boolean = false
  employeUpate =  {
  firstname : "",
  lastname : "",
  email : "",
  phone: "",
  designation: "",
  password : ""
  }
  empdata : any = ""
  empId: any = {}
  constructor (private router : Router ,private singleEmp: EmpDataService, private http: HttpClient,){ }

 ngOnInit(): void {
  this.empId = localStorage.getItem("id")
  this.getempData()
  // console.log(this.empId);
 }
 getempData(){
  this.singleEmp.getSingleEmp(this.empId).subscribe((data : {}) => {
    this.empdata= data
    console.log(data);

  })
 }


empLogout(){
  this.singleEmp.emplogout().subscribe((data) =>{
    console.log(data);
    localStorage.removeItem("token")
    this.router.navigate(['adminlogin'])
  })
}
}




