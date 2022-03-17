import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tribunal } from '../entitie/Tribunal';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TribunalService {
  url = 'http://localhost:8081/tribunal/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListTribunaux() {
    return this.http.get(this.url + 'gettribunal', { headers: this.headers });
  }

  addTribunaux(tribunal: Tribunal): Observable<any> {
    return this.http.post(this.url + 'addtribunal', tribunal, { headers: this.headers });
  }

  updateTribunaux(tribunal: Tribunal): Observable<any> {
    return this.http.put(this.url + 'updatetribunal', tribunal, { headers: this.headers });
  }

  getTribunauxbyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidtribunal/' + id, { headers: this.headers });
  }

  deleteTribunaux(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletetribunal/' + id, { headers: this.headers });
  }

}
