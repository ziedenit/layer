import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:8081/";
    }
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
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map