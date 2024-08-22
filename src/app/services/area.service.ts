import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../models/area.model'; // Asegúrate de tener un modelo definido

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private apiUrl = 'http://localhost:8081/api'; // URL de la API

  constructor(private http: HttpClient) { }

  listarAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.apiUrl);
  }

  guardarArea(area: Area): Observable<Area> {
    return this.http.post<Area>(`${this.apiUrl}/guardar`, area);
  }

  obtenerArea(id: number): Observable<Area> {
    return this.http.get<Area>(`${this.apiUrl}/${id}`);
  }

  editarArea(id: number, area: Area): Observable<Area> {
    return this.http.put<Area>(`${this.apiUrl}/editar/${id}`, area);
  }

  eliminarArea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
}
