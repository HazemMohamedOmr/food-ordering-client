import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';
import { Order, OrderStatus } from '../../../core/models/order.model';
import { SharedModule } from '../../../shared/shared.module';

interface OrderWithUserItems {
  id: string;
  restaurantName: string;
  orderDate: string;
  closedAt: string | null;
  status: OrderStatus;
  managerName: string;
  deliveryFee: number;
  deliveryFeeShare: number;
  userItems: any[];
  userPaymentStatus: number;
  userTotal: number;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class OrderListComponent implements OnInit {
  activeOrders: OrderWithUserItems[] = [];
  orderHistory: OrderWithUserItems[] = [];
  isLoading = false;
  errorMessage = '';

  // For template use
  OrderStatus = OrderStatus;

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
      next: (orders: any) => {
        console.log('Active orders response:', orders);
        this.activeOrders = this.processOrdersResponse(orders);
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
      next: (orders: any) => {
        console.log('Order history response:', orders);
        this.orderHistory = this.processOrdersResponse(orders);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load order history';
      }
    });
  }

  processOrdersResponse(orders: any[]): OrderWithUserItems[] {
    if (!Array.isArray(orders)) {
      console.error('Expected orders array, got:', orders);
      return [];
    }
    
    return orders.map(order => {
      // Check if it's already in the expected format
      if (order.restaurantName !== undefined) {
        return order as OrderWithUserItems;
      }
      
      // Convert from old format
      return {
        id: order.id || '',
        restaurantName: order.restaurant?.name || 'Unknown Restaurant',
        orderDate: order.orderDate || new Date().toISOString(),
        closedAt: order.closedAt,
        status: order.status || OrderStatus.Open,
        managerName: order.manager?.name || 'Unknown Manager',
        deliveryFee: order.restaurant?.deliveryFee || 0,
        deliveryFeeShare: 0,
        userItems: order.orderItems || [],
        userPaymentStatus: 0,
        userTotal: this.calculateOrderTotal(order)
      };
    });
  }

  calculateOrderTotal(order: any): number {
    if (!order.orderItems || !Array.isArray(order.orderItems)) {
      return 0;
    }
    
    const itemsTotal = order.orderItems.reduce((total: number, item: any) => {
      return total + ((item.menuItem?.price || 0) * (item.quantity || 1));
    }, 0);
    
    return itemsTotal;
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

  formatDate(date: string | null | undefined): string {
    if (!date) return 'N/A';
    return new Date(date).toLocaleString();
  }
} 