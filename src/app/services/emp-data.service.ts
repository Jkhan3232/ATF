import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {Ragister ,admin , UpdateId , emplogin} from "../data-typs";



@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

// httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

constructor(private http : HttpClient) {}

emloyeeRagister(data :Ragister){
  return this.http.post("http://localhost:4500/api/emp/emp_ragister" ,data)
}

empData(){
  return this.http.get("http://localhost:4500/api/emp/getallempdata" )
}

getSingleEmp(data : any){
  console.log(data);
  return this.http.get(`http://localhost:4500/api/emp/getSinlegempdata/${data}`)
}

adminLogin(data : admin ){
  return this.http.post("http://localhost:4500/api/emp/admin", data)
}

empLogin(data : emplogin ){
  return this.http.post("http://localhost:4500/api/emp/emp_login", data)
}

updateEmployee(data : any){
  return this.http.put(`http://localhost:4500/api/emp/updatedata/${data._id}` , data)
}

adminlogout(){
  return this.http.get("http://localhost:4500/api/emp/admin_logout")
}

emplogout(){
  return this.http.get("http://localhost:4500/api/emp/emp_logout")
}

deleteUser(id: UpdateId){
    let API_URL = `http://localhost:4500/api/emp/deleteUser/${id}`;
    return this.http
      .delete(API_URL);
  }

  uploadFile(){
    return this.http.get("http://localhost:4500/api/emp/upload")
  }

}

