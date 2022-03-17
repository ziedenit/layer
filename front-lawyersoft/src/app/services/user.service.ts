import { User } from './../entitie/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8081/user/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });

  }

  getListUser() {
    return this.http.get(this.url + 'getuser', { headers: this.headers });
  }

  addUser(user: User) {
    return this.http.post(this.url + 'adduser', user, { headers: this.headers });
  }

  DeleteUser(id: number) {
    return this.http.delete(this.url + 'deleteuser/' + id, { headers: this.headers });
  }

  updateUser(user: User) {
    return this.http.put(this.url + 'updateuser', user, { headers: this.headers });
  }
  getUserByLogin(login: string) {
    return this.http.get(this.url + 'userByLogin/' + login, { headers: this.headers });
  }
}
