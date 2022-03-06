import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm!:FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    
    
    
    ) {
   
   }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({      
      name: ['', Validators.required],      
      email: ['',[ Validators.required,Validators.email]],      
      message: ['', Validators.required],      
  });
  }
contact(){
  this.http

      .post<any>('http://localhost:8080/womenEmp/contact', this.contactForm.value)

      .subscribe(

        (res) => {

          alert('Thanks for contacting us we will reach you soon');

          this.contactForm.reset();

        },

        (err) => {

          alert('something went wrong');

        }

      );
}
}
