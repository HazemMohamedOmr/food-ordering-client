import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RestaurantService } from '../../../core/services/restaurant.service';
import { Restaurant } from '../../../core/models/restaurant.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription, Observable, map, debounceTime, distinctUntilChanged, Subject, takeUntil, BehaviorSubject, finalize } from 'rxjs';

interface RestaurantViewModel extends Restaurant {
  rating?: string;
  tags?: string[];
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
  standalone: true,
  imports: [SharedModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantListComponent implements OnInit, OnDestroy {
  restaurants: RestaurantViewModel[] = [];
  filteredRestaurants: RestaurantViewModel[] = [];
  isLoading = true; // Start with true to show loading state immediately
  errorMessage = '';
  searchQuery = '';
  sortOption = 'name';
  selectedCuisine = 'all';
  aosInitialized = false;
  
  // Track subscriptions for cleanup
  private destroy$ = new Subject<void>();
  private searchDebounce$ = new Subject<string>();
  
  // These would ideally come from the backend
  availableTags: string[] = [
    'Italian', 'Pizza', 'Fast Food', 'Asian', 'Chinese', 'Japanese', 'Thai', 
    'Indian', 'Mexican', 'Mediterranean', 'Vegan', 'Vegetarian', 'Burgers', 
    'Seafood', 'BBQ', 'Healthy', 'Desserts', 'Breakfast'
  ];

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Prefetch restaurants data to minimize loading delays
    // Only setup the search debouncing when we have more than a few restaurants
    this.loadRestaurants();
    
    this.searchDebounce$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.filterRestaurants();
        this.cdr.markForCheck();
      });
  }
  
  ngOnDestroy(): void {
    // Clean up subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    // For small datasets, skip debounce for instant results
    if (this.restaurants.length < 5) {
      this.searchQuery = input.value;
      this.filterRestaurants();
      this.cdr.markForCheck();
    } else {
      this.searchQuery = input.value;
      this.searchDebounce$.next(input.value);
    }
  }

  loadRestaurants(): void {
    this.isLoading = true;
    this.cdr.markForCheck();
    
    // Add a short timeout to ensure the loading spinner appears
    // Might seem counterintuitive but helps with perceived performance
    setTimeout(() => {
      this.restaurantService.getAll()
        .pipe(
          takeUntil(this.destroy$),
          finalize(() => {
            this.isLoading = false;
            this.cdr.markForCheck();
          })
        )
        .subscribe({
          next: (data) => {
            if (data.length === 0) {
              this.restaurants = [];
              this.filteredRestaurants = [];
              return;
            }
            
            // Optimize for small datasets - simpler and faster processing
            if (data.length < 5) {
              this.restaurants = data.map(restaurant => ({
                ...restaurant,
                rating: (4.0 + Math.random()).toFixed(1),
                tags: this.getSimpleTags(restaurant)
              }));
            } else {
              this.restaurants = this.enhanceRestaurants(data);
            }
            
            this.filteredRestaurants = [...this.restaurants];
            this.sortRestaurants(); // Apply default sorting
          },
          error: (error) => {
            this.errorMessage = error.message || 'Failed to load restaurants';
            this.isLoading = false;
            this.cdr.markForCheck();
          }
        });
    }, 0);
  }
  
  // Optimized version for small datasets
  getSimpleTags(restaurant: Restaurant): string[] {
    // Simple deterministic tag generation based on restaurant properties
    const tags: string[] = [];
    
    if (restaurant.name.toLowerCase().includes('pizza') || 
        restaurant.description.toLowerCase().includes('pizza')) {
      tags.push('Pizza');
    }
    
    if (restaurant.deliveryFee === 0) {
      tags.push('Free Delivery');
    }
    
    // Always ensure at least one tag
    if (tags.length === 0) {
      tags.push(this.availableTags[Math.floor(Math.random() * 3)]);
    }
    
    return tags;
  }
  
  enhanceRestaurants(restaurants: Restaurant[]): RestaurantViewModel[] {
    return restaurants.map(restaurant => ({
      ...restaurant,
      rating: this.generateRandomRating(),
      tags: this.getRandomTags(),
    }));
  }

  viewRestaurant(id: string): void {
    this.ngZone.run(() => {
      this.router.navigate(['/restaurants', id]);
    });
  }
  
  trackByRestaurant(index: number, restaurant: Restaurant): string {
    return restaurant.id || index.toString();
  }
  
  filterRestaurants(): void {
    // Skip filtering if no restaurants
    if (this.restaurants.length === 0) {
      this.filteredRestaurants = [];
      return;
    }
    
    // Optimization: if no filters applied, don't do any filtering
    if (!this.searchQuery.trim() && this.selectedCuisine === 'all') {
      this.filteredRestaurants = [...this.restaurants];
    } else {
      const searchQuery = this.searchQuery.trim().toLowerCase();
      
      this.filteredRestaurants = this.restaurants.filter(restaurant => {
        // Search query filter
        const matchesSearch = !searchQuery || 
          restaurant.name.toLowerCase().includes(searchQuery) ||
          restaurant.description.toLowerCase().includes(searchQuery) ||
          restaurant.address.toLowerCase().includes(searchQuery);
          
        // Cuisine filter (this is simulated since we don't have cuisine data)
        const matchesCuisine = this.selectedCuisine === 'all' || 
          this.simulateCuisineMatch(restaurant, this.selectedCuisine);
          
        return matchesSearch && matchesCuisine;
      });
    }
    
    this.sortRestaurants(); // Re-apply sorting after filtering
  }
  
  filterByCuisine(cuisine: string): void {
    this.selectedCuisine = cuisine;
    this.filterRestaurants();
    this.cdr.markForCheck();
  }
  
  sortRestaurants(): void {
    if (this.filteredRestaurants.length <= 1) return; // Skip sorting if only 0 or 1 restaurant
    
    switch (this.sortOption) {
      case 'name':
        this.filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        this.filteredRestaurants.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'deliveryFee':
        this.filteredRestaurants.sort((a, b) => a.deliveryFee - b.deliveryFee);
        break;
      case 'deliveryFeeDesc':
        this.filteredRestaurants.sort((a, b) => b.deliveryFee - a.deliveryFee);
        break;
      default:
        this.filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  
  resetFilters(): void {
    this.searchQuery = '';
    this.selectedCuisine = 'all';
    this.sortOption = 'name';
    this.filteredRestaurants = [...this.restaurants];
    
    if (this.filteredRestaurants.length > 1) {
      this.sortRestaurants();
    }
    
    this.cdr.markForCheck();
  }
  
  // Helper methods to simulate data we don't have in the API
  
  generateRandomRating(): string {
    // Generate a random rating between 4.0 and 5.0
    return (4 + Math.random()).toFixed(1);
  }
  
  getRandomTags(): string[] {
    // Return 2-3 random tags
    const numTags = 2 + Math.floor(Math.random() * 2); // 2 or 3 tags
    const shuffled = [...this.availableTags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numTags);
  }
  
  simulateCuisineMatch(restaurant: Restaurant, cuisine: string): boolean {
    // This is just a simulation since we don't have cuisine data
    // In a real app, this would use actual restaurant cuisine data
    const name = restaurant.name.toLowerCase();
    
    switch(cuisine) {
      case 'italian':
        return name.includes('pizza') || name.includes('italian') || name.includes('pasta');
      case 'asian':
        return name.includes('sushi') || name.includes('wok') || 
               name.includes('asian') || name.includes('chinese');
      case 'mexican':
        return name.includes('taco') || name.includes('mexican') || name.includes('burrito');
      case 'american':
        return name.includes('burger') || name.includes('grill') || name.includes('american');
      default:
        return false;
    }
  }
} 