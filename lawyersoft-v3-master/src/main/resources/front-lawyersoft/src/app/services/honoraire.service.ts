import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Honnoraire } from '../entitie/Honnoraire';
import { Observable } from 'rxjs';
import { Affaire } from '../entitie/Affaire';

@Injectable({
  providedIn: 'root'
})
export class HonoraireService {
  listHonnorairedepense: Honnoraire[];
  listHonnoraireversement: Honnoraire[];
  url = 'http://localhost:8081/honoraire/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListHonoraire() {
    return this.http.get(this.url + 'gethonoraire', { headers: this.headers });
  }

  // tslint:disable-next-line: ban-types
  /* findAllByEtat(etat: String) {
     return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
   }
 */
  addHonoraire(honnoraire: Honnoraire): Observable<any> {
    return this.http.post(this.url + 'addhonoraire', honnoraire, { headers: this.headers });
  }

  updateHonoraire(honnoraire: Honnoraire): Observable<any> {
    return this.http.put(this.url + 'updatehonoraire', honnoraire, { headers: this.headers });
  }

  getHonorairebyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidhonoraire/' + id, { headers: this.headers });
  }

  deleteHonoraire(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletehonoraire/' + id, { headers: this.headers });
  }

  findAllAffaire(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidaffaire/' + id, { headers: this.headers });
  }

  findByAffaireType(idaffaire: number, type: string): Observable<any> {
    return this.http.get(this.url + 'findbyaffairetype/' + idaffaire + '/' + type, { headers: this.headers });
  }

  findByType(): Observable<any> {
    return this.http.get(this.url + 'findbytype', { headers: this.headers });
  }

  findByaffairetypenull(idaffaire: string): Observable<any> {
    return this.http.get(this.url + 'findbyaffairetypenull/' + idaffaire, { headers: this.headers });
  }

  generateReport(idhonnoraire) {
    return this.http.post(this.url + 'rapporthonoraire/' + idhonnoraire,
      {
        responseType: 'arraybuffer',
        headers: {
          Authorization: window.localStorage.getItem('token')
        }
      });

  }


}
