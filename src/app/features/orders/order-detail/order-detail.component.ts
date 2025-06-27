import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';
import { Order, OrderStatus } from '../../../core/models/order.model';
import { OrderItem } from '../../../core/models/order-item.model';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface OrderDetailResponse {
  id?: string;
  orderId?: string;
  restaurantName: string;
  orderDate?: string;
  closedAt?: string | null;
  status?: OrderStatus;
  orderStatus?: OrderStatus;
  managerName?: string;
  managerEmail?: string;
  deliveryFee?: number;
  deliveryFeeShare?: number;
  userItems?: UserOrderItem[];
  items?: UserOrderItem[];
  userPaymentStatus?: number;
  userTotal?: number;
  subtotal?: number;
  total?: number;
}

interface UserOrderItem {
  id: string;
  menuItemId?: string;
  menuItemName: string;
  menuItemDescription?: string;
  price: number;
  quantity: number;
  note?: string;
  total?: number;
  itemTotal?: number;
  userId?: string;
  userName?: string;
  canBeDeleted?: boolean;
}

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  standalone: true,
  imports: [SharedModule, FormsModule, CommonModule]
})
export class OrderDetailComponent implements OnInit {
  orderId: string;
  order: OrderDetailResponse | null = null;
  myOrderItems: UserOrderItem[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  
  // Edit mode for items
  editingItem: UserOrderItem | null = null;
  editQuantity: number = 1;
  editNote: string = '';

  // For template use
  OrderStatus = OrderStatus;

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
      next: (response: any) => {
        console.log('Order details response:', response);
        
        // Check if the response is in the new format
        if (response.restaurantName !== undefined) {
          this.order = this.processOrderResponse(response);
          
          // Check if the response already contains items
          if ((response.items && Array.isArray(response.items) && response.items.length > 0) || 
              (response.userItems && Array.isArray(response.userItems) && response.userItems.length > 0)) {
            // Use items from the response
            this.myOrderItems = this.processOrderItems(response);
            this.isLoading = false;
          } else {
            // No items in response, load them separately
            this.loadMyOrderItems();
          }
        } else {
          // Handle old format
          this.order = this.convertToNewFormat(response);
          this.loadMyOrderItems();
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load order details';
      }
    });
  }

  processOrderResponse(response: any): OrderDetailResponse {
    return {
      id: response.id || response.orderId,
      orderId: response.orderId || response.id,
      restaurantName: response.restaurantName,
      orderDate: response.orderDate,
      closedAt: response.closedAt,
      status: response.status || response.orderStatus,
      orderStatus: response.orderStatus || response.status,
      managerName: response.managerName,
      managerEmail: response.managerEmail,
      deliveryFee: response.deliveryFee,
      deliveryFeeShare: response.deliveryFeeShare,
      userItems: response.userItems,
      items: response.items,
      userPaymentStatus: response.userPaymentStatus,
      userTotal: response.userTotal || response.total,
      subtotal: response.subtotal,
      total: response.total || response.userTotal
    };
  }

  processOrderItems(response: any): UserOrderItem[] {
    // Try to get items from different possible locations in the response
    const items = response.items || response.userItems || [];
    
    return items.map((item: any) => ({
      id: item.id,
      menuItemId: item.menuItemId,
      menuItemName: item.menuItemName,
      menuItemDescription: item.menuItemDescription,
      price: item.price,
      quantity: item.quantity,
      note: item.note,
      total: item.total || item.itemTotal,
      itemTotal: item.itemTotal || item.total,
      userId: item.userId,
      userName: item.userName,
      canBeDeleted: this.isOrderOpen() // Set canBeDeleted based on order status
    }));
  }

  convertToNewFormat(oldOrder: Order): OrderDetailResponse {
    return {
      id: oldOrder.id || '',
      restaurantName: oldOrder.restaurant?.name || 'Unknown Restaurant',
      orderDate: oldOrder.orderDate?.toString() || new Date().toISOString(),
      closedAt: oldOrder.closedAt?.toString() || null,
      status: oldOrder.status || OrderStatus.Open,
      orderStatus: oldOrder.status || OrderStatus.Open,
      managerName: oldOrder.manager?.name || 'Unknown Manager',
      managerEmail: oldOrder.manager?.email,
      deliveryFee: oldOrder.restaurant?.deliveryFee || 0,
      deliveryFeeShare: 0,
      userItems: [],
      items: [],
      userPaymentStatus: 0,
      userTotal: 0,
      subtotal: 0,
      total: 0
    };
  }

  loadMyOrderItems(): void {
    this.orderService.getMyOrderItems(this.orderId).subscribe({
      next: (response: any) => {
        console.log('My order items response:', response);
        
        // Check if the response is the new format with items array
        if (response && response.items && Array.isArray(response.items)) {
          this.myOrderItems = this.processOrderItems(response);
          
          // Update order with additional data from the response
          if (this.order && response.subtotal !== undefined) {
            this.order.subtotal = response.subtotal;
            this.order.deliveryFeeShare = response.deliveryFeeShare;
            this.order.total = response.total;
          }
        } else if (Array.isArray(response)) {
          // Convert old format items to new format
          this.myOrderItems = response.map(item => ({
            id: item.id || '',
            menuItemId: item.menuItemId,
            menuItemName: item.menuItem?.name || 'Unknown Item',
            price: item.menuItem?.price || 0,
            quantity: item.quantity || 1,
            note: item.note,
            total: (item.menuItem?.price || 0) * (item.quantity || 1),
            canBeDeleted: this.isOrderOpen() // Set canBeDeleted based on order status
          }));
          
          // Update the order's userTotal
          if (this.order) {
            this.order.subtotal = this.calculateSubtotal();
            this.order.total = this.calculateTotal();
          }
        } else {
          this.myOrderItems = [];
        }
        
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
          this.successMessage = 'Order closed successfully';
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
    const status = this.order?.status || this.order?.orderStatus;
    return status === OrderStatus.Open;
  }

  canModifyItems(): boolean {
    return this.isOrderOpen();
  }
  
  startEditItem(item: UserOrderItem): void {
    // Only allow editing if the order is open
    if (!this.canModifyItems()) {
      this.errorMessage = 'Cannot modify items in a closed order';
      return;
    }
    
    this.editingItem = item;
    this.editQuantity = item.quantity;
    this.editNote = item.note || '';
  }
  
  cancelEdit(): void {
    this.editingItem = null;
  }
  
  saveItemChanges(): void {
    if (!this.editingItem || !this.editingItem.id) return;
    
    // Validate the order is still open
    if (!this.canModifyItems()) {
      this.errorMessage = 'Cannot modify items in a closed order';
      this.editingItem = null;
      return;
    }
    
    this.isLoading = true;
    this.errorMessage = '';
    
    // Create an OrderItem object for the API
    const updatedItem: OrderItem = {
      id: this.editingItem.id,
      orderId: this.orderId,
      userId: this.authService.currentUser?.id || '',
      menuItemId: this.editingItem.menuItemId || '',
      quantity: this.editQuantity,
      note: this.editNote
    };
    
    this.orderService.updateOrderItem(this.editingItem.id, updatedItem).subscribe({
      next: () => {
        this.successMessage = 'Item updated successfully';
        this.editingItem = null;
        
        // Update the local item
        const itemIndex = this.myOrderItems.findIndex(item => item.id === updatedItem.id);
        if (itemIndex !== -1) {
          this.myOrderItems[itemIndex].quantity = this.editQuantity;
          this.myOrderItems[itemIndex].note = this.editNote;
          
          // Update the total for this item
          const price = this.myOrderItems[itemIndex].price;
          const newTotal = this.editQuantity * price;
          this.myOrderItems[itemIndex].total = newTotal;
          this.myOrderItems[itemIndex].itemTotal = newTotal;
          
          // Update the order's totals
          if (this.order) {
            this.order.subtotal = this.calculateSubtotal();
            this.order.total = this.calculateTotal();
          }
        }
        
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to update item';
      }
    });
  }
  
  deleteItem(item: UserOrderItem): void {
    // Validate the order is still open
    if (!this.canModifyItems()) {
      this.errorMessage = 'Cannot remove items from a closed order';
      return;
    }
    
    if (!item.id) {
      this.errorMessage = 'Invalid item ID';
      return;
    }
    
    if (confirm('Are you sure you want to remove this item from your order?')) {
      this.isLoading = true;
      this.errorMessage = '';
      
      this.orderService.deleteOrderItem(item.id).subscribe({
        next: () => {
          this.successMessage = 'Item removed successfully';
          
          // Remove the item locally
          this.myOrderItems = this.myOrderItems.filter(i => i.id !== item.id);
          
          // Update the order's totals
          if (this.order) {
            this.order.subtotal = this.calculateSubtotal();
            this.order.total = this.calculateTotal();
          }
          
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.message || 'Failed to remove item';
        }
      });
    }
  }

  calculateSubtotal(): number {
    return this.myOrderItems.reduce((total, item) => {
      return total + ((item.price || 0) * (item.quantity || 0));
    }, 0);
  }

  calculateTotal(): number {
    // If we have the total from the API, use it
    if (this.order?.total) {
      return this.order.total;
    }
    
    // Otherwise calculate it
    const subtotal = this.calculateSubtotal();
    const deliveryFeeShare = this.order?.deliveryFeeShare || 0;
    return subtotal + deliveryFeeShare;
  }
  
  formatDate(date: string | null | undefined): string {
    if (!date) return 'N/A';
    return new Date(date).toLocaleString();
  }
  
  getPaymentStatusText(): string {
    if (!this.order) return '';
    
    switch(this.order.userPaymentStatus) {
      case 1: return 'Unpaid';
      case 2: return 'Paid';
      default: return '';
    }
  }
  
  getPaymentStatusClass(): string {
    if (!this.order) return '';
    
    switch(this.order.userPaymentStatus) {
      case 1: return 'bg-danger';
      case 2: return 'bg-success';
      default: return '';
    }
  }
  
  decreaseQuantity(): void {
    if (this.editQuantity > 1) {
      this.editQuantity--;
    }
  }
  
  increaseQuantity(): void {
    if (this.editQuantity < 10) {
      this.editQuantity++;
    }
  }
  
  getDeliveryFeeNote(): string {
    if (!this.order) return '';
    
    if (this.order.status === OrderStatus.Open) {
      return 'Delivery fee will be calculated when the order is closed';
    } else if (this.order.deliveryFeeShare) {
      return `Your share of the delivery fee: $${this.order.deliveryFeeShare.toFixed(2)}`;
    } else {
      return '';
    }
  }
} 