import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let TypeaffaireService = class TypeaffaireService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/typeaffaire/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListTypeAffaire() {
        return this.http.get(this.url + 'gettypeaffaire', { headers: this.headers });
    }
    DeleteTypeAffaire(id) {
        return this.http.delete(this.url + 'deletetypeaffaire/' + id, { headers: this.headers });
    }
    updateTypeAffaire(typeaffaire) {
        return this.http.put(this.url + 'updatetypeaffaire', typeaffaire, { headers: this.headers });
    }
    addTypeAffaire(typeaffaire) {
        return this.http.post(this.url + 'addtypeaffaire', typeaffaire, { headers: this.headers });
    }
};
TypeaffaireService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TypeaffaireService);
export { TypeaffaireService };
//# sourceMappingURL=typeaffaire.service.js.map