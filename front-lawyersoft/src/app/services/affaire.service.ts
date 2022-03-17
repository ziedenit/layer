import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Affaire } from '../entitie/Affaire';
import { AffaireDto } from '../dto/AffaireDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {
  url = 'http://localhost:8081/affaire/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListAffaire() {
    return this.http.get(this.url + 'getaffaire', { headers: this.headers });
  }

  // tslint:disable-next-line: ban-types
  findAllByEtat(etat: String) {
    return this.http.get(this.url + 'getaffairebyettat/' + etat, { headers: this.headers });
  }

  addAffaire(affairedto: AffaireDto): Observable<any> {
    return this.http.post(this.url + 'addaffaire', affairedto, { headers: this.headers });
  }

  updateAffaire(affaire: Affaire): Observable<any> {
    return this.http.put(this.url + 'updateaffaire', affaire, { headers: this.headers });
  }

  getAffairebyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidaffaire/' + id, { headers: this.headers });
  }

  deleteAffaire(id: number): Observable<any> {
    return this.http.delete(this.url + 'deleteaffaire/' + id, { headers: this.headers });
  }

}
