import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Phase } from '../entitie/Phase';
import { Observable } from 'rxjs';
import { Affaire } from '../entitie/Affaire';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {
  url = 'http://localhost:8081/phase/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListPhase() {
    return this.http.get(this.url + 'getphase', { headers: this.headers });
  }

  // tslint:disable-next-line: ban-types
 /* findAllByEtat(etat: String) {
    return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
  }
*/
  addPhase(phase: Phase): Observable<any> {
    return this.http.post(this.url + 'addphase', phase, { headers: this.headers });
  }

  updatePhase(phase: Phase): Observable<any> {
    return this.http.put(this.url + 'updatephase', phase, { headers: this.headers });
  }

  getPhasebyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidphase/' + id, { headers: this.headers });
  }

  deletePhase(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletephase/' + id, { headers: this.headers });
  }

  findAllAffaire(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidaffaire/' + id, { headers: this.headers });
  }

  findByTrue(affaire: Affaire): Observable<any> {
    return this.http.get(this.url + 'currentphase/' + affaire , { headers: this.headers });
  }

}
