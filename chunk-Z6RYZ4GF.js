import {
  CartService
} from "./chunk-SPLCDW3U.js";
import {
  RestaurantService
} from "./chunk-QVJF66MH.js";
import {
  OrderService
} from "./chunk-N7XXU6VP.js";
import {
  AuthService
} from "./chunk-P6XRT7RJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-RHXFPPC4.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  forkJoin,
  lastValueFrom,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
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
  __async
} from "./chunk-GMSD7K74.js";

// src/app/features/cart/cart.component.ts
function CartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function CartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function CartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 1);
    \u0275\u0275element(2, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, "Add some delicious food to get started!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 11);
    \u0275\u0275element(8, "i", 12);
    \u0275\u0275text(9, " Browse Restaurants ");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "h6", 35);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275element(5, "i", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.restaurant.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.restaurant.address, " ");
  }
}
function CartComponent_div_6_li_13_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.menuItem.description, " ");
  }
}
function CartComponent_div_6_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 38)(1, "div", 13)(2, "div", 39)(3, "h6", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CartComponent_div_6_li_13_p_5_Template, 2, 1, "p", 40);
    \u0275\u0275elementStart(6, "div", 41)(7, "div", 42)(8, "button", 43);
    \u0275\u0275listener("click", function CartComponent_div_6_li_13_Template_button_click_8_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateQuantity(item_r4, item_r4.quantity - 1));
    });
    \u0275\u0275element(9, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_div_6_li_13_Template_input_ngModelChange_10_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(item_r4.quantity, $event) || (item_r4.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CartComponent_div_6_li_13_Template_input_change_10_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateQuantity(item_r4, item_r4.quantity));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 46);
    \u0275\u0275listener("click", function CartComponent_div_6_li_13_Template_button_click_11_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateQuantity(item_r4, item_r4.quantity + 1));
    });
    \u0275\u0275element(12, "i", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 48)(14, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_div_6_li_13_Template_input_ngModelChange_14_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(item_r4.note, $event) || (item_r4.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CartComponent_div_6_li_13_Template_input_blur_14_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateNote(item_r4, item_r4.note || ""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 50);
    \u0275\u0275text(16, "Special instructions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 51)(18, "p", 52);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 53);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 54)(23, "button", 19);
    \u0275\u0275listener("click", function CartComponent_div_6_li_13_Template_button_click_23_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeItem(item_r4));
    });
    \u0275\u0275element(24, "i", 55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.menuItem.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.menuItem.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", item_r4.quantity <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r4.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("id", "note-", item_r4.menuItem.id, "");
    \u0275\u0275twoWayProperty("ngModel", item_r4.note);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "note-", item_r4.menuItem.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", (item_r4.menuItem.price * item_r4.quantity).toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", item_r4.menuItem.price.toFixed(2), " each");
  }
}
function CartComponent_div_6_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Checkout");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_div_6_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 57);
    \u0275\u0275text(2, " Processing... ");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_div_6_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2, " You'll need to log in before checkout ");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "h5", 17);
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275text(6, " Cart Items ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function CartComponent_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearCart());
    });
    \u0275\u0275element(8, "i", 20);
    \u0275\u0275text(9, " Clear Cart ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275template(11, CartComponent_div_6_div_11_Template, 7, 2, "div", 22);
    \u0275\u0275elementStart(12, "ul", 23);
    \u0275\u0275template(13, CartComponent_div_6_li_13_Template, 25, 11, "li", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 25)(15, "div", 15)(16, "div", 26)(17, "h5", 17);
    \u0275\u0275text(18, "Order Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 27)(20, "div", 28)(21, "span");
    \u0275\u0275text(22, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 28)(26, "span");
    \u0275\u0275text(27, "Delivery Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "hr");
    \u0275\u0275elementStart(31, "div", 29)(32, "span");
    \u0275\u0275text(33, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 30);
    \u0275\u0275listener("click", function CartComponent_div_6_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkout());
    });
    \u0275\u0275element(37, "i", 31);
    \u0275\u0275template(38, CartComponent_div_6_span_38_Template, 2, 0, "span", 32)(39, CartComponent_div_6_span_39_Template, 3, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, CartComponent_div_6_div_40_Template, 3, 0, "div", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.restaurant);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.cartItems);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("$", ctx_r0.subtotal.toFixed(2), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r0.deliveryFee.toFixed(2), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", ctx_r0.total.toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmitting || ctx_r0.cartItems.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.authService.isLoggedIn);
  }
}
var CartComponent = class _CartComponent {
  cartService;
  orderService;
  authService;
  restaurantService;
  router;
  cartItems = [];
  restaurant = null;
  isLoading = false;
  isSubmitting = false;
  errorMessage = "";
  activeOrderId = null;
  destroy$ = new Subject();
  constructor(cartService, orderService, authService, restaurantService, router) {
    this.cartService = cartService;
    this.orderService = orderService;
    this.authService = authService;
    this.restaurantService = restaurantService;
    this.router = router;
  }
  ngOnInit() {
    this.cartService.items$.pipe(takeUntil(this.destroy$)).subscribe((items) => {
      this.cartItems = items;
    });
    this.cartService.activeOrderId$.pipe(takeUntil(this.destroy$)).subscribe((id) => {
      this.activeOrderId = id;
    });
    this.loadRestaurantDetails();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadRestaurantDetails() {
    const restaurantId = this.cartService.currentRestaurantId;
    if (restaurantId) {
      this.isLoading = true;
      this.restaurantService.getById(restaurantId).subscribe({
        next: (restaurant) => {
          this.restaurant = restaurant;
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Error loading restaurant details", error);
          this.errorMessage = "Could not load restaurant details";
          this.isLoading = false;
        }
      });
    }
  }
  updateQuantity(item, quantity) {
    if (item.menuItem.id) {
      this.cartService.updateQuantity(item.menuItem.id, quantity);
    }
  }
  updateNote(item, note) {
    if (item.menuItem.id) {
      this.cartService.updateNote(item.menuItem.id, note);
    }
  }
  removeItem(item) {
    if (item.menuItem.id && confirm("Are you sure you want to remove this item?")) {
      this.cartService.removeItem(item.menuItem.id);
    }
  }
  clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
      this.cartService.clearCart();
    }
  }
  checkout() {
    return __async(this, null, function* () {
      if (!this.authService.isLoggedIn) {
        this.router.navigate(["/auth/login"], { queryParams: { returnUrl: "/cart" } });
        return;
      }
      if (this.cartItems.length === 0) {
        this.errorMessage = "Your cart is empty";
        return;
      }
      this.isSubmitting = true;
      this.errorMessage = "";
      const restaurantId = this.cartService.currentRestaurantId;
      if (!restaurantId) {
        this.errorMessage = "Restaurant information is missing";
        this.isSubmitting = false;
        return;
      }
      if (!this.activeOrderId) {
        this.errorMessage = "No active order found for this restaurant";
        this.isSubmitting = false;
        return;
      }
      try {
        const orderItems = this.cartService.toOrderItems(this.activeOrderId);
        const observables = orderItems.map((item) => {
          return this.orderService.addOrderItem(item);
        });
        yield lastValueFrom(forkJoin(observables));
        this.isSubmitting = false;
        this.cartService.clearCart();
        this.router.navigate(["/orders", this.activeOrderId]);
      } catch (error) {
        console.error("Error adding items to order", error);
        this.errorMessage = "Failed to add items to order. Please try again.";
        this.isSubmitting = false;
      }
    });
  }
  get subtotal() {
    return this.cartItems.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
  }
  get deliveryFee() {
    return this.restaurant?.deliveryFee || 0;
  }
  get total() {
    return this.subtotal + this.deliveryFee;
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RestaurantService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 7, vars: 4, consts: [[1, "container", "py-4"], [1, "mb-4"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "text-center", "my-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "bi", "bi-cart-x", 2, "font-size", "5rem", "color", "#ccc"], [1, "text-muted"], ["routerLink", "/restaurants", 1, "btn", "btn-primary", "mt-3"], [1, "bi", "bi-shop", "me-2"], [1, "row"], [1, "col-lg-8"], [1, "card", "shadow-sm", "mb-4"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "bi", "bi-cart", "me-2"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash", "me-1"], [1, "card-body", "p-0"], ["class", "p-3 border-bottom", 4, "ngIf"], [1, "list-group", "list-group-flush"], ["class", "list-group-item p-3", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card-header", "bg-light"], [1, "card-body"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "justify-content-between", "mb-3", "fw-bold"], [1, "btn", "btn-primary", "w-100", 3, "click", "disabled"], [1, "bi", "bi-bag-check", "me-2"], [4, "ngIf"], ["class", "mt-3 small text-muted", 4, "ngIf"], [1, "p-3", "border-bottom"], [1, "mb-1"], [1, "mb-0", "small", "text-muted"], [1, "bi", "bi-geo-alt", "me-1"], [1, "list-group-item", "p-3"], [1, "col-md-7"], ["class", "text-muted mb-1 small", 4, "ngIf"], [1, "mb-2"], [1, "input-group", "input-group-sm", 2, "max-width", "150px"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-dash"], ["type", "number", "min", "1", "max", "99", 1, "form-control", "text-center", 3, "ngModelChange", "change", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-plus"], [1, "form-floating", "mb-2"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModelChange", "blur", "id", "ngModel"], [3, "for"], [1, "col-md-3", "text-end"], [1, "mb-0", "fw-bold"], [1, "text-muted", "small", "mb-0"], [1, "col-md-2", "text-end"], [1, "bi", "bi-trash"], [1, "text-muted", "mb-1", "small"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "mt-3", "small", "text-muted"], [1, "bi", "bi-info-circle", "me-1"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Your Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CartComponent_div_3_Template, 2, 1, "div", 2)(4, CartComponent_div_4_Template, 4, 0, "div", 3)(5, CartComponent_div_5_Template, 10, 0, "div", 3)(6, CartComponent_div_6_Template, 41, 9, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.cartItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.cartItems.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, RouterModule, RouterLink], styles: ["\n\n.form-control-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.form-floating[_ngcontent-%COMP%]    > .form-control-sm[_ngcontent-%COMP%] {\n  height: calc(2.5rem + 2px);\n  padding-top: 1rem;\n  padding-bottom: 0.25rem;\n}\n.form-floating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n}\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 0;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n}\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=cart.component-ZNZCPMQC.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: '<div class="container py-4">\r\n  <h1 class="mb-4">Your Cart</h1>\r\n  \r\n  <div *ngIf="errorMessage" class="alert alert-danger">\r\n    {{ errorMessage }}\r\n  </div>\r\n  \r\n  <div *ngIf="isLoading" class="text-center my-5">\r\n    <div class="spinner-border" role="status">\r\n      <span class="visually-hidden">Loading...</span>\r\n    </div>\r\n  </div>\r\n  \r\n  <div *ngIf="!isLoading && cartItems.length === 0" class="text-center my-5">\r\n    <div class="mb-4">\r\n      <i class="bi bi-cart-x" style="font-size: 5rem; color: #ccc;"></i>\r\n    </div>\r\n    <h3>Your cart is empty</h3>\r\n    <p class="text-muted">Add some delicious food to get started!</p>\r\n    <a routerLink="/restaurants" class="btn btn-primary mt-3">\r\n      <i class="bi bi-shop me-2"></i> Browse Restaurants\r\n    </a>\r\n  </div>\r\n  \r\n  <div *ngIf="!isLoading && cartItems.length > 0" class="row">\r\n    <div class="col-lg-8">\r\n      <div class="card shadow-sm mb-4">\r\n        <div class="card-header bg-light d-flex justify-content-between align-items-center">\r\n          <h5 class="mb-0">\r\n            <i class="bi bi-cart me-2"></i> Cart Items\r\n          </h5>\r\n          <button class="btn btn-sm btn-outline-danger" (click)="clearCart()">\r\n            <i class="bi bi-trash me-1"></i> Clear Cart\r\n          </button>\r\n        </div>\r\n        <div class="card-body p-0">\r\n          <div *ngIf="restaurant" class="p-3 border-bottom">\r\n            <h6 class="mb-1">\r\n              <i class="bi bi-shop me-2"></i> {{ restaurant.name }}\r\n            </h6>\r\n            <p class="mb-0 small text-muted">\r\n              <i class="bi bi-geo-alt me-1"></i> {{ restaurant.address }}\r\n            </p>\r\n          </div>\r\n          \r\n          <ul class="list-group list-group-flush">\r\n            <li class="list-group-item p-3" *ngFor="let item of cartItems">\r\n              <div class="row">\r\n                <div class="col-md-7">\r\n                  <h6 class="mb-1">{{ item.menuItem.name }}</h6>\r\n                  <p class="text-muted mb-1 small" *ngIf="item.menuItem.description">\r\n                    {{ item.menuItem.description }}\r\n                  </p>\r\n                  <div class="mb-2">\r\n                    <div class="input-group input-group-sm" style="max-width: 150px;">\r\n                      <button class="btn btn-outline-secondary" type="button" \r\n                        [disabled]="item.quantity <= 1"\r\n                        (click)="updateQuantity(item, item.quantity - 1)">\r\n                        <i class="bi bi-dash"></i>\r\n                      </button>\r\n                      <input type="number" class="form-control text-center" \r\n                        [(ngModel)]="item.quantity" \r\n                        (change)="updateQuantity(item, item.quantity)"\r\n                        min="1" max="99">\r\n                      <button class="btn btn-outline-secondary" type="button" \r\n                        (click)="updateQuantity(item, item.quantity + 1)">\r\n                        <i class="bi bi-plus"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-floating mb-2">\r\n                    <input type="text" class="form-control form-control-sm" \r\n                      id="note-{{item.menuItem.id}}" \r\n                      [(ngModel)]="item.note" \r\n                      (blur)="updateNote(item, item.note || \'\')">\r\n                    <label for="note-{{item.menuItem.id}}">Special instructions</label>\r\n                  </div>\r\n                </div>\r\n                <div class="col-md-3 text-end">\r\n                  <p class="mb-0 fw-bold">${{ (item.menuItem.price * item.quantity).toFixed(2) }}</p>\r\n                  <p class="text-muted small mb-0">${{ item.menuItem.price.toFixed(2) }} each</p>\r\n                </div>\r\n                <div class="col-md-2 text-end">\r\n                  <button class="btn btn-sm btn-outline-danger" (click)="removeItem(item)">\r\n                    <i class="bi bi-trash"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class="col-lg-4">\r\n      <div class="card shadow-sm mb-4">\r\n        <div class="card-header bg-light">\r\n          <h5 class="mb-0">Order Summary</h5>\r\n        </div>\r\n        <div class="card-body">\r\n          <div class="d-flex justify-content-between mb-2">\r\n            <span>Subtotal</span>\r\n            <span>${{ subtotal.toFixed(2) }}</span>\r\n          </div>\r\n          <div class="d-flex justify-content-between mb-2">\r\n            <span>Delivery Fee</span>\r\n            <span>${{ deliveryFee.toFixed(2) }}</span>\r\n          </div>\r\n          <hr>\r\n          <div class="d-flex justify-content-between mb-3 fw-bold">\r\n            <span>Total</span>\r\n            <span>${{ total.toFixed(2) }}</span>\r\n          </div>\r\n          \r\n          <button class="btn btn-primary w-100" \r\n            [disabled]="isSubmitting || cartItems.length === 0"\r\n            (click)="checkout()">\r\n            <i class="bi bi-bag-check me-2"></i>\r\n            <span *ngIf="!isSubmitting">Checkout</span>\r\n            <span *ngIf="isSubmitting">\r\n              <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r\n              Processing...\r\n            </span>\r\n          </button>\r\n          \r\n          <div class="mt-3 small text-muted" *ngIf="!authService.isLoggedIn">\r\n            <i class="bi bi-info-circle me-1"></i> You\'ll need to log in before checkout\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> ', styles: ["/* src/app/features/cart/cart.component.scss */\n.form-control-sm {\n  font-size: 0.875rem;\n}\n.form-floating > .form-control-sm {\n  height: calc(2.5rem + 2px);\n  padding-top: 1rem;\n  padding-bottom: 0.25rem;\n}\n.form-floating > label {\n  padding: 0.5rem 0.75rem;\n}\n.input-group .form-control:focus {\n  z-index: 0;\n}\n.card {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.list-group-item {\n  border-left: none;\n  border-right: none;\n}\n.list-group-item:first-child {\n  border-top: none;\n}\n.list-group-item:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=cart.component-ZNZCPMQC.css.map */\n"] }]
  }], () => [{ type: CartService }, { type: OrderService }, { type: AuthService }, { type: RestaurantService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.component.ts", lineNumber: 20 });
})();

// src/app/features/cart/cart.routes.ts
var CART_ROUTES = [
  {
    path: "",
    component: CartComponent
  }
];
export {
  CART_ROUTES
};
//# sourceMappingURL=chunk-Z6RYZ4GF.js.map
