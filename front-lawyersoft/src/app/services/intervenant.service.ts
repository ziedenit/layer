import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intervenant } from '../entitie/Intervenant';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IntervenantService {
  url = 'http://localhost:8081/intervenant/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListIntervenant() {
    return this.http.get(this.url + 'getintervenant', { headers: this.headers });
  }

  addIntervenant(intervenant: Intervenant): Observable<any> {
    return this.http.post(this.url + 'addintervenant', intervenant, { headers: this.headers });
  }

  updateIntervenant(intervenant: Intervenant): Observable<any> {
    return this.http.put(this.url + 'updateintervenant', intervenant, { headers: this.headers });
  }

  getIntervenantbyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidintervenant/' + id, { headers: this.headers });
  }

  deleteIntervenant(id: number): Observable<any> {
    return this.http.delete(this.url + 'deleteintervenant/' + id, { headers: this.headers });
  }

}
