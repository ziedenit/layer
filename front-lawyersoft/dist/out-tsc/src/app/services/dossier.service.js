import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let DossierService = class DossierService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/dossier/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListDossier() {
        return this.http.get(this.url + 'getdossier', { headers: this.headers });
    }
    addDossier(dossier) {
        return this.http.post(this.url + 'adddossier', dossier, { headers: this.headers });
    }
    updateDossier(dossier) {
        return this.http.put(this.url + 'updatedossier', dossier, { headers: this.headers });
    }
    getDossierbyid(id) {
        return this.http.get(this.url + 'findbyiddossier/' + id, { headers: this.headers });
    }
    findAllByAffaire(id) {
        return this.http.get(this.url + 'findbyidaffaire/' + id, { headers: this.headers });
    }
    deleteDossier(id) {
        return this.http.delete(this.url + 'deletedossier/' + id, { headers: this.headers });
    }
};
DossierService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DossierService);
export { DossierService };
//# sourceMappingURL=dossier.service.js.map