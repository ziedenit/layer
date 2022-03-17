import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dossier } from '../entitie/Dossier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  url = 'http://localhost:8081/dossier/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListDossier() {
    return this.http.get(this.url + 'getdossier', { headers: this.headers });
  }


  addDossier(dossier: Dossier): Observable<any> {
    return this.http.post(this.url + 'adddossier', dossier, { headers: this.headers });
  }

  updateDossier(dossier: Dossier): Observable<any> {
    return this.http.put(this.url + 'updatedossier', dossier, { headers: this.headers });
  }

  getDossierbyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyiddossier/' + id, { headers: this.headers });
  }

  findAllByAffaire(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidaffaire/' + id, { headers: this.headers });
  }

  deleteDossier(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletedossier/' + id, { headers: this.headers });
  }

}
