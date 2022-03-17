import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let PhaseService = class PhaseService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/phase/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListPhase() {
        return this.http.get(this.url + 'getphase', { headers: this.headers });
    }
    // tslint:disable-next-line: ban-types
    /* findAllByEtat(etat: String) {
       return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
     }
   */
    addPhase(phase) {
        return this.http.post(this.url + 'addphase', phase, { headers: this.headers });
    }
    updatePhase(phase) {
        return this.http.put(this.url + 'updatephase', phase, { headers: this.headers });
    }
    getPhasebyid(id) {
        return this.http.get(this.url + 'findbyidphase/' + id, { headers: this.headers });
    }
    deletePhase(id) {
        return this.http.delete(this.url + 'deletephase/' + id, { headers: this.headers });
    }
    findAllAffaire(id) {
        return this.http.get(this.url + 'findbyidaffaire/' + id, { headers: this.headers });
    }
    findByTrue(affaire) {
        return this.http.get(this.url + 'currentphase/' + affaire, { headers: this.headers });
    }
};
PhaseService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PhaseService);
export { PhaseService };
//# sourceMappingURL=phase.service.js.map