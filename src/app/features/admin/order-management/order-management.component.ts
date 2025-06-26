import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Order, OrderStatus, PaymentStatus } from '../../../core/models/order.model';
import { OrderItem } from '../../../core/models/order-item.model';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

interface OrderWithItems extends Order {
  userItems?: {[userId: string]: {
    userName: string;
    items: OrderItem[];
    totalAmount: number;
    isPaid: boolean;
  }};
  totalAmount?: number;
}

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {
  activeOrders: OrderWithItems[] = [];
  orderHistory: OrderWithItems[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  
  // Selected order details
  selectedOrder: OrderWithItems | null = null;
  isLoadingDetails = false;
  
  // Order closure confirmation
  orderToClose: Order | null = null;
  isProcessingClose = false;
  
  // Payment status update
  processingPayment = false;
  
  // Enum references for the template
  OrderStatus = OrderStatus;
  PaymentStatus = PaymentStatus;
  
  // For template use
  Object = Object;
  
  constructor(
    private orderService: OrderService,
    public authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    // Only allow access to admin users
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(['/']);
      return;
    }
    
    this.loadActiveOrders();
    this.loadOrderHistory();
  }
  
  loadActiveOrders(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.orderService.getActiveOrders().subscribe({
      next: (orders) => {
        this.activeOrders = orders;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load active orders';
      }
    });
  }
  
  loadOrderHistory(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.orderService.getOrderHistory().subscribe({
      next: (orders) => {
        this.orderHistory = orders;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load order history';
      }
    });
  }
  
  showCloseOrderConfirmation(order: Order): void {
    this.orderToClose = order;
  }
  
  cancelCloseOrder(): void {
    this.orderToClose = null;
  }
  
  confirmCloseOrder(): void {
    if (!this.orderToClose) return;
    
    this.isProcessingClose = true;
    this.errorMessage = '';
    
    const orderToCloseId = this.orderToClose.id;
    this.orderService.closeOrder(this.orderToClose.id!).subscribe({
      next: () => {
        this.successMessage = 'Order closed successfully';
        this.isProcessingClose = false;
        
        // Store the ID before clearing the orderToClose
        const closedOrderId = this.orderToClose?.id;
        this.orderToClose = null;
        
        // Refresh the order lists
        this.loadActiveOrders();
        this.loadOrderHistory();
        
        // If this was the selected order, refresh its details
        if (this.selectedOrder && this.selectedOrder.id === closedOrderId) {
          this.viewOrderDetails(this.selectedOrder);
        }
      },
      error: (error: any) => {
        this.isProcessingClose = false;
        this.errorMessage = error.message || 'Failed to close order';
      }
    });
  }
  
  viewOrderDetails(order: Order): void {
    this.isLoadingDetails = true;
    this.errorMessage = '';
    this.selectedOrder = { ...order } as OrderWithItems;
    
    this.orderService.getAllOrderItems(order.id!).subscribe({
      next: (items) => {
        // Group items by user
        const userItems: {[userId: string]: {
          userName: string;
          items: OrderItem[];
          totalAmount: number;
          isPaid: boolean;
        }} = {};
        
        let totalAmount = 0;
        
        items.forEach(item => {
          const userId = item.userId;
          const userName = item.user?.name || 'Unknown User';
          const itemPrice = item.menuItem?.price || 0;
          const itemTotal = itemPrice * item.quantity;
          
          totalAmount += itemTotal;
          
          if (!userItems[userId]) {
            userItems[userId] = {
              userName,
              items: [],
              totalAmount: 0,
              isPaid: false // We'll update this later if needed
            };
          }
          
          userItems[userId].items.push(item);
          userItems[userId].totalAmount += itemTotal;
        });
        
        // Check payment status for each user in closed orders
        if (order.status === OrderStatus.Closed && order.payments) {
          order.payments.forEach(payment => {
            if (payment.userId && userItems[payment.userId]) {
              userItems[payment.userId].isPaid = payment.status === PaymentStatus.Paid;
            }
          });
        }
        
        this.selectedOrder!.userItems = userItems;
        this.selectedOrder!.totalAmount = totalAmount;
        this.isLoadingDetails = false;
      },
      error: (error: any) => {
        this.isLoadingDetails = false;
        this.errorMessage = error.message || 'Failed to load order details';
      }
    });
  }
  
  updatePaymentStatus(orderId: string, userId: string, status: PaymentStatus): void {
    this.processingPayment = true;
    this.errorMessage = '';
    
    this.orderService.updatePaymentStatus(orderId, userId, status).subscribe({
      next: () => {
        this.successMessage = 'Payment status updated successfully';
        this.processingPayment = false;
        
        // Update the local state
        if (this.selectedOrder && this.selectedOrder.userItems && userId in this.selectedOrder.userItems) {
          this.selectedOrder.userItems[userId].isPaid = status === PaymentStatus.Paid;
        }
      },
      error: (error: any) => {
        this.processingPayment = false;
        this.errorMessage = error.message || 'Failed to update payment status';
      }
    });
  }
  
  clearSelectedOrder(): void {
    this.selectedOrder = null;
  }
  
  getOrderStatusName(status: OrderStatus): string {
    switch(status) {
      case OrderStatus.Open: return 'Open';
      case OrderStatus.Closed: return 'Closed';
      default: return 'Unknown';
    }
  }
  
  getOrderStatusClass(status: OrderStatus): string {
    switch(status) {
      case OrderStatus.Open: return 'bg-success';
      case OrderStatus.Closed: return 'bg-secondary';
      default: return 'bg-secondary';
    }
  }
  
  formatDate(date: Date | string | undefined): string {
    if (!date) return 'N/A';
    return new Date(date).toLocaleString();
  }
} 