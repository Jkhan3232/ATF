import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EmpDataService} from "../../services/emp-data.service"


interface tokenModel{
  message:string;
  token:string
}

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  email : string=""
  password : string=""


  constructor (private router : Router ,private adminlogin: EmpDataService, private http: HttpClient,){ }
  ngOnInit(): void {
    let adminLogin = localStorage.getItem("token") ? true : false
    if(adminLogin) {
       this.router.navigate(['admindashboard'])
    }
  }
    Login(){
      let bodydata = {
        "email" : this.email,
        "password": this.password
      }
      this.adminlogin.adminLogin(bodydata).subscribe((res : any) =>{
      localStorage.setItem("token",res.token);
      this.router.navigate(['admindashboard'])
      })

    }
}
