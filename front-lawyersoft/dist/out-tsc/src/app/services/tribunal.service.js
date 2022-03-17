import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let TribunalService = class TribunalService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/tribunal/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListTribunaux() {
        return this.http.get(this.url + 'gettribunal', { headers: this.headers });
    }
    addTribunaux(tribunal) {
        return this.http.post(this.url + 'addtribunal', tribunal, { headers: this.headers });
    }
    updateTribunaux(tribunal) {
        return this.http.put(this.url + 'updatetribunal', tribunal, { headers: this.headers });
    }
    getTribunauxbyid(id) {
        return this.http.get(this.url + 'findbyidtribunal/' + id, { headers: this.headers });
    }
    deleteTribunaux(id) {
        return this.http.delete(this.url + 'deletetribunal/' + id, { headers: this.headers });
    }
};
TribunalService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TribunalService);
export { TribunalService };
//# sourceMappingURL=tribunal.service.js.map