import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lecteurjugement } from '../entitie/Lecteurjugement';
import { Phase } from '../entitie/Phase';
//import { ResponseContentType} from '@angular/http';
import { Observable } from 'rxjs';
import { FichierUpload } from '../entitie/fichier-upload';




@Injectable({
  providedIn: 'root'
})
export class LecteurjugementService {
  url = 'http://localhost:8081/lecteurjugement/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
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


  addLecteurjugement(file: File, favorable: boolean, desciption: string, id: number): Observable<any> {

    let formdata: FormData = new FormData();

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
  getListByFavorable(favorable: boolean) {
    return this.http.get(this.url + 'findbyfavorable/' + favorable, { headers: this.headers });
  }

  findByPhaseId(phaseid: number) {
    return this.http.get(this.url + 'phase/' + phaseid, { headers: this.headers });
  }



}
