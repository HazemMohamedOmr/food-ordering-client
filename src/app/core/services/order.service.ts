import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Order, OrderStatus } from '../models/order.model';
import { environment } from '../../../environments/environment';
import { OrderItem } from '../models/order-item.model';
import { PaymentStatus } from '../models/order.model';

interface StoredActiveOrder {
  orderId: string;
  restaurantId: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `${environment.apiUrl}/orders`;
  private activeOrdersCache: { [restaurantId: string]: StoredActiveOrder } = {};

  constructor(private http: HttpClient) {
    this.loadActiveOrdersFromStorage();
  }

  private loadActiveOrdersFromStorage(): void {
    try {
      const stored = localStorage.getItem('activeOrders');
      if (stored) {
        this.activeOrdersCache = JSON.parse(stored);
        
        // Clean up any orders that are older than 24 hours
        const now = Date.now();
        let hasChanges = false;
        
        Object.keys(this.activeOrdersCache).forEach(restaurantId => {
          if (now - this.activeOrdersCache[restaurantId].timestamp > 24 * 60 * 60 * 1000) {
            delete this.activeOrdersCache[restaurantId];
            hasChanges = true;
          }
        });
        
        if (hasChanges) {
          this.saveActiveOrdersToStorage();
        }
      }
    } catch (e) {
      console.error('Error loading active orders from storage', e);
      this.activeOrdersCache = {};
    }
  }

  private saveActiveOrdersToStorage(): void {
    try {
      localStorage.setItem('activeOrders', JSON.stringify(this.activeOrdersCache));
    } catch (e) {
      console.error('Error saving active orders to storage', e);
    }
  }

  storeActiveOrder(restaurantId: string, orderId: string): void {
    this.activeOrdersCache[restaurantId] = {
      orderId,
      restaurantId,
      timestamp: Date.now()
    };
    this.saveActiveOrdersToStorage();
  }

  removeActiveOrder(restaurantId: string): void {
    if (this.activeOrdersCache[restaurantId]) {
      delete this.activeOrdersCache[restaurantId];
      this.saveActiveOrdersToStorage();
    }
  }

  getCachedActiveOrder(restaurantId: string): StoredActiveOrder | null {
    return this.activeOrdersCache[restaurantId] || null;
  }

  startOrder(restaurantId: string, managerId: string): Observable<string> {
    return this.http.post<any>(`${this.apiUrl}/start`, {
      restaurantId,
      managerId
    }).pipe(
      map(response => {
        const orderId = response.id || response;
        this.storeActiveOrder(restaurantId, orderId);
        return orderId;
      })
    );
  }

  getById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  getActiveOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/active`);
  }

  getActiveOrderForRestaurant(restaurantId: string): Observable<Order | null> {
    console.log(`Fetching active orders to check for restaurant ${restaurantId}`);
    
    // First check the cache
    const cachedOrder = this.getCachedActiveOrder(restaurantId);
    if (cachedOrder) {
      console.log('Found cached active order:', cachedOrder);
    }
    
    // Get all active orders and filter for this restaurant
    return this.http.get<any>(`${this.apiUrl}/active`).pipe(
      map(response => {
        console.log('All active orders response:', response);
        
        // Handle null or empty response
        if (!response) {
          this.removeActiveOrder(restaurantId);
          return null;
        }
        
        // Handle different response formats
        let orders: any[] = [];
        
        if (Array.isArray(response)) {
          // Direct array response
          orders = response;
        } else if (response.data && Array.isArray(response.data)) {
          // Wrapped array response
          orders = response.data;
        } else {
          console.error('Unexpected response format:', response);
          this.removeActiveOrder(restaurantId);
          return null;
        }
        
        console.log('Processing orders:', orders);
        
        // Find an order for this restaurant
        const matchingOrder = orders.find(order => {
          const orderRestaurantId = order.restaurantId || 
                                   (order.restaurant ? order.restaurant.id : null);
          
          console.log('Comparing order restaurant ID:', orderRestaurantId, 'with', restaurantId);
          return orderRestaurantId === restaurantId;
        });
        
        if (matchingOrder && matchingOrder.id) {
          console.log('Found matching order:', matchingOrder);
          // Store in cache
          this.storeActiveOrder(restaurantId, matchingOrder.id);
          return matchingOrder;
        } else {
          // No matching order found
          this.removeActiveOrder(restaurantId);
          return null;
        }
      })
    );
  }

  hasActiveOrderForRestaurant(restaurantId: string): Observable<boolean> {
    // First check the cache
    const cachedOrder = this.getCachedActiveOrder(restaurantId);
    if (cachedOrder) {
      return of(true);
    }
    
    // If not in cache, check the API
    return this.getActiveOrderForRestaurant(restaurantId).pipe(
      map(order => !!order && order.status === OrderStatus.Open)
    );
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
    return this.http.post<any>(`${this.apiUrl}/${orderId}/close`, {}).pipe(
      map(response => {
        // Find and remove this order from the cache
        Object.keys(this.activeOrdersCache).forEach(restaurantId => {
          if (this.activeOrdersCache[restaurantId].orderId === orderId) {
            this.removeActiveOrder(restaurantId);
          }
        });
        return response;
      })
    );
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

  getAllOrderItems(orderId: string): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(`${this.apiUrl}/${orderId}/items`);
  }

  addOrderItem(orderItem: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(`${this.apiUrl}/items`, orderItem);
  }

  updateOrderItem(id: string, orderItem: { quantity: number, note?: string }): Observable<OrderItem> {
    return this.http.put<OrderItem>(`${this.apiUrl}/items/${id}`, {
      orderItemId: id,
      quantity: orderItem.quantity,
      note: orderItem.note || ''
    });
  }

  deleteOrderItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`);
  }

  canModifyOrderItem(orderItem: OrderItem, orderId: string): Observable<boolean> {
    return this.getById(orderId).pipe(
      map(order => order.status === OrderStatus.Open)
    );
  }
} 