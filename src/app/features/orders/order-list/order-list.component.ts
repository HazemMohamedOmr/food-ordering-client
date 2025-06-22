import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';
import { Order, OrderStatus } from '../../../core/models/order.model';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class OrderListComponent implements OnInit {
  activeOrders: Order[] = [];
  orderHistory: Order[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private orderService: OrderService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login']);
      return;
    }

    this.loadOrders();
  }

  loadOrders(): void {
    this.isLoading = true;
    this.errorMessage = '';

    // Load active orders
    this.orderService.getActiveOrders().subscribe({
      next: (orders) => {
        this.activeOrders = orders;
        this.loadOrderHistory();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load active orders';
      }
    });
  }

  loadOrderHistory(): void {
    this.orderService.getMyOrderHistory().subscribe({
      next: (orders) => {
        this.orderHistory = orders;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load order history';
      }
    });
  }

  viewOrder(orderId: string): void {
    this.router.navigate(['/orders', orderId]);
  }

  getOrderStatusBadgeClass(status: OrderStatus): string {
    switch(status) {
      case OrderStatus.Open: return 'bg-success';
      case OrderStatus.Closed: return 'bg-secondary';
      default: return 'bg-primary';
    }
  }

  getOrderStatusText(status: OrderStatus): string {
    switch(status) {
      case OrderStatus.Open: return 'Open';
      case OrderStatus.Closed: return 'Closed';
      default: return 'Unknown';
    }
  }
} 