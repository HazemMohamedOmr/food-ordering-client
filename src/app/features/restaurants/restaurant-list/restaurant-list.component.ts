import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RestaurantService } from '../../../core/services/restaurant.service';
import { Restaurant } from '../../../core/models/restaurant.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface RestaurantViewModel extends Restaurant {
  rating?: string;
  tags?: string[];
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
  standalone: true,
  imports: [SharedModule, FormsModule]
})
export class RestaurantListComponent implements OnInit, OnDestroy {
  restaurants: RestaurantViewModel[] = [];
  filteredRestaurants: RestaurantViewModel[] = [];
  isLoading = false;
  errorMessage = '';
  searchQuery = '';
  sortOption = 'name';
  selectedCuisine = 'all';
  aosInitialized = false;
  
  // These would ideally come from the backend
  availableTags: string[] = [
    'Italian', 'Pizza', 'Fast Food', 'Asian', 'Chinese', 'Japanese', 'Thai', 
    'Indian', 'Mexican', 'Mediterranean', 'Vegan', 'Vegetarian', 'Burgers', 
    'Seafood', 'BBQ', 'Healthy', 'Desserts', 'Breakfast'
  ];

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }
  
  ngOnDestroy(): void {
    // Clean up any subscriptions or resources
  }

  loadRestaurants(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.restaurantService.getAll().subscribe({
      next: (data) => {
        // Pre-compute random values for each restaurant to avoid repeated calculations
        this.restaurants = data.map(restaurant => {
          const enhancedRestaurant: RestaurantViewModel = {
            ...restaurant,
            rating: this.generateRandomRating(),
            tags: this.getRandomTags()
          };
          return enhancedRestaurant;
        });
        
        this.filteredRestaurants = [...this.restaurants];
        this.sortRestaurants(); // Apply default sorting
        this.isLoading = false;
        
        // Initialize AOS after data is loaded for better performance
        setTimeout(() => this.initializeAOS(), 100);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load restaurants';
      }
    });
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

  viewRestaurant(id: string): void {
    this.router.navigate(['/restaurants', id]);
  }
  
  trackByRestaurant(index: number, restaurant: Restaurant): string {
    return restaurant.id || index.toString();
  }
  
  filterRestaurants(): void {
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
  }
  
  sortRestaurants(): void {
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
    this.sortRestaurants();
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