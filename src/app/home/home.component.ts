import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {
    if (
      sessionStorage.getItem('verifiedLogin') == 'false' ||
      sessionStorage.getItem('verifiedLogin') == null
    ) {
      this.router.navigateByUrl('/login');
      console.log('value entered here');
    }
  }

  ngOnInit(): void {}
}
