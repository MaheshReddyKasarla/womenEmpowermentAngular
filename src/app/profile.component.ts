import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { User } from '../User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  updateForm: any;

  submitted: boolean = false;
  invalidRegisteration: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    if (
      sessionStorage.getItem('verifiedLogin') == 'false' ||
      sessionStorage.getItem('verifiedLogin') == null
    ) {
      this.router.navigateByUrl('/login');
    }

    this.loginService
      .getUserById(sessionStorage.getItem('userId'))
      .subscribe((data) => {
        // this.checkRegister = data;

        this.userDetails(data);
      });
  }
  userDetails(user: User) {
    this.updateForm.patchValue(user);
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      aadharNo: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (
      sessionStorage.getItem('verifiedLogin') == 'false' ||
      sessionStorage.getItem('verifiedLogin') == null
    ) {
      this.router.navigateByUrl('/login');
    } else {
      console.log(this.updateForm.value);
      this.loginService
        .updateUser(this.updateForm.value, sessionStorage.getItem('userId'))
        .subscribe((data) => {});
      alert('details updated succesfully');
      this.router.navigateByUrl('/home');
    }
  }
}