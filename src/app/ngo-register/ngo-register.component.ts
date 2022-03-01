import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VolunteersService } from '../Services/volunteers.service';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css'],
})
export class NgoRegisterComponent implements OnInit {
  public registerForm: any;
  submitted: boolean = false;

  category: any = null;
  gender: any = null;
  //   categorList = [
  //   {name: 'Arizona', code: 'AZ'},
  //   {name: 'California', code: 'CA'},
  //   {name: 'Colorado', code: 'CO'}
  // ];
  constructor(
    private formBuilder: FormBuilder,
    private httpServ : HttpClient,
    private router: Router,

    private userService: VolunteersService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [],
      category:['',Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required,Validators.maxLength(10)]],
      gender: ['', Validators.required],
      // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      dob: ['', [Validators.required]],
        
    });
  }
  

    onVolunteerSigup() {
      this.submitted = true;						
        if(this.registerForm.invalid){						
          return;						
        }		
      this.userService.addVolunteer(this.registerForm.value)
      .subscribe(res=>{
        alert("Sign Up Successful..!!");
        this.registerForm.reset();
        this.router.navigate(['ngologin']);
      },error=>{
        alert("Something is wrong..!!");
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
