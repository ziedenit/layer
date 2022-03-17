import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeIntervenant } from '../entitie/TypeIntervenant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeintervenantService {

  url = 'http://localhost:8081/typeintervenant/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }


  getListTypeIntervenant() {
    return this.http.get(this.url + 'gettypeinterv', { headers: this.headers });
  }

  DeleteTypeIntervenant(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletetypeinterv/' + id, { headers: this.headers });
  }

  updateTypeIntervenant(typeintervenant: TypeIntervenant): Observable<any> {
    return this.http.put(this.url + 'updatetypeinterv', typeintervenant, { headers: this.headers });
  }


  addTypeIntervenant(typeintervenant: TypeIntervenant): Observable<any> {
    return this.http.post(this.url + 'addtypeinterv', typeintervenant, { headers: this.headers });
  }

}
