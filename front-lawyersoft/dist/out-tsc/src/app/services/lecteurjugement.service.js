import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let LecteurjugementService = class LecteurjugementService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/lecteurjugement/';
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
    /*getListLecteurjugement() {
      return this.http.get(this.url + 'getlecteurjugement', { headers: this.headers });
    }*/
    addLecteurjugement(file, favorable, desciption, id) {
        let formdata = new FormData();
        formdata.append('file', file);
        return this.http.post(this.url + 'addlecteurjugement/' + desciption + '/' + favorable + '/' + id, formdata, { headers: this.headers });
    }
    /*updateLecteurjugement(lecteurjugement: Lecteurjugement): Observable<any> {
      return this.http.put(this.url + 'updatelecteurjugement', lecteurjugement, { headers: this.headers });
    }
  
    getLecteurjugementbyid(id: number): Observable<any> {
      return this.http.get(this.url + 'findbyidlecteurjugement/' + id, { headers: this.headers });
    }
  
  
    deleteLecteurjugement(id: number): Observable<any> {
      return this.http.delete(this.url + 'deletelecteurjugement/' + id, { headers: this.headers });
    }
  */
    getListByFavorable(favorable) {
        return this.http.get(this.url + 'findbyfavorable/' + favorable, { headers: this.headers });
    }
    findByPhaseId(phaseid) {
        return this.http.get(this.url + 'phase/' + phaseid, { headers: this.headers });
    }
};
LecteurjugementService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LecteurjugementService);
export { LecteurjugementService };
//# sourceMappingURL=lecteurjugement.service.js.map