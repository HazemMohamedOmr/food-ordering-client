import {
  OrderService,
  OrderStatus
} from "./chunk-N7XXU6VP.js";
import {
  AuthService
} from "./chunk-P6XRT7RJ.js";
import {
  SharedModule
} from "./chunk-Q4YMUNUZ.js";
import "./chunk-RHXFPPC4.js";
import {
  Component,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UXXDM6C4.js";
import "./chunk-GMSD7K74.js";

// src/app/features/orders/order-list/order-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderListComponent_div_3_Template(rf, ctx) {
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
function OrderListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function OrderListComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, " You have no active orders. ");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_div_5_For_6_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "small", 20);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Your Total: $", order_r3.userTotal.toFixed(2), " ");
  }
}
function OrderListComponent_div_5_For_6_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "small", 20);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Delivery Fee: $", order_r3.deliveryFeeShare.toFixed(2), " ");
  }
}
function OrderListComponent_div_5_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21)(9, "h5", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 23)(14, "small", 20);
    \u0275\u0275element(15, "i", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, OrderListComponent_div_5_For_6_p_17_Template, 4, 1, "p", 25)(18, OrderListComponent_div_5_For_6_p_18_Template, 4, 1, "p", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 26)(20, "button", 27);
    \u0275\u0275listener("click", function OrderListComponent_div_5_For_6_Template_button_click_20_listener() {
      const order_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewOrder(order_r3.id));
    });
    \u0275\u0275element(21, "i", 28);
    \u0275\u0275text(22, " View Order ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("badge rounded-pill ", ctx_r0.getOrderStatusBadgeClass(order_r3.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getOrderStatusText(order_r3.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(order_r3.orderDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r3.restaurantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Manager: ", order_r3.managerName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (order_r3.userItems == null ? null : order_r3.userItems.length) || 0, " items ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r3.userTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r3.deliveryFeeShare > 0);
  }
}
function OrderListComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, " You have no order history. ");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_div_5_For_12_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "small", 20);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Your Total: $", order_r5.userTotal.toFixed(2), " ");
  }
}
function OrderListComponent_div_5_For_12_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "small", 20);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Delivery Fee: $", order_r5.deliveryFeeShare.toFixed(2), " ");
  }
}
function OrderListComponent_div_5_For_12_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "small", 20);
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Closed at: ", ctx_r0.formatDate(order_r5.closedAt), " ");
  }
}
function OrderListComponent_div_5_For_12_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "span", 36);
    \u0275\u0275element(2, "i", 37);
    \u0275\u0275text(3, " Paid ");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_div_5_For_12_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "span", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275text(3, " Unpaid ");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_div_5_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 32)(2, "div", 33)(3, "div", 19)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21)(9, "h5", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 23)(14, "small", 20);
    \u0275\u0275element(15, "i", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, OrderListComponent_div_5_For_12_p_17_Template, 4, 1, "p", 25)(18, OrderListComponent_div_5_For_12_p_18_Template, 4, 1, "p", 25)(19, OrderListComponent_div_5_For_12_p_19_Template, 4, 1, "p", 25)(20, OrderListComponent_div_5_For_12_p_20_Template, 4, 0, "p", 25)(21, OrderListComponent_div_5_For_12_p_21_Template, 4, 0, "p", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 26)(23, "button", 34);
    \u0275\u0275listener("click", function OrderListComponent_div_5_For_12_Template_button_click_23_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewOrder(order_r5.id));
    });
    \u0275\u0275element(24, "i", 28);
    \u0275\u0275text(25, " View Details ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("badge rounded-pill ", ctx_r0.getOrderStatusBadgeClass(order_r5.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getOrderStatusText(order_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(order_r5.orderDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r5.restaurantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Manager: ", order_r5.managerName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (order_r5.userItems == null ? null : order_r5.userItems.length) || 0, " items ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r5.userTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r5.deliveryFeeShare > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r5.closedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r5.userPaymentStatus === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r5.userPaymentStatus === 1);
  }
}
function OrderListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 9);
    \u0275\u0275text(2, "Active Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OrderListComponent_div_5_div_3_Template, 3, 0, "div", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275repeaterCreate(5, OrderListComponent_div_5_For_6_Template, 23, 10, "div", 12, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 9);
    \u0275\u0275text(8, "Order History");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, OrderListComponent_div_5_div_9_Template, 3, 0, "div", 13);
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275repeaterCreate(11, OrderListComponent_div_5_For_12_Template, 26, 13, "div", 12, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.activeOrders.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.activeOrders);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.orderHistory.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.orderHistory);
  }
}
var OrderListComponent = class _OrderListComponent {
  orderService;
  authService;
  router;
  activeOrders = [];
  orderHistory = [];
  isLoading = false;
  errorMessage = "";
  // For template use
  OrderStatus = OrderStatus;
  constructor(orderService, authService, router) {
    this.orderService = orderService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.loadOrders();
  }
  loadOrders() {
    this.isLoading = true;
    this.errorMessage = "";
    this.orderService.getActiveOrders().subscribe({
      next: (orders) => {
        console.log("Active orders response:", orders);
        this.activeOrders = this.processOrdersResponse(orders);
        this.loadOrderHistory();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load active orders";
      }
    });
  }
  loadOrderHistory() {
    this.orderService.getMyOrderHistory().subscribe({
      next: (orders) => {
        console.log("Order history response:", orders);
        this.orderHistory = this.processOrdersResponse(orders);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load order history";
      }
    });
  }
  processOrdersResponse(orders) {
    if (!Array.isArray(orders)) {
      console.error("Expected orders array, got:", orders);
      return [];
    }
    return orders.map((order) => {
      if (order.restaurantName !== void 0) {
        return order;
      }
      return {
        id: order.id || "",
        restaurantName: order.restaurant?.name || "Unknown Restaurant",
        orderDate: order.orderDate || (/* @__PURE__ */ new Date()).toISOString(),
        closedAt: order.closedAt,
        status: order.status || OrderStatus.Open,
        managerName: order.manager?.name || "Unknown Manager",
        deliveryFee: order.restaurant?.deliveryFee || 0,
        deliveryFeeShare: 0,
        userItems: order.orderItems || [],
        userPaymentStatus: 0,
        userTotal: this.calculateOrderTotal(order)
      };
    });
  }
  calculateOrderTotal(order) {
    if (!order.orderItems || !Array.isArray(order.orderItems)) {
      return 0;
    }
    const itemsTotal = order.orderItems.reduce((total, item) => {
      return total + (item.menuItem?.price || 0) * (item.quantity || 1);
    }, 0);
    return itemsTotal;
  }
  viewOrder(orderId) {
    this.router.navigate(["/orders", orderId]);
  }
  getOrderStatusBadgeClass(status) {
    switch (status) {
      case OrderStatus.Open:
        return "bg-success";
      case OrderStatus.Closed:
        return "bg-secondary";
      default:
        return "bg-primary";
    }
  }
  getOrderStatusText(status) {
    switch (status) {
      case OrderStatus.Open:
        return "Open";
      case OrderStatus.Closed:
        return "Closed";
      default:
        return "Unknown";
    }
  }
  formatDate(date) {
    if (!date)
      return "N/A";
    return new Date(date).toLocaleString();
  }
  static \u0275fac = function OrderListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderListComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], decls: 6, vars: 3, consts: [[1, "container", "py-4"], [1, "mb-4"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "text-center", "my-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mb-3"], ["class", "alert alert-info mb-4", 4, "ngIf"], [1, "row", "mb-5"], [1, "col-md-6", "col-lg-4", "mb-4"], ["class", "alert alert-info", 4, "ngIf"], [1, "row"], [1, "alert", "alert-info", "mb-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "card", "h-100", "border-success", "shadow-sm"], [1, "card-header", "bg-success", "bg-opacity-10"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "bi", "bi-bag", "me-1"], ["class", "card-text", 4, "ngIf"], [1, "card-footer", "bg-transparent"], [1, "btn", "btn-outline-primary", "w-100", 3, "click"], [1, "bi", "bi-eye", "me-2"], [1, "bi", "bi-currency-dollar", "me-1"], [1, "bi", "bi-truck", "me-1"], [1, "alert", "alert-info"], [1, "card", "h-100", "shadow-sm"], [1, "card-header", "bg-light"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-calendar-check", "me-1"], [1, "badge", "bg-success"], [1, "bi", "bi-check-circle", "me-1"], [1, "badge", "bg-danger"], [1, "bi", "bi-exclamation-circle", "me-1"]], template: function OrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, OrderListComponent_div_3_Template, 2, 1, "div", 2)(4, OrderListComponent_div_4_Template, 4, 0, "div", 3)(5, OrderListComponent_div_5_Template, 13, 2, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [SharedModule, NgIf], styles: ["\n\n/*# sourceMappingURL=order-list.component-SJVE7QJH.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListComponent, [{
    type: Component,
    args: [{ selector: "app-order-list", standalone: true, imports: [SharedModule], template: '<div class="container py-4">\r\n  <h1 class="mb-4">My Orders</h1>\r\n  \r\n  <div *ngIf="errorMessage" class="alert alert-danger">\r\n    {{ errorMessage }}\r\n  </div>\r\n  \r\n  <div *ngIf="isLoading" class="text-center my-5">\r\n    <div class="spinner-border" role="status">\r\n      <span class="visually-hidden">Loading...</span>\r\n    </div>\r\n  </div>\r\n  \r\n  <div *ngIf="!isLoading">\r\n    <!-- Active Orders Section -->\r\n    <h2 class="mb-3">Active Orders</h2>\r\n    \r\n    <div *ngIf="activeOrders.length === 0" class="alert alert-info mb-4">\r\n      <i class="bi bi-info-circle me-2"></i>\r\n      You have no active orders.\r\n    </div>\r\n    \r\n    <div class="row mb-5">\r\n      @for (order of activeOrders; track order.id) {\r\n        <div class="col-md-6 col-lg-4 mb-4">\r\n          <div class="card h-100 border-success shadow-sm">\r\n            <div class="card-header bg-success bg-opacity-10">\r\n              <div class="d-flex justify-content-between align-items-center">\r\n                <span class="badge rounded-pill {{ getOrderStatusBadgeClass(order.status) }}">\r\n                  {{ getOrderStatusText(order.status) }}\r\n                </span>\r\n                <small class="text-muted">{{ formatDate(order.orderDate) }}</small>\r\n              </div>\r\n            </div>\r\n            <div class="card-body">\r\n              <h5 class="card-title">{{ order.restaurantName }}</h5>\r\n              <p class="card-text">Manager: {{ order.managerName }}</p>\r\n              <p class="card-text">\r\n                <small class="text-muted">\r\n                  <i class="bi bi-bag me-1"></i>\r\n                  {{ order.userItems?.length || 0 }} items\r\n                </small>\r\n              </p>\r\n              <p *ngIf="order.userTotal > 0" class="card-text">\r\n                <small class="text-muted">\r\n                  <i class="bi bi-currency-dollar me-1"></i>\r\n                  Your Total: ${{ order.userTotal.toFixed(2) }}\r\n                </small>\r\n              </p>\r\n              <p *ngIf="order.deliveryFeeShare > 0" class="card-text">\r\n                <small class="text-muted">\r\n                  <i class="bi bi-truck me-1"></i>\r\n                  Delivery Fee: ${{ order.deliveryFeeShare.toFixed(2) }}\r\n                </small>\r\n              </p>\r\n            </div>\r\n            <div class="card-footer bg-transparent">\r\n              <button class="btn btn-outline-primary w-100" (click)="viewOrder(order.id!)">\r\n                <i class="bi bi-eye me-2"></i> View Order\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n    </div>\r\n    \r\n    <!-- Order History Section -->\r\n    <h2 class="mb-3">Order History</h2>\r\n    \r\n    <div *ngIf="orderHistory.length === 0" class="alert alert-info">\r\n      <i class="bi bi-info-circle me-2"></i>\r\n      You have no order history.\r\n    </div>\r\n    \r\n    <div class="row">\r\n      @for (order of orderHistory; track order.id) {\r\n        <div class="col-md-6 col-lg-4 mb-4">\r\n          <div class="card h-100 shadow-sm">\r\n            <div class="card-header bg-light">\r\n              <div class="d-flex justify-content-between align-items-center">\r\n                <span class="badge rounded-pill {{ getOrderStatusBadgeClass(order.status) }}">\r\n                  {{ getOrderStatusText(order.status) }}\r\n                </span>\r\n                <small class="text-muted">{{ formatDate(order.orderDate) }}</small>\r\n              </div>\r\n            </div>\r\n            <div class="card-body">\r\n              <h5 class="card-title">{{ order.restaurantName }}</h5>\r\n              <p class="card-text">Manager: {{ order.managerName }}</p>\r\n              <p class="card-text">\r\n                <small class="text-muted">\r\n                  <i class="bi bi-bag me-1"></i>\r\n                  {{ order.userItems?.length || 0 }} items\r\n                </small>\r\n              </p>\r\n              <p *ngIf="order.userTotal > 0" class="card-text">\r\n                <small class="text-muted">\r\n                  <i class="bi bi-currency-dollar me-1"></i>\r\n                  Your Total: ${{ order.userTotal.toFixed(2) }}\r\n                </small>\r\n              </p>\r\n              <p *ngIf="order.deliveryFeeShare > 0" class="card-text">\r\n                <small class="text-muted">\r\n                  <i class="bi bi-truck me-1"></i>\r\n                  Delivery Fee: ${{ order.deliveryFeeShare.toFixed(2) }}\r\n                </small>\r\n              </p>\r\n              <p class="card-text" *ngIf="order.closedAt">\r\n                <small class="text-muted">\r\n                  <i class="bi bi-calendar-check me-1"></i>\r\n                  Closed at: {{ formatDate(order.closedAt) }}\r\n                </small>\r\n              </p>\r\n              <p class="card-text" *ngIf="order.userPaymentStatus === 2">\r\n                <span class="badge bg-success">\r\n                  <i class="bi bi-check-circle me-1"></i> Paid\r\n                </span>\r\n              </p>\r\n              <p class="card-text" *ngIf="order.userPaymentStatus === 1">\r\n                <span class="badge bg-danger">\r\n                  <i class="bi bi-exclamation-circle me-1"></i> Unpaid\r\n                </span>\r\n              </p>\r\n            </div>\r\n            <div class="card-footer bg-transparent">\r\n              <button class="btn btn-outline-secondary w-100" (click)="viewOrder(order.id!)">\r\n                <i class="bi bi-eye me-2"></i> View Details\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</div> ', styles: ["/* src/app/features/orders/order-list/order-list.component.scss */\n/*# sourceMappingURL=order-list.component-SJVE7QJH.css.map */\n"] }]
  }], () => [{ type: OrderService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src/app/features/orders/order-list/order-list.component.ts", lineNumber: 29 });
})();
export {
  OrderListComponent
};
//# sourceMappingURL=chunk-C5NMZVLA.js.map
