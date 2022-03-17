import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let AudianceService = class AudianceService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/audiance/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListAudiance() {
        return this.http.get(this.url + 'getaudiance', { headers: this.headers });
    }
    // tslint:disable-next-line: ban-types
    /*findAllByEtat(etat: String) {
      return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
    }
  */
    addAudiance(audiance) {
        return this.http.post(this.url + 'addaudiance', audiance, { headers: this.headers });
    }
    updateAudiance(audiance) {
        return this.http.put(this.url + 'updateaudiance', audiance, { headers: this.headers });
    }
    getAudiancebyid(id) {
        return this.http.get(this.url + 'findbyidaudiance/' + id, { headers: this.headers });
    }
    deleteAudiance(id) {
        return this.http.delete(this.url + 'deleteaudiance/' + id, { headers: this.headers });
    }
    findAllPhase(id) {
        return this.http.get(this.url + 'findbyidphase/' + id, { headers: this.headers });
    }
};
AudianceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AudianceService);
export { AudianceService };
//# sourceMappingURL=audiance.service.js.map