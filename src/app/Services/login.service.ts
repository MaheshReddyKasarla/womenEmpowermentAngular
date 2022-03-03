import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpService: HttpClient) {}
  baseUrl: string = 'http://localhost:8080/womenEmp';

  registerUser(user: User) {
    return this.httpService.post(this.baseUrl + '/add', user);
  }
  updateUser(user: User, userId: string) {
    return this.httpService.put(this.baseUrl + '/updateuser/' + userId, user);
  }

  getPassword(email: string, password: string) {
    return this.httpService.get<boolean>(
      this.baseUrl + '/verifylogin/' + email + '/' + password
    );
  }
  getRegister(email: string) {
    return this.httpService.get<number>(
      this.baseUrl + '/verifyRegister/' + email
    );
  }
  getUserById(id: string) {
    return this.httpService.get<User>(this.baseUrl + '/getprofile/' + id);
  }
}
