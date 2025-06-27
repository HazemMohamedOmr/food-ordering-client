import {
  MenuItemService
} from "./chunk-BS6L2LPW.js";
import {
  RestaurantService
} from "./chunk-QVJF66MH.js";
import {
  AuthService
} from "./chunk-P6XRT7RJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-RHXFPPC4.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  CurrencyPipe,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  SlicePipe,
  setClassMetadata,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UXXDM6C4.js";
import {
  __spreadValues
} from "./chunk-GMSD7K74.js";

// src/app/features/admin/menu-management/menu-management.component.ts
function MenuManagementComponent_h4_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.restaurant.name);
  }
}
function MenuManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function MenuManagementComponent_div_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function MenuManagementComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function MenuManagementComponent_div_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function MenuManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "form", 23);
    \u0275\u0275listener("ngSubmit", function MenuManagementComponent_div_11_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitMenuItem());
    });
    \u0275\u0275elementStart(6, "div", 24)(7, "label", 25);
    \u0275\u0275text(8, "Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function MenuManagementComponent_div_11_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newMenuItem.name, $event) || (ctx_r0.newMenuItem.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24)(11, "label", 27);
    \u0275\u0275text(12, "Description*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MenuManagementComponent_div_11_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newMenuItem.description, $event) || (ctx_r0.newMenuItem.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 24)(15, "label", 29);
    \u0275\u0275text(16, "Price ($)*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function MenuManagementComponent_div_11_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newMenuItem.price, $event) || (ctx_r0.newMenuItem.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 31)(19, "button", 32);
    \u0275\u0275text(20, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 33);
    \u0275\u0275listener("click", function MenuManagementComponent_div_11_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelForm());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.isEditMode ? "Edit" : "Add New", " Menu Item");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newMenuItem.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newMenuItem.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newMenuItem.price);
  }
}
function MenuManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function MenuManagementComponent_div_13_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 40)(11, "button", 41);
    \u0275\u0275listener("click", function MenuManagementComponent_div_13_tr_13_Template_button_click_11_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editMenuItem(item_r6));
    });
    \u0275\u0275element(12, "i", 42);
    \u0275\u0275text(13, "Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 43);
    \u0275\u0275listener("click", function MenuManagementComponent_div_13_tr_13_Template_button_click_14_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteMenuItem(item_r6.id || ""));
    });
    \u0275\u0275element(15, "i", 44);
    \u0275\u0275text(16, "Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(5, 4, item_r6.description, 0, 50), "", item_r6.description.length > 50 ? "..." : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, item_r6.price));
  }
}
function MenuManagementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "table", 38)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, MenuManagementComponent_div_13_tr_13_Template, 17, 10, "tr", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r0.menuItems);
  }
}
function MenuManagementComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, ' No menu items found for this restaurant. Click the "Add Menu Item" button to create one. ');
    \u0275\u0275elementEnd();
  }
}
var MenuManagementComponent = class _MenuManagementComponent {
  route;
  router;
  menuItemService;
  restaurantService;
  authService;
  restaurant = null;
  menuItems = [];
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  // Menu item form fields
  menuItemToEdit = null;
  isEditMode = false;
  showForm = false;
  newMenuItem = {
    name: "",
    description: "",
    price: 0,
    restaurantId: ""
  };
  constructor(route, router, menuItemService, restaurantService, authService) {
    this.route = route;
    this.router = router;
    this.menuItemService = menuItemService;
    this.restaurantService = restaurantService;
    this.authService = authService;
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(["/"]);
      return;
    }
    const restaurantId = this.route.snapshot.paramMap.get("id");
    if (!restaurantId) {
      this.errorMessage = "No restaurant ID provided";
      return;
    }
    this.loadRestaurant(restaurantId);
    this.loadMenuItems(restaurantId);
  }
  loadRestaurant(id) {
    this.isLoading = true;
    this.restaurantService.getById(id).subscribe({
      next: (restaurant) => {
        this.restaurant = restaurant;
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  loadMenuItems(restaurantId) {
    this.isLoading = true;
    this.menuItemService.getByRestaurant(restaurantId).subscribe({
      next: (items) => {
        this.menuItems = items;
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  createMenuItem() {
    if (!this.restaurant?.id)
      return;
    this.isEditMode = false;
    this.menuItemToEdit = null;
    this.newMenuItem = {
      name: "",
      description: "",
      price: 0,
      restaurantId: this.restaurant.id
    };
    this.showForm = true;
  }
  editMenuItem(item) {
    this.isEditMode = true;
    this.menuItemToEdit = item;
    this.newMenuItem = __spreadValues({}, item);
    this.showForm = true;
  }
  cancelForm() {
    this.showForm = false;
    this.menuItemToEdit = null;
    this.errorMessage = "";
    this.successMessage = "";
  }
  submitMenuItem() {
    if (this.validateForm()) {
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";
      if (this.isEditMode && this.menuItemToEdit?.id) {
        this.menuItemService.update(this.menuItemToEdit.id, this.newMenuItem).subscribe({
          next: () => {
            this.handleSuccess("Menu item updated successfully");
          },
          error: (error) => {
            this.handleError(error);
          }
        });
      } else {
        this.menuItemService.create(this.newMenuItem).subscribe({
          next: () => {
            this.handleSuccess("Menu item created successfully");
          },
          error: (error) => {
            this.handleError(error);
          }
        });
      }
    }
  }
  deleteMenuItem(id) {
    if (confirm("Are you sure you want to delete this menu item? This cannot be undone.")) {
      this.isLoading = true;
      this.errorMessage = "";
      this.menuItemService.delete(id).subscribe({
        next: () => {
          this.handleSuccess("Menu item deleted successfully");
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    }
  }
  validateForm() {
    if (!this.newMenuItem.name || this.newMenuItem.name.trim() === "") {
      this.errorMessage = "Menu item name is required.";
      return false;
    }
    if (!this.newMenuItem.description || this.newMenuItem.description.trim() === "") {
      this.errorMessage = "Description is required.";
      return false;
    }
    if (this.newMenuItem.price <= 0) {
      this.errorMessage = "Price must be greater than zero.";
      return false;
    }
    return true;
  }
  handleSuccess(message) {
    this.isLoading = false;
    this.successMessage = message;
    if (this.restaurant?.id) {
      this.loadMenuItems(this.restaurant.id);
    }
    this.showForm = false;
  }
  handleError(error) {
    this.isLoading = false;
    this.errorMessage = error.message || "An error occurred while processing your request.";
  }
  static \u0275fac = function MenuManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuManagementComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MenuItemService), \u0275\u0275directiveInject(RestaurantService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuManagementComponent, selectors: [["app-menu-management"]], decls: 23, vars: 7, consts: [[1, "container", "py-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "mt-4", "mb-5"], ["routerLink", "/admin/restaurant-management", 1, "btn", "btn-secondary", "me-2"], [1, "bi", "bi-arrow-left", "me-2"], ["routerLink", "/admin", 1, "btn", "btn-outline-secondary"], [1, "bi", "bi-speedometer2", "me-2"], [1, "mb-5", "pb-5"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "name", "name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "form-label"], ["id", "description", "name", "description", "rows", "3", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "price", 1, "form-label"], ["type", "number", "id", "price", "name", "price", "min", "0.01", "step", "0.01", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-pencil", "me-1"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash", "me-1"], [1, "alert", "alert-info"]], template: function MenuManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Menu Management");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, MenuManagementComponent_h4_5_Template, 2, 1, "h4", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function MenuManagementComponent_Template_button_click_6_listener() {
        return ctx.createMenuItem();
      });
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Add Menu Item ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, MenuManagementComponent_div_9_Template, 3, 1, "div", 5)(10, MenuManagementComponent_div_10_Template, 3, 1, "div", 6)(11, MenuManagementComponent_div_11_Template, 23, 4, "div", 7)(12, MenuManagementComponent_div_12_Template, 4, 0, "div", 8)(13, MenuManagementComponent_div_13_Template, 14, 1, "div", 9)(14, MenuManagementComponent_div_14_Template, 2, 0, "div", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "a", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275text(18, "Back to Restaurants ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 14);
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21, "Dashboard ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.restaurant);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.menuItems.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.menuItems.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, CurrencyPipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, ReactiveFormsModule, RouterLink], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .btn-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 0.25rem;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=menu-management.component-GYBFJYNN.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuManagementComponent, [{
    type: Component,
    args: [{ selector: "app-menu-management", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink], template: `<div class="container py-4">\r
  <div class="d-flex justify-content-between align-items-center mb-4">\r
    <div>\r
      <h1>Menu Management</h1>\r
      <h4 *ngIf="restaurant">{{ restaurant.name }}</h4>\r
    </div>\r
    <button class="btn btn-primary" (click)="createMenuItem()">\r
      <i class="bi bi-plus-circle me-2"></i>Add Menu Item\r
    </button>\r
  </div>\r
\r
  <!-- Alert messages -->\r
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">\r
    {{ errorMessage }}\r
    <button type="button" class="btn-close" (click)="errorMessage = ''"></button>\r
  </div>\r
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">\r
    {{ successMessage }}\r
    <button type="button" class="btn-close" (click)="successMessage = ''"></button>\r
  </div>\r
\r
  <!-- Menu Item Form -->\r
  <div *ngIf="showForm" class="card mb-4">\r
    <div class="card-header">\r
      <h3>{{ isEditMode ? 'Edit' : 'Add New' }} Menu Item</h3>\r
    </div>\r
    <div class="card-body">\r
      <form (ngSubmit)="submitMenuItem()">\r
        <div class="mb-3">\r
          <label for="name" class="form-label">Name*</label>\r
          <input type="text" class="form-control" id="name" name="name" [(ngModel)]="newMenuItem.name" required>\r
        </div>\r
        <div class="mb-3">\r
          <label for="description" class="form-label">Description*</label>\r
          <textarea class="form-control" id="description" name="description" rows="3" [(ngModel)]="newMenuItem.description" required></textarea>\r
        </div>\r
        <div class="mb-3">\r
          <label for="price" class="form-label">Price ($)*</label>\r
          <input type="number" class="form-control" id="price" name="price" [(ngModel)]="newMenuItem.price" min="0.01" step="0.01" required>\r
        </div>\r
        <div class="d-flex gap-2">\r
          <button type="submit" class="btn btn-primary">Save</button>\r
          <button type="button" class="btn btn-secondary" (click)="cancelForm()">Cancel</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
  <!-- Loading indicator -->\r
  <div *ngIf="isLoading" class="d-flex justify-content-center">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Menu Items Table -->\r
  <div *ngIf="!isLoading && menuItems.length" class="table-responsive">\r
    <table class="table table-striped table-hover">\r
      <thead>\r
        <tr>\r
          <th>Name</th>\r
          <th>Description</th>\r
          <th>Price</th>\r
          <th>Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let item of menuItems">\r
          <td>{{ item.name }}</td>\r
          <td>{{ item.description | slice:0:50 }}{{ item.description.length > 50 ? '...' : '' }}</td>\r
          <td>{{ item.price | currency }}</td>\r
          <td>\r
            <div class="btn-group" role="group">\r
              <button class="btn btn-sm btn-outline-secondary" (click)="editMenuItem(item)">\r
                <i class="bi bi-pencil me-1"></i>Edit\r
              </button>\r
              <button class="btn btn-sm btn-outline-danger" (click)="deleteMenuItem(item.id || '')">\r
                <i class="bi bi-trash me-1"></i>Delete\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- No menu items message -->\r
  <div *ngIf="!isLoading && !menuItems.length" class="alert alert-info">\r
    No menu items found for this restaurant. Click the "Add Menu Item" button to create one.\r
  </div>\r
\r
  <div class="mt-4 mb-5">\r
    <a routerLink="/admin/restaurant-management" class="btn btn-secondary me-2">\r
      <i class="bi bi-arrow-left me-2"></i>Back to Restaurants\r
    </a>\r
    <a routerLink="/admin" class="btn btn-outline-secondary">\r
      <i class="bi bi-speedometer2 me-2"></i>Dashboard\r
    </a>\r
  </div>\r
  \r
  <div class="mb-5 pb-5">\r
    <!-- Extra padding at the bottom -->\r
  </div>\r
</div> `, styles: ["/* src/app/features/admin/menu-management/menu-management.component.scss */\n.table-responsive {\n  overflow-x: auto;\n}\n.btn-group .btn {\n  margin-right: 0.25rem;\n}\n.btn-group .btn:last-child {\n  margin-right: 0;\n}\n.card-header {\n  background-color: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .btn-group {\n    display: flex;\n    flex-direction: column;\n  }\n  .btn-group .btn {\n    margin-right: 0;\n    margin-bottom: 0.25rem;\n  }\n  .btn-group .btn:last-child {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=menu-management.component-GYBFJYNN.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: MenuItemService }, { type: RestaurantService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuManagementComponent, { className: "MenuManagementComponent", filePath: "src/app/features/admin/menu-management/menu-management.component.ts", lineNumber: 18 });
})();
export {
  MenuManagementComponent
};
//# sourceMappingURL=chunk-WYQUB5V7.js.map
