import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let RendezvousService = class RendezvousService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/rendezvous/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListRendezvous() {
        return this.http.get(this.url + 'getrdv', { headers: this.headers });
    }
    // tslint:disable-next-line: ban-types
    /*findAllByEtat(etat: String) {
      return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
    }
  */
    addRendezvous(rendezvous) {
        return this.http.post(this.url + 'addrdv', rendezvous, { headers: this.headers });
    }
    updateRendezvous(rendezvous) {
        return this.http.put(this.url + 'updaterdv', rendezvous, { headers: this.headers });
    }
    getRendezvousbyid(id) {
        return this.http.get(this.url + 'findbyidrdv/' + id, { headers: this.headers });
    }
    deleteRendezvous(id) {
        return this.http.delete(this.url + 'deleterdv/' + id, { headers: this.headers });
    }
    findAllPhase(id) {
        return this.http.get(this.url + 'findbyidphase/' + id, { headers: this.headers });
    }
};
RendezvousService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RendezvousService);
export { RendezvousService };
//# sourceMappingURL=rendezvous.service.js.map