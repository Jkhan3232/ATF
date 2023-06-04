
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EmpDataService} from "../../services/emp-data.service"
import {Ragister} from "../../data-typs"



@Component({
  selector: 'app-userragister',
  templateUrl: './userragister.component.html',
  styleUrls: ['./userragister.component.css']
})


export class UserragisterComponent {
constructor  (private router : Router ,  private EmpData: EmpDataService){

}
ngOnInit() : void{}
register(data : Ragister): void{
  this.EmpData.emloyeeRagister(data).subscribe((res)=>{
   if(res){
    this.router.navigate(['admindashboard'])
   }
  })
}}

