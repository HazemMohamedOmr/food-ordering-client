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
  CommonModule,
  Component,
  CurrencyPipe,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
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
  ɵɵproperty,
  ɵɵpureFunction1,
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
  __spreadValues
} from "./chunk-GMSD7K74.js";

// src/app/features/admin/restaurant-management/restaurant-management.component.ts
var _c0 = (a0) => ["/admin/menu-management", a0];
function RestaurantManagementComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275listener("click", function RestaurantManagementComponent_div_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function RestaurantManagementComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275listener("click", function RestaurantManagementComponent_div_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function RestaurantManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "form", 20);
    \u0275\u0275listener("ngSubmit", function RestaurantManagementComponent_div_9_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitRestaurant());
    });
    \u0275\u0275elementStart(6, "div", 21)(7, "label", 22);
    \u0275\u0275text(8, "Restaurant Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantManagementComponent_div_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRestaurant.name, $event) || (ctx_r1.newRestaurant.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21)(11, "label", 24);
    \u0275\u0275text(12, "Description*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 25);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantManagementComponent_div_9_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRestaurant.description, $event) || (ctx_r1.newRestaurant.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 21)(15, "label", 26);
    \u0275\u0275text(16, "Address*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantManagementComponent_div_9_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRestaurant.address, $event) || (ctx_r1.newRestaurant.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 21)(19, "label", 28);
    \u0275\u0275text(20, "Phone Number*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantManagementComponent_div_9_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRestaurant.phoneNumber, $event) || (ctx_r1.newRestaurant.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "label", 30);
    \u0275\u0275text(24, "Delivery Fee ($)*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantManagementComponent_div_9_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRestaurant.deliveryFee, $event) || (ctx_r1.newRestaurant.deliveryFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 32)(27, "button", 33);
    \u0275\u0275text(28, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 34);
    \u0275\u0275listener("click", function RestaurantManagementComponent_div_9_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Edit" : "Add New", " Restaurant");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRestaurant.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRestaurant.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRestaurant.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRestaurant.phoneNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRestaurant.deliveryFee);
  }
}
function RestaurantManagementComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantManagementComponent_div_11_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
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
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 41)(12, "a", 42);
    \u0275\u0275element(13, "i", 43);
    \u0275\u0275text(14, "Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 44);
    \u0275\u0275listener("click", function RestaurantManagementComponent_div_11_tr_15_Template_button_click_15_listener() {
      const restaurant_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editRestaurant(restaurant_r6));
    });
    \u0275\u0275element(16, "i", 45);
    \u0275\u0275text(17, "Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 46);
    \u0275\u0275listener("click", function RestaurantManagementComponent_div_11_tr_15_Template_button_click_18_listener() {
      const restaurant_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRestaurant(restaurant_r6.id || ""));
    });
    \u0275\u0275element(19, "i", 47);
    \u0275\u0275text(20, "Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const restaurant_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(restaurant_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(restaurant_r6.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(restaurant_r6.phoneNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, restaurant_r6.deliveryFee));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, restaurant_r6.id));
  }
}
function RestaurantManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Delivery Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, RestaurantManagementComponent_div_11_tr_15_Template, 21, 9, "tr", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.restaurants);
  }
}
function RestaurantManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, ' No restaurants found. Click the "Add New Restaurant" button to create one. ');
    \u0275\u0275elementEnd();
  }
}
var RestaurantManagementComponent = class _RestaurantManagementComponent {
  restaurantService;
  authService;
  router;
  restaurants = [];
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  // Restaurant form fields
  restaurantToEdit = null;
  isEditMode = false;
  showForm = false;
  newRestaurant = {
    name: "",
    description: "",
    address: "",
    phoneNumber: "",
    deliveryFee: 0
  };
  constructor(restaurantService, authService, router) {
    this.restaurantService = restaurantService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(["/"]);
      return;
    }
    this.loadRestaurants();
  }
  loadRestaurants() {
    this.isLoading = true;
    this.errorMessage = "";
    this.restaurantService.getAll().subscribe({
      next: (restaurants) => {
        this.restaurants = restaurants;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load restaurants";
      }
    });
  }
  createRestaurant() {
    this.isEditMode = false;
    this.restaurantToEdit = null;
    this.newRestaurant = {
      name: "",
      description: "",
      address: "",
      phoneNumber: "",
      deliveryFee: 0
    };
    this.showForm = true;
  }
  editRestaurant(restaurant) {
    this.isEditMode = true;
    this.restaurantToEdit = restaurant;
    this.newRestaurant = __spreadValues({}, restaurant);
    this.showForm = true;
  }
  cancelForm() {
    this.showForm = false;
    this.restaurantToEdit = null;
    this.errorMessage = "";
    this.successMessage = "";
  }
  submitRestaurant() {
    if (this.validateForm()) {
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";
      if (this.isEditMode && this.restaurantToEdit?.id) {
        this.restaurantService.update(this.restaurantToEdit.id, this.newRestaurant).subscribe({
          next: () => {
            this.handleSuccess("Restaurant updated successfully");
          },
          error: (error) => {
            this.handleError(error);
          }
        });
      } else {
        this.restaurantService.create(this.newRestaurant).subscribe({
          next: () => {
            this.handleSuccess("Restaurant created successfully");
          },
          error: (error) => {
            this.handleError(error);
          }
        });
      }
    }
  }
  deleteRestaurant(id) {
    if (confirm("Are you sure you want to delete this restaurant? This cannot be undone.")) {
      this.isLoading = true;
      this.errorMessage = "";
      this.restaurantService.delete(id).subscribe({
        next: () => {
          this.handleSuccess("Restaurant deleted successfully");
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    }
  }
  validateForm() {
    if (!this.newRestaurant.name || this.newRestaurant.name.trim() === "") {
      this.errorMessage = "Restaurant name is required.";
      return false;
    }
    if (!this.newRestaurant.description || this.newRestaurant.description.trim() === "") {
      this.errorMessage = "Description is required.";
      return false;
    }
    if (!this.newRestaurant.address || this.newRestaurant.address.trim() === "") {
      this.errorMessage = "Address is required.";
      return false;
    }
    if (!this.newRestaurant.phoneNumber || this.newRestaurant.phoneNumber.trim() === "") {
      this.errorMessage = "Phone number is required.";
      return false;
    }
    if (this.newRestaurant.deliveryFee < 0) {
      this.errorMessage = "Delivery fee cannot be negative.";
      return false;
    }
    return true;
  }
  handleSuccess(message) {
    this.isLoading = false;
    this.successMessage = message;
    this.loadRestaurants();
    this.showForm = false;
  }
  handleError(error) {
    this.isLoading = false;
    this.errorMessage = error.message || "An error occurred while processing your request.";
  }
  static \u0275fac = function RestaurantManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantManagementComponent)(\u0275\u0275directiveInject(RestaurantService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantManagementComponent, selectors: [["app-restaurant-management"]], decls: 18, vars: 6, consts: [[1, "container", "py-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "mt-4", "mb-5"], ["routerLink", "/admin", 1, "btn", "btn-secondary"], [1, "bi", "bi-arrow-left", "me-2"], [1, "mb-5", "pb-5"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "name", "name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "form-label"], ["id", "description", "name", "description", "rows", "3", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "address", 1, "form-label"], ["type", "text", "id", "address", "name", "address", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "phoneNumber", 1, "form-label"], ["type", "text", "id", "phoneNumber", "name", "phoneNumber", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "deliveryFee", 1, "form-label"], ["type", "number", "id", "deliveryFee", "name", "deliveryFee", "min", "0", "step", "0.01", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], [1, "bi", "bi-list", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-pencil", "me-1"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash", "me-1"], [1, "alert", "alert-info"]], template: function RestaurantManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Restaurant Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function RestaurantManagementComponent_Template_button_click_4_listener() {
        return ctx.createRestaurant();
      });
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, "Add New Restaurant ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, RestaurantManagementComponent_div_7_Template, 3, 1, "div", 4)(8, RestaurantManagementComponent_div_8_Template, 3, 1, "div", 5)(9, RestaurantManagementComponent_div_9_Template, 31, 6, "div", 6)(10, RestaurantManagementComponent_div_10_Template, 4, 0, "div", 7)(11, RestaurantManagementComponent_div_11_Template, 16, 1, "div", 8)(12, RestaurantManagementComponent_div_12_Template, 2, 0, "div", 9);
      \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275text(16, "Back to Dashboard ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.restaurants.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.restaurants.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, ReactiveFormsModule, RouterLink], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .btn-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 0.25rem;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=restaurant-management.component-QQLPLLBW.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantManagementComponent, [{
    type: Component,
    args: [{ selector: "app-restaurant-management", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink], template: `<div class="container py-4">\r
  <div class="d-flex justify-content-between align-items-center mb-4">\r
    <h1>Restaurant Management</h1>\r
    <button class="btn btn-primary" (click)="createRestaurant()">\r
      <i class="bi bi-plus-circle me-2"></i>Add New Restaurant\r
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
  <!-- Restaurant Form -->\r
  <div *ngIf="showForm" class="card mb-4">\r
    <div class="card-header">\r
      <h3>{{ isEditMode ? 'Edit' : 'Add New' }} Restaurant</h3>\r
    </div>\r
    <div class="card-body">\r
      <form (ngSubmit)="submitRestaurant()">\r
        <div class="mb-3">\r
          <label for="name" class="form-label">Restaurant Name*</label>\r
          <input type="text" class="form-control" id="name" name="name" [(ngModel)]="newRestaurant.name" required>\r
        </div>\r
        <div class="mb-3">\r
          <label for="description" class="form-label">Description*</label>\r
          <textarea class="form-control" id="description" name="description" rows="3" [(ngModel)]="newRestaurant.description" required></textarea>\r
        </div>\r
        <div class="mb-3">\r
          <label for="address" class="form-label">Address*</label>\r
          <input type="text" class="form-control" id="address" name="address" [(ngModel)]="newRestaurant.address" required>\r
        </div>\r
        <div class="mb-3">\r
          <label for="phoneNumber" class="form-label">Phone Number*</label>\r
          <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" [(ngModel)]="newRestaurant.phoneNumber" required>\r
        </div>\r
        <div class="mb-3">\r
          <label for="deliveryFee" class="form-label">Delivery Fee ($)*</label>\r
          <input type="number" class="form-control" id="deliveryFee" name="deliveryFee" [(ngModel)]="newRestaurant.deliveryFee" min="0" step="0.01" required>\r
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
  <!-- Restaurants Table -->\r
  <div *ngIf="!isLoading && restaurants.length" class="table-responsive">\r
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
        <tr *ngFor="let restaurant of restaurants">\r
          <td>{{ restaurant.name }}</td>\r
          <td>{{ restaurant.address }}</td>\r
          <td>{{ restaurant.phoneNumber }}</td>\r
          <td>{{ restaurant.deliveryFee | currency }}</td>\r
          <td>\r
            <div class="btn-group" role="group">\r
              <a class="btn btn-sm btn-outline-primary" [routerLink]="['/admin/menu-management', restaurant.id]">\r
                <i class="bi bi-list me-1"></i>Menu\r
              </a>\r
              <button class="btn btn-sm btn-outline-secondary" (click)="editRestaurant(restaurant)">\r
                <i class="bi bi-pencil me-1"></i>Edit\r
              </button>\r
              <button class="btn btn-sm btn-outline-danger" (click)="deleteRestaurant(restaurant.id || '')">\r
                <i class="bi bi-trash me-1"></i>Delete\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- No restaurants message -->\r
  <div *ngIf="!isLoading && !restaurants.length" class="alert alert-info">\r
    No restaurants found. Click the "Add New Restaurant" button to create one.\r
  </div>\r
\r
  <div class="mt-4 mb-5">\r
    <a routerLink="/admin" class="btn btn-secondary">\r
      <i class="bi bi-arrow-left me-2"></i>Back to Dashboard\r
    </a>\r
  </div>\r
  \r
  <div class="mb-5 pb-5">\r
    <!-- Extra padding at the bottom -->\r
  </div>\r
</div> `, styles: ["/* src/app/features/admin/restaurant-management/restaurant-management.component.scss */\n.table-responsive {\n  overflow-x: auto;\n}\n.btn-group .btn {\n  margin-right: 0.25rem;\n}\n.btn-group .btn:last-child {\n  margin-right: 0;\n}\n.card-header {\n  background-color: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .btn-group {\n    display: flex;\n    flex-direction: column;\n  }\n  .btn-group .btn {\n    margin-right: 0;\n    margin-bottom: 0.25rem;\n  }\n  .btn-group .btn:last-child {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=restaurant-management.component-QQLPLLBW.css.map */\n"] }]
  }], () => [{ type: RestaurantService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantManagementComponent, { className: "RestaurantManagementComponent", filePath: "src/app/features/admin/restaurant-management/restaurant-management.component.ts", lineNumber: 17 });
})();
export {
  RestaurantManagementComponent
};
//# sourceMappingURL=chunk-7XYDRG3Q.js.map
