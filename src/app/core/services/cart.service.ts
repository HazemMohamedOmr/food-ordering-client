import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, catchError, map, tap } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';
import { OrderItem } from '../models/order-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  note?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  private restaurantIdSubject = new BehaviorSubject<string | null>(null);
  private activeOrderIdSubject = new BehaviorSubject<string | null>(null);
  private apiUrl = `${environment.apiUrl}/orders`;
  
  constructor(private http: HttpClient) { 
    // Load cart from localStorage if available
    this.loadCart();
  }

  get items$(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  get restaurantId$(): Observable<string | null> {
    return this.restaurantIdSubject.asObservable();
  }

  get activeOrderId$(): Observable<string | null> {
    return this.activeOrderIdSubject.asObservable();
  }

  get currentRestaurantId(): string | null {
    return this.restaurantIdSubject.value;
  }

  get currentActiveOrderId(): string | null {
    return this.activeOrderIdSubject.value;
  }

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => 
      total + (item.menuItem.price * item.quantity), 0);
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    const savedRestaurantId = localStorage.getItem('restaurantId');
    const savedActiveOrderId = localStorage.getItem('activeOrderId');
    
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next([...this.cartItems]);
    }
    
    if (savedRestaurantId) {
      this.restaurantIdSubject.next(savedRestaurantId);
    }
    
    if (savedActiveOrderId) {
      this.activeOrderIdSubject.next(savedActiveOrderId);
    }
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    if (this.currentRestaurantId) {
      localStorage.setItem('restaurantId', this.currentRestaurantId);
    }
    if (this.currentActiveOrderId) {
      localStorage.setItem('activeOrderId', this.currentActiveOrderId);
    }
    this.cartSubject.next([...this.cartItems]);
  }

  checkActiveOrder(restaurantId: string): Observable<boolean> {
    return this.http.get<any>(`${this.apiUrl}/active/restaurant/${restaurantId}`).pipe(
      map(response => {
        if (response && response.id) {
          this.activeOrderIdSubject.next(response.id);
          localStorage.setItem('activeOrderId', response.id);
          return true;
        }
        return false;
      }),
      catchError(() => {
        this.activeOrderIdSubject.next(null);
        localStorage.removeItem('activeOrderId');
        return of(false);
      })
    );
  }

  setRestaurant(restaurantId: string): Observable<boolean> {
    // First check if there's an active order for this restaurant
    return this.checkActiveOrder(restaurantId).pipe(
      tap(hasActiveOrder => {
        if (hasActiveOrder) {
          if (this.currentRestaurantId !== null && this.currentRestaurantId !== restaurantId && this.cartItems.length > 0) {
            if (confirm('Adding items from a different restaurant will clear your current cart. Continue?')) {
              this.clearCart();
            } else {
              return;
            }
          }
          this.restaurantIdSubject.next(restaurantId);
          localStorage.setItem('restaurantId', restaurantId);
        }
      })
    );
  }

  addToCart(menuItem: MenuItem, quantity: number = 1, note?: string): boolean {
    // Check if there's an active order for this restaurant
    if (!this.currentActiveOrderId) {
      alert('There is no active order for this restaurant. Please wait for the manager to start an order.');
      return false;
    }
    
    const existingItemIndex = this.cartItems.findIndex(item => item.menuItem.id === menuItem.id);
    
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += quantity;
      if (note) {
        this.cartItems[existingItemIndex].note = note;
      }
    } else {
      this.cartItems.push({ menuItem, quantity, note });
    }
    
    this.saveCart();
    return true;
  }

  updateQuantity(menuItemId: string, quantity: number): void {
    const index = this.cartItems.findIndex(item => item.menuItem.id === menuItemId);
    
    if (index !== -1) {
      if (quantity <= 0) {
        this.removeItem(menuItemId);
      } else {
        this.cartItems[index].quantity = quantity;
        this.saveCart();
      }
    }
  }

  updateNote(menuItemId: string, note: string): void {
    const index = this.cartItems.findIndex(item => item.menuItem.id === menuItemId);
    
    if (index !== -1) {
      this.cartItems[index].note = note;
      this.saveCart();
    }
  }

  removeItem(menuItemId: string): void {
    this.cartItems = this.cartItems.filter(item => item.menuItem.id !== menuItemId);
    this.saveCart();
  }

  clearCart(): void {
    this.cartItems = [];
    this.restaurantIdSubject.next(null);
    this.activeOrderIdSubject.next(null);
    localStorage.removeItem('cart');
    localStorage.removeItem('restaurantId');
    localStorage.removeItem('activeOrderId');
    this.cartSubject.next([]);
  }

  toOrderItems(orderId: string): OrderItem[] {
    return this.cartItems.map(item => ({
      menuItemId: item.menuItem.id || '',
      quantity: item.quantity,
      note: item.note || '',
      menuItem: item.menuItem,
      id: '',
      orderId: orderId,
      userId: ''
    }));
  }
} 