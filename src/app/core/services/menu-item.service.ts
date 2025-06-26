import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private apiUrl = `${environment.apiUrl}/menuitems`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }

  getByRestaurant(restaurantId: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.apiUrl}/restaurant/${restaurantId}`).pipe(
      shareReplay(1)
    );
  }

  getById(id: string): Observable<MenuItem> {
    return this.http.get<MenuItem>(`${this.apiUrl}/${id}`);
  }

  create(menuItem: MenuItem): Observable<string> {
    return this.http.post<any>(this.apiUrl, menuItem).pipe(
      map(response => response.data)
    );
  }

  update(id: string, menuItem: MenuItem): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, menuItem);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
} 