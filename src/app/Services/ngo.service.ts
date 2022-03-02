import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ngo } from '../ngo/ngo';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
 
  ngoList:ngo[]=[];
  ngoId:any;
  
  baseUrl:string="http://localhost:8080/womenEmp";
  constructor(private httpServ: HttpClient) { }

   //getVolunteersList
   public getNgoList()
   {
    console.log("get NgoList()"+this.httpServ.get<ngo[]>(this.baseUrl+'/listAllNgo'));
    return this.httpServ.get<ngo[]>(this.baseUrl+'/listAllNgo');
   }
}
