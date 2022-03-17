import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeTribunal } from '../entitie/TypeTribunal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypetribunauxService {

  url = 'http://localhost:8081/typetribunal/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }


  getListTypeTribunaux() {
    return this.http.get(this.url + 'gettypetribunal', { headers: this.headers });
  }

  addtypeTribunaux(typetribunal: TypeTribunal): Observable<any> {
    return this.http.post(this.url + 'addtypetribunal', typetribunal, { headers: this.headers });
  }

  DeleteTypeTribunaux(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletetypetribunal/' + id, { headers: this.headers });
  }

  updateTypeTribunaux(typetribunal: TypeTribunal): Observable<any> {
    return this.http.put(this.url + 'updatetypetribunal', typetribunal, { headers: this.headers });
  }

}
