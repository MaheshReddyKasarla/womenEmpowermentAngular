import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { User } from '../User';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  addForm: any;
  user: any;
  checkRegister: any;
  submitted: boolean = false;
  invalidRegisteration: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      aadharNo: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loginService
      .getRegister(this.addForm.controls.email.value)
      .subscribe((data) => {
        this.checkRegister = data;
        console.log(data);
      });
    if (this.addForm.invalid) {
      return;
    }

    if (this.checkRegister == false) {
      this.loginService
        .registerUser(this.addForm.value)
        .subscribe((data) => {});
      this.router.navigateByUrl('/home');
    } else {
      this.invalidRegisteration = true;
    }
  }
}
