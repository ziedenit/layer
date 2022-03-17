import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Profil } from './../entitie/profil';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  url = 'http://localhost:8081/profil/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });

  }

  getListProfil() {
    return this.http.get(this.url + 'getprofil', { headers: this.headers });
  }

  addProfil(profil: Profil) {
    return this.http.post(this.url + 'addprofil', profil, { headers: this.headers });
  }

  DeleteProfil(id: number) {
    return this.http.delete(this.url + 'deleteprofil/' + id, { headers: this.headers });
  }

  updateProfil(profil: Profil) {
    return this.http.put(this.url + 'updateprofil', profil, { headers: this.headers });
  }
  getProfilById(id: any) {
    return this.http.get(this.url + 'findbyidprofil/' + id, { headers: this.headers });
  }
}
