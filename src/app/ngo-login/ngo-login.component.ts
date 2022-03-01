import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VolunteersService } from '../Services/volunteers.service';
// import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  loginForm: any;
  submitted: boolean = false;

  //   categorList = [
  //   {name: 'Arizona', code: 'AZ'},
  //   {name: 'California', code: 'CA'},
  //   {name: 'Colorado', code: 'CO'}
  // ];
  constructor(
    private formBuilder: FormBuilder,
    private httpServ : HttpClient,
    private router: Router,

    private volunteerService: VolunteersService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: [],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]},
      {
        // validator: ConfirmedValidator('password', 'confirmPassword')
    });
  }
  
  onVolunteerLogin() {
    this.volunteerService.getVolunteers()
    .subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email
              // && a.paasword === this.loginForm.value.password
        })
        if(user){
          // alert("Login Successfull...!!!");
            // this.loginForm.reset();
            this.router.navigate(['/ngovolunteerList'])
        }
        else{
          alert("User not found..!!!");
        }
      },err=>
      {
        alert("Something went wrong..!!!")
      })
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
  
}
