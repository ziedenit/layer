import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let TypetribunauxService = class TypetribunauxService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/typetribunal/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    getListTypeTribunaux() {
        return this.http.get(this.url + 'gettypetribunal', { headers: this.headers });
    }
    addtypeTribunaux(typetribunal) {
        return this.http.post(this.url + 'addtypetribunal', typetribunal, { headers: this.headers });
    }
    DeleteTypeTribunaux(id) {
        return this.http.delete(this.url + 'deletetypetribunal/' + id, { headers: this.headers });
    }
    updateTypeTribunaux(typetribunal) {
        return this.http.put(this.url + 'updatetypetribunal', typetribunal, { headers: this.headers });
    }
};
TypetribunauxService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TypetribunauxService);
export { TypetribunauxService };
//# sourceMappingURL=typetribunaux.service.js.map