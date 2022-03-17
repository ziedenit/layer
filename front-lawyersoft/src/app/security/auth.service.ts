import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8081/"
  private jwtToken;
  constructor(private http: HttpClient) { }
  login(user) {
    return this.http.post(this.url + 'login', user, {
      observe: 'response'
    });
  }
  saveToken(jwt) {
    localStorage.setItem('token', jwt);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loadToken(jwtToken) {
    this.jwtToken = jwtToken;
    this.saveToken(this.jwtToken);
  }
  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');

  }



}
