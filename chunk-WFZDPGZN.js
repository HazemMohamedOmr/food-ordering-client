import {
  AdminService
} from "./chunk-5O64PYLZ.js";
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
  SharedModule
} from "./chunk-Q4YMUNUZ.js";
import "./chunk-RHXFPPC4.js";
import {
  Component,
  NgIf,
  Router,
  RouterLink,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UXXDM6C4.js";
import "./chunk-GMSD7K74.js";

// src/app/features/admin/admin-dashboard/admin-dashboard.component.ts
var _c0 = (a0) => ["/restaurants", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function AdminDashboardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function AdminDashboardComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2, "No restaurants found");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "a", 42);
    \u0275\u0275element(11, "i", 43);
    \u0275\u0275text(12, " Start Order ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const restaurant_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(restaurant_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(restaurant_r2.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(restaurant_r2.phoneNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", restaurant_r2.deliveryFee.toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, restaurant_r2.id));
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  authService;
  restaurantService;
  adminService;
  orderService;
  router;
  restaurants = [];
  activeOrders = [];
  userCount = 0;
  isLoading = false;
  errorMessage = "";
  constructor(authService, restaurantService, adminService, orderService, router) {
    this.authService = authService;
    this.restaurantService = restaurantService;
    this.adminService = adminService;
    this.orderService = orderService;
    this.router = router;
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(["/"]);
      return;
    }
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.isLoading = true;
    this.errorMessage = "";
    forkJoin({
      restaurants: this.restaurantService.getAll(),
      activeOrders: this.orderService.getActiveOrders(),
      users: this.adminService.getAllUsers()
    }).subscribe({
      next: (results) => {
        this.restaurants = results.restaurants;
        this.activeOrders = results.activeOrders;
        this.userCount = results.users.length;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load dashboard data";
        this.loadRestaurants();
      }
    });
  }
  loadRestaurants() {
    this.restaurantService.getAll().subscribe({
      next: (restaurants) => {
        this.restaurants = restaurants;
      },
      error: (error) => {
        this.errorMessage += " Failed to load restaurants.";
      }
    });
  }
  editRestaurant(id) {
    console.log(`Edit restaurant with ID: ${id}`);
  }
  createRestaurant() {
    console.log("Create new restaurant");
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RestaurantService), \u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 96, vars: 6, consts: [[1, "container", "py-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-md-6", "col-lg-4", "mb-4"], [1, "card", "h-100", "shadow-sm"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-3"], [1, "feature-icon", "bg-primary", "text-white", "me-3"], [1, "fas", "fa-users"], [1, "card-title", "mb-0"], [1, "card-text"], ["routerLink", "/admin/users", 1, "btn", "btn-primary"], [1, "feature-icon", "bg-success", "text-white", "me-3"], [1, "fas", "fa-store"], ["routerLink", "/admin/restaurant-management", 1, "btn", "btn-success"], [1, "feature-icon", "bg-info", "text-white", "me-3"], [1, "fas", "fa-receipt"], ["routerLink", "/admin/order-management", 1, "btn", "btn-info", "text-white"], [1, "card", "mb-4"], [1, "card-header", "bg-primary", "text-white"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "fas", "fa-store", "me-2"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], [4, "ngIf"], [1, "row"], [1, "col-md-4", "mb-4"], [1, "card", "shadow-sm", "bg-primary", "text-white"], [1, "card-body", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-store", "fs-1"], [1, "card", "shadow-sm", "bg-success", "text-white"], [1, "fas", "fa-shopping-bag", "fs-1"], [1, "card", "shadow-sm", "bg-info", "text-white"], [1, "fas", "fa-users", "fs-1"], [1, "alert", "alert-danger"], [1, "text-center", "my-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["colspan", "5", 1, "text-center"], [1, "btn", "btn-sm", "btn-success", 3, "routerLink"], [1, "fas", "fa-play-circle", "me-1"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Admin Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, AdminDashboardComponent_div_4_Template, 2, 1, "div", 2)(5, AdminDashboardComponent_div_5_Template, 4, 0, "div", 3);
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h5", 11);
      \u0275\u0275text(14, "User Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16, "View all users and manage their roles. Upgrade users to managers or demote them as needed.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 13);
      \u0275\u0275text(18, "Manage Users");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8)(23, "div", 14);
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h5", 11);
      \u0275\u0275text(26, "Restaurant Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "p", 12);
      \u0275\u0275text(28, "Create, edit, and manage restaurants in the system. Control details and delivery fees.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 16);
      \u0275\u0275text(30, "Manage Restaurants");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 5)(32, "div", 6)(33, "div", 7)(34, "div", 8)(35, "div", 17);
      \u0275\u0275element(36, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h5", 11);
      \u0275\u0275text(38, "Order Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "p", 12);
      \u0275\u0275text(40, "View active orders, close orders, and manage payment statuses for all users.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 19);
      \u0275\u0275text(42, "Manage Orders");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "div", 20)(44, "div", 21)(45, "div", 22)(46, "h5", 23);
      \u0275\u0275element(47, "i", 24);
      \u0275\u0275text(48, " Restaurants");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 7)(50, "div", 25)(51, "table", 26)(52, "thead")(53, "tr")(54, "th");
      \u0275\u0275text(55, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "Delivery Fee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th");
      \u0275\u0275text(63, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "tbody");
      \u0275\u0275template(65, AdminDashboardComponent_tr_65_Template, 3, 0, "tr", 27);
      \u0275\u0275repeaterCreate(66, AdminDashboardComponent_For_67_Template, 13, 7, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(68, "div", 28)(69, "div", 29)(70, "div", 30)(71, "div", 31)(72, "div")(73, "h5", 11);
      \u0275\u0275text(74, "Restaurants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "h2", 23);
      \u0275\u0275text(76);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(77, "i", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 29)(79, "div", 33)(80, "div", 31)(81, "div")(82, "h5", 11);
      \u0275\u0275text(83, "Active Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "h2", 23);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(86, "i", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 29)(88, "div", 35)(89, "div", 31)(90, "div")(91, "h5", 11);
      \u0275\u0275text(92, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "h2", 23);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(95, "i", 36);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(60);
      \u0275\u0275property("ngIf", ctx.restaurants.length === 0 && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.restaurants);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.restaurants.length);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.activeOrders.length);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.userCount);
    }
  }, dependencies: [SharedModule, NgIf, RouterLink], styles: ["\n\n.feature-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=admin-dashboard.component-HGEP6O64.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [SharedModule, RouterLink], template: `<div class="container py-4">\r
  <div class="d-flex justify-content-between align-items-center mb-4">\r
    <h1>Admin Dashboard</h1>\r
  </div>\r
  \r
  <div *ngIf="errorMessage" class="alert alert-danger">\r
    {{ errorMessage }}\r
  </div>\r
  \r
  <div *ngIf="isLoading" class="text-center my-5">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
  \r
  <!-- Admin Cards -->\r
  <div class="row mb-4">\r
    <div class="col-md-6 col-lg-4 mb-4">\r
      <div class="card h-100 shadow-sm">\r
        <div class="card-body">\r
          <div class="d-flex align-items-center mb-3">\r
            <div class="feature-icon bg-primary text-white me-3">\r
              <i class="fas fa-users"></i>\r
            </div>\r
            <h5 class="card-title mb-0">User Management</h5>\r
          </div>\r
          <p class="card-text">View all users and manage their roles. Upgrade users to managers or demote them as needed.</p>\r
          <a routerLink="/admin/users" class="btn btn-primary">Manage Users</a>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="col-md-6 col-lg-4 mb-4">\r
      <div class="card h-100 shadow-sm">\r
        <div class="card-body">\r
          <div class="d-flex align-items-center mb-3">\r
            <div class="feature-icon bg-success text-white me-3">\r
              <i class="fas fa-store"></i>\r
            </div>\r
            <h5 class="card-title mb-0">Restaurant Management</h5>\r
          </div>\r
          <p class="card-text">Create, edit, and manage restaurants in the system. Control details and delivery fees.</p>\r
          <a routerLink="/admin/restaurant-management" class="btn btn-success">Manage Restaurants</a>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="col-md-6 col-lg-4 mb-4">\r
      <div class="card h-100 shadow-sm">\r
        <div class="card-body">\r
          <div class="d-flex align-items-center mb-3">\r
            <div class="feature-icon bg-info text-white me-3">\r
              <i class="fas fa-receipt"></i>\r
            </div>\r
            <h5 class="card-title mb-0">Order Management</h5>\r
          </div>\r
          <p class="card-text">View active orders, close orders, and manage payment statuses for all users.</p>\r
          <a routerLink="/admin/order-management" class="btn btn-info text-white">Manage Orders</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Restaurants Management Section -->\r
  <div class="card mb-4">\r
    <div class="card-header bg-primary text-white">\r
      <div class="d-flex justify-content-between align-items-center">\r
        <h5 class="mb-0"><i class="fas fa-store me-2"></i> Restaurants</h5>\r
      </div>\r
    </div>\r
    <div class="card-body">\r
      <div class="table-responsive">\r
        <table class="table table-striped table-hover">\r
          <thead>\r
            <tr>\r
              <th>Name</th>\r
              <th>Address</th>\r
              <th>Phone</th>\r
              <th>Delivery Fee</th>\r
              <th>Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="restaurants.length === 0 && !isLoading">\r
              <td colspan="5" class="text-center">No restaurants found</td>\r
            </tr>\r
            @for (restaurant of restaurants; track restaurant.id) {\r
              <tr>\r
                <td>{{ restaurant.name }}</td>\r
                <td>{{ restaurant.address }}</td>\r
                <td>{{ restaurant.phoneNumber }}</td>\r
                <td>\${{ restaurant.deliveryFee.toFixed(2) }}</td>\r
                <td>\r
                  <a [routerLink]="['/restaurants', restaurant.id]" class="btn btn-sm btn-success">\r
                    <i class="fas fa-play-circle me-1"></i> Start Order\r
                  </a>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
  \r
  <!-- Quick Stats -->\r
  <div class="row">\r
    <div class="col-md-4 mb-4">\r
      <div class="card shadow-sm bg-primary text-white">\r
        <div class="card-body d-flex justify-content-between align-items-center">\r
          <div>\r
            <h5 class="card-title mb-0">Restaurants</h5>\r
            <h2 class="mb-0">{{ restaurants.length }}</h2>\r
          </div>\r
          <i class="fas fa-store fs-1"></i>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-md-4 mb-4">\r
      <div class="card shadow-sm bg-success text-white">\r
        <div class="card-body d-flex justify-content-between align-items-center">\r
          <div>\r
            <h5 class="card-title mb-0">Active Orders</h5>\r
            <h2 class="mb-0">{{ activeOrders.length }}</h2>\r
          </div>\r
          <i class="fas fa-shopping-bag fs-1"></i>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-md-4 mb-4">\r
      <div class="card shadow-sm bg-info text-white">\r
        <div class="card-body d-flex justify-content-between align-items-center">\r
          <div>\r
            <h5 class="card-title mb-0">Users</h5>\r
            <h2 class="mb-0">{{ userCount }}</h2>\r
          </div>\r
          <i class="fas fa-users fs-1"></i>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div> `, styles: ["/* src/app/features/admin/admin-dashboard/admin-dashboard.component.scss */\n.feature-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n}\n.table td,\n.table th {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=admin-dashboard.component-HGEP6O64.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: RestaurantService }, { type: AdminService }, { type: OrderService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/admin-dashboard/admin-dashboard.component.ts", lineNumber: 19 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-WFZDPGZN.js.map
