import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { volunteer } from '../volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {

  constructor(private httpServ:HttpClient) { }
  baseUrl:string="http://localhost:3000/voluntersList";

     
  //add volunteer
   public addVolunteer(volunteer: volunteer) {            
    return this.httpServ.post(this.baseUrl, volunteer);            
  } 

  //getVolunteersList
  public getVolunteers()
  {
    console.log("getVolunteers() method : " +this.httpServ.get<volunteer[]>(this.baseUrl));
    return this.httpServ.get<volunteer[]>(this.baseUrl);
  }
}
