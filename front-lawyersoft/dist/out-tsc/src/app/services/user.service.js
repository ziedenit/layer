import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/user/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListUser() {
        return this.http.get(this.url + 'getuser', { headers: this.headers });
    }
    addUser(user) {
        return this.http.post(this.url + 'adduser', user, { headers: this.headers });
    }
    DeleteUser(id) {
        return this.http.delete(this.url + 'deleteuser/' + id, { headers: this.headers });
    }
    updateUser(user) {
        return this.http.put(this.url + 'updateuser', user, { headers: this.headers });
    }
    getUserByLogin(login) {
        return this.http.get(this.url + 'userByLogin/' + login, { headers: this.headers });
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map