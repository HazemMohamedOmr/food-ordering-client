import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';
import { Order, OrderStatus } from '../../../core/models/order.model';
import { OrderItem } from '../../../core/models/order-item.model';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  standalone: true,
  imports: [SharedModule, FormsModule, CommonModule]
})
export class OrderDetailComponent implements OnInit {
  orderId: string;
  order: Order | null = null;
  myOrderItems: OrderItem[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  
  // Edit mode for items
  editingItem: OrderItem | null = null;
  editQuantity: number = 1;
  editNote: string = '';

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
    return this.order?.status === OrderStatus.Open;
  }

  canModifyItems(): boolean {
    return this.isOrderOpen();
  }
  
  startEditItem(item: OrderItem): void {
    if (!this.canModifyItems()) return;
    
    this.editingItem = item;
    this.editQuantity = item.quantity;
    this.editNote = item.note || '';
  }
  
  cancelEdit(): void {
    this.editingItem = null;
  }
  
  saveItemChanges(): void {
    if (!this.editingItem || !this.editingItem.id) return;
    
    this.isLoading = true;
    this.errorMessage = '';
    
    const updatedItem: OrderItem = {
      ...this.editingItem,
      quantity: this.editQuantity,
      note: this.editNote
    };
    
    this.orderService.updateOrderItem(this.editingItem.id, updatedItem).subscribe({
      next: () => {
        this.successMessage = 'Item updated successfully';
        this.editingItem = null;
        this.loadMyOrderItems();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to update item';
      }
    });
  }
  
  deleteItem(item: OrderItem): void {
    if (!this.canModifyItems() || !item.id) return;
    
    if (confirm('Are you sure you want to remove this item from your order?')) {
      this.isLoading = true;
      this.errorMessage = '';
      
      this.orderService.deleteOrderItem(item.id).subscribe({
        next: () => {
          this.successMessage = 'Item removed successfully';
          this.loadMyOrderItems();
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
      return total + (item.quantity * (item.menuItem?.price || 0));
    }, 0);
  }

  calculateTotal(): number {
    const subtotal = this.calculateSubtotal();
    const deliveryFee = this.order?.restaurant?.deliveryFee || 0;
    return subtotal + deliveryFee;
  }
} 