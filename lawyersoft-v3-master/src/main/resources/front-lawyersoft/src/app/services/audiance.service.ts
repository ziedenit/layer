import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Phase } from '../entitie/Phase';
import { Observable } from 'rxjs';
import { Audiance } from '../entitie/Audiance';

@Injectable({
  providedIn: 'root'
})
export class AudianceService {
  listAudiance: Audiance[];
  url = 'http://localhost:8081/audiance/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListAudiance() {
    return this.http.get(this.url + 'getaudiance', { headers: this.headers });
  }

  // tslint:disable-next-line: ban-types
  /*findAllByEtat(etat: String) {
    return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
  }
*/
  addAudiance(audiance: Audiance): Observable<any> {
    return this.http.post(this.url + 'addaudiance', audiance, { headers: this.headers });
  }

  updateAudiance(audiance: Audiance): Observable<any> {
    return this.http.put(this.url + 'updateaudiance', audiance, { headers: this.headers });
  }

  getAudiancebyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidaudiance/' + id, { headers: this.headers });
  }

  deleteAudiance(id: number): Observable<any> {
    return this.http.delete(this.url + 'deleteaudiance/' + id, { headers: this.headers });
  }

  findAllPhase(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidphase/' + id, { headers: this.headers });
  }

}
