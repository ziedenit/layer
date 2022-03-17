import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let IntervenantService = class IntervenantService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/intervenant/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListIntervenant() {
        return this.http.get(this.url + 'getintervenant', { headers: this.headers });
    }
    addIntervenant(intervenant) {
        return this.http.post(this.url + 'addintervenant', intervenant, { headers: this.headers });
    }
    updateIntervenant(intervenant) {
        return this.http.put(this.url + 'updateintervenant', intervenant, { headers: this.headers });
    }
    getIntervenantbyid(id) {
        return this.http.get(this.url + 'findbyidintervenant/' + id, { headers: this.headers });
    }
    deleteIntervenant(id) {
        return this.http.delete(this.url + 'deleteintervenant/' + id, { headers: this.headers });
    }
};
IntervenantService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], IntervenantService);
export { IntervenantService };
//# sourceMappingURL=intervenant.service.js.map