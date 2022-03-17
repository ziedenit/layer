import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultation } from '../entitie/Consultation';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  url = 'http://localhost:8081/consultation/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }
  getListConsultationByType(type: string) {
    return this.http.get(this.url + 'getconsultation/' + type, { headers: this.headers });
  }

  getList() {
    return this.http.get(this.url + 'getconsultation', { headers: this.headers });
  }

  getListConsultation() {
    return this.http.get(this.url + 'getconsultation', { headers: this.headers });
  }

  addConsultation(consultation: Consultation): Observable<any> {
    return this.http.post(this.url + 'addconsultation', consultation, { headers: this.headers });
  }

  updateConsultation(consultation: Consultation): Observable<any> {
    return this.http.put(this.url + 'updateconsultation', consultation, { headers: this.headers });
  }

  getConsultationbyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidconsultation/' + id, { headers: this.headers });
  }

  deleteConsultation(id: number): Observable<any> {
    return this.http.delete(this.url + 'deleteconsultation/' + id, { headers: this.headers });
  }


}
