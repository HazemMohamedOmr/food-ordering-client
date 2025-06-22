import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService, CartItem } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';
import { RestaurantService } from '../../core/services/restaurant.service';
import { Restaurant } from '../../core/models/restaurant.model';
import { Order } from '../../core/models/order.model';
import { forkJoin, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  restaurant: Restaurant | null = null;
  isLoading = false;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    public authService: AuthService,
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      this.cartItems = items;
    });

    this.loadRestaurantDetails();
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

    const orderItems = this.cartService.toOrderItems();
    
    try {
      // Since createOrder doesn't exist, we'll use startOrder and then add items
      const orderId = await lastValueFrom(this.orderService.startOrder(restaurantId, this.authService.currentUser?.id || ''));
      
      // Add each order item
      const observables = orderItems.map(item => {
        item.orderId = orderId;
        return this.orderService.addOrderItem(item);
      });
      
      await lastValueFrom(forkJoin(observables));
      
      this.isSubmitting = false;
      this.cartService.clearCart();
      this.router.navigate(['/orders', orderId]);
    } catch (error: any) {
      console.error('Error creating order', error);
      this.errorMessage = 'Failed to create order. Please try again.';
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