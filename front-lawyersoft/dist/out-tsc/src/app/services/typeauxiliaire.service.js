import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let TypeauxiliaireService = class TypeauxiliaireService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/typeauxiliaire/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListTypeAuxiliaire() {
        return this.http.get(this.url + 'gettypeaux', { headers: this.headers });
    }
    DeleteTypeAuxiliaire(id) {
        return this.http.delete(this.url + 'deletetypeaux/' + id, { headers: this.headers });
    }
    updateTypeAuxiliaire(typeauxiliaire) {
        return this.http.put(this.url + 'updatetypeaux', typeauxiliaire, { headers: this.headers });
    }
    addTypeAuxiliaire(typeauxiliaire) {
        return this.http.post(this.url + 'addtypeaux', typeauxiliaire, { headers: this.headers });
    }
};
TypeauxiliaireService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TypeauxiliaireService);
export { TypeauxiliaireService };
//# sourceMappingURL=typeauxiliaire.service.js.map