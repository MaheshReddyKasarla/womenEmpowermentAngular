import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User | undefined;							
  editForm: any;							
  submitted: boolean = false;							
  constructor(private formBuilder: FormBuilder,private router: Router, 							
    private userService: UserService) { }							
  							
  ngOnInit() {							
    if(localStorage.getItem("username")!=null){							
    let userId = localStorage.getItem("editUserId");							
    if(!userId) {							
      alert("Invalid action.")							
      this.router.navigate(['list-user']);							
      return;							
    }							
    this.editForm = this.formBuilder.group({							
      id: [],							
      email: ['', Validators.required],							
      firstName: ['', Validators.required],							
      lastName: ['', Validators.required]							
    });							
							
    this.userService.getUserById(+userId)							
      .subscribe( data => {							
        this.editForm.setValue(data);							
      });							
    }							
    else							
        this.router.navigate(['/user']);							
  }							
							
  onSubmit() {							
    this.submitted = true;							
    if(this.editForm.invalid){							
      return;							
    }							
    this.userService.updateUser(this.editForm.value)							
      .subscribe(							
        data => {							
          this.router.navigate(['list-user']);							
        },							
        error => {							
          alert(error);							
        });							
  }
  
}

