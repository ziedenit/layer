import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auxiliaire } from '../entitie/Auxiliaire';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuxiliaireService {
  url = 'http://localhost:8081/auxiliaire/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListAuxiliaire() {
    return this.http.get(this.url + 'getauxiliaire', { headers: this.headers });
  }

  addAuxiliaire(auxiliaire: Auxiliaire): Observable<any> {
    return this.http.post(this.url + 'addauxiliaire', auxiliaire, { headers: this.headers });
  }

  updateAuxiliaire(auxiliaire: Auxiliaire): Observable<any> {
    return this.http.put(this.url + 'updateauxiliaire', auxiliaire, { headers: this.headers });
  }

  getAuxiliairebyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidauxiliaire/' + id, { headers: this.headers });
  }

  deleteAuxiliaire(id: number): Observable<any> {
    return this.http.delete(this.url + 'deleteauxiliaire/' + id, { headers: this.headers });
  }

}
