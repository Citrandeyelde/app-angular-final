import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getAreas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/area`);
  }

  addArea(area: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/area`, area);
  }

  updateArea(id: number, area: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/area/${id}`, area);
  }

  deleteArea(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/area/${id}`);
  }
}
