import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let AffaireService = class AffaireService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/affaire/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListAffaire() {
        return this.http.get(this.url + 'getaffaire', { headers: this.headers });
    }
    // tslint:disable-next-line: ban-types
    findAllByEtat(etat) {
        return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
    }
    addAffaire(affairedto) {
        return this.http.post(this.url + 'addaffaire', affairedto, { headers: this.headers });
    }
    updateAffaire(affaire) {
        return this.http.put(this.url + 'updateaffaire', affaire, { headers: this.headers });
    }
    getAffairebyid(id) {
        return this.http.get(this.url + 'findbyidaffaire/' + id, { headers: this.headers });
    }
    deleteAffaire(id) {
        return this.http.delete(this.url + 'deleteaffaire/' + id, { headers: this.headers });
    }
};
AffaireService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AffaireService);
export { AffaireService };
//# sourceMappingURL=affaire.service.js.map