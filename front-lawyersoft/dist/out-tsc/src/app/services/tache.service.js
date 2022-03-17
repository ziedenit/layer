import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let TacheService = class TacheService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/tache/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListTache() {
        return this.http.get(this.url + 'gettache', { headers: this.headers });
    }
    // tslint:disable-next-line: ban-types
    /*findAllByEtat(etat: String) {
      return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
    }
  */
    addTache(tache) {
        return this.http.post(this.url + 'addtache', tache, { headers: this.headers });
    }
    updateTache(tache) {
        return this.http.put(this.url + 'updatetache', tache, { headers: this.headers });
    }
    getTachebyid(id) {
        return this.http.get(this.url + 'findbyidtache/' + id, { headers: this.headers });
    }
    deleteTache(id) {
        return this.http.delete(this.url + 'deletetache/' + id, { headers: this.headers });
    }
    findAllPhase(id) {
        return this.http.get(this.url + 'findbyidphase/' + id, { headers: this.headers });
    }
};
TacheService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TacheService);
export { TacheService };
//# sourceMappingURL=tache.service.js.map