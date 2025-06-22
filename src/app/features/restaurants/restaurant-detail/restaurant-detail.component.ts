import { Component, OnInit, OnDestroy } from '@angular/core';
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
  imports: [SharedModule, FormsModule, CommonModule]
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {
  restaurantId: string;
  restaurant: Restaurant | null = null;
  menuItems: MenuItemViewModel[] = [];
  isLoading = false;
  errorMessage = '';
  isFavorite = false;
  itemQuantities: { [id: string]: number } = {};
  aosInitialized = false;
  
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
    public cartService: CartService
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
    // Clean up any subscriptions or resources
  }
  
  initializeAOS(): void {
    if (typeof window !== 'undefined' && !this.aosInitialized) {
      this.aosInitialized = true;
      import('aos').then(aos => {
        aos.init({
          duration: 800, // Reduced from 1000
          once: true,
          easing: 'ease-out',
          startEvent: 'DOMContentLoaded',
          disable: window.innerWidth < 768 ? true : false, // Disable on mobile for better performance
        });
      }).catch(() => {
        console.warn('AOS initialization failed');
      });
    }
  }

  loadRestaurantDetails(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.restaurantService.getById(this.restaurantId).subscribe({
      next: (restaurant) => {
        this.restaurant = restaurant;
        this.loadMenuItems();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load restaurant details';
      }
    });
  }

  loadMenuItems(): void {
    this.menuItemService.getByRestaurant(this.restaurantId).subscribe({
      next: (items) => {
        // Pre-process menu items to add isPopular flag
        this.menuItems = items.map(item => {
          return {
            ...item,
            isPopular: Math.random() > 0.7 // ~30% of items will be marked as popular
          };
        });
        
        this.initializeQuantities();
        this.isLoading = false;
        
        // Initialize AOS after data is loaded
        setTimeout(() => this.initializeAOS(), 100);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load menu items';
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
      return;
    }

    const managerId = this.authService.currentUser?.id || '';
    
    this.orderService.startOrder(this.restaurantId, managerId).subscribe({
      next: (orderId) => {
        this.router.navigate(['/orders', orderId]);
      },
      error: (error) => {
        this.errorMessage = error.message || 'Failed to start order';
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
  
  trackByMenuItem(index: number, item: MenuItem): string {
    return item.id || index.toString();
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
    }
  }
  
  decreaseQuantity(item: MenuItem): void {
    if (item.id && this.itemQuantities[item.id] > 1) {
      this.itemQuantities[item.id]--;
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
    // Return 2-3 random cuisine types
    const numCuisines = 2 + Math.floor(Math.random() * 2); // 2 or 3 cuisines
    const shuffled = [...this.availableCuisines].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numCuisines);
  }
  
  getDummyReviews(): ReviewViewModel[] {
    // Generate some dummy reviews for the UI
    return [
      {
        name: 'Sarah Johnson',
        avatarId: '1',
        rating: 5,
        date: '2 days ago',
        comment: 'Amazing food and great service! The pasta was perfectly cooked and the sauce was delicious. Will definitely be ordering again!'
      },
      {
        name: 'Michael Chen',
        avatarId: '2',
        rating: 4,
        date: '1 week ago',
        comment: 'Food was delivered promptly and still hot. Great flavor, though portions could be a bit bigger. Overall a good experience.'
      },
      {
        name: 'Jessica Williams',
        avatarId: '3',
        rating: 5,
        date: '2 weeks ago',
        comment: "Best restaurant in town! The chef really knows what they're doing. Every dish I've tried has been exceptional."
      }
    ];
  }
} 