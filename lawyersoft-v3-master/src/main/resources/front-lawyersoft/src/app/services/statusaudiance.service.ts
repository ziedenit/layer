import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusAudiance } from '../entitie/StatusAudiance';

@Injectable({
  providedIn: 'root'
})
export class StatusAudianceService {
  listStatusAudiance: StatusAudiance[];
  url = 'http://localhost:8081/statusadiance/';
  protected headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
  }

  getListStatusAudiance() {
    return this.http.get(this.url + 'getstatus', { headers: this.headers });
  }


  addStatusAudiance(statusaudiance: StatusAudiance): Observable<any> {
    return this.http.post(this.url + 'addstatus', statusaudiance, { headers: this.headers });
  }

  updateStatusAudiance(statusaudiance: StatusAudiance): Observable<any> {
    return this.http.put(this.url + 'updatestatus', statusaudiance, { headers: this.headers });
  }

  getStatusAudiancebyid(id: number): Observable<any> {
    return this.http.get(this.url + 'findbyidstatus/' + id, { headers: this.headers });
  }

  deleteStatusAudiance(id: number): Observable<any> {
    return this.http.delete(this.url + 'deletestatus/' + id, { headers: this.headers });
  }


}
