import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpSer: HttpClient) {}

  baseUrl: string = 'http://localhost:3000/user'; // edit User

  updateUser(user: User) {
    return this.httpSer.put(this.baseUrl + '/' + user.userId, user);
  }

  getUserById(id: number) {
    return this.httpSer.get<User>(this.baseUrl + '/' + id);
  }
}
