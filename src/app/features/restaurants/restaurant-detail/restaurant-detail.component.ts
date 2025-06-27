import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../../core/services/restaurant.service';
import { MenuItemService } from '../../../core/services/menu-item.service';
import { Restaurant } from '../../../core/models/restaurant.model';
import { MenuItem } from '../../../core/models/menu-item.model';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';
import { SharedModule } from '../../../shared/shared.module';
import { CartService } from '../../../core/services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, finalize, forkJoin, of } from 'rxjs';
import { OrderStatus } from '../../../core/models/order.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface MenuItemViewModel extends MenuItem {
  isPopular?: boolean;
}

interface ReviewViewModel {
  name: string;
  avatarId: string;
  rating: number;
  date: string;
  comment: string;
}

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
  standalone: true,
  imports: [SharedModule, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {
  restaurantId: string;
  restaurant: Restaurant | null = null;
  menuItems: MenuItemViewModel[] = [];
  filteredMenuItems: MenuItemViewModel[] = [];
  menuSearchQuery: string = '';
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  isFavorite = false;
  itemQuantities: { [id: string]: number } = {};
  hasActiveOrder = false;
  activeOrderId: string | null = null;
  
  // For the modal
  selectedItem: MenuItem | null = null;
  itemNote: string = '';
  showModal = false;
  
  // Track subscriptions for cleanup
  private destroy$ = new Subject<void>();
  
  // Cached values
  restaurantRating = '';
  restaurantReviewCount = '';
  restaurantTags: string[] = [];
  restaurantCuisines: string[] = [];
  reviews: ReviewViewModel[] = [];
  
  // Sample cuisine tags to display (would come from API in a real app)
  availableCuisines: string[] = [
    'Italian', 'Pizza', 'Pasta', 'Chinese', 'Japanese', 'Thai',
    'Indian', 'Mexican', 'Mediterranean', 'Vegetarian', 'American',
    'BBQ', 'Seafood', 'Greek', 'Turkish', 'Lebanese', 'Vietnamese'
  ];
  
  availableTags: string[] = [
    'Outdoor Seating', 'Delivery', 'Takeout', 'Group-Friendly',
    'Has TV', 'Casual Dining', 'Fine Dining', 'Family-Friendly',
    'Romantic', 'Live Music', 'Happy Hour', 'Gluten-Free Options',
    'Vegan Options', 'Organic', 'Farm-to-Table'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService,
    private menuItemService: MenuItemService,
    private orderService: OrderService,
    public authService: AuthService,
    public cartService: CartService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {
    this.restaurantId = this.route.snapshot.paramMap.get('id') || '';
    
    // Pre-generate random values
    this.restaurantRating = this.generateRandomRating();
    this.restaurantReviewCount = this.generateRandomReviewCount();
    this.restaurantTags = this.getRandomTags();
    this.restaurantCuisines = this.getRandomCuisines();
    this.reviews = this.getDummyReviews();
  }

  ngOnInit(): void {
    if (!this.restaurantId) {
      this.router.navigate(['/restaurants']);
      return;
    }

    // First load restaurant details
    this.loadRestaurantDetails();
    
    // Then check for active orders
    this.checkActiveOrder();
    
    // Set up a timer to periodically check for active orders
    const checkInterval = setInterval(() => {
      if (this.destroy$.closed) {
        clearInterval(checkInterval);
        return;
      }
      this.checkActiveOrder();
    }, 30000); // Check every 30 seconds
    
    // Direct approach to check active order status
    this.checkActiveOrderDirectly();
  }
  
  ngOnDestroy(): void {
    // Clean up subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadRestaurantDetails(): void {
    this.isLoading = true;
    this.errorMessage = '';

    // Use forkJoin to make parallel API calls
    forkJoin({
      restaurant: this.restaurantService.getById(this.restaurantId),
      menuItems: this.menuItemService.getByRestaurant(this.restaurantId)
    }).pipe(
      takeUntil(this.destroy$),
      finalize(() => {
        this.isLoading = false;
        this.cdr.markForCheck();
      })
    ).subscribe({
      next: (result) => {
        this.restaurant = result.restaurant;
        
        // Pre-process menu items to add isPopular flag
        this.menuItems = result.menuItems.map(item => ({
          ...item,
          isPopular: Math.random() > 0.7 // ~30% of items will be marked as popular
        }));
        
        // Initialize filtered menu items with all menu items
        this.filteredMenuItems = [...this.menuItems];
        
        this.initializeQuantities();
      },
      error: (error) => {
        this.errorMessage = error.message || 'Failed to load restaurant details';
        this.cdr.markForCheck();
      }
    });
  }

  checkActiveOrder(): void {
    if (!this.restaurantId) return;
    
    console.log('Checking active order for restaurant:', this.restaurantId);
    
    // First check if we have a cached active order
    const cachedOrder = this.orderService.getCachedActiveOrder(this.restaurantId);
    if (cachedOrder) {
      console.log('Found cached active order:', cachedOrder);
      this.hasActiveOrder = true;
      this.activeOrderId = cachedOrder.orderId;
      this.cdr.markForCheck();
      
      // Still fetch from API to verify it's still active
    }
    
    this.orderService.getActiveOrderForRestaurant(this.restaurantId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (order) => {
          console.log('Active order API response (processed):', order);
          
          // Check if we have an order
          if (order && order.id) {
            // Check if the order belongs to this restaurant
            // The API might return different formats, so we need to check all possible properties
            const orderRestaurantId = order.restaurantId || 
                                     (order.restaurant ? order.restaurant.id : null);
            
            console.log('Order restaurant ID:', orderRestaurantId, 'Current restaurant ID:', this.restaurantId);
            
            // If we can't determine the restaurant ID, assume it's for this restaurant
            // since the API endpoint is specifically for this restaurant
            if (!orderRestaurantId || orderRestaurantId === this.restaurantId) {
              this.hasActiveOrder = true;
              this.activeOrderId = order.id;
              
              console.log('Active order found for this restaurant:', this.hasActiveOrder, 'Order ID:', this.activeOrderId);
              
              // If there's an active order, set it in the cart service
              if (this.hasActiveOrder) {
                this.cartService.setRestaurant(this.restaurantId).subscribe();
              }
            } else {
              this.hasActiveOrder = false;
              this.activeOrderId = null;
              console.log('Order found but for a different restaurant');
            }
          } else {
            // No order found
            this.hasActiveOrder = false;
            this.activeOrderId = null;
            console.log('No active order found');
          }
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Error checking active order:', error);
          
          // If we have a cached order, keep using it even if the API call fails
          if (!this.hasActiveOrder && cachedOrder) {
            this.hasActiveOrder = true;
            this.activeOrderId = cachedOrder.orderId;
          } else {
            this.hasActiveOrder = false;
            this.activeOrderId = null;
          }
          
          this.cdr.markForCheck();
        }
      });
  }

  checkActiveOrderDirectly(): void {
    // Make a direct API call to get all active orders
    this.http.get(`${environment.apiUrl}/orders/active`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('Direct API call response for all active orders:', response);
          
          // Handle different response formats to get the array of orders
          let orders: any[] = [];
          
          if (Array.isArray(response)) {
            orders = response;
          } else if (response.data && Array.isArray(response.data)) {
            orders = response.data;
          } else {
            console.error('Unexpected response format:', response);
            return;
          }
          
          // Find an order for this restaurant
          const matchingOrder = orders.find(order => {
            const orderRestaurantId = order.restaurantId || 
                                     (order.restaurant ? order.restaurant.id : null);
            
            return orderRestaurantId === this.restaurantId;
          });
          
          if (matchingOrder && matchingOrder.id) {
            console.log('Active order found directly:', matchingOrder);
            this.hasActiveOrder = true;
            this.activeOrderId = matchingOrder.id;
            
            // Store in cache
            this.orderService.storeActiveOrder(this.restaurantId, matchingOrder.id);
            
            this.cdr.markForCheck();
          }
        },
        error: (error) => {
          console.error('Error in direct active order check:', error);
        }
      });
  }

  initializeQuantities(): void {
    this.menuItems.forEach(item => {
      if (item.id && !this.itemQuantities[item.id]) {
        this.itemQuantities[item.id] = 1;
      }
    });
  }

  startOrder(): void {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login']);
      return;
    }

    // Only managers or admins can start orders
    if (!this.authService.isManager && !this.authService.isAdmin) {
      this.errorMessage = 'Only restaurant managers or admins can start orders';
      this.cdr.markForCheck();
      return;
    }

    const managerId = this.authService.currentUser?.id || '';
    
    console.log('Starting order for restaurant:', this.restaurantId, 'Manager:', managerId);
    
    // Make a direct API call to start the order
    this.http.post(`${environment.apiUrl}/orders/start`, {
      restaurantId: this.restaurantId,
      managerId
    }).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('Order start response:', response);
          const orderId = response.id || response;
          
          this.successMessage = 'Order started successfully! Users can now add items to their cart.';
          this.activeOrderId = orderId;
          this.hasActiveOrder = true;
          
          // Store in cache
          this.orderService.storeActiveOrder(this.restaurantId, orderId);
          
          // Update cart service
          this.cartService.setRestaurant(this.restaurantId).subscribe();
          
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Failed to start order:', error);
          this.errorMessage = error.message || 'Failed to start order';
          this.cdr.markForCheck();
        }
      });
  }
  
  closeOrder(): void {
    if (!this.activeOrderId) return;
    
    if (!this.authService.isManager && !this.authService.isAdmin) {
      this.errorMessage = 'Only restaurant managers or admins can close orders';
      this.cdr.markForCheck();
      return;
    }
    
    console.log('Closing order:', this.activeOrderId);
    
    // Make a direct API call to close the order
    this.http.post(`${environment.apiUrl}/orders/${this.activeOrderId}/close`, {})
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('Order close response:', response);
          
          this.successMessage = 'Order closed successfully! Users can no longer add items to their cart.';
          this.hasActiveOrder = false;
          this.activeOrderId = null;
          
          // Remove from cache
          this.orderService.removeActiveOrder(this.restaurantId);
          
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Failed to close order:', error);
          this.errorMessage = error.message || 'Failed to close order';
          this.cdr.markForCheck();
        }
      });
  }
  
  trackByMenuItem(index: number, item: MenuItem): string {
    return item.id || String(index);
  }
  
  trackByReview(index: number, review: ReviewViewModel): number {
    return index;
  }
  
  getItemQuantity(item: MenuItem): number {
    return item.id ? this.itemQuantities[item.id] || 1 : 1;
  }
  
  increaseQuantity(item: MenuItem): void {
    if (item.id && this.itemQuantities[item.id] < 10) {
      this.itemQuantities[item.id]++;
      this.cdr.markForCheck();
    }
  }
  
  decreaseQuantity(item: MenuItem): void {
    if (item.id && this.itemQuantities[item.id] > 1) {
      this.itemQuantities[item.id]--;
      this.cdr.markForCheck();
    }
  }
  
  addToCart(item: MenuItem): void {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login']);
      return;
    }
    
    console.log('Adding to cart. Active order:', this.hasActiveOrder, 'Order ID:', this.activeOrderId);
    
    // Double-check if we have an active order
    if (!this.hasActiveOrder || !this.activeOrderId) {
      // Make a direct API call to get all active orders
      this.http.get(`${environment.apiUrl}/orders/active`)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: any) => {
            console.log('Direct API check for adding to cart:', response);
            
            // Handle different response formats to get the array of orders
            let orders: any[] = [];
            
            if (Array.isArray(response)) {
              orders = response;
            } else if (response.data && Array.isArray(response.data)) {
              orders = response.data;
            } else {
              console.error('Unexpected response format:', response);
              this.errorMessage = 'There is no active order for this restaurant. Please wait for a manager to start an order.';
              this.cdr.markForCheck();
              return;
            }
            
            // Find an order for this restaurant
            const matchingOrder = orders.find(order => {
              const orderRestaurantId = order.restaurantId || 
                                       (order.restaurant ? order.restaurant.id : null);
              
              return orderRestaurantId === this.restaurantId;
            });
            
            if (matchingOrder && matchingOrder.id) {
              console.log('Found active order for adding item:', matchingOrder);
              this.hasActiveOrder = true;
              this.activeOrderId = matchingOrder.id;
              
              // Store in cache
              this.orderService.storeActiveOrder(this.restaurantId, matchingOrder.id);
              
              // Now open the modal
              this.openAddItemModal(item);
            } else {
              this.errorMessage = 'There is no active order for this restaurant. Please wait for a manager to start an order.';
              this.cdr.markForCheck();
            }
          },
          error: (error) => {
            console.error('Error checking active order for adding item:', error);
            this.errorMessage = 'There is no active order for this restaurant. Please wait for a manager to start an order.';
            this.cdr.markForCheck();
          }
        });
    } else {
      this.openAddItemModal(item);
    }
  }
  
  openAddItemModal(item: MenuItem): void {
    // Open the modal to add notes
    this.selectedItem = item;
    this.itemNote = '';
    this.showModal = true;
    this.cdr.markForCheck();
  }
  
  confirmAddToCart(): void {
    if (!this.selectedItem || !this.activeOrderId) return;
    
    const quantity = this.selectedItem.id ? this.itemQuantities[this.selectedItem.id] : 1;
    
    // Create order item directly
    const orderItem = {
      orderId: this.activeOrderId,
      menuItemId: this.selectedItem.id || '',
      quantity: quantity,
      note: this.itemNote,
      userId: this.authService.currentUser?.id || ''
    };
    
    this.orderService.addOrderItem(orderItem)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.successMessage = `${this.selectedItem?.name} added to your order!`;
          this.closeModal();
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.errorMessage = error.message || 'Failed to add item to order';
          this.closeModal();
          this.cdr.markForCheck();
        }
      });
  }
  
  closeModal(): void {
    this.showModal = false;
    this.selectedItem = null;
    this.itemNote = '';
    this.cdr.markForCheck();
  }
  
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.cdr.markForCheck();
    // In a real app, would call a service to save this preference
  }
  
  shareRestaurant(): void {
    // In a real app, would implement sharing functionality
    alert(`Sharing ${this.restaurant?.name || 'restaurant'}`);
  }
  
  showReviewForm(): void {
    // In a real app, would show a form to write a review
    alert('Review form would be shown here');
  }
  
  generateRandomRating(): string {
    return (3.5 + Math.random() * 1.5).toFixed(1);
  }
  
  generateRandomReviewCount(): string {
    return Math.floor(50 + Math.random() * 200).toString();
  }
  
  getRandomTags(): string[] {
    const shuffled = [...this.availableTags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3 + Math.floor(Math.random() * 3));
  }
  
  getRandomCuisines(): string[] {
    const shuffled = [...this.availableCuisines].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2 + Math.floor(Math.random() * 2));
  }
  
  getDummyReviews(): ReviewViewModel[] {
    const reviews: ReviewViewModel[] = [];
    const names = ['John D.', 'Sarah M.', 'Robert J.', 'Emily L.', 'Michael T.', 'Jessica K.'];
    const comments = [
      'Great food and excellent service! Will definitely come back again.',
      'The atmosphere was nice but the food was just okay. Service could be better.',
      'Absolutely loved everything about this place! The chef is amazing.',
      'Decent place for a quick meal, but nothing extraordinary.',
      'Best restaurant in town! The desserts are to die for.',
      'Friendly staff and good food. Prices are reasonable for the quality.'
    ];
    
    for (let i = 0; i < 6; i++) {
      reviews.push({
        name: names[i],
        avatarId: (i + 1).toString(),
        rating: 3 + Math.floor(Math.random() * 3),
        date: `${Math.floor(Math.random() * 28) + 1}/${Math.floor(Math.random() * 12) + 1}/2023`,
        comment: comments[i]
      });
    }
    
    return reviews;
  }

  searchMenuItems(): void {
    if (!this.menuSearchQuery || this.menuSearchQuery.trim() === '') {
      this.filteredMenuItems = [...this.menuItems];
    } else {
      const searchTerm = this.menuSearchQuery.toLowerCase().trim();
      this.filteredMenuItems = this.menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        (item.description && item.description.toLowerCase().includes(searchTerm))
      );
    }
    this.cdr.markForCheck();
  }

  onSearchInput(): void {
    this.searchMenuItems();
  }
} 