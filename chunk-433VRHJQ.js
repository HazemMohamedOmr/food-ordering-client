import {
  MenuItemService
} from "./chunk-BS6L2LPW.js";
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
  SharedModule
} from "./chunk-Q4YMUNUZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RHXFPPC4.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  Router,
  RouterLink,
  Subject,
  environment,
  finalize,
  forkJoin,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
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
  ɵɵpropertyInterpolate1,
  ɵɵpropertyInterpolate2,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
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
  __spreadProps,
  __spreadValues
} from "./chunk-GMSD7K74.js";

// src/app/features/restaurants/restaurant-detail/restaurant-detail.component.ts
var _c0 = () => ({ "background-image": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop)" });
var _c1 = (a0, a1) => ({ "fa-heart": a0, "fa-heart-o": a1 });
var _c2 = () => [1, 2, 3, 4, 5];
function RestaurantDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function RestaurantDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function RestaurantDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span", 27);
    \u0275\u0275text(4, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 28);
    \u0275\u0275text(6, "Loading restaurant information...");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantDetailComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "span", 81);
    \u0275\u0275text(3, "Free Delivery");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantDetailComponent_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Delivery Fee: $", ctx_r1.restaurant.deliveryFee.toFixed(2), " ");
  }
}
function RestaurantDetailComponent_div_4_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r5);
  }
}
function RestaurantDetailComponent_div_4_div_21_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_4_div_21_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startOrder());
    });
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2, " Start New Order ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantDetailComponent_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, RestaurantDetailComponent_div_4_div_21_button_1_Template, 3, 0, "button", 85);
    \u0275\u0275elementStart(2, "button", 86);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_4_div_21_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275element(3, "i", 87);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 86);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_4_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareRestaurant());
    });
    \u0275\u0275element(6, "i", 88);
    \u0275\u0275text(7, " Share ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.authService.isManager || ctx_r1.authService.isAdmin) && !ctx_r1.hasActiveOrder);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c1, ctx_r1.isFavorite, !ctx_r1.isFavorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isFavorite ? "Saved" : "Save", " ");
  }
}
function RestaurantDetailComponent_div_4_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cuisine_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cuisine_r8);
  }
}
function RestaurantDetailComponent_div_4_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93);
    \u0275\u0275element(2, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Menu Items Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "This restaurant hasn't added any menu items yet. Check back later!");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantDetailComponent_div_4_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96);
    \u0275\u0275element(2, "i", 97);
    \u0275\u0275text(3, " There is no active order for this restaurant. Please wait for a manager to start an order before adding items to your cart. ");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantDetailComponent_div_4_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 98);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275text(3, " This restaurant has an active order! You can now add items to your order. ");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantDetailComponent_div_4_For_90_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275text(2, " Popular ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantDetailComponent_div_4_For_90_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "button", 112);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_4_For_90_div_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decreaseQuantity(item_r10));
    });
    \u0275\u0275text(3, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 113);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 112);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_4_For_90_div_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.increaseQuantity(item_r10));
    });
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 114);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_4_For_90_div_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(item_r10));
    });
    \u0275\u0275element(9, "i", 115);
    \u0275\u0275text(10, " Add ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getItemQuantity(item_r10));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.hasActiveOrder);
  }
}
function RestaurantDetailComponent_div_4_For_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 99)(2, "div", 100);
    \u0275\u0275element(3, "img", 101);
    \u0275\u0275template(4, RestaurantDetailComponent_div_4_For_90_div_4_Template, 3, 0, "div", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 103)(6, "div", 104)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 105);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 106);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, RestaurantDetailComponent_div_4_For_90_div_13_Template, 11, 2, "div", 107);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", item_r10.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r10.isPopular);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", item_r10.price.toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.isLoggedIn);
  }
}
function RestaurantDetailComponent_div_4_div_100_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 39);
  }
}
function RestaurantDetailComponent_div_4_div_100_i_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 127);
  }
}
function RestaurantDetailComponent_div_4_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 117)(2, "div", 118)(3, "div", 119);
    \u0275\u0275element(4, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 121)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 122);
    \u0275\u0275template(9, RestaurantDetailComponent_div_4_div_100_i_9_Template, 1, 0, "i", 123)(10, RestaurantDetailComponent_div_4_div_100_i_10_Template, 1, 0, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 125);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 126)(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("src", "https://i.pravatar.cc/150?img=", review_r11.avatarId, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c2).slice(0, review_r11.rating));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c2).slice(review_r11.rating, 5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r11.date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r11.comment);
  }
}
function RestaurantDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "section", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34)(8, "div", 35);
    \u0275\u0275element(9, "i", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 35);
    \u0275\u0275element(12, "i", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, RestaurantDetailComponent_div_4_div_14_Template, 4, 0, "div", 38)(15, RestaurantDetailComponent_div_4_div_15_Template, 3, 1, "div", 38);
    \u0275\u0275elementStart(16, "div", 35);
    \u0275\u0275element(17, "i", 39);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 40);
    \u0275\u0275template(20, RestaurantDetailComponent_div_4_span_20_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, RestaurantDetailComponent_div_4_div_21_Template, 8, 6, "div", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "section", 43)(23, "div", 31)(24, "div", 44)(25, "div", 45)(26, "div", 46)(27, "h2");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 47)(32, "div", 48)(33, "h4");
    \u0275\u0275text(34, "Cuisines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 49);
    \u0275\u0275template(36, RestaurantDetailComponent_div_4_span_36_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 48)(38, "h4");
    \u0275\u0275text(39, "Opening Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ul", 51)(41, "li")(42, "span");
    \u0275\u0275text(43, "Monday - Friday:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "11:00 AM - 10:00 PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "li")(47, "span");
    \u0275\u0275text(48, "Saturday - Sunday:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "10:00 AM - 11:00 PM");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 48)(52, "h4");
    \u0275\u0275text(53, "Payment Methods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 52);
    \u0275\u0275element(55, "i", 53)(56, "i", 54)(57, "i", 55)(58, "i", 56);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 57)(60, "div", 58)(61, "h3");
    \u0275\u0275text(62, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 59);
    \u0275\u0275element(64, "img", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 61)(66, "a", 62);
    \u0275\u0275element(67, "i", 63);
    \u0275\u0275text(68, " Get Directions ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(69, "section", 64)(70, "div", 31)(71, "div", 65)(72, "h2");
    \u0275\u0275text(73, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 66)(75, "button", 67);
    \u0275\u0275text(76, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 68);
    \u0275\u0275text(78, "Appetizers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "button", 68);
    \u0275\u0275text(80, "Main Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "button", 68);
    \u0275\u0275text(82, "Desserts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 68);
    \u0275\u0275text(84, "Beverages");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(85, RestaurantDetailComponent_div_4_div_85_Template, 7, 0, "div", 69);
    \u0275\u0275elementStart(86, "div", 44);
    \u0275\u0275template(87, RestaurantDetailComponent_div_4_div_87_Template, 4, 0, "div", 70)(88, RestaurantDetailComponent_div_4_div_88_Template, 4, 0, "div", 70);
    \u0275\u0275repeaterCreate(89, RestaurantDetailComponent_div_4_For_90_Template, 14, 6, "div", 71, \u0275\u0275componentInstance().trackByMenuItem, true);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "section", 72)(92, "div", 31)(93, "div", 65)(94, "h2");
    \u0275\u0275text(95, "Customer Reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 73);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_4_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showReviewForm());
    });
    \u0275\u0275element(97, "i", 74);
    \u0275\u0275text(98, " Write a Review ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 75);
    \u0275\u0275template(100, RestaurantDetailComponent_div_4_div_100_Template, 16, 9, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 77)(102, "button", 78);
    \u0275\u0275element(103, "i", 79);
    \u0275\u0275text(104, " Load More Reviews ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(23, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.restaurant.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.restaurant.address, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.restaurant.phoneNumber, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.restaurant.deliveryFee === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.restaurant.deliveryFee > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.restaurantRating, " (", ctx_r1.restaurantReviewCount, " reviews) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.restaurantTags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.isLoggedIn);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("About ", ctx_r1.restaurant.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.restaurant.description);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.restaurantCuisines);
    \u0275\u0275advance(28);
    \u0275\u0275propertyInterpolate2("src", "https://maps.googleapis.com/maps/api/staticmap?center=", ctx_r1.restaurant.address, "&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C", ctx_r1.restaurant.address, "&key=YOUR_API_KEY", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("href", "https://maps.google.com/?q=", ctx_r1.restaurant.address, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.menuItems.length === 0 && !ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.hasActiveOrder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasActiveOrder);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.menuItems);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.reviews)("ngForTrackBy", ctx_r1.trackByReview);
  }
}
function RestaurantDetailComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 129);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 130)(6, "div", 131);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 111)(9, "button", 112);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decreaseQuantity(ctx_r1.selectedItem));
    });
    \u0275\u0275text(10, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 113);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 112);
    \u0275\u0275listener("click", function RestaurantDetailComponent_div_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.increaseQuantity(ctx_r1.selectedItem));
    });
    \u0275\u0275text(14, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 132)(16, "label", 133);
    \u0275\u0275text(17, "Special Instructions (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 134);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantDetailComponent_div_17_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.itemNote, $event) || (ctx_r1.itemNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedItem.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedItem.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r1.selectedItem.price.toFixed(2), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getItemQuantity(ctx_r1.selectedItem));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.itemNote);
  }
}
function RestaurantDetailComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 135);
  }
}
var RestaurantDetailComponent = class _RestaurantDetailComponent {
  route;
  router;
  restaurantService;
  menuItemService;
  orderService;
  authService;
  cartService;
  cdr;
  http;
  restaurantId;
  restaurant = null;
  menuItems = [];
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  isFavorite = false;
  itemQuantities = {};
  hasActiveOrder = false;
  activeOrderId = null;
  // For the modal
  selectedItem = null;
  itemNote = "";
  showModal = false;
  // Track subscriptions for cleanup
  destroy$ = new Subject();
  // Cached values
  restaurantRating = "";
  restaurantReviewCount = "";
  restaurantTags = [];
  restaurantCuisines = [];
  reviews = [];
  // Sample cuisine tags to display (would come from API in a real app)
  availableCuisines = [
    "Italian",
    "Pizza",
    "Pasta",
    "Chinese",
    "Japanese",
    "Thai",
    "Indian",
    "Mexican",
    "Mediterranean",
    "Vegetarian",
    "American",
    "BBQ",
    "Seafood",
    "Greek",
    "Turkish",
    "Lebanese",
    "Vietnamese"
  ];
  availableTags = [
    "Outdoor Seating",
    "Delivery",
    "Takeout",
    "Group-Friendly",
    "Has TV",
    "Casual Dining",
    "Fine Dining",
    "Family-Friendly",
    "Romantic",
    "Live Music",
    "Happy Hour",
    "Gluten-Free Options",
    "Vegan Options",
    "Organic",
    "Farm-to-Table"
  ];
  constructor(route, router, restaurantService, menuItemService, orderService, authService, cartService, cdr, http) {
    this.route = route;
    this.router = router;
    this.restaurantService = restaurantService;
    this.menuItemService = menuItemService;
    this.orderService = orderService;
    this.authService = authService;
    this.cartService = cartService;
    this.cdr = cdr;
    this.http = http;
    this.restaurantId = this.route.snapshot.paramMap.get("id") || "";
    this.restaurantRating = this.generateRandomRating();
    this.restaurantReviewCount = this.generateRandomReviewCount();
    this.restaurantTags = this.getRandomTags();
    this.restaurantCuisines = this.getRandomCuisines();
    this.reviews = this.getDummyReviews();
  }
  ngOnInit() {
    if (!this.restaurantId) {
      this.router.navigate(["/restaurants"]);
      return;
    }
    this.loadRestaurantDetails();
    this.checkActiveOrder();
    const checkInterval = setInterval(() => {
      if (this.destroy$.closed) {
        clearInterval(checkInterval);
        return;
      }
      this.checkActiveOrder();
    }, 3e4);
    this.checkActiveOrderDirectly();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadRestaurantDetails() {
    this.isLoading = true;
    this.errorMessage = "";
    forkJoin({
      restaurant: this.restaurantService.getById(this.restaurantId),
      menuItems: this.menuItemService.getByRestaurant(this.restaurantId)
    }).pipe(takeUntil(this.destroy$), finalize(() => {
      this.isLoading = false;
      this.cdr.markForCheck();
    })).subscribe({
      next: (result) => {
        this.restaurant = result.restaurant;
        this.menuItems = result.menuItems.map((item) => __spreadProps(__spreadValues({}, item), {
          isPopular: Math.random() > 0.7
          // ~30% of items will be marked as popular
        }));
        this.initializeQuantities();
      },
      error: (error) => {
        this.errorMessage = error.message || "Failed to load restaurant details";
        this.cdr.markForCheck();
      }
    });
  }
  checkActiveOrder() {
    if (!this.restaurantId)
      return;
    console.log("Checking active order for restaurant:", this.restaurantId);
    const cachedOrder = this.orderService.getCachedActiveOrder(this.restaurantId);
    if (cachedOrder) {
      console.log("Found cached active order:", cachedOrder);
      this.hasActiveOrder = true;
      this.activeOrderId = cachedOrder.orderId;
      this.cdr.markForCheck();
    }
    this.orderService.getActiveOrderForRestaurant(this.restaurantId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (order) => {
        console.log("Active order API response (processed):", order);
        if (order && order.id) {
          const orderRestaurantId = order.restaurantId || (order.restaurant ? order.restaurant.id : null);
          console.log("Order restaurant ID:", orderRestaurantId, "Current restaurant ID:", this.restaurantId);
          if (!orderRestaurantId || orderRestaurantId === this.restaurantId) {
            this.hasActiveOrder = true;
            this.activeOrderId = order.id;
            console.log("Active order found for this restaurant:", this.hasActiveOrder, "Order ID:", this.activeOrderId);
            if (this.hasActiveOrder) {
              this.cartService.setRestaurant(this.restaurantId).subscribe();
            }
          } else {
            this.hasActiveOrder = false;
            this.activeOrderId = null;
            console.log("Order found but for a different restaurant");
          }
        } else {
          this.hasActiveOrder = false;
          this.activeOrderId = null;
          console.log("No active order found");
        }
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error checking active order:", error);
        if (!this.hasActiveOrder && cachedOrder) {
          this.hasActiveOrder = true;
          this.activeOrderId = cachedOrder.orderId;
        } else {
          this.hasActiveOrder = false;
          this.activeOrderId = null;
        }
        this.cdr.markForCheck();
      }
    });
  }
  checkActiveOrderDirectly() {
    this.http.get(`${environment.apiUrl}/orders/active`).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Direct API call response for all active orders:", response);
        let orders = [];
        if (Array.isArray(response)) {
          orders = response;
        } else if (response.data && Array.isArray(response.data)) {
          orders = response.data;
        } else {
          console.error("Unexpected response format:", response);
          return;
        }
        const matchingOrder = orders.find((order) => {
          const orderRestaurantId = order.restaurantId || (order.restaurant ? order.restaurant.id : null);
          return orderRestaurantId === this.restaurantId;
        });
        if (matchingOrder && matchingOrder.id) {
          console.log("Active order found directly:", matchingOrder);
          this.hasActiveOrder = true;
          this.activeOrderId = matchingOrder.id;
          this.orderService.storeActiveOrder(this.restaurantId, matchingOrder.id);
          this.cdr.markForCheck();
        }
      },
      error: (error) => {
        console.error("Error in direct active order check:", error);
      }
    });
  }
  initializeQuantities() {
    this.menuItems.forEach((item) => {
      if (item.id && !this.itemQuantities[item.id]) {
        this.itemQuantities[item.id] = 1;
      }
    });
  }
  startOrder() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    if (!this.authService.isManager && !this.authService.isAdmin) {
      this.errorMessage = "Only restaurant managers or admins can start orders";
      this.cdr.markForCheck();
      return;
    }
    const managerId = this.authService.currentUser?.id || "";
    console.log("Starting order for restaurant:", this.restaurantId, "Manager:", managerId);
    this.http.post(`${environment.apiUrl}/orders/start`, {
      restaurantId: this.restaurantId,
      managerId
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Order start response:", response);
        const orderId = response.id || response;
        this.successMessage = "Order started successfully! Users can now add items to their cart.";
        this.activeOrderId = orderId;
        this.hasActiveOrder = true;
        this.orderService.storeActiveOrder(this.restaurantId, orderId);
        this.cartService.setRestaurant(this.restaurantId).subscribe();
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Failed to start order:", error);
        this.errorMessage = error.message || "Failed to start order";
        this.cdr.markForCheck();
      }
    });
  }
  closeOrder() {
    if (!this.activeOrderId)
      return;
    if (!this.authService.isManager && !this.authService.isAdmin) {
      this.errorMessage = "Only restaurant managers or admins can close orders";
      this.cdr.markForCheck();
      return;
    }
    console.log("Closing order:", this.activeOrderId);
    this.http.post(`${environment.apiUrl}/orders/${this.activeOrderId}/close`, {}).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Order close response:", response);
        this.successMessage = "Order closed successfully! Users can no longer add items to their cart.";
        this.hasActiveOrder = false;
        this.activeOrderId = null;
        this.orderService.removeActiveOrder(this.restaurantId);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Failed to close order:", error);
        this.errorMessage = error.message || "Failed to close order";
        this.cdr.markForCheck();
      }
    });
  }
  trackByMenuItem(index, item) {
    return item.id || String(index);
  }
  trackByReview(index, review) {
    return index;
  }
  getItemQuantity(item) {
    return item.id ? this.itemQuantities[item.id] || 1 : 1;
  }
  increaseQuantity(item) {
    if (item.id && this.itemQuantities[item.id] < 10) {
      this.itemQuantities[item.id]++;
      this.cdr.markForCheck();
    }
  }
  decreaseQuantity(item) {
    if (item.id && this.itemQuantities[item.id] > 1) {
      this.itemQuantities[item.id]--;
      this.cdr.markForCheck();
    }
  }
  addToCart(item) {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    console.log("Adding to cart. Active order:", this.hasActiveOrder, "Order ID:", this.activeOrderId);
    if (!this.hasActiveOrder || !this.activeOrderId) {
      this.http.get(`${environment.apiUrl}/orders/active`).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          console.log("Direct API check for adding to cart:", response);
          let orders = [];
          if (Array.isArray(response)) {
            orders = response;
          } else if (response.data && Array.isArray(response.data)) {
            orders = response.data;
          } else {
            console.error("Unexpected response format:", response);
            this.errorMessage = "There is no active order for this restaurant. Please wait for a manager to start an order.";
            this.cdr.markForCheck();
            return;
          }
          const matchingOrder = orders.find((order) => {
            const orderRestaurantId = order.restaurantId || (order.restaurant ? order.restaurant.id : null);
            return orderRestaurantId === this.restaurantId;
          });
          if (matchingOrder && matchingOrder.id) {
            console.log("Found active order for adding item:", matchingOrder);
            this.hasActiveOrder = true;
            this.activeOrderId = matchingOrder.id;
            this.orderService.storeActiveOrder(this.restaurantId, matchingOrder.id);
            this.openAddItemModal(item);
          } else {
            this.errorMessage = "There is no active order for this restaurant. Please wait for a manager to start an order.";
            this.cdr.markForCheck();
          }
        },
        error: (error) => {
          console.error("Error checking active order for adding item:", error);
          this.errorMessage = "There is no active order for this restaurant. Please wait for a manager to start an order.";
          this.cdr.markForCheck();
        }
      });
    } else {
      this.openAddItemModal(item);
    }
  }
  openAddItemModal(item) {
    this.selectedItem = item;
    this.itemNote = "";
    this.showModal = true;
    this.cdr.markForCheck();
  }
  confirmAddToCart() {
    if (!this.selectedItem || !this.activeOrderId)
      return;
    const quantity = this.selectedItem.id ? this.itemQuantities[this.selectedItem.id] : 1;
    const orderItem = {
      orderId: this.activeOrderId,
      menuItemId: this.selectedItem.id || "",
      quantity,
      note: this.itemNote,
      userId: this.authService.currentUser?.id || ""
    };
    this.orderService.addOrderItem(orderItem).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.successMessage = `${this.selectedItem?.name} added to your order!`;
        this.closeModal();
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.errorMessage = error.message || "Failed to add item to order";
        this.closeModal();
        this.cdr.markForCheck();
      }
    });
  }
  closeModal() {
    this.showModal = false;
    this.selectedItem = null;
    this.itemNote = "";
    this.cdr.markForCheck();
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.cdr.markForCheck();
  }
  shareRestaurant() {
    alert(`Sharing ${this.restaurant?.name || "restaurant"}`);
  }
  showReviewForm() {
    alert("Review form would be shown here");
  }
  generateRandomRating() {
    return (3.5 + Math.random() * 1.5).toFixed(1);
  }
  generateRandomReviewCount() {
    return Math.floor(50 + Math.random() * 200).toString();
  }
  getRandomTags() {
    const shuffled = [...this.availableTags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3 + Math.floor(Math.random() * 3));
  }
  getRandomCuisines() {
    const shuffled = [...this.availableCuisines].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2 + Math.floor(Math.random() * 2));
  }
  getDummyReviews() {
    const reviews = [];
    const names = ["John D.", "Sarah M.", "Robert J.", "Emily L.", "Michael T.", "Jessica K."];
    const comments = [
      "Great food and excellent service! Will definitely come back again.",
      "The atmosphere was nice but the food was just okay. Service could be better.",
      "Absolutely loved everything about this place! The chef is amazing.",
      "Decent place for a quick meal, but nothing extraordinary.",
      "Best restaurant in town! The desserts are to die for.",
      "Friendly staff and good food. Prices are reasonable for the quality."
    ];
    for (let i = 0; i < 6; i++) {
      reviews.push({
        name: names[i],
        avatarId: (i + 1).toString(),
        rating: 3 + Math.floor(Math.random() * 3),
        date: `${Math.floor(Math.random() * 28) + 1}/${Math.floor(Math.random() * 12) + 1}/2023`,
        comment: comments[i]
      });
    }
    return reviews;
  }
  static \u0275fac = function RestaurantDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RestaurantService), \u0275\u0275directiveInject(MenuItemService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantDetailComponent, selectors: [["app-restaurant-detail"]], decls: 24, vars: 10, consts: [[1, "restaurant-detail-container"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "restaurant-content", 4, "ngIf"], [1, "container", "back-nav"], ["routerLink", "/restaurants", 1, "btn", "btn-outline-primary"], [1, "fas", "fa-arrow-left", "me-2"], [1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "selected-item-details", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "modal-backdrop fade show", 4, "ngIf"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], [1, "loading-container"], [1, "spinner-wrapper"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"], [1, "restaurant-content"], [1, "restaurant-hero", 3, "ngStyle"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-8", "restaurant-hero-content"], [1, "restaurant-meta"], [1, "meta-item"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone-alt"], ["class", "meta-item", 4, "ngIf"], [1, "fas", "fa-star"], [1, "restaurant-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], ["class", "restaurant-actions", 4, "ngIf"], [1, "restaurant-info-section"], [1, "row"], [1, "col-lg-8"], [1, "restaurant-description-card"], [1, "additional-info"], [1, "info-group"], [1, "cuisine-tags"], ["class", "cuisine-tag", 4, "ngFor", "ngForOf"], [1, "hours-list"], [1, "payment-methods"], [1, "fab", "fa-cc-visa"], [1, "fab", "fa-cc-mastercard"], [1, "fab", "fa-cc-amex"], [1, "fab", "fa-cc-paypal"], [1, "col-lg-4"], [1, "restaurant-map-card"], [1, "map-placeholder"], ["alt", "Restaurant location map", "width", "600", "height", "300", "loading", "lazy", 1, "img-fluid", 3, "src"], [1, "map-actions"], ["target", "_blank", 1, "btn", "btn-outline-primary", "btn-sm", 3, "href"], [1, "fas", "fa-directions", "me-2"], [1, "menu-section"], [1, "section-heading"], [1, "menu-filter"], [1, "btn", "btn-outline-secondary", "btn-sm", "active"], [1, "btn", "btn-outline-secondary", "btn-sm"], ["class", "empty-menu-state", 4, "ngIf"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "col-md-6", "col-lg-4", "mb-4"], [1, "reviews-section"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-star", "me-2"], [1, "reviews-list"], ["class", "review-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-center", "mt-4"], [1, "btn", "btn-outline-secondary"], [1, "fas", "fa-sync", "me-2"], [1, "fas", "fa-shipping-fast"], [1, "text-success"], [1, "fas", "fa-truck"], [1, "tag"], [1, "restaurant-actions"], ["class", "btn btn-primary btn-action", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-light", "btn-action", 3, "click"], [1, "fas", 3, "ngClass"], [1, "fas", "fa-share-alt", "me-2"], [1, "btn", "btn-primary", "btn-action", 3, "click"], [1, "fas", "fa-plus-circle", "me-2"], [1, "cuisine-tag"], [1, "empty-menu-state"], [1, "empty-state-icon"], [1, "fas", "fa-utensils"], [1, "col-12", "mb-4"], [1, "alert", "alert-warning"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "alert", "alert-success"], [1, "menu-item-card"], [1, "menu-item-image"], ["src", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", "width", "400", "height", "300", "loading", "lazy", 1, "img-fluid", 3, "alt"], ["class", "menu-item-badge", 4, "ngIf"], [1, "menu-item-content"], [1, "menu-item-header"], [1, "menu-item-price"], [1, "menu-item-description"], ["class", "menu-item-actions", 4, "ngIf"], [1, "menu-item-badge"], [1, "fas", "fa-fire"], [1, "menu-item-actions"], [1, "quantity-control"], [1, "btn-quantity", 3, "click"], [1, "quantity"], [1, "btn", "btn-primary", "btn-add-cart", 3, "click", "disabled"], [1, "fas", "fa-cart-plus", "me-2"], [1, "review-card"], [1, "review-header"], [1, "reviewer-info"], [1, "reviewer-avatar"], ["width", "50", "height", "50", "alt", "Reviewer", "loading", "lazy", 3, "src"], [1, "reviewer-details"], [1, "review-rating"], ["class", "fas fa-star", 4, "ngFor", "ngForOf"], ["class", "far fa-star", 4, "ngFor", "ngForOf"], [1, "review-date"], [1, "review-body"], [1, "far", "fa-star"], [1, "selected-item-details"], [1, "text-muted"], [1, "price-quantity", "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "price"], [1, "form-group"], ["for", "itemNote"], ["id", "itemNote", "rows", "3", "placeholder", "Any special requests or notes for this item?", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-backdrop", "fade", "show"]], template: function RestaurantDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, RestaurantDetailComponent_div_1_Template, 4, 1, "div", 1)(2, RestaurantDetailComponent_div_2_Template, 4, 1, "div", 2)(3, RestaurantDetailComponent_div_3_Template, 7, 0, "div", 3)(4, RestaurantDetailComponent_div_4_Template, 105, 24, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275text(8, " Back to Restaurants ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h5", 12);
      \u0275\u0275text(14, "Add Item to Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 13);
      \u0275\u0275listener("click", function RestaurantDetailComponent_Template_button_click_15_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14);
      \u0275\u0275template(17, RestaurantDetailComponent_div_17_Template, 19, 5, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 16)(19, "button", 17);
      \u0275\u0275listener("click", function RestaurantDetailComponent_Template_button_click_19_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(20, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 18);
      \u0275\u0275listener("click", function RestaurantDetailComponent_Template_button_click_21_listener() {
        return ctx.confirmAddToCart();
      });
      \u0275\u0275text(22, "Add to Order");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(23, RestaurantDetailComponent_div_23_Template, 1, 0, "div", 19);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.restaurant);
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("display", ctx.showModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showModal);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.selectedItem);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [SharedModule, NgClass, NgForOf, NgIf, NgStyle, RouterLink, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule, CommonModule], styles: ["\n\n.restaurant-hero[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  color: white;\n  padding: 120px 0 60px;\n  position: relative;\n  margin-top: -76px;\n}\n.restaurant-hero-content[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n}\n.restaurant-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.restaurant-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.restaurant-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  margin-right: 20px;\n}\n.restaurant-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.restaurant-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: #4caf50 !important;\n}\n.restaurant-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.restaurant-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.15);\n  color: white;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  border-radius: 20px;\n  display: inline-block;\n}\n.restaurant-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.restaurant-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n}\n.restaurant-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.restaurant-info-section[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  background-color: white;\n}\n.restaurant-description-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  padding: 30px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  height: 100%;\n}\n.restaurant-description-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #333;\n}\n.restaurant-description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.7;\n  color: #666;\n  margin-bottom: 30px;\n}\n.additional-info[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.additional-info[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 15px;\n  color: #333;\n}\n.cuisine-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.cuisine-tags[_ngcontent-%COMP%]   .cuisine-tag[_ngcontent-%COMP%] {\n  background-color: rgba(var(--primary-color-rgb), 0.1);\n  color: var(--primary-color);\n  padding: 6px 12px;\n  font-size: 0.9rem;\n  border-radius: 20px;\n  display: inline-block;\n}\n.hours-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.hours-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px dashed #eee;\n}\n.hours-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.hours-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #666;\n}\n.hours-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 500;\n}\n.payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.payment-methods[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #666;\n}\n.restaurant-map-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  height: 100%;\n}\n.restaurant-map-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-bottom: 15px;\n  color: #333;\n}\n.restaurant-map-card[_ngcontent-%COMP%]   .map-placeholder[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 15px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\n}\n.restaurant-map-card[_ngcontent-%COMP%]   .map-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.restaurant-map-card[_ngcontent-%COMP%]   .map-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 0.9rem;\n}\n.restaurant-map-card[_ngcontent-%COMP%]   .map-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.menu-section[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background-color: #f9f9f9;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 0;\n}\n.menu-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.menu-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 6px 16px;\n}\n.menu-filter[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color);\n}\n.empty-menu-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 0;\n}\n.empty-menu-state[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ccc;\n  margin-bottom: 20px;\n}\n.empty-menu-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n  color: #555;\n}\n.empty-menu-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777;\n  margin-bottom: 0;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.menu-item-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.menu-item-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n.menu-item-image[_ngcontent-%COMP%] {\n  height: 180px;\n  position: relative;\n  overflow: hidden;\n}\n.menu-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  will-change: transform;\n  transition: transform 0.3s ease;\n}\n.menu-item-card[_ngcontent-%COMP%]:hover   .menu-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.menu-item-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.menu-item-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-right: 5px;\n  font-size: 0.9rem;\n}\n.menu-item-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.menu-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.menu-item-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #333;\n}\n.menu-item-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-color);\n  font-size: 1.2rem;\n}\n.menu-item-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  height: 3em;\n}\n.menu-item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.quantity-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #eee;\n  border-radius: 30px;\n  overflow: hidden;\n}\n.quantity-control[_ngcontent-%COMP%]   .btn-quantity[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #f8f9fa;\n  color: #333;\n  font-size: 1rem;\n  font-weight: 600;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.quantity-control[_ngcontent-%COMP%]   .btn-quantity[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.quantity-control[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  width: 30px;\n  text-align: center;\n  font-weight: 600;\n  color: #333;\n}\n.btn-add-cart[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 8px 16px;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.btn-add-cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.reviews-section[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background-color: white;\n}\n.reviews-list[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.review-card[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.review-header[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.reviewer-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.reviewer-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 15px;\n}\n.reviewer-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.reviewer-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #333;\n}\n.review-rating[_ngcontent-%COMP%] {\n  color: #ffc107;\n  font-size: 0.9rem;\n  margin-bottom: 5px;\n}\n.review-rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #888;\n}\n.review-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  min-height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.spinner-wrapper[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.spinner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-top: 15px;\n  font-size: 1rem;\n}\n.alert-custom[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n  border: none;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n.alert-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-right: 10px;\n}\n.back-nav[_ngcontent-%COMP%] {\n  padding: 20px 0 40px;\n}\n.back-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.back-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media (max-width: 991.98px) {\n  .restaurant-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n  }\n  .menu-filter[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    margin-bottom: 10px;\n    overflow-x: auto;\n    padding-bottom: 5px;\n  }\n}\n@media (max-width: 767.98px) {\n  .restaurant-hero-content[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n  }\n  .restaurant-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .restaurant-meta[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .restaurant-tags[_ngcontent-%COMP%], \n   .restaurant-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  z-index: 1040;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n.selected-item-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.selected-item-details[_ngcontent-%COMP%]   .price-quantity[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.selected-item-details[_ngcontent-%COMP%]   .price-quantity[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #333;\n}\n.selected-item-details[_ngcontent-%COMP%]   .quantity-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.selected-item-details[_ngcontent-%COMP%]   .quantity-control[_ngcontent-%COMP%]   .btn-quantity[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  border: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n.selected-item-details[_ngcontent-%COMP%]   .quantity-control[_ngcontent-%COMP%]   .btn-quantity[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n.selected-item-details[_ngcontent-%COMP%]   .quantity-control[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-weight: 600;\n  min-width: 20px;\n  text-align: center;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n/*# sourceMappingURL=restaurant-detail.component-ARPH6PLH.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantDetailComponent, [{
    type: Component,
    args: [{ selector: "app-restaurant-detail", standalone: true, imports: [SharedModule, FormsModule, CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="restaurant-detail-container">\r
  <!-- Error Message -->\r
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show">\r
    <i class="fas fa-exclamation-circle me-2"></i> {{ errorMessage }}\r
    <button type="button" class="btn-close" (click)="errorMessage = ''"></button>\r
  </div>\r
  \r
  <!-- Success Message -->\r
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show">\r
    <i class="fas fa-check-circle me-2"></i> {{ successMessage }}\r
    <button type="button" class="btn-close" (click)="successMessage = ''"></button>\r
  </div>\r
  \r
  <!-- Loading Spinner -->\r
  <div *ngIf="isLoading" class="loading-container">\r
    <div class="spinner-wrapper">\r
      <div class="spinner-border text-primary" role="status">\r
        <span class="visually-hidden">Loading...</span>\r
      </div>\r
      <p class="mt-3">Loading restaurant information...</p>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!isLoading && restaurant" class="restaurant-content">\r
    <!-- Hero Section -->\r
    <section class="restaurant-hero" \r
             [ngStyle]="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop)'}">\r
      <div class="container">\r
        <div class="row align-items-center">\r
          <div class="col-lg-8 restaurant-hero-content">\r
            <h1>{{ restaurant.name }}</h1>\r
            <div class="restaurant-meta">\r
              <div class="meta-item">\r
                <i class="fas fa-map-marker-alt"></i> {{ restaurant.address }}\r
              </div>\r
              <div class="meta-item">\r
                <i class="fas fa-phone-alt"></i> {{ restaurant.phoneNumber }}\r
              </div>\r
              <div class="meta-item" *ngIf="restaurant.deliveryFee === 0">\r
                <i class="fas fa-shipping-fast"></i> <span class="text-success">Free Delivery</span>\r
              </div>\r
              <div class="meta-item" *ngIf="restaurant.deliveryFee > 0">\r
                <i class="fas fa-truck"></i> Delivery Fee: \${{ restaurant.deliveryFee.toFixed(2) }}\r
              </div>\r
              <div class="meta-item">\r
                <i class="fas fa-star"></i> {{ restaurantRating }} ({{ restaurantReviewCount }} reviews)\r
              </div>\r
            </div>\r
            \r
            <div class="restaurant-tags">\r
              <span class="tag" *ngFor="let tag of restaurantTags">{{ tag }}</span>\r
            </div>\r
            \r
            <div class="restaurant-actions" *ngIf="authService.isLoggedIn">\r
              \r
              <button class="btn btn-primary btn-action" (click)="startOrder()" *ngIf="(authService.isManager || authService.isAdmin) && !hasActiveOrder">\r
                <i class="fas fa-plus-circle me-2"></i> Start New Order\r
              </button>\r
              <button class="btn btn-outline-light btn-action" (click)="toggleFavorite()">\r
                <i class="fas" [ngClass]="{'fa-heart': isFavorite, 'fa-heart-o': !isFavorite}"></i>\r
                {{ isFavorite ? 'Saved' : 'Save' }}\r
              </button>\r
              <button class="btn btn-outline-light btn-action" (click)="shareRestaurant()">\r
                <i class="fas fa-share-alt me-2"></i> Share\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- Restaurant Info Section -->\r
    <section class="restaurant-info-section">\r
      <div class="container">\r
        <div class="row">\r
          <div class="col-lg-8">\r
            <div class="restaurant-description-card">\r
              <h2>About {{ restaurant.name }}</h2>\r
              <p>{{ restaurant.description }}</p>\r
              \r
              <div class="additional-info">\r
                <div class="info-group">\r
                  <h4>Cuisines</h4>\r
                  <div class="cuisine-tags">\r
                    <span class="cuisine-tag" *ngFor="let cuisine of restaurantCuisines">{{ cuisine }}</span>\r
                  </div>\r
                </div>\r
                \r
                <div class="info-group">\r
                  <h4>Opening Hours</h4>\r
                  <ul class="hours-list">\r
                    <li><span>Monday - Friday:</span> <span>11:00 AM - 10:00 PM</span></li>\r
                    <li><span>Saturday - Sunday:</span> <span>10:00 AM - 11:00 PM</span></li>\r
                  </ul>\r
                </div>\r
                \r
                <div class="info-group">\r
                  <h4>Payment Methods</h4>\r
                  <div class="payment-methods">\r
                    <i class="fab fa-cc-visa"></i>\r
                    <i class="fab fa-cc-mastercard"></i>\r
                    <i class="fab fa-cc-amex"></i>\r
                    <i class="fab fa-cc-paypal"></i>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="col-lg-4">\r
            <div class="restaurant-map-card">\r
              <h3>Location</h3>\r
              <div class="map-placeholder">\r
                <img src="https://maps.googleapis.com/maps/api/staticmap?center={{ restaurant.address }}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C{{ restaurant.address }}&key=YOUR_API_KEY" \r
                     alt="Restaurant location map" class="img-fluid" width="600" height="300" loading="lazy">\r
              </div>\r
              <div class="map-actions">\r
                <a href="https://maps.google.com/?q={{ restaurant.address }}" target="_blank" class="btn btn-outline-primary btn-sm">\r
                  <i class="fas fa-directions me-2"></i> Get Directions\r
                </a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </section>\r
    \r
    <!-- Menu Section -->\r
    <section class="menu-section">\r
      <div class="container">\r
        <div class="section-heading">\r
          <h2>Menu</h2>\r
          <div class="menu-filter">\r
            <button class="btn btn-outline-secondary btn-sm active">All</button>\r
            <button class="btn btn-outline-secondary btn-sm">Appetizers</button>\r
            <button class="btn btn-outline-secondary btn-sm">Main Courses</button>\r
            <button class="btn btn-outline-secondary btn-sm">Desserts</button>\r
            <button class="btn btn-outline-secondary btn-sm">Beverages</button>\r
          </div>\r
        </div>\r
        \r
        <div *ngIf="menuItems.length === 0 && !isLoading" class="empty-menu-state">\r
          <div class="empty-state-icon">\r
            <i class="fas fa-utensils"></i>\r
          </div>\r
          <h3>No Menu Items Available</h3>\r
          <p>This restaurant hasn't added any menu items yet. Check back later!</p>\r
        </div>\r
        \r
        <div class="row">\r
          <!-- Order Status Notice for Users -->\r
          <div class="col-12 mb-4" *ngIf="!hasActiveOrder">\r
            <div class="alert alert-warning">\r
              <i class="fas fa-exclamation-triangle me-2"></i> \r
              There is no active order for this restaurant. Please wait for a manager to start an order before adding items to your cart.\r
            </div>\r
          </div>\r
          \r
          <div class="col-12 mb-4" *ngIf="hasActiveOrder">\r
            <div class="alert alert-success">\r
              <i class="fas fa-check-circle me-2"></i> \r
              This restaurant has an active order! You can now add items to your order.\r
            </div>\r
          </div>\r
          \r
          @for (item of menuItems; track trackByMenuItem($index, item)) {\r
            <div class="col-md-6 col-lg-4 mb-4">\r
              <div class="menu-item-card">\r
                <div class="menu-item-image">\r
                  <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" class="img-fluid" width="400" height="300" alt="{{ item.name }}" loading="lazy">\r
                  <div class="menu-item-badge" *ngIf="item.isPopular">\r
                    <i class="fas fa-fire"></i> Popular\r
                  </div>\r
                </div>\r
                <div class="menu-item-content">\r
                  <div class="menu-item-header">\r
                    <h3>{{ item.name }}</h3>\r
                    <div class="menu-item-price">\${{ item.price.toFixed(2) }}</div>\r
                  </div>\r
                  <p class="menu-item-description">{{ item.description }}</p>\r
                  \r
                  <div class="menu-item-actions" *ngIf="authService.isLoggedIn">\r
                    <div class="quantity-control">\r
                      <button class="btn-quantity" (click)="decreaseQuantity(item)">-</button>\r
                      <span class="quantity">{{ getItemQuantity(item) }}</span>\r
                      <button class="btn-quantity" (click)="increaseQuantity(item)">+</button>\r
                    </div>\r
                    <button class="btn btn-primary btn-add-cart" [disabled]="!hasActiveOrder" (click)="addToCart(item)">\r
                      <i class="fas fa-cart-plus me-2"></i> Add\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </section>\r
    \r
    <!-- Reviews Section -->\r
    <section class="reviews-section">\r
      <div class="container">\r
        <div class="section-heading">\r
          <h2>Customer Reviews</h2>\r
          <button class="btn btn-outline-primary" (click)="showReviewForm()">\r
            <i class="fas fa-star me-2"></i> Write a Review\r
          </button>\r
        </div>\r
        \r
        <div class="reviews-list">\r
          <div class="review-card" *ngFor="let review of reviews; trackBy: trackByReview">\r
            <div class="review-header">\r
              <div class="reviewer-info">\r
                <div class="reviewer-avatar">\r
                  <img src="https://i.pravatar.cc/150?img={{ review.avatarId }}" width="50" height="50" alt="Reviewer" loading="lazy">\r
                </div>\r
                <div class="reviewer-details">\r
                  <h4>{{ review.name }}</h4>\r
                  <div class="review-rating">\r
                    <i class="fas fa-star" *ngFor="let star of [1,2,3,4,5].slice(0, review.rating)"></i>\r
                    <i class="far fa-star" *ngFor="let star of [1,2,3,4,5].slice(review.rating, 5)"></i>\r
                  </div>\r
                  <span class="review-date">{{ review.date }}</span>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="review-body">\r
              <p>{{ review.comment }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="text-center mt-4">\r
          <button class="btn btn-outline-secondary">\r
            <i class="fas fa-sync me-2"></i> Load More Reviews\r
          </button>\r
        </div>\r
      </div>\r
    </section>\r
  </div>\r
  \r
  <!-- Back button -->\r
  <div class="container back-nav">\r
    <button class="btn btn-outline-primary" routerLink="/restaurants">\r
      <i class="fas fa-arrow-left me-2"></i> Back to Restaurants\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Add Item Modal -->\r
<div class="modal" [class.show]="showModal" [style.display]="showModal ? 'block' : 'none'">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">Add Item to Order</h5>\r
        <button type="button" class="btn-close" (click)="closeModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div *ngIf="selectedItem" class="selected-item-details">\r
          <h4>{{ selectedItem.name }}</h4>\r
          <p class="text-muted">{{ selectedItem.description }}</p>\r
          <div class="price-quantity d-flex justify-content-between align-items-center mb-3">\r
            <div class="price">\${{ selectedItem.price.toFixed(2) }}</div>\r
            <div class="quantity-control">\r
              <button class="btn-quantity" (click)="decreaseQuantity(selectedItem)">-</button>\r
              <span class="quantity">{{ getItemQuantity(selectedItem) }}</span>\r
              <button class="btn-quantity" (click)="increaseQuantity(selectedItem)">+</button>\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label for="itemNote">Special Instructions (optional)</label>\r
            <textarea id="itemNote" class="form-control" rows="3" \r
                     placeholder="Any special requests or notes for this item?" \r
                     [(ngModel)]="itemNote"></textarea>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeModal()">Cancel</button>\r
        <button type="button" class="btn btn-primary" (click)="confirmAddToCart()">Add to Order</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="showModal"></div> `, styles: ["/* src/app/features/restaurants/restaurant-detail/restaurant-detail.component.scss */\n.restaurant-hero {\n  background-size: cover;\n  background-position: center;\n  color: white;\n  padding: 120px 0 60px;\n  position: relative;\n  margin-top: -76px;\n}\n.restaurant-hero-content {\n  padding-bottom: 40px;\n}\n.restaurant-hero-content h1 {\n  font-size: 2.8rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.restaurant-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.restaurant-meta .meta-item {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  margin-right: 20px;\n}\n.restaurant-meta .meta-item i {\n  margin-right: 8px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.restaurant-meta .meta-item .text-success {\n  color: #4caf50 !important;\n}\n.restaurant-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.restaurant-tags .tag {\n  background-color: rgba(255, 255, 255, 0.15);\n  color: white;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  border-radius: 20px;\n  display: inline-block;\n}\n.restaurant-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.restaurant-actions .btn-action {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n}\n.restaurant-actions .btn-action i {\n  margin-right: 8px;\n}\n.restaurant-info-section {\n  padding: 50px 0;\n  background-color: white;\n}\n.restaurant-description-card {\n  background-color: white;\n  border-radius: 12px;\n  padding: 30px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  height: 100%;\n}\n.restaurant-description-card h2 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #333;\n}\n.restaurant-description-card p {\n  font-size: 1rem;\n  line-height: 1.7;\n  color: #666;\n  margin-bottom: 30px;\n}\n.additional-info .info-group {\n  margin-bottom: 25px;\n}\n.additional-info .info-group h4 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 15px;\n  color: #333;\n}\n.cuisine-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.cuisine-tags .cuisine-tag {\n  background-color: rgba(var(--primary-color-rgb), 0.1);\n  color: var(--primary-color);\n  padding: 6px 12px;\n  font-size: 0.9rem;\n  border-radius: 20px;\n  display: inline-block;\n}\n.hours-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.hours-list li {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px dashed #eee;\n}\n.hours-list li:last-child {\n  border-bottom: none;\n}\n.hours-list li span {\n  font-size: 0.95rem;\n  color: #666;\n}\n.hours-list li span:first-child {\n  font-weight: 500;\n}\n.payment-methods {\n  display: flex;\n  gap: 15px;\n}\n.payment-methods i {\n  font-size: 2rem;\n  color: #666;\n}\n.restaurant-map-card {\n  background-color: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  height: 100%;\n}\n.restaurant-map-card h3 {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-bottom: 15px;\n  color: #333;\n}\n.restaurant-map-card .map-placeholder {\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 15px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\n}\n.restaurant-map-card .map-actions {\n  display: flex;\n  justify-content: center;\n}\n.restaurant-map-card .map-actions .btn {\n  padding: 8px 16px;\n  font-size: 0.9rem;\n}\n.restaurant-map-card .map-actions .btn i {\n  margin-right: 5px;\n}\n.menu-section {\n  padding: 60px 0;\n  background-color: #f9f9f9;\n}\n.section-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.section-heading h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 0;\n}\n.menu-filter {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.menu-filter .btn {\n  border-radius: 20px;\n  padding: 6px 16px;\n}\n.menu-filter .btn.active {\n  background-color: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color);\n}\n.empty-menu-state {\n  text-align: center;\n  padding: 50px 0;\n}\n.empty-menu-state .empty-state-icon {\n  font-size: 3rem;\n  color: #ccc;\n  margin-bottom: 20px;\n}\n.empty-menu-state h3 {\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n  color: #555;\n}\n.empty-menu-state p {\n  color: #777;\n  margin-bottom: 0;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.menu-item-card {\n  background-color: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.menu-item-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n.menu-item-image {\n  height: 180px;\n  position: relative;\n  overflow: hidden;\n}\n.menu-item-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  will-change: transform;\n  transition: transform 0.3s ease;\n}\n.menu-item-card:hover .menu-item-image img {\n  transform: scale(1.03);\n}\n.menu-item-badge {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.menu-item-badge i {\n  color: #fff;\n  margin-right: 5px;\n  font-size: 0.9rem;\n}\n.menu-item-content {\n  padding: 20px;\n}\n.menu-item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.menu-item-header h3 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #333;\n}\n.menu-item-price {\n  font-weight: 700;\n  color: var(--primary-color);\n  font-size: 1.2rem;\n}\n.menu-item-description {\n  font-size: 0.9rem;\n  color: #666;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  height: 3em;\n}\n.menu-item-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.quantity-control {\n  display: flex;\n  align-items: center;\n  border: 1px solid #eee;\n  border-radius: 30px;\n  overflow: hidden;\n}\n.quantity-control .btn-quantity {\n  border: none;\n  background-color: #f8f9fa;\n  color: #333;\n  font-size: 1rem;\n  font-weight: 600;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.quantity-control .btn-quantity:hover {\n  background-color: #e9ecef;\n}\n.quantity-control .quantity {\n  width: 30px;\n  text-align: center;\n  font-weight: 600;\n  color: #333;\n}\n.btn-add-cart {\n  border-radius: 30px;\n  padding: 8px 16px;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.btn-add-cart i {\n  margin-right: 5px;\n}\n.reviews-section {\n  padding: 60px 0;\n  background-color: white;\n}\n.reviews-list {\n  margin-bottom: 30px;\n}\n.review-card {\n  background-color: #f9f9f9;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.review-header {\n  margin-bottom: 15px;\n}\n.reviewer-info {\n  display: flex;\n  align-items: center;\n}\n.reviewer-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 15px;\n}\n.reviewer-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.reviewer-details h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #333;\n}\n.review-rating {\n  color: #ffc107;\n  font-size: 0.9rem;\n  margin-bottom: 5px;\n}\n.review-rating i {\n  margin-right: 2px;\n}\n.review-date {\n  font-size: 0.85rem;\n  color: #888;\n}\n.review-body p {\n  font-size: 0.95rem;\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 0;\n}\n.loading-container {\n  min-height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.spinner-wrapper .spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n.spinner-wrapper p {\n  color: #666;\n  margin-top: 15px;\n  font-size: 1rem;\n}\n.alert-custom {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n  border: none;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n.alert-custom i {\n  font-size: 1.25rem;\n  margin-right: 10px;\n}\n.back-nav {\n  padding: 20px 0 40px;\n}\n.back-nav .btn {\n  display: flex;\n  align-items: center;\n}\n.back-nav .btn i {\n  margin-right: 5px;\n}\n@media (max-width: 991.98px) {\n  .restaurant-hero-content h1 {\n    font-size: 2.4rem;\n  }\n  .section-heading {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n  }\n  .menu-filter {\n    width: 100%;\n    justify-content: flex-start;\n    margin-bottom: 10px;\n    overflow-x: auto;\n    padding-bottom: 5px;\n  }\n}\n@media (max-width: 767.98px) {\n  .restaurant-hero-content {\n    padding-bottom: 20px;\n    text-align: center;\n  }\n  .restaurant-hero-content h1 {\n    font-size: 2rem;\n  }\n  .restaurant-meta {\n    justify-content: center;\n  }\n  .restaurant-tags,\n  .restaurant-actions {\n    justify-content: center;\n  }\n}\n.modal {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-backdrop {\n  z-index: 1040;\n}\n.modal {\n  z-index: 1050;\n}\n.selected-item-details h4 {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.selected-item-details .price-quantity {\n  margin: 1rem 0;\n}\n.selected-item-details .price-quantity .price {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #333;\n}\n.selected-item-details .quantity-control {\n  display: flex;\n  align-items: center;\n}\n.selected-item-details .quantity-control .btn-quantity {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  border: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n.selected-item-details .quantity-control .btn-quantity:hover {\n  background-color: #e0e0e0;\n}\n.selected-item-details .quantity-control .quantity {\n  margin: 0 10px;\n  font-weight: 600;\n  min-width: 20px;\n  text-align: center;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n}\n.form-group textarea {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.form-group textarea:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n/*# sourceMappingURL=restaurant-detail.component-ARPH6PLH.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: RestaurantService }, { type: MenuItemService }, { type: OrderService }, { type: AuthService }, { type: CartService }, { type: ChangeDetectorRef }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantDetailComponent, { className: "RestaurantDetailComponent", filePath: "src/app/features/restaurants/restaurant-detail/restaurant-detail.component.ts", lineNumber: 38 });
})();
export {
  RestaurantDetailComponent
};
//# sourceMappingURL=chunk-433VRHJQ.js.map
