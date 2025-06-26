import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserRole } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // User Management
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/admin/users`);
  }

  updateUserRole(userId: string, role: UserRole): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/users/${userId}/role`, { role });
  }

  // Restaurant Management methods are already in RestaurantService

  // Order Management
  closeOrder(orderId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders/${orderId}/close`, {});
  }

  updatePaymentStatus(orderId: string, userId: string, status: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/orders/${orderId}/users/${userId}/payment-status`, { status });
  }

  getActiveOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orders/active`);
  }

  getOrderHistory(userId?: string, restaurantId?: string, includeOtherParticipants: boolean = false): Observable<any[]> {
    let url = `${this.apiUrl}/orders/history?`;
    
    if (userId) {
      url += `userId=${userId}&`;
    }
    
    if (restaurantId) {
      url += `restaurantId=${restaurantId}&`;
    }
    
    url += `includeOtherParticipants=${includeOtherParticipants}`;
    
    return this.http.get<any[]>(url);
  }
} 