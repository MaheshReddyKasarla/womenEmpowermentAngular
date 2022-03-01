import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolunteersService } from '../Services/volunteers.service';
import { volunteer } from '../volunteer';

@Component({
  selector: 'app-ngo-volunteer-list',
  templateUrl: './ngo-volunteer-list.component.html',
  styleUrls: ['./ngo-volunteer-list.component.css']
})
export class NgoVolunteerListComponent implements OnInit {

  voluntersList: volunteer[]=[];							
							
  constructor(private router: Router ,private volunteerService: VolunteersService) { }							
							
  // Initialize with default list of users							
  ngOnInit() {							
    if(localStorage.getItem("email")!=null)
    {							 							
      this. volunteerService.getVolunteers()					
      .subscribe(data=> {							
        this.voluntersList= data;							
      });							
    }							
    else							
    this.router.navigate(['/ngo']);							
    							
  }		

}
