import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute, Router } from '@angular/router';
import { NgoService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-ngo-details',
  templateUrl: './ngo-details.component.html',
  styleUrls: ['./ngo-details.component.css']
})
export class NgoDetailsComponent implements OnInit {
  ngoId:any;
  //sub:any;
  // ngo:any;
  // p:any;
 // id=100;
  constructor(private activatedroute:ActivatedRoute,
              private router:Router,
              private ngoService:NgoService
             ) { }

  ngOnInit(): void {
  //     this.activatedroute.paramMap.subscribe(data => { 
  //     console.log("Ngo id passed is :"+ data.get('ngoId'));
  //     this.ngoId = data.get('ngoId'); 
      
   
  // });
  }

  viewCourses(): void {
    // sessionStorage.setItem('assignedNgoId', JSON.stringify(this.ngo.ngoId));
    // sessionStorage.setItem("assignedNgoId", ngo.ngoId.toString());
    // console.log("Ngo id passed from session storage is:"+ngo.ngoId);
    //this.router.navigate(['trainings']);
    this.router.navigateByUrl('/trainings');
    };
 
  

}
