import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeAffaire } from '../entitie/TypeAffaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeaffaireService {

  url = 'http://localhost:8081/typeaffaire/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }


  getListTypeAffaire() {
    return this.http.get(this.url + 'gettypeaffaire', { headers: this.headers });
  }

  DeleteTypeAffaire(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletetypeaffaire/' + id, { headers: this.headers });
  }

  updateTypeAffaire(typeaffaire: TypeAffaire): Observable<any> {
    return this.http.put(this.url + 'updatetypeaffaire', typeaffaire, { headers: this.headers });
  }


  public addTypeAffaire(typeaffaire: TypeAffaire): Observable<any> {
    return this.http.post(this.url + 'addtypeaffaire', typeaffaire, { headers: this.headers });
  }

}
