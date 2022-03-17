import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Phase } from '../entitie/Phase';
import { Observable } from 'rxjs';
import { Rendezvous } from '../entitie/rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  listRendezvous: Rendezvous[];

  url = 'http://localhost:8081/rendezvous/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }
  getListRendezvous() {
    return this.http.get(this.url + 'getrdv', { headers: this.headers });
  }

  // tslint:disable-next-line: ban-types
  /*findAllByEtat(etat: String) {
    return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
  }
*/
  addRendezvous(rendezvous: Rendezvous): Observable<any> {
    return this.http.post(this.url + 'addrdv', rendezvous, { headers: this.headers });
  }

  updateRendezvous(rendezvous: Rendezvous): Observable<any> {
    return this.http.put(this.url + 'updaterdv', rendezvous, { headers: this.headers });
  }

  getRendezvousbyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidrdv/' + id, { headers: this.headers });
  }

  deleteRendezvous(id: number): Observable<any> {
    return this.http.delete(this.url + 'deleterdv/' + id, { headers: this.headers });
  }

  findAllPhase(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidphase/' + id, { headers: this.headers });
  }

}
