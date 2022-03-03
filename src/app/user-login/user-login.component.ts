import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: any = FormGroup;

  submitted: boolean = false;
  invalidLogin: boolean = false;
  //checkLogin: boolean = false;

  user: any;
  email: string = '';
  pswd: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  onSubmit() {
    this.submitted = true;

    this.loginService
      .getPassword(
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value
      )
      .subscribe((data) => {
        //this.checkLogin = data;
        this.checkBoolean(data);
      });
  }

  checkBoolean(chkBoolean: boolean) {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(chkBoolean);
    if (chkBoolean) {
      this.invalidLogin = false;

      sessionStorage.setItem('verifiedLogin', 'true');
      this.loginService
        .getRegister(this.loginForm.controls.email.value)
        .subscribe((data) => {
          // this.checkRegister = data;
          sessionStorage.setItem('userId', JSON.stringify(data));
        });
      this.router.navigateByUrl('/home');
      console.log('logged in');
    } else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
