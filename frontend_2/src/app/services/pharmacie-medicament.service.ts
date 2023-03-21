import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PharmacieMedicament } from '../models/pharmacie-medicament.model';

const baseUrl = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class PharmacieMedicamentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PharmacieMedicament[]> {
    return this.http.get<PharmacieMedicament[]>(baseUrl);
  }

  get(pharmacie_id: any): Observable<PharmacieMedicament> {
    return this.http.get<PharmacieMedicament>(baseUrl + `${pharmacie_id}`);
  }
  map(nom_commercial: any): Observable<PharmacieMedicament[]> {
    return this.http.get<PharmacieMedicament[]>(baseUrl +`map/${nom_commercial}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(nom_commercial: any): Observable<PharmacieMedicament[]> {
    return this.http.get<PharmacieMedicament[]>(baseUrl +`search/${nom_commercial}`);
  }
  find(nom_commercial: any): Observable<PharmacieMedicament[]> {
    return this.http.get<PharmacieMedicament[]>(baseUrl +`details/${nom_commercial}`);
  }


  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
    });
  }
}
