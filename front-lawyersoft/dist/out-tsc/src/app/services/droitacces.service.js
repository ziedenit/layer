import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let DroitaccesService = class DroitaccesService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/droitacces/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    addAllDroitAcces(allDroitAcces, idProfile) {
        return this.http.post(this.url + 'addAllDroitAcces/' + idProfile, allDroitAcces, { headers: this.headers });
    }
    addDroitAcces(droitAcces, idProfile) {
        return this.http.post(this.url + 'addDroitAcces/' + idProfile, droitAcces, { headers: this.headers });
    }
    updateDroitAcces(droitAcces, idProfile) {
        return this.http.put(this.url + 'updateDroitAcces/' + idProfile, droitAcces, { headers: this.headers });
    }
    deleteDroitAcces(idDroit) {
        return this.http.delete(this.url + 'deleteDroitAcces/' + idDroit, { headers: this.headers });
    }
    getAllDroitAccesByProfilId(idProfile) {
        return this.http.get(this.url + 'getAllDroitAccesByProfilId/' + idProfile, { headers: this.headers });
    }
};
DroitaccesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DroitaccesService);
export { DroitaccesService };
//# sourceMappingURL=droitacces.service.js.map