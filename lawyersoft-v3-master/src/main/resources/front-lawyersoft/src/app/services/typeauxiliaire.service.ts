import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeAuxiliaire } from '../entitie/TypeAuxiliaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeauxiliaireService {

  url = 'http://localhost:8081/typeauxiliaire/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }


  getListTypeAuxiliaire() {
    return this.http.get(this.url + 'gettypeaux', { headers: this.headers });
  }

  DeleteTypeAuxiliaire(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletetypeaux/' + id, { headers: this.headers });
  }

  updateTypeAuxiliaire(typeauxiliaire: TypeAuxiliaire): Observable<any> {
    return this.http.put(this.url + 'updatetypeaux', typeauxiliaire, { headers: this.headers });
  }

  addTypeAuxiliaire(typeauxiliaire: TypeAuxiliaire): Observable<any> {
    return this.http.post(this.url + 'addtypeaux', typeauxiliaire, { headers: this.headers });
  }

}
