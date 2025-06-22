import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from '../../../environments/environment';
import { OrderItem } from '../models/order-item.model';
import { PaymentStatus } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) { }

  startOrder(restaurantId: string, managerId: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/start`, {
      restaurantId,
      managerId
    });
  }

  getById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  getActiveOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/active`);
  }

  getOrderHistory(userId?: string, restaurantId?: string): Observable<Order[]> {
    let url = `${this.apiUrl}/history`;
    
    if (userId || restaurantId) {
      url += '?';
      if (userId) {
        url += `userId=${userId}`;
      }
      if (restaurantId) {
        url += userId ? `&restaurantId=${restaurantId}` : `restaurantId=${restaurantId}`;
      }
    }
    
    return this.http.get<Order[]>(url);
  }

  getMyOrderHistory(restaurantId?: string): Observable<Order[]> {
    let url = `${this.apiUrl}/my-history`;
    if (restaurantId) {
      url += `?restaurantId=${restaurantId}`;
    }
    return this.http.get<Order[]>(url);
  }

  getOrderReceipt(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${orderId}/receipt`);
  }

  closeOrder(orderId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${orderId}/close`, {});
  }

  updatePaymentStatus(orderId: string, userId: string, status: PaymentStatus): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/${orderId}/users/${userId}/payment-status`,
      { status }
    );
  }

  // Order Item Methods
  getMyOrderItems(orderId: string): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(`${this.apiUrl}/${orderId}/my-items`);
  }

  addOrderItem(orderItem: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(`${this.apiUrl}/items`, orderItem);
  }

  updateOrderItem(id: string, orderItem: OrderItem): Observable<OrderItem> {
    return this.http.put<OrderItem>(`${this.apiUrl}/items/${id}`, orderItem);
  }

  deleteOrderItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`);
  }
} 