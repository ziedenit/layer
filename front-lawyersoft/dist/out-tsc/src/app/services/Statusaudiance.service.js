import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let StatusAudianceService = class StatusAudianceService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/statusadiance/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListStatusAudiance() {
        return this.http.get(this.url + 'getstatus', { headers: this.headers });
    }
    addStatusAudiance(statusaudiance) {
        return this.http.post(this.url + 'addstatus', statusaudiance, { headers: this.headers });
    }
    updateStatusAudiance(statusaudiance) {
        return this.http.put(this.url + 'updatestatus', statusaudiance, { headers: this.headers });
    }
    getStatusAudiancebyid(id) {
        return this.http.get(this.url + 'findbyidstatus/' + id, { headers: this.headers });
    }
    deleteStatusAudiance(id) {
        return this.http.delete(this.url + 'deletestatus/' + id, { headers: this.headers });
    }
};
StatusAudianceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StatusAudianceService);
export { StatusAudianceService };
//# sourceMappingURL=Statusaudiance.service.js.map