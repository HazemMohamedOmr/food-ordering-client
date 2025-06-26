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
import { Subject, takeUntil, finalize, forkJoin } from 'rxjs';

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
  isLoading = false;
  errorMessage = '';
  isFavorite = false;
  itemQuantities: { [id: string]: number } = {};
  
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
    private cdr: ChangeDetectorRef
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

    this.loadRestaurantDetails();
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
        
        this.initializeQuantities();
      },
      error: (error) => {
        this.errorMessage = error.message || 'Failed to load restaurant details';
        this.cdr.markForCheck();
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
    
    this.orderService.startOrder(this.restaurantId, managerId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (orderId) => {
          this.router.navigate(['/orders', orderId]);
        },
        error: (error) => {
          this.errorMessage = error.message || 'Failed to start order';
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
    if (!this.restaurantId) return;
    
    const quantity = item.id ? this.itemQuantities[item.id] || 1 : 1;
    this.cartService.setRestaurant(this.restaurantId);
    this.cartService.addToCart(item, quantity);
    
    // Show a success message or toast notification
    alert(`${quantity} ${item.name}${quantity > 1 ? 's' : ''} added to cart!`);
  }
  
  // Helper methods for UI
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.cdr.markForCheck();
    // In a real app, would call API to save favorite status
  }
  
  shareRestaurant(): void {
    // In a real app, would open a share dialog
    // This is just a placeholder
    alert('Sharing is not implemented yet. In a real app, this would open a sharing dialog.');
  }
  
  showReviewForm(): void {
    // In a real app, would show a review form
    alert('Review form is not implemented yet. In a real app, this would open a modal form to write a review.');
  }
  
  generateRandomRating(): string {
    // Generate a random rating between 4.0 and 5.0
    return (4 + Math.random()).toFixed(1);
  }
  
  generateRandomReviewCount(): string {
    // Generate a random number of reviews between 10 and 200
    return Math.floor(10 + Math.random() * 190).toString();
  }
  
  getRandomTags(): string[] {
    // Return 2-3 random tags
    const numTags = 2 + Math.floor(Math.random() * 2); // 2 or 3 tags
    const shuffled = [...this.availableTags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numTags);
  }
  
  getRandomCuisines(): string[] {
    // Return 1-2 random cuisines
    const numCuisines = 1 + Math.floor(Math.random() * 2); // 1 or 2 cuisines
    const shuffled = [...this.availableCuisines].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numCuisines);
  }
  
  getDummyReviews(): ReviewViewModel[] {
    // Generate 3-5 random reviews
    const numReviews = 3 + Math.floor(Math.random() * 3); // 3, 4, or 5 reviews
    const reviews: ReviewViewModel[] = [];
    
    const names = ['John D.', 'Sarah M.', 'Michael T.', 'Emily R.', 'David K.', 'Jessica L.'];
    const comments = [
      'Great food and excellent service! Will definitely come back again.',
      'The food was delicious but the service could be a bit faster.',
      'Amazing flavors and very reasonable prices. Highly recommended!',
      'Nice atmosphere but the food was just okay. Might try again.',
      'Outstanding dining experience from start to finish!'
    ];
    
    for (let i = 0; i < numReviews; i++) {
      const randomDay = 1 + Math.floor(Math.random() * 28);
      const randomMonth = 1 + Math.floor(Math.random() * 12);
      const review: ReviewViewModel = {
        name: names[Math.floor(Math.random() * names.length)],
        avatarId: (i + 1).toString(),
        rating: 3 + Math.floor(Math.random() * 3), // Rating between 3-5
        date: `${randomMonth}/${randomDay}/2023`,
        comment: comments[Math.floor(Math.random() * comments.length)]
      };
      reviews.push(review);
    }
    
    return reviews;
  }
} 