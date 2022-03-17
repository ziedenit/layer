import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DroitaccesService {

  url = 'http://localhost:8081/droitacces/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }
  addAllDroitAcces(allDroitAcces: any, idProfile: any) {
    return this.http.post(this.url + 'addAllDroitAcces/' + idProfile, allDroitAcces, { headers: this.headers });
  }
  addDroitAcces(droitAcces: any, idProfile: any) {
    return this.http.post(this.url + 'addDroitAcces/' + idProfile, droitAcces, { headers: this.headers });
  }
  updateDroitAcces(droitAcces: any, idProfile: any) {
    return this.http.put(this.url + 'updateDroitAcces/' + idProfile, droitAcces, { headers: this.headers });
  }
  deleteDroitAcces(idDroit: any) {
    return this.http.delete(this.url + 'deleteDroitAcces/' + idDroit, { headers: this.headers });
  }
  getAllDroitAccesByProfilId(idProfile: any) {
    return this.http.get(this.url + 'getAllDroitAccesByProfilId/' + idProfile, { headers: this.headers });
  }
}
