import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService, CartItem } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';
import { RestaurantService } from '../../core/services/restaurant.service';
import { Restaurant } from '../../core/models/restaurant.model';
import { Order } from '../../core/models/order.model';
import { forkJoin, lastValueFrom, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  restaurant: Restaurant | null = null;
  isLoading = false;
  isSubmitting = false;
  errorMessage = '';
  activeOrderId: string | null = null;
  
  private destroy$ = new Subject<void>();

  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    public authService: AuthService,
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.items$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      this.cartItems = items;
    });
    
    this.cartService.activeOrderId$.pipe(takeUntil(this.destroy$)).subscribe(id => {
      this.activeOrderId = id;
    });

    this.loadRestaurantDetails();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadRestaurantDetails(): void {
    const restaurantId = this.cartService.currentRestaurantId;
    if (restaurantId) {
      this.isLoading = true;
      this.restaurantService.getById(restaurantId).subscribe({
        next: (restaurant: Restaurant) => {
          this.restaurant = restaurant;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Error loading restaurant details', error);
          this.errorMessage = 'Could not load restaurant details';
          this.isLoading = false;
        }
      });
    }
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (item.menuItem.id) {
      this.cartService.updateQuantity(item.menuItem.id, quantity);
    }
  }

  updateNote(item: CartItem, note: string): void {
    if (item.menuItem.id) {
      this.cartService.updateNote(item.menuItem.id, note);
    }
  }

  removeItem(item: CartItem): void {
    if (item.menuItem.id && confirm('Are you sure you want to remove this item?')) {
      this.cartService.removeItem(item.menuItem.id);
    }
  }

  clearCart(): void {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
    }
  }

  async checkout(): Promise<void> {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: '/cart' } });
      return;
    }

    if (this.cartItems.length === 0) {
      this.errorMessage = 'Your cart is empty';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const restaurantId = this.cartService.currentRestaurantId;
    if (!restaurantId) {
      this.errorMessage = 'Restaurant information is missing';
      this.isSubmitting = false;
      return;
    }
    
    if (!this.activeOrderId) {
      this.errorMessage = 'No active order found for this restaurant';
      this.isSubmitting = false;
      return;
    }

    try {
      // Use the active order ID to add items
      const orderItems = this.cartService.toOrderItems(this.activeOrderId);
      
      // Add each order item to the existing active order
      const observables = orderItems.map(item => {
        return this.orderService.addOrderItem(item);
      });
      
      await lastValueFrom(forkJoin(observables));
      
      this.isSubmitting = false;
      this.cartService.clearCart();
      this.router.navigate(['/orders', this.activeOrderId]);
    } catch (error: any) {
      console.error('Error adding items to order', error);
      this.errorMessage = 'Failed to add items to order. Please try again.';
      this.isSubmitting = false;
    }
  }

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => 
      total + (item.menuItem.price * item.quantity), 0);
  }

  get deliveryFee(): number {
    return this.restaurant?.deliveryFee || 0;
  }

  get total(): number {
    return this.subtotal + this.deliveryFee;
  }
} 