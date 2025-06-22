import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';
import { Order, OrderStatus } from '../../../core/models/order.model';
import { OrderItem } from '../../../core/models/order-item.model';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class OrderDetailComponent implements OnInit {
  orderId: string;
  order: Order | null = null;
  myOrderItems: OrderItem[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    public authService: AuthService
  ) {
    this.orderId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login']);
      return;
    }

    if (!this.orderId) {
      this.router.navigate(['/orders']);
      return;
    }

    this.loadOrderDetails();
  }

  loadOrderDetails(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.orderService.getById(this.orderId).subscribe({
      next: (order) => {
        this.order = order;
        this.loadMyOrderItems();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load order details';
      }
    });
  }

  loadMyOrderItems(): void {
    this.orderService.getMyOrderItems(this.orderId).subscribe({
      next: (items) => {
        this.myOrderItems = items;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load your order items';
      }
    });
  }

  closeOrder(): void {
    if (this.order && (this.authService.isAdmin || this.authService.isManager)) {
      this.isLoading = true;
      this.errorMessage = '';

      this.orderService.closeOrder(this.orderId).subscribe({
        next: () => {
          // Reload order details after closing
          this.loadOrderDetails();
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.message || 'Failed to close the order';
        }
      });
    }
  }

  isOrderOpen(): boolean {
    return this.order?.status === OrderStatus.Open;
  }

  calculateSubtotal(): number {
    return this.myOrderItems.reduce((total, item) => {
      return total + (item.quantity * (item.menuItem?.price || 0));
    }, 0);
  }

  calculateTotal(): number {
    const subtotal = this.calculateSubtotal();
    const deliveryFee = this.order?.restaurant?.deliveryFee || 0;
    return subtotal + deliveryFee;
  }
} 