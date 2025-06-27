import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  catchError,
  environment,
  map,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UXXDM6C4.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  http;
  cartItems = [];
  cartSubject = new BehaviorSubject([]);
  restaurantIdSubject = new BehaviorSubject(null);
  activeOrderIdSubject = new BehaviorSubject(null);
  apiUrl = `${environment.apiUrl}/orders`;
  constructor(http) {
    this.http = http;
    this.loadCart();
  }
  get items$() {
    return this.cartSubject.asObservable();
  }
  get restaurantId$() {
    return this.restaurantIdSubject.asObservable();
  }
  get activeOrderId$() {
    return this.activeOrderIdSubject.asObservable();
  }
  get currentRestaurantId() {
    return this.restaurantIdSubject.value;
  }
  get currentActiveOrderId() {
    return this.activeOrderIdSubject.value;
  }
  get totalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  get totalPrice() {
    return this.cartItems.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
  }
  loadCart() {
    const savedCart = localStorage.getItem("cart");
    const savedRestaurantId = localStorage.getItem("restaurantId");
    const savedActiveOrderId = localStorage.getItem("activeOrderId");
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next([...this.cartItems]);
    }
    if (savedRestaurantId) {
      this.restaurantIdSubject.next(savedRestaurantId);
    }
    if (savedActiveOrderId) {
      this.activeOrderIdSubject.next(savedActiveOrderId);
    }
  }
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
    if (this.currentRestaurantId) {
      localStorage.setItem("restaurantId", this.currentRestaurantId);
    }
    if (this.currentActiveOrderId) {
      localStorage.setItem("activeOrderId", this.currentActiveOrderId);
    }
    this.cartSubject.next([...this.cartItems]);
  }
  checkActiveOrder(restaurantId) {
    return this.http.get(`${this.apiUrl}/active/restaurant/${restaurantId}`).pipe(map((response) => {
      if (response && response.id) {
        this.activeOrderIdSubject.next(response.id);
        localStorage.setItem("activeOrderId", response.id);
        return true;
      }
      return false;
    }), catchError(() => {
      this.activeOrderIdSubject.next(null);
      localStorage.removeItem("activeOrderId");
      return of(false);
    }));
  }
  setRestaurant(restaurantId) {
    return this.checkActiveOrder(restaurantId).pipe(tap((hasActiveOrder) => {
      if (hasActiveOrder) {
        if (this.currentRestaurantId !== null && this.currentRestaurantId !== restaurantId && this.cartItems.length > 0) {
          if (confirm("Adding items from a different restaurant will clear your current cart. Continue?")) {
            this.clearCart();
          } else {
            return;
          }
        }
        this.restaurantIdSubject.next(restaurantId);
        localStorage.setItem("restaurantId", restaurantId);
      }
    }));
  }
  addToCart(menuItem, quantity = 1, note) {
    if (!this.currentActiveOrderId) {
      alert("There is no active order for this restaurant. Please wait for the manager to start an order.");
      return false;
    }
    const existingItemIndex = this.cartItems.findIndex((item) => item.menuItem.id === menuItem.id);
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += quantity;
      if (note) {
        this.cartItems[existingItemIndex].note = note;
      }
    } else {
      this.cartItems.push({ menuItem, quantity, note });
    }
    this.saveCart();
    return true;
  }
  updateQuantity(menuItemId, quantity) {
    const index = this.cartItems.findIndex((item) => item.menuItem.id === menuItemId);
    if (index !== -1) {
      if (quantity <= 0) {
        this.removeItem(menuItemId);
      } else {
        this.cartItems[index].quantity = quantity;
        this.saveCart();
      }
    }
  }
  updateNote(menuItemId, note) {
    const index = this.cartItems.findIndex((item) => item.menuItem.id === menuItemId);
    if (index !== -1) {
      this.cartItems[index].note = note;
      this.saveCart();
    }
  }
  removeItem(menuItemId) {
    this.cartItems = this.cartItems.filter((item) => item.menuItem.id !== menuItemId);
    this.saveCart();
  }
  clearCart() {
    this.cartItems = [];
    this.restaurantIdSubject.next(null);
    this.activeOrderIdSubject.next(null);
    localStorage.removeItem("cart");
    localStorage.removeItem("restaurantId");
    localStorage.removeItem("activeOrderId");
    this.cartSubject.next([]);
  }
  toOrderItems(orderId) {
    return this.cartItems.map((item) => ({
      menuItemId: item.menuItem.id || "",
      quantity: item.quantity,
      note: item.note || "",
      menuItem: item.menuItem,
      id: "",
      orderId,
      userId: ""
    }));
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CartService
};
//# sourceMappingURL=chunk-SPLCDW3U.js.map
