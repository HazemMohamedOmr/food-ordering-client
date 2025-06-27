import {
  HttpClient,
  Injectable,
  catchError,
  environment,
  map,
  of,
  setClassMetadata,
  shareReplay,
  tap,
  throwError,
  timeout,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UXXDM6C4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GMSD7K74.js";

// src/app/core/services/restaurant.service.ts
var RestaurantService = class _RestaurantService {
  http;
  apiUrl = `${environment.apiUrl}/restaurants`;
  // Cache for restaurants
  restaurantsCache = null;
  restaurantCache = /* @__PURE__ */ new Map();
  // Track last cache update time
  lastCacheTime = 0;
  CACHE_DURATION = 6e4;
  // 1 minute cache duration
  constructor(http) {
    this.http = http;
  }
  getAll() {
    const now = Date.now();
    if (this.restaurantsCache && now - this.lastCacheTime < this.CACHE_DURATION) {
      console.log("Using cached restaurants data");
      return of(this.restaurantsCache);
    }
    return this.http.get(this.apiUrl).pipe(
      timeout(1e4),
      // 10 second timeout
      map((restaurants) => {
        return restaurants.map((r) => __spreadProps(__spreadValues({}, r), {
          description: r.description || "A delightful restaurant serving wonderful dishes."
        }));
      }),
      tap((restaurants) => {
        console.log("Updating restaurant cache with", restaurants.length, "restaurants");
        this.restaurantsCache = restaurants;
        this.lastCacheTime = now;
        restaurants.forEach((restaurant) => {
          if (restaurant.id) {
            this.restaurantCache.set(restaurant.id, restaurant);
          }
        });
      }),
      shareReplay(1),
      catchError((error) => {
        console.error("Error fetching restaurants:", error);
        if (this.restaurantsCache) {
          console.log("Returning expired cache data as fallback");
          return of(this.restaurantsCache);
        }
        return of([]);
      })
    );
  }
  getById(id) {
    if (this.restaurantCache.has(id)) {
      console.log("Using cached restaurant data for id:", id);
      return of(this.restaurantCache.get(id));
    }
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      timeout(5e3),
      // 5 second timeout
      tap((restaurant) => {
        if (restaurant && restaurant.id) {
          this.restaurantCache.set(id, restaurant);
        }
      }),
      shareReplay(1),
      catchError((error) => {
        console.error(`Error fetching restaurant with id ${id}:`, error);
        if (this.restaurantsCache) {
          const cachedRestaurant = this.restaurantsCache.find((r) => r.id === id);
          if (cachedRestaurant) {
            console.log("Using restaurant from all-restaurants cache as fallback");
            return of(cachedRestaurant);
          }
        }
        return throwError(() => new Error(`Failed to load restaurant details: ${error.message || "Network error"}`));
      })
    );
  }
  create(restaurant) {
    return this.http.post(this.apiUrl, restaurant).pipe(map((response) => response.data), tap(() => {
      this.clearCache();
    }));
  }
  update(id, restaurant) {
    return this.http.put(`${this.apiUrl}/${id}`, restaurant).pipe(tap(() => {
      this.clearCache();
    }));
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => {
      this.clearCache();
    }));
  }
  // Clear caches when data is modified
  clearCache() {
    console.log("Clearing restaurant cache");
    this.restaurantsCache = null;
    this.restaurantCache.clear();
    this.lastCacheTime = 0;
  }
  // For debugging
  getCacheStatus() {
    return {
      restaurantsCached: this.restaurantsCache ? this.restaurantsCache.length : 0,
      individualCached: this.restaurantCache.size,
      age: this.lastCacheTime ? Date.now() - this.lastCacheTime : 0
    };
  }
  static \u0275fac = function RestaurantService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RestaurantService, factory: _RestaurantService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RestaurantService
};
//# sourceMappingURL=chunk-QVJF66MH.js.map
