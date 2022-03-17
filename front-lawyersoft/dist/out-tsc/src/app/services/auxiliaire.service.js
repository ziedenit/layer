import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let AuxiliaireService = class AuxiliaireService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/auxiliaire/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListAuxiliaire() {
        return this.http.get(this.url + 'getauxiliaire', { headers: this.headers });
    }
    addAuxiliaire(auxiliaire) {
        return this.http.post(this.url + 'addauxiliaire', auxiliaire, { headers: this.headers });
    }
    updateAuxiliaire(auxiliaire) {
        return this.http.put(this.url + 'updateauxiliaire', auxiliaire, { headers: this.headers });
    }
    getAuxiliairebyid(id) {
        return this.http.get(this.url + 'findbyidauxiliaire/' + id, { headers: this.headers });
    }
    deleteAuxiliaire(id) {
        return this.http.delete(this.url + 'deleteauxiliaire/' + id, { headers: this.headers });
    }
};
AuxiliaireService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuxiliaireService);
export { AuxiliaireService };
//# sourceMappingURL=auxiliaire.service.js.map