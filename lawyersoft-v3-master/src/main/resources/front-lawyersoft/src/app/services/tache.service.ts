import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Phase } from '../entitie/Phase';
import { Observable } from 'rxjs';
import { Tache } from '../entitie/Tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  listTache: Tache[];

  url = 'http://localhost:8081/tache/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListTache() {
    return this.http.get(this.url + 'gettache', { headers: this.headers });
  }

  // tslint:disable-next-line: ban-types
  /*findAllByEtat(etat: String) {
    return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
  }
*/
  addTache(tache: Tache): Observable<any> {
    return this.http.post(this.url + 'addtache', tache, { headers: this.headers });
  }

  updateTache(tache: Tache): Observable<any> {
    return this.http.put(this.url + 'updatetache', tache, { headers: this.headers });
  }

  getTachebyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidtache/' + id, { headers: this.headers });
  }

  deleteTache(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletetache/' + id, { headers: this.headers });
  }

  findAllPhase(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidphase/' + id, { headers: this.headers });
  }

}
