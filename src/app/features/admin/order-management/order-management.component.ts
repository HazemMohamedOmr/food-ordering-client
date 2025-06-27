import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Order, OrderStatus, PaymentStatus } from '../../../core/models/order.model';
import { OrderItem } from '../../../core/models/order-item.model';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Restaurant } from '../../../core/models/restaurant.model';

interface OrderWithItems extends Omit<Order, 'restaurant'> {
  userItems?: {[userId: string]: {
    userName: string;
    items: OrderItem[];
    totalAmount: number;
    deliveryFee: number;
    isPaid: boolean;
  }};
  totalAmount?: number;
  deliveryFee?: number;
  restaurant?: Restaurant;
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
      next: (orders: any) => {
        // Process the new response format
        this.activeOrders = orders.map((order: any) => {
          // Convert to our OrderWithItems format
          return {
            ...order,
            id: order.id,
            restaurant: {
              id: '',
              name: order.restaurantName || 'N/A',
              description: '',
              address: '',
              phoneNumber: '',
              deliveryFee: order.deliveryFee || 0
            },
            restaurantId: '',
            managerId: '',
            status: order.status,
            orderDate: order.orderDate,
            closedAt: order.closedAt,
            deliveryFee: order.deliveryFee
          } as OrderWithItems;
        });
        
        console.log('Processed active orders:', this.activeOrders);
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
      next: (orders: any) => {
        // Process the new response format
        this.orderHistory = orders.map((order: any) => {
          // Convert to our OrderWithItems format
          return {
            ...order,
            id: order.id,
            restaurant: {
              id: '',
              name: order.restaurantName || 'N/A',
              description: '',
              address: '',
              phoneNumber: '',
              deliveryFee: order.deliveryFee || 0
            },
            restaurantId: '',
            managerId: '',
            status: order.status,
            orderDate: order.orderDate,
            closedAt: order.closedAt,
            deliveryFee: order.deliveryFee
          } as OrderWithItems;
        });
        
        console.log('Processed order history:', this.orderHistory);
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load order history';
      }
    });
  }
  
  showCloseOrderConfirmation(order: any): void {
    // If this is the new format with restaurantName, convert it to Order format
    if (order.restaurantName !== undefined) {
      this.orderToClose = {
        id: order.id,
        restaurantId: '',
        managerId: '',
        status: order.status,
        orderDate: order.orderDate,
        closedAt: order.closedAt,
        restaurant: {
          id: '',
          name: order.restaurantName,
          description: '',
          address: '',
          phoneNumber: '',
          deliveryFee: order.deliveryFee || 0
        }
      };
    } else {
      this.orderToClose = order;
    }
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
          this.viewOrderDetails(this.selectedOrder as unknown as Order);
        }
      },
      error: (error: any) => {
        this.isProcessingClose = false;
        this.errorMessage = error.message || 'Failed to close order';
      }
    });
  }
  
  viewOrderDetails(order: any): void {
    this.isLoadingDetails = true;
    this.errorMessage = '';
    
    // Handle the new format with restaurantName directly
    if (order.restaurantName !== undefined) {
      this.selectedOrder = {
        ...order,
        id: order.id,
        restaurantId: '',
        managerId: '',
        status: order.status,
        orderDate: order.orderDate,
        closedAt: order.closedAt,
        restaurant: {
          id: '',
          name: order.restaurantName,
          description: '',
          address: '',
          phoneNumber: '',
          deliveryFee: order.deliveryFee || 0
        },
        deliveryFee: order.deliveryFee
      } as OrderWithItems;
      
      // If the order already has userItems array, process it directly
      if (order.userItems && Array.isArray(order.userItems) && order.userItems.length > 0) {
        console.log('Processing embedded userItems from order', order.userItems);
        
        // Group items by user
        const userItems: {[userId: string]: {
          userName: string;
          items: OrderItem[];
          totalAmount: number;
          deliveryFee: number;
          isPaid: boolean;
        }} = {};
        
        let totalAmount = 0;
        const deliveryFee = order.deliveryFee || 0;
        
        // Process items from the embedded userItems
        order.userItems.forEach((item: any) => {
          const userId = item.userId;
          const userName = item.userName || 'Unknown User';
          const itemPrice = item.price || 0;
          const itemTotal = item.total || (itemPrice * item.quantity);
          
          totalAmount += itemTotal;
          
          if (!userItems[userId]) {
            userItems[userId] = {
              userName,
              items: [],
              totalAmount: 0,
              deliveryFee: 0, // Will calculate after counting users
              isPaid: false // We'll update this later if needed
            };
          }
          
          // Convert to our OrderItem format
          const orderItem: OrderItem = {
            id: item.id,
            orderId: order.id,
            userId: item.userId,
            menuItemId: item.menuItemId || '',
            quantity: item.quantity,
            note: item.note,
            menuItem: {
              id: item.menuItemId || '',
              name: item.menuItemName,
              description: '',
              price: item.price,
              restaurantId: ''
            },
            user: {
              id: item.userId,
              name: item.userName,
              email: ''
            }
          };
          
          userItems[userId].items.push(orderItem);
          userItems[userId].totalAmount += itemTotal;
        });
        
        // Calculate delivery fee per user - divide equally
        const userCount = Object.keys(userItems).length;
        if (userCount > 0 && deliveryFee > 0) {
          const deliveryFeePerUser = order.deliveryFeeShare || (deliveryFee / userCount);
          
          // Assign delivery fee to each user
          Object.keys(userItems).forEach(userId => {
            userItems[userId].deliveryFee = deliveryFeePerUser;
            // Add delivery fee to user total
            userItems[userId].totalAmount += deliveryFeePerUser;
          });
          
          // Add delivery fee to total amount
          totalAmount += deliveryFee;
        }
        
        this.selectedOrder.userItems = userItems;
        this.selectedOrder.totalAmount = totalAmount;
        this.selectedOrder.deliveryFee = deliveryFee;
        this.isLoadingDetails = false;
        return;
      }
    } else {
      this.selectedOrder = { ...order } as OrderWithItems;
    }
    
    this.orderService.getAllOrderItems(order.id).subscribe({
      next: (response: any) => {
        // Check if response is in the new format
        if (response.items && Array.isArray(response.items)) {
          console.log('Received new API response format', response);
          
          // Update restaurant name if available in the response
          if (response.restaurantName) {
            if (!this.selectedOrder!.restaurant) {
              this.selectedOrder!.restaurant = { 
                id: '', 
                name: response.restaurantName,
                description: '',
                address: '',
                phoneNumber: '',
                deliveryFee: response.deliveryFee || 0
              };
            } else {
              this.selectedOrder!.restaurant.name = response.restaurantName;
              this.selectedOrder!.restaurant.deliveryFee = response.deliveryFee || 0;
            }
          }
          
          // Group items by user
          const userItems: {[userId: string]: {
            userName: string;
            items: OrderItem[];
            totalAmount: number;
            deliveryFee: number;
            isPaid: boolean;
          }} = {};
          
          let totalAmount = 0;
          const deliveryFee = response.deliveryFee || 0;
          
          // Process items from the new format
          response.items.forEach((item: any) => {
            const userId = item.userId;
            const userName = item.userName || 'Unknown User';
            const itemPrice = item.price || 0;
            const itemTotal = item.itemTotal || (itemPrice * item.quantity);
            
            totalAmount += itemTotal;
            
            if (!userItems[userId]) {
              userItems[userId] = {
                userName,
                items: [],
                totalAmount: 0,
                deliveryFee: 0, // Will calculate after counting users
                isPaid: false // We'll update this later if needed
              };
            }
            
            // Convert to our OrderItem format
            const orderItem: OrderItem = {
              id: item.id,
              orderId: response.orderId || order.id,
              userId: item.userId,
              menuItemId: item.menuItemId,
              quantity: item.quantity,
              note: item.note,
              menuItem: {
                id: item.menuItemId,
                name: item.menuItemName,
                description: item.menuItemDescription,
                price: item.price,
                restaurantId: ''
              },
              user: {
                id: item.userId,
                name: item.userName,
                email: ''
              }
            };
            
            userItems[userId].items.push(orderItem);
            userItems[userId].totalAmount += itemTotal;
          });
          
          // Calculate delivery fee per user - divide equally
          const userCount = Object.keys(userItems).length;
          if (userCount > 0 && deliveryFee > 0) {
            const deliveryFeePerUser = deliveryFee / userCount;
            
            // Assign delivery fee to each user
            Object.keys(userItems).forEach(userId => {
              userItems[userId].deliveryFee = deliveryFeePerUser;
              // Add delivery fee to user total
              userItems[userId].totalAmount += deliveryFeePerUser;
            });
            
            // Add delivery fee to total amount
            totalAmount += deliveryFee;
          }
          
          // Check payment status for each user in closed orders
          if (order.status === OrderStatus.Closed && order.payments) {
            order.payments.forEach((payment: any) => {
              if (payment.userId && userItems[payment.userId]) {
                userItems[payment.userId].isPaid = payment.status === PaymentStatus.Paid;
              }
            });
          }
          
          this.selectedOrder!.userItems = userItems;
          this.selectedOrder!.totalAmount = totalAmount;
          this.selectedOrder!.deliveryFee = deliveryFee;
        } else {
          // Handle the old format (array of OrderItem)
          const items = response as OrderItem[];
          
          // Group items by user
          const userItems: {[userId: string]: {
            userName: string;
            items: OrderItem[];
            totalAmount: number;
            deliveryFee: number;
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
                deliveryFee: 0,
                isPaid: false // We'll update this later if needed
              };
            }
            
            userItems[userId].items.push(item);
            userItems[userId].totalAmount += itemTotal;
          });
          
          // Check payment status for each user in closed orders
          if (order.status === OrderStatus.Closed && order.payments) {
            order.payments.forEach((payment: any) => {
              if (payment.userId && userItems[payment.userId]) {
                userItems[payment.userId].isPaid = payment.status === PaymentStatus.Paid;
              }
            });
          }
          
          this.selectedOrder!.userItems = userItems;
          this.selectedOrder!.totalAmount = totalAmount;
        }
        
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