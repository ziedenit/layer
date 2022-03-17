import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let ConsultationService = class ConsultationService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/consultation/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListConsultationByType(type) {
        return this.http.get(this.url + 'getconsultation/' + type, { headers: this.headers });
    }
    getList() {
        return this.http.get(this.url + 'getconsultation', { headers: this.headers });
    }
    getListConsultation() {
        return this.http.get(this.url + 'getconsultation', { headers: this.headers });
    }
    addConsultation(consultation) {
        return this.http.post(this.url + 'addconsultation', consultation, { headers: this.headers });
    }
    updateConsultation(consultation) {
        return this.http.put(this.url + 'updateconsultation', consultation, { headers: this.headers });
    }
    getConsultationbyid(id) {
        return this.http.get(this.url + 'findbyidconsultation/' + id, { headers: this.headers });
    }
    deleteConsultation(id) {
        return this.http.delete(this.url + 'deleteconsultation/' + id, { headers: this.headers });
    }
};
ConsultationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ConsultationService);
export { ConsultationService };
//# sourceMappingURL=consultation.service.js.map