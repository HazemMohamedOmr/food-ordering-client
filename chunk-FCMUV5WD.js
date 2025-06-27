import {
  RestaurantService
} from "./chunk-QVJF66MH.js";
import {
  SharedModule
} from "./chunk-Q4YMUNUZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RHXFPPC4.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgForOf,
  NgIf,
  NgZone,
  Router,
  Subject,
  debounceTime,
  distinctUntilChanged,
  finalize,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UXXDM6C4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GMSD7K74.js";

// src/app/features/restaurants/restaurant-list/restaurant-list.component.ts
function RestaurantListComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function RestaurantListComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "span", 49);
    \u0275\u0275text(4, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 50);
    \u0275\u0275text(6, "Finding the best restaurants for you...");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantListComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Restaurants Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "We couldn't find any restaurants matching your criteria. Try adjusting your search or filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function RestaurantListComponent_div_56_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetFilters());
    });
    \u0275\u0275element(8, "i", 54);
    \u0275\u0275text(9, " Reset Filters ");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantListComponent_For_59_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2, " Free Delivery ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantListComponent_For_59_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Delivery: $", restaurant_r4.deliveryFee.toFixed(2), "");
  }
}
function RestaurantListComponent_For_59_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "Free Delivery");
    \u0275\u0275elementEnd();
  }
}
function RestaurantListComponent_For_59_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r5);
  }
}
function RestaurantListComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 55)(2, "div", 56);
    \u0275\u0275element(3, "img", 57);
    \u0275\u0275elementStart(4, "div", 58);
    \u0275\u0275element(5, "i", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, RestaurantListComponent_For_59_div_7_Template, 3, 0, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 61)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 63)(14, "div", 64);
    \u0275\u0275element(15, "i", 65);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 64);
    \u0275\u0275element(19, "i", 66);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 64);
    \u0275\u0275element(23, "i", 67);
    \u0275\u0275template(24, RestaurantListComponent_For_59_span_24_Template, 2, 1, "span", 68)(25, RestaurantListComponent_For_59_span_25_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 70);
    \u0275\u0275template(27, RestaurantListComponent_For_59_span_27_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 72);
    \u0275\u0275listener("click", function RestaurantListComponent_For_59_Template_button_click_28_listener() {
      const restaurant_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewRestaurant(restaurant_r4.id));
    });
    \u0275\u0275element(29, "i", 73);
    \u0275\u0275text(30, " View Menu ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const restaurant_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", restaurant_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", restaurant_r4.rating, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r4.deliveryFee === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(restaurant_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(restaurant_r4.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(restaurant_r4.address);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(restaurant_r4.phoneNumber);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", restaurant_r4.deliveryFee > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r4.deliveryFee === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", restaurant_r4.tags);
  }
}
var RestaurantListComponent = class _RestaurantListComponent {
  restaurantService;
  router;
  ngZone;
  cdr;
  restaurants = [];
  filteredRestaurants = [];
  isLoading = true;
  // Start with true to show loading state immediately
  errorMessage = "";
  searchQuery = "";
  sortOption = "name";
  selectedCuisine = "all";
  aosInitialized = false;
  // Track subscriptions for cleanup
  destroy$ = new Subject();
  searchDebounce$ = new Subject();
  // These would ideally come from the backend
  availableTags = [
    "Italian",
    "Pizza",
    "Fast Food",
    "Asian",
    "Chinese",
    "Japanese",
    "Thai",
    "Indian",
    "Mexican",
    "Mediterranean",
    "Vegan",
    "Vegetarian",
    "Burgers",
    "Seafood",
    "BBQ",
    "Healthy",
    "Desserts",
    "Breakfast"
  ];
  constructor(restaurantService, router, ngZone, cdr) {
    this.restaurantService = restaurantService;
    this.router = router;
    this.ngZone = ngZone;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadRestaurants();
    this.searchDebounce$.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.filterRestaurants();
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSearchInput(event) {
    const input = event.target;
    if (this.restaurants.length < 5) {
      this.searchQuery = input.value;
      this.filterRestaurants();
      this.cdr.markForCheck();
    } else {
      this.searchQuery = input.value;
      this.searchDebounce$.next(input.value);
    }
  }
  loadRestaurants() {
    this.isLoading = true;
    this.cdr.markForCheck();
    setTimeout(() => {
      this.restaurantService.getAll().pipe(takeUntil(this.destroy$), finalize(() => {
        this.isLoading = false;
        this.cdr.markForCheck();
      })).subscribe({
        next: (data) => {
          if (data.length === 0) {
            this.restaurants = [];
            this.filteredRestaurants = [];
            return;
          }
          if (data.length < 5) {
            this.restaurants = data.map((restaurant) => __spreadProps(__spreadValues({}, restaurant), {
              rating: (4 + Math.random()).toFixed(1),
              tags: this.getSimpleTags(restaurant)
            }));
          } else {
            this.restaurants = this.enhanceRestaurants(data);
          }
          this.filteredRestaurants = [...this.restaurants];
          this.sortRestaurants();
        },
        error: (error) => {
          this.errorMessage = error.message || "Failed to load restaurants";
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
    }, 0);
  }
  // Optimized version for small datasets
  getSimpleTags(restaurant) {
    const tags = [];
    if (restaurant.name.toLowerCase().includes("pizza") || restaurant.description.toLowerCase().includes("pizza")) {
      tags.push("Pizza");
    }
    if (restaurant.deliveryFee === 0) {
      tags.push("Free Delivery");
    }
    if (tags.length === 0) {
      tags.push(this.availableTags[Math.floor(Math.random() * 3)]);
    }
    return tags;
  }
  enhanceRestaurants(restaurants) {
    return restaurants.map((restaurant) => __spreadProps(__spreadValues({}, restaurant), {
      rating: this.generateRandomRating(),
      tags: this.getRandomTags()
    }));
  }
  viewRestaurant(id) {
    this.ngZone.run(() => {
      this.router.navigate(["/restaurants", id]);
    });
  }
  trackByRestaurant(index, restaurant) {
    return restaurant.id || index.toString();
  }
  filterRestaurants() {
    if (this.restaurants.length === 0) {
      this.filteredRestaurants = [];
      return;
    }
    if (!this.searchQuery.trim() && this.selectedCuisine === "all") {
      this.filteredRestaurants = [...this.restaurants];
    } else {
      const searchQuery = this.searchQuery.trim().toLowerCase();
      this.filteredRestaurants = this.restaurants.filter((restaurant) => {
        const matchesSearch = !searchQuery || restaurant.name.toLowerCase().includes(searchQuery) || restaurant.description.toLowerCase().includes(searchQuery) || restaurant.address.toLowerCase().includes(searchQuery);
        const matchesCuisine = this.selectedCuisine === "all" || this.simulateCuisineMatch(restaurant, this.selectedCuisine);
        return matchesSearch && matchesCuisine;
      });
    }
    this.sortRestaurants();
  }
  filterByCuisine(cuisine) {
    this.selectedCuisine = cuisine;
    this.filterRestaurants();
    this.cdr.markForCheck();
  }
  sortRestaurants() {
    if (this.filteredRestaurants.length <= 1)
      return;
    switch (this.sortOption) {
      case "name":
        this.filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        this.filteredRestaurants.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "deliveryFee":
        this.filteredRestaurants.sort((a, b) => a.deliveryFee - b.deliveryFee);
        break;
      case "deliveryFeeDesc":
        this.filteredRestaurants.sort((a, b) => b.deliveryFee - a.deliveryFee);
        break;
      default:
        this.filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedCuisine = "all";
    this.sortOption = "name";
    this.filteredRestaurants = [...this.restaurants];
    if (this.filteredRestaurants.length > 1) {
      this.sortRestaurants();
    }
    this.cdr.markForCheck();
  }
  // Helper methods to simulate data we don't have in the API
  generateRandomRating() {
    return (4 + Math.random()).toFixed(1);
  }
  getRandomTags() {
    const numTags = 2 + Math.floor(Math.random() * 2);
    const shuffled = [...this.availableTags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numTags);
  }
  simulateCuisineMatch(restaurant, cuisine) {
    const name = restaurant.name.toLowerCase();
    switch (cuisine) {
      case "italian":
        return name.includes("pizza") || name.includes("italian") || name.includes("pasta");
      case "asian":
        return name.includes("sushi") || name.includes("wok") || name.includes("asian") || name.includes("chinese");
      case "mexican":
        return name.includes("taco") || name.includes("mexican") || name.includes("burrito");
      case "american":
        return name.includes("burger") || name.includes("grill") || name.includes("american");
      default:
        return false;
    }
  }
  static \u0275fac = function RestaurantListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantListComponent)(\u0275\u0275directiveInject(RestaurantService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantListComponent, selectors: [["app-restaurant-list"]], decls: 72, vars: 15, consts: [[1, "restaurant-list-container"], [1, "restaurant-hero"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "search-container"], [1, "input-group"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search restaurants...", 1, "form-control", "border-start-0", 3, "ngModelChange", "input", "ngModel"], ["type", "button", 1, "btn", "btn-primary"], [1, "col-lg-6", "d-none", "d-lg-block"], ["src", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", "alt", "Restaurant", "width", "600", "height", "400", "loading", "eager", "fetchpriority", "high", 1, "img-fluid", "restaurant-hero-img"], [1, "filters-section"], [1, "filters-wrapper"], [1, "row"], [1, "col-md-4", "mb-3", "mb-md-0"], [1, "form-floating"], ["id", "sortOption", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "name"], ["value", "nameDesc"], ["value", "deliveryFee"], ["value", "deliveryFeeDesc"], ["for", "sortOption"], [1, "fas", "fa-sort", "me-2"], [1, "col-md-8"], [1, "cuisine-filters"], [1, "btn", "btn-outline-secondary", "cuisine-btn", 3, "click"], [1, "fas", "fa-pizza-slice"], [1, "fas", "fa-utensils"], [1, "fas", "fa-pepper-hot"], [1, "fas", "fa-hamburger"], [1, "restaurants-section"], ["class", "alert alert-custom", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "col-md-6", "col-lg-4", "mb-4"], [1, "cta-section"], [1, "container", "text-center"], [1, "row", "justify-content-center"], [1, "mb-4"], [1, "input-group", "mb-3"], ["type", "email", "placeholder", "Your email address", 1, "form-control"], ["type", "button", 1, "btn", "btn-light"], [1, "alert", "alert-custom"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "text-center", "my-5"], [1, "spinner-wrapper"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"], [1, "empty-state"], [1, "empty-state-icon"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-redo", "me-2"], [1, "restaurant-card"], [1, "restaurant-image"], ["src", "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop", "width", "400", "height", "300", "loading", "lazy", 1, "img-fluid", 3, "alt"], [1, "restaurant-badge"], [1, "fas", "fa-star"], ["class", "free-delivery-tag", 4, "ngIf"], [1, "restaurant-content"], [1, "restaurant-description"], [1, "restaurant-meta"], [1, "meta-item"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone-alt"], [1, "fas", "fa-truck"], [4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "restaurant-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-view-menu", 3, "click"], [1, "fas", "fa-utensils", "me-2"], [1, "free-delivery-tag"], [1, "fas", "fa-shipping-fast", "me-1"], [1, "text-success"], [1, "tag"]], template: function RestaurantListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
      \u0275\u0275text(6, "Discover Amazing Restaurants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Explore our curated selection of restaurants and enjoy delicious meals delivered to your doorstep");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "span", 7);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function RestaurantListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function RestaurantListComponent_Template_input_input_13_listener($event) {
        return ctx.onSearchInput($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275text(15, "Search");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275element(17, "img", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "section", 13)(19, "div", 2)(20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function RestaurantListComponent_Template_select_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortOption, $event) || (ctx.sortOption = $event);
        return $event;
      });
      \u0275\u0275listener("change", function RestaurantListComponent_Template_select_change_24_listener() {
        return ctx.sortRestaurants();
      });
      \u0275\u0275elementStart(25, "option", 19);
      \u0275\u0275text(26, "Name (A-Z)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 20);
      \u0275\u0275text(28, "Name (Z-A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 21);
      \u0275\u0275text(30, "Delivery Fee (Low to High)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 22);
      \u0275\u0275text(32, "Delivery Fee (High to Low)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "label", 23);
      \u0275\u0275element(34, "i", 24);
      \u0275\u0275text(35, "Sort By");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 25)(37, "div", 26)(38, "button", 27);
      \u0275\u0275listener("click", function RestaurantListComponent_Template_button_click_38_listener() {
        return ctx.filterByCuisine("all");
      });
      \u0275\u0275text(39, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 27);
      \u0275\u0275listener("click", function RestaurantListComponent_Template_button_click_40_listener() {
        return ctx.filterByCuisine("italian");
      });
      \u0275\u0275element(41, "i", 28);
      \u0275\u0275text(42, " Italian ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 27);
      \u0275\u0275listener("click", function RestaurantListComponent_Template_button_click_43_listener() {
        return ctx.filterByCuisine("asian");
      });
      \u0275\u0275element(44, "i", 29);
      \u0275\u0275text(45, " Asian ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 27);
      \u0275\u0275listener("click", function RestaurantListComponent_Template_button_click_46_listener() {
        return ctx.filterByCuisine("mexican");
      });
      \u0275\u0275element(47, "i", 30);
      \u0275\u0275text(48, " Mexican ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 27);
      \u0275\u0275listener("click", function RestaurantListComponent_Template_button_click_49_listener() {
        return ctx.filterByCuisine("american");
      });
      \u0275\u0275element(50, "i", 31);
      \u0275\u0275text(51, " American ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(52, "section", 32)(53, "div", 2);
      \u0275\u0275template(54, RestaurantListComponent_div_54_Template, 3, 1, "div", 33)(55, RestaurantListComponent_div_55_Template, 7, 0, "div", 34)(56, RestaurantListComponent_div_56_Template, 10, 0, "div", 35);
      \u0275\u0275elementStart(57, "div", 15);
      \u0275\u0275repeaterCreate(58, RestaurantListComponent_For_59_Template, 31, 10, "div", 36, ctx.trackByRestaurant, true);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "section", 37)(61, "div", 38)(62, "div", 39)(63, "div", 25)(64, "h2");
      \u0275\u0275text(65, "Can't find what you're looking for?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p", 40);
      \u0275\u0275text(67, "We're constantly adding new restaurants to our platform. Sign up to get notified when new options become available!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 41);
      \u0275\u0275element(69, "input", 42);
      \u0275\u0275elementStart(70, "button", 43);
      \u0275\u0275text(71, "Notify Me");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortOption);
      \u0275\u0275advance(14);
      \u0275\u0275classProp("active", ctx.selectedCuisine === "all");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedCuisine === "italian");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.selectedCuisine === "asian");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.selectedCuisine === "mexican");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.selectedCuisine === "american");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredRestaurants.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filteredRestaurants);
    }
  }, dependencies: [SharedModule, NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, FormsModule], styles: ['\n\n.restaurant-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070) no-repeat center;\n  background-attachment: scroll;\n  background-size: cover;\n  color: white;\n  padding: 100px 0 80px;\n  position: relative;\n  margin-top: -76px;\n}\n.restaurant-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.restaurant-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n  max-width: 600px;\n}\n.restaurant-hero-img[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);\n}\n.search-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin-top: 30px;\n}\n.search-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  border-radius: 50px;\n  overflow: hidden;\n}\n.search-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], \n.search-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  height: 54px;\n  font-size: 1rem;\n}\n.search-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #666;\n}\n.search-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.search-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0 50px 50px 0;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-weight: 600;\n}\n.filters-section[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 20px 0;\n  margin-bottom: 30px;\n}\n.filters-wrapper[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-radius: 15px;\n  padding: 20px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n}\n.form-floating[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.cuisine-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  .cuisine-filters[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n}\n.cuisine-filters[_ngcontent-%COMP%]   .cuisine-btn[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 8px 16px;\n  transition: all 0.2s;\n}\n.cuisine-filters[_ngcontent-%COMP%]   .cuisine-btn[_ngcontent-%COMP%]:hover, \n.cuisine-filters[_ngcontent-%COMP%]   .cuisine-btn.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color);\n}\n.cuisine-filters[_ngcontent-%COMP%]   .cuisine-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.restaurants-section[_ngcontent-%COMP%] {\n  padding: 30px 0 80px;\n  background-color: #fff;\n}\n.restaurant-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.restaurant-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n.restaurant-image[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.restaurant-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  will-change: transform;\n  transition: transform 0.3s ease;\n}\n.restaurant-card[_ngcontent-%COMP%]:hover   .restaurant-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.restaurant-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.restaurant-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffc107;\n  margin-right: 5px;\n  font-size: 0.9rem;\n}\n.free-delivery-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);\n}\n.restaurant-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.restaurant-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n  color: #333;\n}\n.restaurant-content[_ngcontent-%COMP%]   .restaurant-description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #666;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  height: 3em;\n}\n.restaurant-meta[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.restaurant-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.restaurant-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  margin-right: 8px;\n  margin-top: 3px;\n  font-size: 0.85rem;\n}\n.restaurant-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.restaurant-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-bottom: 15px;\n}\n.restaurant-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background-color: rgba(255, 107, 107, 0.1);\n  color: var(--primary-color);\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  border-radius: 15px;\n  display: inline-block;\n}\n.btn-view-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px 15px;\n  font-weight: 500;\n  width: 100%;\n}\n.btn-view-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 0;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ccc;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n  color: #555;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777;\n  margin-bottom: 20px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.spinner-wrapper[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.spinner-wrapper[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.spinner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n.alert-custom[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n  border: none;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n.alert-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-right: 10px;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070) no-repeat center center;\n  background-size: cover;\n  color: white;\n  padding: 80px 0;\n  position: relative;\n}\n.cta-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50px;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background:\n    linear-gradient(\n      to bottom right,\n      transparent 0%,\n      transparent 50%,\n      #fff 50%,\n      #fff 100%);\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n}\n.cta-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n  border-radius: 50px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n.cta-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  height: 50px;\n  padding-left: 20px;\n}\n.cta-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0 50px 50px 0;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-weight: 600;\n}\n@media (max-width: 991.98px) {\n  .restaurant-hero[_ngcontent-%COMP%] {\n    padding: 100px 0 60px;\n  }\n  .restaurant-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .restaurant-hero[_ngcontent-%COMP%] {\n    padding: 80px 0 40px;\n    text-align: center;\n  }\n  .restaurant-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .cuisine-filters[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=restaurant-list.component-7DY5YYUW.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantListComponent, [{
    type: Component,
    args: [{ selector: "app-restaurant-list", standalone: true, imports: [SharedModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="restaurant-list-container">\r
  <!-- Hero Section -->\r
  <section class="restaurant-hero">\r
    <div class="container">\r
      <div class="row align-items-center">\r
        <div class="col-lg-6">\r
          <h1>Discover Amazing Restaurants</h1>\r
          <p>Explore our curated selection of restaurants and enjoy delicious meals delivered to your doorstep</p>\r
          \r
          <!-- Search Bar -->\r
          <div class="search-container">\r
            <div class="input-group">\r
              <span class="input-group-text bg-white border-end-0">\r
                <i class="fas fa-search"></i>\r
              </span>\r
              <input type="text" class="form-control border-start-0" placeholder="Search restaurants..." [(ngModel)]="searchQuery" (input)="onSearchInput($event)">\r
              <button class="btn btn-primary" type="button">Search</button>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-lg-6 d-none d-lg-block">\r
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Restaurant" class="img-fluid restaurant-hero-img" width="600" height="400" loading="eager" fetchpriority="high">\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
  \r
  <!-- Filters Section -->\r
  <section class="filters-section">\r
    <div class="container">\r
      <div class="filters-wrapper">\r
        <div class="row">\r
          <div class="col-md-4 mb-3 mb-md-0">\r
            <div class="form-floating">\r
              <select class="form-select" id="sortOption" [(ngModel)]="sortOption" (change)="sortRestaurants()">\r
                <option value="name">Name (A-Z)</option>\r
                <option value="nameDesc">Name (Z-A)</option>\r
                <option value="deliveryFee">Delivery Fee (Low to High)</option>\r
                <option value="deliveryFeeDesc">Delivery Fee (High to Low)</option>\r
              </select>\r
              <label for="sortOption"><i class="fas fa-sort me-2"></i>Sort By</label>\r
            </div>\r
          </div>\r
          \r
          <div class="col-md-8">\r
            <div class="cuisine-filters">\r
              <button class="btn btn-outline-secondary cuisine-btn" [class.active]="selectedCuisine === 'all'" (click)="filterByCuisine('all')">\r
                All\r
              </button>\r
              <button class="btn btn-outline-secondary cuisine-btn" [class.active]="selectedCuisine === 'italian'" (click)="filterByCuisine('italian')">\r
                <i class="fas fa-pizza-slice"></i> Italian\r
              </button>\r
              <button class="btn btn-outline-secondary cuisine-btn" [class.active]="selectedCuisine === 'asian'" (click)="filterByCuisine('asian')">\r
                <i class="fas fa-utensils"></i> Asian\r
              </button>\r
              <button class="btn btn-outline-secondary cuisine-btn" [class.active]="selectedCuisine === 'mexican'" (click)="filterByCuisine('mexican')">\r
                <i class="fas fa-pepper-hot"></i> Mexican\r
              </button>\r
              <button class="btn btn-outline-secondary cuisine-btn" [class.active]="selectedCuisine === 'american'" (click)="filterByCuisine('american')">\r
                <i class="fas fa-hamburger"></i> American\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
  \r
  <!-- Restaurant List -->\r
  <section class="restaurants-section">\r
    <div class="container">\r
      <div *ngIf="errorMessage" class="alert alert-custom">\r
        <i class="fas fa-exclamation-circle me-2"></i> {{ errorMessage }}\r
      </div>\r
      \r
      <div *ngIf="isLoading" class="text-center my-5">\r
        <div class="spinner-wrapper">\r
          <div class="spinner-border text-primary" role="status">\r
            <span class="visually-hidden">Loading...</span>\r
          </div>\r
          <p class="mt-3">Finding the best restaurants for you...</p>\r
        </div>\r
      </div>\r
      \r
      <div *ngIf="!isLoading && filteredRestaurants.length === 0" class="empty-state">\r
        <div class="empty-state-icon">\r
          <i class="fas fa-utensils"></i>\r
        </div>\r
        <h3>No Restaurants Found</h3>\r
        <p>We couldn't find any restaurants matching your criteria. Try adjusting your search or filters.</p>\r
        <button class="btn btn-primary" (click)="resetFilters()">\r
          <i class="fas fa-redo me-2"></i> Reset Filters\r
        </button>\r
      </div>\r
      \r
      <div class="row">\r
        @for (restaurant of filteredRestaurants; track trackByRestaurant($index, restaurant)) {\r
          <div class="col-md-6 col-lg-4 mb-4">\r
            <div class="restaurant-card">\r
              <div class="restaurant-image">\r
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" width="400" height="300" class="img-fluid" alt="{{ restaurant.name }}" loading="lazy">\r
                <div class="restaurant-badge">\r
                  <i class="fas fa-star"></i> {{ restaurant.rating }}\r
                </div>\r
                <div *ngIf="restaurant.deliveryFee === 0" class="free-delivery-tag">\r
                  <i class="fas fa-shipping-fast me-1"></i> Free Delivery\r
                </div>\r
              </div>\r
              <div class="restaurant-content">\r
                <h3>{{ restaurant.name }}</h3>\r
                <p class="restaurant-description">{{ restaurant.description }}</p>\r
                <div class="restaurant-meta">\r
                  <div class="meta-item">\r
                    <i class="fas fa-map-marker-alt"></i>\r
                    <span>{{ restaurant.address }}</span>\r
                  </div>\r
                  <div class="meta-item">\r
                    <i class="fas fa-phone-alt"></i>\r
                    <span>{{ restaurant.phoneNumber }}</span>\r
                  </div>\r
                  <div class="meta-item">\r
                    <i class="fas fa-truck"></i>\r
                    <span *ngIf="restaurant.deliveryFee > 0">Delivery: \${{ restaurant.deliveryFee.toFixed(2) }}</span>\r
                    <span *ngIf="restaurant.deliveryFee === 0" class="text-success">Free Delivery</span>\r
                  </div>\r
                </div>\r
                <div class="restaurant-tags">\r
                  <span class="tag" *ngFor="let tag of restaurant.tags">{{ tag }}</span>\r
                </div>\r
                <button class="btn btn-primary btn-view-menu" (click)="viewRestaurant(restaurant.id!)">\r
                  <i class="fas fa-utensils me-2"></i> View Menu\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </section>\r
  \r
  <!-- CTA Section -->\r
  <section class="cta-section">\r
    <div class="container text-center">\r
      <div class="row justify-content-center">\r
        <div class="col-md-8">\r
          <h2>Can't find what you're looking for?</h2>\r
          <p class="mb-4">We're constantly adding new restaurants to our platform. Sign up to get notified when new options become available!</p>\r
          <div class="input-group mb-3">\r
            <input type="email" class="form-control" placeholder="Your email address">\r
            <button class="btn btn-light" type="button">Notify Me</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div> `, styles: ['/* src/app/features/restaurants/restaurant-list/restaurant-list.component.scss */\n.restaurant-hero {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070) no-repeat center;\n  background-attachment: scroll;\n  background-size: cover;\n  color: white;\n  padding: 100px 0 80px;\n  position: relative;\n  margin-top: -76px;\n}\n.restaurant-hero h1 {\n  font-size: 3rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.restaurant-hero p {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n  max-width: 600px;\n}\n.restaurant-hero-img {\n  border-radius: 20px;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);\n}\n.search-container {\n  max-width: 500px;\n  margin-top: 30px;\n}\n.search-container .input-group {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  border-radius: 50px;\n  overflow: hidden;\n}\n.search-container .input-group .input-group-text,\n.search-container .input-group .form-control {\n  border: none;\n  height: 54px;\n  font-size: 1rem;\n}\n.search-container .input-group .input-group-text {\n  background-color: white;\n  color: #666;\n}\n.search-container .input-group .form-control:focus {\n  box-shadow: none;\n}\n.search-container .input-group .btn {\n  border-radius: 0 50px 50px 0;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-weight: 600;\n}\n.filters-section {\n  background-color: white;\n  padding: 20px 0;\n  margin-bottom: 30px;\n}\n.filters-wrapper {\n  background-color: #f8f9fa;\n  border-radius: 15px;\n  padding: 20px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n}\n.form-floating .form-select {\n  border-radius: 10px;\n}\n.cuisine-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  .cuisine-filters {\n    justify-content: flex-end;\n  }\n}\n.cuisine-filters .cuisine-btn {\n  border-radius: 30px;\n  padding: 8px 16px;\n  transition: all 0.2s;\n}\n.cuisine-filters .cuisine-btn:hover,\n.cuisine-filters .cuisine-btn.active {\n  background-color: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color);\n}\n.cuisine-filters .cuisine-btn i {\n  margin-right: 5px;\n}\n.restaurants-section {\n  padding: 30px 0 80px;\n  background-color: #fff;\n}\n.restaurant-card {\n  background-color: white;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.restaurant-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n.restaurant-image {\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.restaurant-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  will-change: transform;\n  transition: transform 0.3s ease;\n}\n.restaurant-card:hover .restaurant-image img {\n  transform: scale(1.03);\n}\n.restaurant-badge {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.restaurant-badge i {\n  color: #ffc107;\n  margin-right: 5px;\n  font-size: 0.9rem;\n}\n.free-delivery-tag {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);\n}\n.restaurant-content {\n  padding: 20px;\n}\n.restaurant-content h3 {\n  font-size: 1.35rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n  color: #333;\n}\n.restaurant-content .restaurant-description {\n  font-size: 0.95rem;\n  color: #666;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  height: 3em;\n}\n.restaurant-meta {\n  margin-bottom: 15px;\n}\n.restaurant-meta .meta-item {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.restaurant-meta .meta-item i {\n  color: var(--primary-color);\n  margin-right: 8px;\n  margin-top: 3px;\n  font-size: 0.85rem;\n}\n.restaurant-meta .meta-item span {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.restaurant-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-bottom: 15px;\n}\n.restaurant-tags .tag {\n  background-color: rgba(255, 107, 107, 0.1);\n  color: var(--primary-color);\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  border-radius: 15px;\n  display: inline-block;\n}\n.btn-view-menu {\n  border-radius: 8px;\n  padding: 10px 15px;\n  font-weight: 500;\n  width: 100%;\n}\n.btn-view-menu i {\n  margin-right: 5px;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 0;\n}\n.empty-state .empty-state-icon {\n  font-size: 3rem;\n  color: #ccc;\n  margin-bottom: 20px;\n}\n.empty-state h3 {\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n  color: #555;\n}\n.empty-state p {\n  color: #777;\n  margin-bottom: 20px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.spinner-wrapper {\n  padding: 50px 0;\n}\n.spinner-wrapper .spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n.spinner-wrapper p {\n  color: #666;\n}\n.alert-custom {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n  border: none;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n.alert-custom i {\n  font-size: 1.25rem;\n  margin-right: 10px;\n}\n.cta-section {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070) no-repeat center center;\n  background-size: cover;\n  color: white;\n  padding: 80px 0;\n  position: relative;\n}\n.cta-section::before {\n  content: "";\n  position: absolute;\n  top: -50px;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background:\n    linear-gradient(\n      to bottom right,\n      transparent 0%,\n      transparent 50%,\n      #fff 50%,\n      #fff 100%);\n}\n.cta-section h2 {\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.cta-section p {\n  font-size: 1.1rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n}\n.cta-section .input-group {\n  max-width: 500px;\n  margin: 0 auto;\n  border-radius: 50px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n.cta-section .input-group .form-control {\n  border: none;\n  height: 50px;\n  padding-left: 20px;\n}\n.cta-section .input-group .btn {\n  border-radius: 0 50px 50px 0;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-weight: 600;\n}\n@media (max-width: 991.98px) {\n  .restaurant-hero {\n    padding: 100px 0 60px;\n  }\n  .restaurant-hero h1 {\n    font-size: 2.5rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .restaurant-hero {\n    padding: 80px 0 40px;\n    text-align: center;\n  }\n  .restaurant-hero h1 {\n    font-size: 2rem;\n  }\n  .search-container {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .cuisine-filters {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=restaurant-list.component-7DY5YYUW.css.map */\n'] }]
  }], () => [{ type: RestaurantService }, { type: Router }, { type: NgZone }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantListComponent, { className: "RestaurantListComponent", filePath: "src/app/features/restaurants/restaurant-list/restaurant-list.component.ts", lineNumber: 22 });
})();
export {
  RestaurantListComponent
};
//# sourceMappingURL=chunk-FCMUV5WD.js.map
