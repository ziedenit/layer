import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let FichierService = class FichierService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/fichier/';
        this.headers = new HttpHeaders({
            Authorization: localStorage.getItem('token')
        });
    }
    /* public getCvCandidats(fichier: Fichier): Observable<any> {
   
       return this.http.post(this.url + "/CVPDF/" + fichier.fichierId , { id: fichier.fichierId },
       { headers: this.headers, responseType : ResponseContentType.Blob, })
       .map((res) => {
         console.log(res);
         return {
           filename: fichier.fileName,
           data: res.blob()
         };
       })
     }*/
    getListFichier() {
        return this.http.get(this.url + 'getfichier', { headers: this.headers });
    }
    addFichier(file, nom, desciption, id) {
        let formdata = new FormData();
        formdata.append('file', file);
        return this.http.post(this.url + 'addfichier/' + nom + '/' + desciption + '/' + id, formdata, { headers: this.headers });
    }
    updateFichier(fichier) {
        return this.http.put(this.url + 'updatefichier', fichier, { headers: this.headers });
    }
    getFichierbyid(id) {
        return this.http.get(this.url + 'findbyidfichier/' + id, { headers: this.headers });
    }
    findAllByDossier(id) {
        return this.http.get(this.url + 'findbyiddossier/' + id, { headers: this.headers });
    }
    deleteFichier(id) {
        return this.http.delete(this.url + 'deletefichier/' + id, { headers: this.headers });
    }
};
FichierService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FichierService);
export { FichierService };
//# sourceMappingURL=fichier.service.js.map