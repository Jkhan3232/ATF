import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EmpDataService} from "../../services/emp-data.service"


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
email : string=""
password : string=""

ngOnInit(): void {
  let empLogin = localStorage.getItem("token") ? true : false
  if(empLogin) {
     this.router.navigate(['employee-profile'])
  }
}

constructor (private router : Router ,private emplogin: EmpDataService, private http: HttpClient){
}
Login(){
  let bodydata = {
    "email" : this.email,
    "password": this.password
  }
  this.emplogin.empLogin(bodydata).subscribe((res : any) =>{
  localStorage.setItem("token",res.token ) ;
  localStorage.setItem("id" ,res.id)
  this.router.navigate(['employee-profile'])
  })
}
}

