import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let ProfilService = class ProfilService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/profil/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListProfil() {
        return this.http.get(this.url + 'getprofil', { headers: this.headers });
    }
    addProfil(profil) {
        return this.http.post(this.url + 'addprofil', profil, { headers: this.headers });
    }
    DeleteProfil(id) {
        return this.http.delete(this.url + 'deleteprofil/' + id, { headers: this.headers });
    }
    updateProfil(profil) {
        return this.http.put(this.url + 'updateprofil', profil, { headers: this.headers });
    }
    getProfilById(id) {
        return this.http.get(this.url + 'findbyidprofil/' + id, { headers: this.headers });
    }
};
ProfilService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProfilService);
export { ProfilService };
//# sourceMappingURL=profil.service.js.map