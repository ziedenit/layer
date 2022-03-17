import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let HonoraireService = class HonoraireService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/honoraire/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListHonoraire() {
        return this.http.get(this.url + 'gethonoraire', { headers: this.headers });
    }
    // tslint:disable-next-line: ban-types
    /* findAllByEtat(etat: String) {
       return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
     }
   */
    addHonoraire(honnoraire) {
        return this.http.post(this.url + 'addhonoraire', honnoraire, { headers: this.headers });
    }
    updateHonoraire(honnoraire) {
        return this.http.put(this.url + 'updatehonoraire', honnoraire, { headers: this.headers });
    }
    getHonorairebyid(id) {
        return this.http.get(this.url + 'findbyidhonoraire/' + id, { headers: this.headers });
    }
    deleteHonoraire(id) {
        return this.http.delete(this.url + 'deletehonoraire/' + id, { headers: this.headers });
    }
    findAllAffaire(id) {
        return this.http.get(this.url + 'findbyidaffaire/' + id, { headers: this.headers });
    }
    findByAffaireType(idaffaire, type) {
        return this.http.get(this.url + 'findbyaffairetype/' + idaffaire + '/' + type, { headers: this.headers });
    }
    findByType() {
        return this.http.get(this.url + 'findbytype', { headers: this.headers });
    }
    findByaffairetypenull(idaffaire) {
        return this.http.get(this.url + 'findbyaffairetypenull/' + idaffaire, { headers: this.headers });
    }
    generateReport(idhonnoraire) {
        return this.http.post(this.url + 'rapporthonoraire/' + idhonnoraire, {
            responseType: 'arraybuffer',
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        });
    }
};
HonoraireService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HonoraireService);
export { HonoraireService };
//# sourceMappingURL=honoraire.service.js.map