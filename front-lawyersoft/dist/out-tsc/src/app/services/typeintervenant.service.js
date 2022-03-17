import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let TypeintervenantService = class TypeintervenantService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/typeintervenant/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListTypeIntervenant() {
        return this.http.get(this.url + 'gettypeinterv', { headers: this.headers });
    }
    DeleteTypeIntervenant(id) {
        return this.http.delete(this.url + 'deletetypeinterv/' + id, { headers: this.headers });
    }
    updateTypeIntervenant(typeintervenant) {
        return this.http.put(this.url + 'updatetypeinterv', typeintervenant, { headers: this.headers });
    }
    addTypeIntervenant(typeintervenant) {
        return this.http.post(this.url + 'addtypeinterv', typeintervenant, { headers: this.headers });
    }
};
TypeintervenantService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TypeintervenantService);
export { TypeintervenantService };
//# sourceMappingURL=typeintervenant.service.js.map