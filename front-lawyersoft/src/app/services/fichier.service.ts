import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fichier } from '../entitie/Fichier';
import { User } from '../entitie/User';
//import { ResponseContentType} from '@angular/http';
import { Observable } from 'rxjs';
import { FichierUpload } from '../entitie/fichier-upload';




@Injectable({
  providedIn: 'root'
})
export class FichierService {
  url = 'http://localhost:8081/fichier/';
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

  getListFichier() {
    return this.http.get(this.url + 'getfichier', { headers: this.headers });
  }


  addFichier(file: File, nom: string, desciption: string, id: number): Observable<any> {

    let formdata: FormData = new FormData();

    formdata.append('file', file);

    return this.http.post(this.url + 'addfichier/' + nom + '/' + desciption + '/' + id, formdata, { headers: this.headers });
  }

  updateFichier(fichier: Fichier): Observable<any> {
    return this.http.put(this.url + 'updatefichier', fichier, { headers: this.headers });
  }

  getFichierbyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidfichier/' + id, { headers: this.headers });
  }

  findAllByDossier(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyiddossier/' + id, { headers: this.headers });
  }

  deleteFichier(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletefichier/' + id, { headers: this.headers });
  }

}
