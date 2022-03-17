import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let PagesService = class PagesService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/pages/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListPages() {
        return this.http.get(this.url + 'getAllPages', { headers: this.headers });
    }
};
PagesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PagesService);
export { PagesService };
//# sourceMappingURL=pages.service.js.map