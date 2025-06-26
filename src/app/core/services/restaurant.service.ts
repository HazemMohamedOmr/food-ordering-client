import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, shareReplay, tap, catchError, map, timer, timeout, throwError } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = `${environment.apiUrl}/restaurants`;
  
  // Cache for restaurants
  private restaurantsCache: Restaurant[] | null = null;
  private restaurantCache: Map<string, Restaurant> = new Map<string, Restaurant>();
  
  // Track last cache update time
  private lastCacheTime = 0;
  private readonly CACHE_DURATION = 60000; // 1 minute cache duration

  constructor(private http: HttpClient) { }

  getAll(): Observable<Restaurant[]> {
    // Check if we have recent cache (less than 1 minute old)
    const now = Date.now();
    if (this.restaurantsCache && (now - this.lastCacheTime < this.CACHE_DURATION)) {
      console.log('Using cached restaurants data');
      return of(this.restaurantsCache);
    }
    
    // Add timeout to prevent hanging on slow API
    return this.http.get<Restaurant[]>(this.apiUrl).pipe(
      timeout(10000), // 10 second timeout
      map(restaurants => {
        // Pre-process data if needed
        return restaurants.map(r => ({
          ...r,
          description: r.description || 'A delightful restaurant serving wonderful dishes.'
        }));
      }),
      tap(restaurants => {
        console.log('Updating restaurant cache with', restaurants.length, 'restaurants');
        this.restaurantsCache = restaurants;
        this.lastCacheTime = now;
        
        // Also store individual restaurants in cache
        restaurants.forEach(restaurant => {
          if (restaurant.id) {
            this.restaurantCache.set(restaurant.id, restaurant);
          }
        });
      }),
      shareReplay(1),
      catchError(error => {
        console.error('Error fetching restaurants:', error);
        
        // If we have old cache, return it as fallback
        if (this.restaurantsCache) {
          console.log('Returning expired cache data as fallback');
          return of(this.restaurantsCache);
        }
        
        // If first load fails and we have no cache, return empty array
        return of([]);
      })
    );
  }

  getById(id: string): Observable<Restaurant> {
    // Return cached data if available
    if (this.restaurantCache.has(id)) {
      console.log('Using cached restaurant data for id:', id);
      return of(this.restaurantCache.get(id)!);
    }
    
    return this.http.get<Restaurant>(`${this.apiUrl}/${id}`).pipe(
      timeout(5000), // 5 second timeout
      tap(restaurant => {
        if (restaurant && restaurant.id) {
          this.restaurantCache.set(id, restaurant);
        }
      }),
      shareReplay(1),
      catchError(error => {
        console.error(`Error fetching restaurant with id ${id}:`, error);
        
        // If we have this restaurant in the all-restaurants cache, use that
        if (this.restaurantsCache) {
          const cachedRestaurant = this.restaurantsCache.find(r => r.id === id);
          if (cachedRestaurant) {
            console.log('Using restaurant from all-restaurants cache as fallback');
            return of(cachedRestaurant);
          }
        }
        
        return throwError(() => new Error(`Failed to load restaurant details: ${error.message || 'Network error'}`));
      })
    );
  }

  create(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.apiUrl, restaurant).pipe(
      tap(newRestaurant => {
        // Update caches
        this.clearCache();
      })
    );
  }

  update(id: string, restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`${this.apiUrl}/${id}`, restaurant).pipe(
      tap(updatedRestaurant => {
        // Update caches
        this.clearCache();
      })
    );
  }
  
  // Clear caches when data is modified
  clearCache(): void {
    console.log('Clearing restaurant cache');
    this.restaurantsCache = null;
    this.restaurantCache.clear();
    this.lastCacheTime = 0;
  }
  
  // For debugging
  getCacheStatus(): {restaurantsCached: number, individualCached: number, age: number} {
    return {
      restaurantsCached: this.restaurantsCache ? this.restaurantsCache.length : 0,
      individualCached: this.restaurantCache.size,
      age: this.lastCacheTime ? Date.now() - this.lastCacheTime : 0
    };
  }
} 