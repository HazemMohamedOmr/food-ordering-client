import {
  OrderService,
  OrderStatus,
  PaymentStatus
} from "./chunk-N7XXU6VP.js";
import {
  AuthService
} from "./chunk-P6XRT7RJ.js";
import {
  FormsModule
} from "./chunk-RHXFPPC4.js";
import {
  CommonModule,
  Component,
  NgClass,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UXXDM6C4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GMSD7K74.js";

// src/app/features/admin/order-management/order-management.component.ts
function OrderManagementComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 13);
    \u0275\u0275listener("click", function OrderManagementComponent_div_4_Template_button_click_2_listener() {
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
function OrderManagementComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 13);
    \u0275\u0275listener("click", function OrderManagementComponent_div_5_Template_button_click_2_listener() {
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
function OrderManagementComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function OrderManagementComponent_div_7_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
  }
}
function OrderManagementComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "h4", 21);
    \u0275\u0275text(4, "Confirm Order Closure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function OrderManagementComponent_div_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelCloseOrder());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "div", 23);
    \u0275\u0275element(8, "i", 24);
    \u0275\u0275text(9, " Are you sure you want to close this order? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "This will finalize the order and prevent any further modifications.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25)(13, "p")(14, "strong");
    \u0275\u0275text(15, "Order ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "strong");
    \u0275\u0275text(19, "Restaurant:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p")(22, "strong");
    \u0275\u0275text(23, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 26)(26, "button", 27);
    \u0275\u0275listener("click", function OrderManagementComponent_div_7_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelCloseOrder());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 28);
    \u0275\u0275listener("click", function OrderManagementComponent_div_7_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmCloseOrder());
    });
    \u0275\u0275template(29, OrderManagementComponent_div_7_span_29_Template, 1, 0, "span", 29);
    \u0275\u0275text(30, " Close Order ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1(" ", ctx_r1.orderToClose.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.orderToClose.restaurant == null ? null : ctx_r1.orderToClose.restaurant.name) || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.orderToClose.orderDate), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isProcessingClose);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProcessingClose);
  }
}
function OrderManagementComponent_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "Loading details...");
    \u0275\u0275elementEnd()()();
  }
}
function OrderManagementComponent_div_8_div_10_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Closed At:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.selectedOrder.closedAt), " ");
  }
}
function OrderManagementComponent_div_8_div_10_div_20_div_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function OrderManagementComponent_div_8_div_10_div_20_div_1_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const userId_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePaymentStatus(ctx_r1.selectedOrder.id, userId_r7, ctx_r1.PaymentStatus.Paid));
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Mark as Paid ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", ctx_r1.processingPayment);
  }
}
function OrderManagementComponent_div_8_div_10_div_20_div_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function OrderManagementComponent_div_8_div_10_div_20_div_1_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const userId_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePaymentStatus(ctx_r1.selectedOrder.id, userId_r7, ctx_r1.PaymentStatus.Unpaid));
    });
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2, " Mark as Unpaid ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", ctx_r1.processingPayment);
  }
}
function OrderManagementComponent_div_8_div_10_div_20_div_1_tr_26_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r9.menuItem == null ? null : item_r9.menuItem.name) || "Unknown Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", (item_r9.menuItem == null ? null : item_r9.menuItem.price == null ? null : item_r9.menuItem.price.toFixed(2)) || "0.00", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", (((item_r9.menuItem == null ? null : item_r9.menuItem.price) || 0) * item_r9.quantity).toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.note || "-");
  }
}
function OrderManagementComponent_div_8_div_10_div_20_div_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 66)(1, "td", 67);
    \u0275\u0275text(2, "Delivery Fee (per user):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6, "-");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const userId_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", ctx_r1.selectedOrder.userItems[userId_r7].deliveryFee.toFixed(2), "");
  }
}
function OrderManagementComponent_div_8_div_10_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "h4", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, OrderManagementComponent_div_8_div_10_div_20_div_1_button_8_Template, 3, 1, "button", 55)(9, OrderManagementComponent_div_8_div_10_div_20_div_1_button_9_Template, 3, 1, "button", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 46)(11, "div", 57)(12, "table", 58)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Note");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, OrderManagementComponent_div_8_div_10_div_20_div_1_tr_26_Template, 11, 5, "tr", 59)(27, OrderManagementComponent_div_8_div_10_div_20_div_1_tr_27_Template, 7, 1, "tr", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "tfoot")(29, "tr")(30, "th", 61);
    \u0275\u0275text(31, "Subtotal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "th");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const userId_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedOrder.userItems[userId_r7].userName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.selectedOrder.userItems[userId_r7].isPaid ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedOrder.userItems[userId_r7].isPaid ? "Paid" : "Unpaid", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedOrder.status === ctx_r1.OrderStatus.Closed && !ctx_r1.selectedOrder.userItems[userId_r7].isPaid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedOrder.status === ctx_r1.OrderStatus.Closed && ctx_r1.selectedOrder.userItems[userId_r7].isPaid);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.selectedOrder.userItems[userId_r7].items);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedOrder.userItems[userId_r7].deliveryFee > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", ctx_r1.selectedOrder.userItems[userId_r7].totalAmount.toFixed(2), "");
  }
}
function OrderManagementComponent_div_8_div_10_div_20_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Delivery Fee:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", ctx_r1.selectedOrder.deliveryFee.toFixed(2), "");
  }
}
function OrderManagementComponent_div_8_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, OrderManagementComponent_div_8_div_10_div_20_div_1_Template, 35, 8, "div", 42);
    \u0275\u0275elementStart(2, "div", 43)(3, "div", 44)(4, "h4", 45);
    \u0275\u0275text(5, "Order Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "div", 38)(8, "div", 47)(9, "table", 48)(10, "tbody")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Items Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, OrderManagementComponent_div_8_div_10_div_20_tr_16_Template, 5, 1, "tr", 8);
    \u0275\u0275elementStart(17, "tr", 50)(18, "th");
    \u0275\u0275text(19, "Total Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 49);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.Object.keys(ctx_r1.selectedOrder.userItems));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("$", (ctx_r1.selectedOrder.totalAmount - (ctx_r1.selectedOrder.deliveryFee || 0)).toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedOrder.deliveryFee);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r1.selectedOrder.totalAmount == null ? null : ctx_r1.selectedOrder.totalAmount.toFixed(2), "");
  }
}
function OrderManagementComponent_div_8_div_10_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " No items found for this order. ");
    \u0275\u0275elementEnd();
  }
}
function OrderManagementComponent_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "p")(5, "strong");
    \u0275\u0275text(6, "Order ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Restaurant:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 39)(13, "p")(14, "strong");
    \u0275\u0275text(15, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, OrderManagementComponent_div_8_div_10_p_17_Template, 4, 1, "p", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "h3", 40);
    \u0275\u0275text(19, "Order Items by User");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, OrderManagementComponent_div_8_div_10_div_20_Template, 22, 4, "div", 41)(21, OrderManagementComponent_div_8_div_10_ng_template_21_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noItems_r10 = \u0275\u0275reference(22);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedOrder.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedOrder.restaurant == null ? null : ctx_r1.selectedOrder.restaurant.name) || "N/A", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.selectedOrder.orderDate), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedOrder.status === ctx_r1.OrderStatus.Closed);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedOrder.userItems && ctx_r1.Object.keys(ctx_r1.selectedOrder.userItems).length > 0)("ngIfElse", noItems_r10);
  }
}
function OrderManagementComponent_div_8_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function OrderManagementComponent_div_8_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCloseOrderConfirmation(ctx_r1.selectedOrder));
    });
    \u0275\u0275text(1, " Close Order ");
    \u0275\u0275elementEnd();
  }
}
function OrderManagementComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 20)(3, "h2", 21);
    \u0275\u0275text(4, " Order Details ");
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 13);
    \u0275\u0275listener("click", function OrderManagementComponent_div_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelectedOrder());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275template(9, OrderManagementComponent_div_8_div_9_Template, 4, 0, "div", 34)(10, OrderManagementComponent_div_8_div_10_Template, 23, 6, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 26)(12, "button", 27);
    \u0275\u0275listener("click", function OrderManagementComponent_div_8_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelectedOrder());
    });
    \u0275\u0275text(13, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, OrderManagementComponent_div_8_button_14_Template, 2, 0, "button", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.getOrderStatusClass(ctx_r1.selectedOrder.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getOrderStatusName(ctx_r1.selectedOrder.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingDetails);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedOrder.status === ctx_r1.OrderStatus.Open);
  }
}
function OrderManagementComponent_div_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " No active orders found. ");
    \u0275\u0275elementEnd();
  }
}
function OrderManagementComponent_div_9_div_7_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 76)(9, "button", 77);
    \u0275\u0275listener("click", function OrderManagementComponent_div_9_div_7_tr_13_Template_button_click_9_listener() {
      const order_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewOrderDetails(order_r13));
    });
    \u0275\u0275element(10, "i", 78);
    \u0275\u0275text(11, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 79);
    \u0275\u0275listener("click", function OrderManagementComponent_div_9_div_7_tr_13_Template_button_click_12_listener() {
      const order_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showCloseOrderConfirmation(order_r13));
    });
    \u0275\u0275element(13, "i", 80);
    \u0275\u0275text(14, " Close Order ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((order_r13.restaurant == null ? null : order_r13.restaurant.name) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(order_r13.orderDate));
  }
}
function OrderManagementComponent_div_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "table", 75)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, OrderManagementComponent_div_9_div_7_tr_13_Template, 15, 3, "tr", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.activeOrders);
  }
}
function OrderManagementComponent_div_9_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " No order history found. ");
    \u0275\u0275elementEnd();
  }
}
function OrderManagementComponent_div_9_div_14_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(9, "td")(10, "button", 77);
    \u0275\u0275listener("click", function OrderManagementComponent_div_9_div_14_tr_15_Template_button_click_10_listener() {
      const order_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewOrderDetails(order_r15));
    });
    \u0275\u0275element(11, "i", 78);
    \u0275\u0275text(12, " View Details ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r15.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((order_r15.restaurant == null ? null : order_r15.restaurant.name) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(order_r15.orderDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(order_r15.closedAt));
  }
}
function OrderManagementComponent_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "table", 75)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Closed At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, OrderManagementComponent_div_9_div_14_tr_15_Template, 13, 4, "tr", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.orderHistory);
  }
}
function OrderManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 70)(2, "div", 71)(3, "h2", 45);
    \u0275\u0275text(4, "Active Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275template(6, OrderManagementComponent_div_9_div_6_Template, 2, 0, "div", 72)(7, OrderManagementComponent_div_9_div_7_Template, 14, 1, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 52)(9, "div", 74)(10, "h2", 45);
    \u0275\u0275text(11, "Order History");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 46);
    \u0275\u0275template(13, OrderManagementComponent_div_9_div_13_Template, 2, 0, "div", 72)(14, OrderManagementComponent_div_9_div_14_Template, 16, 1, "div", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.activeOrders.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeOrders.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.orderHistory.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.orderHistory.length > 0);
  }
}
var OrderManagementComponent = class _OrderManagementComponent {
  orderService;
  authService;
  router;
  activeOrders = [];
  orderHistory = [];
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  // Selected order details
  selectedOrder = null;
  isLoadingDetails = false;
  // Order closure confirmation
  orderToClose = null;
  isProcessingClose = false;
  // Payment status update
  processingPayment = false;
  // Enum references for the template
  OrderStatus = OrderStatus;
  PaymentStatus = PaymentStatus;
  // For template use
  Object = Object;
  constructor(orderService, authService, router) {
    this.orderService = orderService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(["/"]);
      return;
    }
    this.loadActiveOrders();
    this.loadOrderHistory();
  }
  loadActiveOrders() {
    this.isLoading = true;
    this.errorMessage = "";
    this.orderService.getActiveOrders().subscribe({
      next: (orders) => {
        this.activeOrders = orders.map((order) => {
          return __spreadProps(__spreadValues({}, order), {
            id: order.id,
            restaurant: {
              id: "",
              name: order.restaurantName || "N/A",
              description: "",
              address: "",
              phoneNumber: "",
              deliveryFee: order.deliveryFee || 0
            },
            restaurantId: "",
            managerId: "",
            status: order.status,
            orderDate: order.orderDate,
            closedAt: order.closedAt,
            deliveryFee: order.deliveryFee
          });
        });
        console.log("Processed active orders:", this.activeOrders);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load active orders";
      }
    });
  }
  loadOrderHistory() {
    this.isLoading = true;
    this.errorMessage = "";
    this.orderService.getOrderHistory().subscribe({
      next: (orders) => {
        this.orderHistory = orders.map((order) => {
          return __spreadProps(__spreadValues({}, order), {
            id: order.id,
            restaurant: {
              id: "",
              name: order.restaurantName || "N/A",
              description: "",
              address: "",
              phoneNumber: "",
              deliveryFee: order.deliveryFee || 0
            },
            restaurantId: "",
            managerId: "",
            status: order.status,
            orderDate: order.orderDate,
            closedAt: order.closedAt,
            deliveryFee: order.deliveryFee
          });
        });
        console.log("Processed order history:", this.orderHistory);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load order history";
      }
    });
  }
  showCloseOrderConfirmation(order) {
    if (order.restaurantName !== void 0) {
      this.orderToClose = {
        id: order.id,
        restaurantId: "",
        managerId: "",
        status: order.status,
        orderDate: order.orderDate,
        closedAt: order.closedAt,
        restaurant: {
          id: "",
          name: order.restaurantName,
          description: "",
          address: "",
          phoneNumber: "",
          deliveryFee: order.deliveryFee || 0
        }
      };
    } else {
      this.orderToClose = order;
    }
  }
  cancelCloseOrder() {
    this.orderToClose = null;
  }
  confirmCloseOrder() {
    if (!this.orderToClose)
      return;
    this.isProcessingClose = true;
    this.errorMessage = "";
    const orderToCloseId = this.orderToClose.id;
    this.orderService.closeOrder(this.orderToClose.id).subscribe({
      next: () => {
        this.successMessage = "Order closed successfully";
        this.isProcessingClose = false;
        const closedOrderId = this.orderToClose?.id;
        this.orderToClose = null;
        this.loadActiveOrders();
        this.loadOrderHistory();
        if (this.selectedOrder && this.selectedOrder.id === closedOrderId) {
          this.viewOrderDetails(this.selectedOrder);
        }
      },
      error: (error) => {
        this.isProcessingClose = false;
        this.errorMessage = error.message || "Failed to close order";
      }
    });
  }
  viewOrderDetails(order) {
    this.isLoadingDetails = true;
    this.errorMessage = "";
    if (order.restaurantName !== void 0) {
      this.selectedOrder = __spreadProps(__spreadValues({}, order), {
        id: order.id,
        restaurantId: "",
        managerId: "",
        status: order.status,
        orderDate: order.orderDate,
        closedAt: order.closedAt,
        restaurant: {
          id: "",
          name: order.restaurantName,
          description: "",
          address: "",
          phoneNumber: "",
          deliveryFee: order.deliveryFee || 0
        },
        deliveryFee: order.deliveryFee
      });
      if (order.userItems && Array.isArray(order.userItems) && order.userItems.length > 0) {
        console.log("Processing embedded userItems from order", order.userItems);
        const userItems = {};
        let totalAmount = 0;
        const deliveryFee = order.deliveryFee || 0;
        order.userItems.forEach((item) => {
          const userId = item.userId;
          const userName = item.userName || "Unknown User";
          const itemPrice = item.price || 0;
          const itemTotal = item.total || itemPrice * item.quantity;
          totalAmount += itemTotal;
          if (!userItems[userId]) {
            userItems[userId] = {
              userName,
              items: [],
              totalAmount: 0,
              deliveryFee: 0,
              // Will calculate after counting users
              isPaid: false
              // We'll update this later if needed
            };
          }
          const orderItem = {
            id: item.id,
            orderId: order.id,
            userId: item.userId,
            menuItemId: item.menuItemId || "",
            quantity: item.quantity,
            note: item.note,
            menuItem: {
              id: item.menuItemId || "",
              name: item.menuItemName,
              description: "",
              price: item.price,
              restaurantId: ""
            },
            user: {
              id: item.userId,
              name: item.userName,
              email: ""
            }
          };
          userItems[userId].items.push(orderItem);
          userItems[userId].totalAmount += itemTotal;
        });
        const userCount = Object.keys(userItems).length;
        if (userCount > 0 && deliveryFee > 0) {
          const deliveryFeePerUser = order.deliveryFeeShare || deliveryFee / userCount;
          Object.keys(userItems).forEach((userId) => {
            userItems[userId].deliveryFee = deliveryFeePerUser;
            userItems[userId].totalAmount += deliveryFeePerUser;
          });
          totalAmount += deliveryFee;
        }
        this.selectedOrder.userItems = userItems;
        this.selectedOrder.totalAmount = totalAmount;
        this.selectedOrder.deliveryFee = deliveryFee;
        this.isLoadingDetails = false;
        return;
      }
    } else {
      this.selectedOrder = __spreadValues({}, order);
    }
    this.orderService.getAllOrderItems(order.id).subscribe({
      next: (response) => {
        if (response.items && Array.isArray(response.items)) {
          console.log("Received new API response format", response);
          if (response.restaurantName) {
            if (!this.selectedOrder.restaurant) {
              this.selectedOrder.restaurant = {
                id: "",
                name: response.restaurantName,
                description: "",
                address: "",
                phoneNumber: "",
                deliveryFee: response.deliveryFee || 0
              };
            } else {
              this.selectedOrder.restaurant.name = response.restaurantName;
              this.selectedOrder.restaurant.deliveryFee = response.deliveryFee || 0;
            }
          }
          const userItems = {};
          let totalAmount = 0;
          const deliveryFee = response.deliveryFee || 0;
          response.items.forEach((item) => {
            const userId = item.userId;
            const userName = item.userName || "Unknown User";
            const itemPrice = item.price || 0;
            const itemTotal = item.itemTotal || itemPrice * item.quantity;
            totalAmount += itemTotal;
            if (!userItems[userId]) {
              userItems[userId] = {
                userName,
                items: [],
                totalAmount: 0,
                deliveryFee: 0,
                // Will calculate after counting users
                isPaid: false
                // We'll update this later if needed
              };
            }
            const orderItem = {
              id: item.id,
              orderId: response.orderId || order.id,
              userId: item.userId,
              menuItemId: item.menuItemId,
              quantity: item.quantity,
              note: item.note,
              menuItem: {
                id: item.menuItemId,
                name: item.menuItemName,
                description: item.menuItemDescription,
                price: item.price,
                restaurantId: ""
              },
              user: {
                id: item.userId,
                name: item.userName,
                email: ""
              }
            };
            userItems[userId].items.push(orderItem);
            userItems[userId].totalAmount += itemTotal;
          });
          const userCount = Object.keys(userItems).length;
          if (userCount > 0 && deliveryFee > 0) {
            const deliveryFeePerUser = deliveryFee / userCount;
            Object.keys(userItems).forEach((userId) => {
              userItems[userId].deliveryFee = deliveryFeePerUser;
              userItems[userId].totalAmount += deliveryFeePerUser;
            });
            totalAmount += deliveryFee;
          }
          if (order.status === OrderStatus.Closed && order.payments) {
            order.payments.forEach((payment) => {
              if (payment.userId && userItems[payment.userId]) {
                userItems[payment.userId].isPaid = payment.status === PaymentStatus.Paid;
              }
            });
          }
          this.selectedOrder.userItems = userItems;
          this.selectedOrder.totalAmount = totalAmount;
          this.selectedOrder.deliveryFee = deliveryFee;
        } else {
          const items = response;
          const userItems = {};
          let totalAmount = 0;
          items.forEach((item) => {
            const userId = item.userId;
            const userName = item.user?.name || "Unknown User";
            const itemPrice = item.menuItem?.price || 0;
            const itemTotal = itemPrice * item.quantity;
            totalAmount += itemTotal;
            if (!userItems[userId]) {
              userItems[userId] = {
                userName,
                items: [],
                totalAmount: 0,
                deliveryFee: 0,
                isPaid: false
                // We'll update this later if needed
              };
            }
            userItems[userId].items.push(item);
            userItems[userId].totalAmount += itemTotal;
          });
          if (order.status === OrderStatus.Closed && order.payments) {
            order.payments.forEach((payment) => {
              if (payment.userId && userItems[payment.userId]) {
                userItems[payment.userId].isPaid = payment.status === PaymentStatus.Paid;
              }
            });
          }
          this.selectedOrder.userItems = userItems;
          this.selectedOrder.totalAmount = totalAmount;
        }
        this.isLoadingDetails = false;
      },
      error: (error) => {
        this.isLoadingDetails = false;
        this.errorMessage = error.message || "Failed to load order details";
      }
    });
  }
  updatePaymentStatus(orderId, userId, status) {
    this.processingPayment = true;
    this.errorMessage = "";
    this.orderService.updatePaymentStatus(orderId, userId, status).subscribe({
      next: () => {
        this.successMessage = "Payment status updated successfully";
        this.processingPayment = false;
        if (this.selectedOrder && this.selectedOrder.userItems && userId in this.selectedOrder.userItems) {
          this.selectedOrder.userItems[userId].isPaid = status === PaymentStatus.Paid;
        }
      },
      error: (error) => {
        this.processingPayment = false;
        this.errorMessage = error.message || "Failed to update payment status";
      }
    });
  }
  clearSelectedOrder() {
    this.selectedOrder = null;
  }
  getOrderStatusName(status) {
    switch (status) {
      case OrderStatus.Open:
        return "Open";
      case OrderStatus.Closed:
        return "Closed";
      default:
        return "Unknown";
    }
  }
  getOrderStatusClass(status) {
    switch (status) {
      case OrderStatus.Open:
        return "bg-success";
      case OrderStatus.Closed:
        return "bg-secondary";
      default:
        return "bg-secondary";
    }
  }
  formatDate(date) {
    if (!date)
      return "N/A";
    return new Date(date).toLocaleString();
  }
  static \u0275fac = function OrderManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderManagementComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderManagementComponent, selectors: [["app-order-management"]], decls: 14, vars: 6, consts: [["noItems", ""], [1, "container", "py-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "d-flex justify-content-center my-5", 4, "ngIf"], ["class", "confirmation-modal-overlay", 4, "ngIf"], ["class", "order-details-overlay", 4, "ngIf"], [4, "ngIf"], [1, "mt-4"], ["routerLink", "/admin", 1, "btn", "btn-secondary"], [1, "fas", "fa-arrow-left", "me-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "d-flex", "justify-content-center", "my-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "confirmation-modal-overlay"], [1, "confirmation-modal"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "alert", "alert-warning"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "order-info", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "order-details-overlay"], [1, "order-details-modal"], [1, "badge", "ms-2", 3, "ngClass"], ["class", "d-flex justify-content-center my-4", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-center", "my-4"], [1, "order-info", "mb-4"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [4, "ngIf", "ngIfElse"], ["class", "user-order-section mb-4", 4, "ngFor", "ngForOf"], [1, "card", "mt-4"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "col-md-6", "offset-md-6"], [1, "table"], [1, "text-end"], [1, "fw-bold"], [1, "user-order-section", "mb-4"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "me-2", 3, "ngClass"], ["class", "btn btn-sm btn-success", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-sm btn-warning", 3, "disabled", "click", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-sm"], [4, "ngFor", "ngForOf"], ["class", "delivery-fee-row", 4, "ngIf"], ["colspan", "3", 1, "text-end"], [1, "btn", "btn-sm", "btn-success", 3, "click", "disabled"], [1, "fas", "fa-check", "me-1"], [1, "btn", "btn-sm", "btn-warning", 3, "click", "disabled"], [1, "fas", "fa-times", "me-1"], [1, "delivery-fee-row"], ["colspan", "3", 1, "text-end", "fw-bold"], [1, "alert", "alert-info"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "card", "mb-4"], [1, "card-header", "bg-success", "text-white"], ["class", "alert alert-info", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "card-header", "bg-secondary", "text-white"], [1, "table", "table-hover"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fas", "fa-eye", "me-1"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fas", "fa-times-circle", "me-1"]], template: function OrderManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1");
      \u0275\u0275text(3, "Order Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, OrderManagementComponent_div_4_Template, 3, 1, "div", 3)(5, OrderManagementComponent_div_5_Template, 3, 1, "div", 4)(6, OrderManagementComponent_div_6_Template, 4, 0, "div", 5)(7, OrderManagementComponent_div_7_Template, 31, 5, "div", 6)(8, OrderManagementComponent_div_8_Template, 15, 5, "div", 7)(9, OrderManagementComponent_div_9_Template, 15, 4, "div", 8);
      \u0275\u0275elementStart(10, "div", 9)(11, "a", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13, "Back to Dashboard ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.orderToClose);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedOrder);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, RouterLink], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 0.5rem;\n}\n@media (max-width: 768px) {\n  .btn-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 0.25rem;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n.order-details-overlay[_ngcontent-%COMP%], \n.confirmation-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  overflow-y: auto;\n  padding: 30px;\n}\n.order-details-modal[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n}\n.confirmation-modal[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_modalFadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n  flex: 1;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.user-order-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #eee;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-sm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.table-sm[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #ffc107;\n}\n@media (max-width: 768px) {\n  .order-details-modal[_ngcontent-%COMP%], \n   .confirmation-modal[_ngcontent-%COMP%] {\n    width: 95%;\n    max-height: 95vh;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .card-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n.delivery-fee-row[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-style: italic;\n}\n.delivery-fee-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 1px dashed #dee2e6;\n}\n/*# sourceMappingURL=order-management.component-R2SNOUCC.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderManagementComponent, [{
    type: Component,
    args: [{ selector: "app-order-management", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="container py-4">\r
  <div class="d-flex justify-content-between align-items-center mb-4">\r
    <h1>Order Management</h1>\r
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
  <!-- Loading indicator -->\r
  <div *ngIf="isLoading" class="d-flex justify-content-center my-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Confirmation Modal -->\r
  <div *ngIf="orderToClose" class="confirmation-modal-overlay">\r
    <div class="confirmation-modal">\r
      <div class="modal-header">\r
        <h4 class="modal-title">Confirm Order Closure</h4>\r
        <button type="button" class="btn-close" (click)="cancelCloseOrder()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="alert alert-warning">\r
          <i class="fas fa-exclamation-triangle me-2"></i>\r
          Are you sure you want to close this order?\r
        </div>\r
        <p>This will finalize the order and prevent any further modifications.</p>\r
        <div class="order-info mt-3">\r
          <p><strong>Order ID:</strong> {{ orderToClose.id }}</p>\r
          <p><strong>Restaurant:</strong> {{ orderToClose.restaurant?.name || 'N/A' }}</p>\r
          <p><strong>Date:</strong> {{ formatDate(orderToClose.orderDate) }}</p>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="cancelCloseOrder()">Cancel</button>\r
        <button type="button" class="btn btn-danger" [disabled]="isProcessingClose" (click)="confirmCloseOrder()">\r
          <span *ngIf="isProcessingClose" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
          Close Order\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Order Details Modal -->\r
  <div *ngIf="selectedOrder" class="order-details-overlay">\r
    <div class="order-details-modal">\r
      <div class="modal-header">\r
        <h2 class="modal-title">\r
          Order Details \r
          <span class="badge ms-2" [ngClass]="getOrderStatusClass(selectedOrder.status)">\r
            {{ getOrderStatusName(selectedOrder.status) }}\r
          </span>\r
        </h2>\r
        <button type="button" class="btn-close" (click)="clearSelectedOrder()"></button>\r
      </div>\r
      \r
      <div class="modal-body">\r
        <!-- Loading indicator for details -->\r
        <div *ngIf="isLoadingDetails" class="d-flex justify-content-center my-4">\r
          <div class="spinner-border text-primary" role="status">\r
            <span class="visually-hidden">Loading details...</span>\r
          </div>\r
        </div>\r
        \r
        <div *ngIf="!isLoadingDetails">\r
          <div class="order-info mb-4">\r
            <div class="row">\r
              <div class="col-md-6">\r
                <p><strong>Order ID:</strong> {{ selectedOrder.id }}</p>\r
                <p><strong>Restaurant:</strong> {{ selectedOrder.restaurant?.name || 'N/A' }}</p>\r
              </div>\r
              <div class="col-md-6">\r
                <p><strong>Date:</strong> {{ formatDate(selectedOrder.orderDate) }}</p>\r
                <p *ngIf="selectedOrder.status === OrderStatus.Closed">\r
                  <strong>Closed At:</strong> {{ formatDate(selectedOrder.closedAt) }}\r
                </p>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <!-- Order Items Grouped By User -->\r
          <h3 class="mb-3">Order Items by User</h3>\r
          \r
          <div *ngIf="selectedOrder.userItems && Object.keys(selectedOrder.userItems).length > 0; else noItems">\r
            <div class="user-order-section mb-4" *ngFor="let userId of Object.keys(selectedOrder.userItems)">\r
              <div class="card">\r
                <div class="card-header d-flex justify-content-between align-items-center">\r
                  <h4 class="mb-0">{{ selectedOrder.userItems[userId].userName }}</h4>\r
                  <div>\r
                    <span class="badge me-2" [ngClass]="selectedOrder.userItems[userId].isPaid ? 'bg-success' : 'bg-danger'">\r
                      {{ selectedOrder.userItems[userId].isPaid ? 'Paid' : 'Unpaid' }}\r
                    </span>\r
                    <button *ngIf="selectedOrder.status === OrderStatus.Closed && !selectedOrder.userItems[userId].isPaid"\r
                            class="btn btn-sm btn-success"\r
                            [disabled]="processingPayment"\r
                            (click)="updatePaymentStatus(selectedOrder.id!, userId, PaymentStatus.Paid)">\r
                      <i class="fas fa-check me-1"></i> Mark as Paid\r
                    </button>\r
                    <button *ngIf="selectedOrder.status === OrderStatus.Closed && selectedOrder.userItems[userId].isPaid"\r
                            class="btn btn-sm btn-warning"\r
                            [disabled]="processingPayment"\r
                            (click)="updatePaymentStatus(selectedOrder.id!, userId, PaymentStatus.Unpaid)">\r
                      <i class="fas fa-times me-1"></i> Mark as Unpaid\r
                    </button>\r
                  </div>\r
                </div>\r
                <div class="card-body">\r
                  <div class="table-responsive">\r
                    <table class="table table-sm">\r
                      <thead>\r
                        <tr>\r
                          <th>Item</th>\r
                          <th>Price</th>\r
                          <th>Quantity</th>\r
                          <th>Total</th>\r
                          <th>Note</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        <tr *ngFor="let item of selectedOrder.userItems[userId].items">\r
                          <td>{{ item.menuItem?.name || 'Unknown Item' }}</td>\r
                          <td>\${{ item.menuItem?.price?.toFixed(2) || '0.00' }}</td>\r
                          <td>{{ item.quantity }}</td>\r
                          <td>\${{ ((item.menuItem?.price || 0) * item.quantity).toFixed(2) }}</td>\r
                          <td>{{ item.note || '-' }}</td>\r
                        </tr>\r
                        <!-- Delivery fee row -->\r
                        <tr *ngIf="selectedOrder.userItems[userId].deliveryFee > 0" class="delivery-fee-row">\r
                          <td colspan="3" class="text-end fw-bold">Delivery Fee (per user):</td>\r
                          <td>\${{ selectedOrder.userItems[userId].deliveryFee.toFixed(2) }}</td>\r
                          <td>-</td>\r
                        </tr>\r
                      </tbody>\r
                      <tfoot>\r
                        <tr>\r
                          <th colspan="3" class="text-end">Subtotal:</th>\r
                          <th>\${{ selectedOrder.userItems[userId].totalAmount.toFixed(2) }}</th>\r
                          <th></th>\r
                        </tr>\r
                      </tfoot>\r
                    </table>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <!-- Order Summary -->\r
            <div class="card mt-4">\r
              <div class="card-header">\r
                <h4 class="mb-0">Order Summary</h4>\r
              </div>\r
              <div class="card-body">\r
                <div class="row">\r
                  <div class="col-md-6 offset-md-6">\r
                    <table class="table">\r
                      <tbody>\r
                        <tr>\r
                          <th>Items Total:</th>\r
                          <td class="text-end">\${{ (selectedOrder.totalAmount! - (selectedOrder.deliveryFee || 0)).toFixed(2) }}</td>\r
                        </tr>\r
                        <tr *ngIf="selectedOrder.deliveryFee">\r
                          <th>Delivery Fee:</th>\r
                          <td class="text-end">\${{ selectedOrder.deliveryFee.toFixed(2) }}</td>\r
                        </tr>\r
                        <tr class="fw-bold">\r
                          <th>Total Amount:</th>\r
                          <td class="text-end">\${{ selectedOrder.totalAmount?.toFixed(2) }}</td>\r
                        </tr>\r
                      </tbody>\r
                    </table>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <ng-template #noItems>\r
            <div class="alert alert-info">\r
              No items found for this order.\r
            </div>\r
          </ng-template>\r
        </div>\r
      </div>\r
      \r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="clearSelectedOrder()">Close</button>\r
        <button *ngIf="selectedOrder.status === OrderStatus.Open" \r
                type="button" \r
                class="btn btn-danger" \r
                (click)="showCloseOrderConfirmation(selectedOrder)">\r
          Close Order\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Main Content -->\r
  <div *ngIf="!isLoading">\r
    <!-- Active Orders Section -->\r
    <div class="card mb-4">\r
      <div class="card-header bg-success text-white">\r
        <h2 class="mb-0">Active Orders</h2>\r
      </div>\r
      <div class="card-body">\r
        <div *ngIf="activeOrders.length === 0" class="alert alert-info">\r
          No active orders found.\r
        </div>\r
        \r
        <div class="table-responsive" *ngIf="activeOrders.length > 0">\r
          <table class="table table-hover">\r
            <thead>\r
              <tr>\r
                <th>Order ID</th>\r
                <th>Restaurant</th>\r
                <th>Date</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let order of activeOrders">\r
                <td>{{ order.id }}</td>\r
                <td>{{ order.restaurant?.name || 'N/A' }}</td>\r
                <td>{{ formatDate(order.orderDate) }}</td>\r
                <td>\r
                  <div class="btn-group" role="group">\r
                    <button class="btn btn-sm btn-primary" (click)="viewOrderDetails(order)">\r
                      <i class="fas fa-eye me-1"></i> View Details\r
                    </button>\r
                    <button class="btn btn-sm btn-danger" (click)="showCloseOrderConfirmation(order)">\r
                      <i class="fas fa-times-circle me-1"></i> Close Order\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <!-- Order History Section -->\r
    <div class="card">\r
      <div class="card-header bg-secondary text-white">\r
        <h2 class="mb-0">Order History</h2>\r
      </div>\r
      <div class="card-body">\r
        <div *ngIf="orderHistory.length === 0" class="alert alert-info">\r
          No order history found.\r
        </div>\r
        \r
        <div class="table-responsive" *ngIf="orderHistory.length > 0">\r
          <table class="table table-hover">\r
            <thead>\r
              <tr>\r
                <th>Order ID</th>\r
                <th>Restaurant</th>\r
                <th>Date</th>\r
                <th>Closed At</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let order of orderHistory">\r
                <td>{{ order.id }}</td>\r
                <td>{{ order.restaurant?.name || 'N/A' }}</td>\r
                <td>{{ formatDate(order.orderDate) }}</td>\r
                <td>{{ formatDate(order.closedAt) }}</td>\r
                <td>\r
                  <button class="btn btn-sm btn-primary" (click)="viewOrderDetails(order)">\r
                    <i class="fas fa-eye me-1"></i> View Details\r
                  </button>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="mt-4">\r
    <a routerLink="/admin" class="btn btn-secondary">\r
      <i class="fas fa-arrow-left me-2"></i>Back to Dashboard\r
    </a>\r
  </div>\r
</div> `, styles: ["/* src/app/features/admin/order-management/order-management.component.scss */\n.table-responsive {\n  overflow-x: auto;\n}\n.btn-group .btn {\n  margin-right: 0.25rem;\n}\n.btn-group .btn:last-child {\n  margin-right: 0;\n}\n.card-header {\n  background-color: #f8f9fa;\n}\n.badge {\n  font-size: 0.85rem;\n  padding: 0.5rem;\n}\n@media (max-width: 768px) {\n  .btn-group {\n    display: flex;\n    flex-direction: column;\n  }\n  .btn-group .btn {\n    margin-right: 0;\n    margin-bottom: 0.25rem;\n  }\n  .btn-group .btn:last-child {\n    margin-bottom: 0;\n  }\n}\n.order-details-overlay,\n.confirmation-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  overflow-y: auto;\n  padding: 30px;\n}\n.order-details-modal {\n  background-color: #fff;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n}\n.confirmation-modal {\n  background-color: #fff;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  animation: modalFadeIn 0.3s ease-out;\n}\n@keyframes modalFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-body {\n  padding: 1rem;\n  flex: 1;\n  overflow-y: auto;\n}\n.modal-footer {\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.user-order-section {\n  margin-bottom: 1.5rem;\n}\n.card {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #eee;\n}\ntable {\n  width: 100%;\n}\n.table-sm td,\n.table-sm th {\n  padding: 0.5rem;\n}\n.badge {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.btn-group .btn {\n  margin-right: 5px;\n}\n.alert-warning {\n  border-left: 4px solid #ffc107;\n}\n@media (max-width: 768px) {\n  .order-details-modal,\n  .confirmation-modal {\n    width: 95%;\n    max-height: 95vh;\n  }\n  .card-header {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .card-header div {\n    margin-top: 10px;\n  }\n}\n.delivery-fee-row {\n  background-color: #f8f9fa;\n  font-style: italic;\n}\n.delivery-fee-row td {\n  border-top: 1px dashed #dee2e6;\n}\n/*# sourceMappingURL=order-management.component-R2SNOUCC.css.map */\n"] }]
  }], () => [{ type: OrderService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderManagementComponent, { className: "OrderManagementComponent", filePath: "src/app/features/admin/order-management/order-management.component.ts", lineNumber: 32 });
})();
export {
  OrderManagementComponent
};
//# sourceMappingURL=chunk-37NLESRV.js.map
