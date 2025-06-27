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
  ActivatedRoute,
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  NgIf,
  Router,
  RouterLink,
  setClassMetadata,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UXXDM6C4.js";
import "./chunk-GMSD7K74.js";

// src/app/features/orders/order-detail/order-detail.component.ts
var _c0 = (a0, a1) => ({ "bi-check-circle": a0, "bi-exclamation-circle": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function OrderDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_Template_button_click_2_listener() {
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
function OrderDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275listener("click", function OrderDetailComponent_div_2_Template_button_click_2_listener() {
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
function OrderDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function OrderDetailComponent_div_4_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 75);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " You can modify your order items while the order is open. ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_4_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Order closed at: ", ctx_r1.formatDate(ctx_r1.order == null ? null : ctx_r1.order.closedAt), " ");
  }
}
function OrderDetailComponent_div_4_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78)(1, "span", 79);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getPaymentStatusClass());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c0, ctx_r1.isPaid(), ctx_r1.isUnpaid()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPaymentStatusText(), " ");
  }
}
function OrderDetailComponent_div_4_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeOrder());
    });
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275text(2, " Close Order ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_4_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " You haven't ordered anything yet. ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_4_ul_34_For_2_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 96);
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r5.note, " ");
  }
}
function OrderDetailComponent_div_4_ul_34_For_2_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "button", 99);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_ul_34_For_2_div_1_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditItem(item_r5));
    });
    \u0275\u0275element(2, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 101);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_ul_34_For_2_div_1_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteItem(item_r5));
    });
    \u0275\u0275element(4, "i", 102);
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailComponent_div_4_ul_34_For_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 88)(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "h6", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 91);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, OrderDetailComponent_div_4_ul_34_For_2_div_1_p_10_Template, 3, 1, "p", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 93)(12, "h6", 94);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, OrderDetailComponent_div_4_ul_34_For_2_div_1_div_14_Template, 5, 0, "div", 95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.quantity, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.menuItemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", (tmp_15_0 = item_r5.price == null ? null : item_r5.price.toFixed(2)) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "0.00", " each ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.note);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", (item_r5.total || item_r5.itemTotal || item_r5.price * item_r5.quantity).toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canModifyItems());
  }
}
function OrderDetailComponent_div_4_ul_34_For_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "h6", 105);
    \u0275\u0275element(3, "i", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 107);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_ul_34_For_2_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 108)(7, "div", 109)(8, "label", 110);
    \u0275\u0275text(9, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 111)(11, "button", 112);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_ul_34_For_2_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.decreaseQuantity());
    });
    \u0275\u0275element(12, "i", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function OrderDetailComponent_div_4_ul_34_For_2_div_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editQuantity, $event) || (ctx_r1.editQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 112);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_ul_34_For_2_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.increaseQuantity());
    });
    \u0275\u0275element(15, "i", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 116);
    \u0275\u0275text(17, " Min: 1 \xB7 Max: 10 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 117)(19, "div", 118)(20, "label", 119);
    \u0275\u0275text(21, "Special Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small", 120);
    \u0275\u0275text(23, "Optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "textarea", 121);
    \u0275\u0275twoWayListener("ngModelChange", function OrderDetailComponent_div_4_ul_34_For_2_div_2_Template_textarea_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editNote, $event) || (ctx_r1.editNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(25, "                        ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 122)(27, "span", 123);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "button", 124);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_ul_34_For_2_div_2_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275element(32, "i", 22);
    \u0275\u0275text(33, "Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 125);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_ul_34_For_2_div_2_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveItemChanges());
    });
    \u0275\u0275element(35, "i", 126);
    \u0275\u0275text(36, "Save Changes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Editing: ", item_r5.menuItemName, " ");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editQuantity);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editNote);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Total: $", \u0275\u0275pipeBind2(29, 4, ((ctx_r1.editingItem == null ? null : ctx_r1.editingItem.price) || 0) * ctx_r1.editQuantity, "1.2-2"), " ");
  }
}
function OrderDetailComponent_div_4_ul_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 83);
    \u0275\u0275template(1, OrderDetailComponent_div_4_ul_34_For_2_div_1_Template, 15, 6, "div", 84)(2, OrderDetailComponent_div_4_ul_34_For_2_div_2_Template, 37, 7, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingItem == null ? null : ctx_r1.editingItem.id) !== item_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingItem == null ? null : ctx_r1.editingItem.id) === item_r5.id);
  }
}
function OrderDetailComponent_div_4_ul_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 82);
    \u0275\u0275repeaterCreate(1, OrderDetailComponent_div_4_ul_34_For_2_Template, 3, 2, "li", 83, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.myOrderItems);
  }
}
function OrderDetailComponent_div_4_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 86)(2, "span", 120);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 128);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.myOrderItems.length, " item(s) in your order");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Subtotal: $", (ctx_r1.order.subtotal || ctx_r1.calculateSubtotal()).toFixed(2), "");
  }
}
function OrderDetailComponent_div_4_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", (tmp_2_0 = ctx_r1.order.deliveryFeeShare == null ? null : ctx_r1.order.deliveryFeeShare.toFixed(2)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "0.00", "");
  }
}
function OrderDetailComponent_div_4_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1, "Calculated when order closes");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_4_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDeliveryFeeNote(), " ");
  }
}
function OrderDetailComponent_div_4_p_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 132);
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275elementStart(2, "a", 134);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("href", "mailto:", ctx_r1.order.managerEmail, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.order.managerEmail);
  }
}
function OrderDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "div")(5, "h2", 35);
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275text(7, " Order Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 37)(9, "span", 38);
    \u0275\u0275element(10, "i", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 41);
    \u0275\u0275element(15, "i", 42);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, OrderDetailComponent_div_4_p_17_Template, 3, 0, "p", 43)(18, OrderDetailComponent_div_4_p_18_Template, 3, 1, "p", 44)(19, OrderDetailComponent_div_4_p_19_Template, 4, 6, "p", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "button", 46);
    \u0275\u0275element(22, "i", 47);
    \u0275\u0275text(23, " Back to Orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, OrderDetailComponent_div_4_button_24_Template, 3, 0, "button", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 49)(26, "div", 50)(27, "div", 51)(28, "div", 52)(29, "h5", 53);
    \u0275\u0275element(30, "i", 54);
    \u0275\u0275text(31, "Your Order Items ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 55);
    \u0275\u0275template(33, OrderDetailComponent_div_4_div_33_Template, 3, 0, "div", 56)(34, OrderDetailComponent_div_4_ul_34_Template, 3, 0, "ul", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, OrderDetailComponent_div_4_div_35_Template, 6, 2, "div", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 59)(37, "div", 51)(38, "div", 52)(39, "h5", 53);
    \u0275\u0275element(40, "i", 60);
    \u0275\u0275text(41, "Order Summary ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 33)(43, "div", 61)(44, "span", 62);
    \u0275\u0275text(45, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 62);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 61)(49, "span", 62);
    \u0275\u0275text(50, "Delivery Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, OrderDetailComponent_div_4_span_51_Template, 2, 1, "span", 63)(52, OrderDetailComponent_div_4_span_52_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "hr", 65);
    \u0275\u0275elementStart(54, "div", 66)(55, "span", 67);
    \u0275\u0275text(56, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 68);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, OrderDetailComponent_div_4_div_59_Template, 3, 1, "div", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 70)(61, "div", 52)(62, "h5", 53);
    \u0275\u0275element(63, "i", 71);
    \u0275\u0275text(64, "Manager ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 33)(66, "p", 72);
    \u0275\u0275element(67, "i", 73);
    \u0275\u0275elementStart(68, "span", 62);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(70, OrderDetailComponent_div_4_p_70_Template, 4, 3, "p", 74);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classProp("bg-success", ctx_r1.isOrderOpen())("bg-secondary", !ctx_r1.isOrderOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.isOrderOpen() ? "bi-clock" : "bi-lock");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isOrderOpen() ? "Open" : "Closed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order.restaurantName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.order.orderDate), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOrderOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOrderOpen() && (ctx_r1.order == null ? null : ctx_r1.order.closedAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasPaymentStatus());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.isOrderOpen() && (ctx_r1.authService.isAdmin || ctx_r1.authService.isManager));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.myOrderItems.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.myOrderItems.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.myOrderItems.length > 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("$", (ctx_r1.order.subtotal || ctx_r1.calculateSubtotal()).toFixed(2), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isOrderOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOrderOpen());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", (ctx_r1.order.total || ctx_r1.calculateTotal()).toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDeliveryFeeNote());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.order.managerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.managerEmail);
  }
}
function OrderDetailComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 135);
    \u0275\u0275text(1, "Are you sure you want to remove ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " from your order?");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.itemToDelete == null ? null : ctx_r1.itemToDelete.menuItemName);
  }
}
function OrderDetailComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 136);
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  route;
  router;
  orderService;
  authService;
  orderId;
  order = null;
  myOrderItems = [];
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  // Edit mode for items
  editingItem = null;
  editQuantity = 1;
  editNote = "";
  // For delete confirmation modal
  itemToDelete = null;
  showDeleteModal = false;
  // For template use
  OrderStatus = OrderStatus;
  constructor(route, router, orderService, authService) {
    this.route = route;
    this.router = router;
    this.orderService = orderService;
    this.authService = authService;
    this.orderId = this.route.snapshot.paramMap.get("id") || "";
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    if (!this.orderId) {
      this.router.navigate(["/orders"]);
      return;
    }
    this.loadOrderDetails();
  }
  loadOrderDetails() {
    this.isLoading = true;
    this.errorMessage = "";
    this.orderService.getById(this.orderId).subscribe({
      next: (response) => {
        console.log("Order details response:", response);
        if (response.restaurantName !== void 0) {
          this.order = this.processOrderResponse(response);
          if (response.items && Array.isArray(response.items) && response.items.length > 0 || response.userItems && Array.isArray(response.userItems) && response.userItems.length > 0) {
            this.myOrderItems = this.processOrderItems(response);
            this.isLoading = false;
          } else {
            this.loadMyOrderItems();
          }
        } else {
          this.order = this.convertToNewFormat(response);
          this.loadMyOrderItems();
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load order details";
      }
    });
  }
  processOrderResponse(response) {
    return {
      id: response.id || response.orderId,
      orderId: response.orderId || response.id,
      restaurantName: response.restaurantName,
      orderDate: response.orderDate,
      closedAt: response.closedAt,
      status: response.status || response.orderStatus,
      orderStatus: response.orderStatus || response.status,
      managerName: response.managerName,
      managerEmail: response.managerEmail,
      deliveryFee: response.deliveryFee,
      deliveryFeeShare: response.deliveryFeeShare,
      userItems: response.userItems,
      items: response.items,
      userPaymentStatus: response.userPaymentStatus,
      userTotal: response.userTotal || response.total,
      subtotal: response.subtotal,
      total: response.total || response.userTotal
    };
  }
  processOrderItems(response) {
    const items = response.items || response.userItems || [];
    return items.map((item) => ({
      id: item.id,
      menuItemId: item.menuItemId,
      menuItemName: item.menuItemName,
      menuItemDescription: item.menuItemDescription,
      price: item.price,
      quantity: item.quantity,
      note: item.note,
      total: item.total || item.itemTotal,
      itemTotal: item.itemTotal || item.total,
      userId: item.userId,
      userName: item.userName,
      canBeDeleted: this.isOrderOpen()
      // Set canBeDeleted based on order status
    }));
  }
  convertToNewFormat(oldOrder) {
    return {
      id: oldOrder.id || "",
      restaurantName: oldOrder.restaurant?.name || "Unknown Restaurant",
      orderDate: oldOrder.orderDate?.toString() || (/* @__PURE__ */ new Date()).toISOString(),
      closedAt: oldOrder.closedAt?.toString() || null,
      status: oldOrder.status || OrderStatus.Open,
      orderStatus: oldOrder.status || OrderStatus.Open,
      managerName: oldOrder.manager?.name || "Unknown Manager",
      managerEmail: oldOrder.manager?.email,
      deliveryFee: oldOrder.restaurant?.deliveryFee || 0,
      deliveryFeeShare: 0,
      userItems: [],
      items: [],
      userPaymentStatus: 0,
      userTotal: 0,
      subtotal: 0,
      total: 0
    };
  }
  loadMyOrderItems() {
    this.orderService.getMyOrderItems(this.orderId).subscribe({
      next: (response) => {
        console.log("My order items response:", response);
        if (response && response.items && Array.isArray(response.items)) {
          this.myOrderItems = this.processOrderItems(response);
          if (this.order && response.subtotal !== void 0) {
            this.order.subtotal = response.subtotal;
            this.order.deliveryFeeShare = response.deliveryFeeShare;
            this.order.total = response.total;
          }
        } else if (Array.isArray(response)) {
          this.myOrderItems = response.map((item) => ({
            id: item.id || "",
            menuItemId: item.menuItemId,
            menuItemName: item.menuItem?.name || "Unknown Item",
            price: item.menuItem?.price || 0,
            quantity: item.quantity || 1,
            note: item.note,
            total: (item.menuItem?.price || 0) * (item.quantity || 1),
            canBeDeleted: this.isOrderOpen()
            // Set canBeDeleted based on order status
          }));
          if (this.order) {
            this.order.subtotal = this.calculateSubtotal();
            this.order.total = this.calculateTotal();
          }
        } else {
          this.myOrderItems = [];
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load your order items";
      }
    });
  }
  closeOrder() {
    if (this.order && (this.authService.isAdmin || this.authService.isManager)) {
      this.isLoading = true;
      this.errorMessage = "";
      this.orderService.closeOrder(this.orderId).subscribe({
        next: () => {
          this.successMessage = "Order closed successfully";
          this.loadOrderDetails();
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.message || "Failed to close the order";
        }
      });
    }
  }
  isOrderOpen() {
    const status = this.order?.status || this.order?.orderStatus;
    return status === OrderStatus.Open;
  }
  canModifyItems() {
    return this.isOrderOpen();
  }
  startEditItem(item) {
    if (!this.canModifyItems()) {
      this.errorMessage = "Cannot modify items in a closed order";
      return;
    }
    this.editingItem = item;
    this.editQuantity = item.quantity;
    this.editNote = item.note || "";
  }
  cancelEdit() {
    this.editingItem = null;
  }
  saveItemChanges() {
    if (!this.editingItem || !this.editingItem.id)
      return;
    if (!this.canModifyItems()) {
      this.errorMessage = "Cannot modify items in a closed order";
      this.editingItem = null;
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    const updatedItem = {
      id: this.editingItem.id,
      orderId: this.orderId,
      userId: this.authService.currentUser?.id || "",
      menuItemId: this.editingItem.menuItemId || "",
      quantity: this.editQuantity,
      note: this.editNote
    };
    this.orderService.updateOrderItem(this.editingItem.id, updatedItem).subscribe({
      next: () => {
        this.successMessage = "Item updated successfully";
        this.editingItem = null;
        const itemIndex = this.myOrderItems.findIndex((item) => item.id === updatedItem.id);
        if (itemIndex !== -1) {
          this.myOrderItems[itemIndex].quantity = this.editQuantity;
          this.myOrderItems[itemIndex].note = this.editNote;
          const price = this.myOrderItems[itemIndex].price;
          const newTotal = this.editQuantity * price;
          this.myOrderItems[itemIndex].total = newTotal;
          this.myOrderItems[itemIndex].itemTotal = newTotal;
          if (this.order) {
            this.order.subtotal = this.calculateSubtotal();
            this.order.total = this.calculateTotal();
          }
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to update item";
      }
    });
  }
  deleteItem(item) {
    if (!this.canModifyItems()) {
      this.errorMessage = "Cannot remove items from a closed order";
      return;
    }
    if (!item.id) {
      this.errorMessage = "Invalid item ID";
      return;
    }
    this.itemToDelete = item;
    this.showDeleteModal = true;
  }
  confirmDelete() {
    if (!this.itemToDelete || !this.itemToDelete.id)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    this.orderService.deleteOrderItem(this.itemToDelete.id).subscribe({
      next: () => {
        this.successMessage = "Item removed successfully";
        this.myOrderItems = this.myOrderItems.filter((i) => i.id !== this.itemToDelete?.id);
        if (this.order) {
          this.order.subtotal = this.calculateSubtotal();
          this.order.total = this.calculateTotal();
        }
        this.isLoading = false;
        this.closeDeleteModal();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to remove item";
        this.closeDeleteModal();
      }
    });
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.itemToDelete = null;
  }
  calculateSubtotal() {
    return this.myOrderItems.reduce((total, item) => {
      return total + (item.price || 0) * (item.quantity || 0);
    }, 0);
  }
  calculateTotal() {
    if (this.order?.total) {
      return this.order.total;
    }
    const subtotal = this.calculateSubtotal();
    const deliveryFeeShare = this.order?.deliveryFeeShare || 0;
    return subtotal + deliveryFeeShare;
  }
  formatDate(date) {
    if (!date)
      return "N/A";
    return new Date(date).toLocaleString();
  }
  getPaymentStatusText() {
    if (!this.order)
      return "";
    switch (this.order.userPaymentStatus) {
      case 1:
        return "Unpaid";
      case 2:
        return "Paid";
      default:
        return "";
    }
  }
  getPaymentStatusClass() {
    if (!this.order)
      return "";
    switch (this.order.userPaymentStatus) {
      case 1:
        return "bg-danger";
      case 2:
        return "bg-success";
      default:
        return "";
    }
  }
  decreaseQuantity() {
    if (this.editQuantity > 1) {
      this.editQuantity--;
    }
  }
  increaseQuantity() {
    if (this.editQuantity < 10) {
      this.editQuantity++;
    }
  }
  getDeliveryFeeNote() {
    if (!this.order)
      return "";
    if (this.order.status === OrderStatus.Open) {
      return "Delivery fee will be calculated when the order is closed";
    } else if (this.order.deliveryFeeShare) {
      return `Your share of the delivery fee: $${this.order.deliveryFeeShare.toFixed(2)}`;
    } else {
      return "";
    }
  }
  hasPaymentStatus() {
    return !!this.order && typeof this.order.userPaymentStatus === "number" && this.order.userPaymentStatus > 0;
  }
  isPaid() {
    return !!this.order && this.order.userPaymentStatus === 2;
  }
  isUnpaid() {
    return !!this.order && this.order.userPaymentStatus === 1;
  }
  static \u0275fac = function OrderDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], decls: 32, vars: 11, consts: [[1, "container", "py-4"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], [4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "shadow"], [1, "modal-header", "bg-danger", "text-white"], [1, "modal-title"], [1, "bi", "bi-exclamation-triangle", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", "p-4"], [1, "d-flex", "align-items-center", "mb-3"], [1, "text-danger", "me-3"], [1, "bi", "bi-trash", "fs-1"], [1, "mb-1"], ["class", "mb-0", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "bi", "bi-info-circle", "me-2"], [1, "modal-footer", "bg-light"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-lg", "me-1"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], [1, "bi", "bi-trash", "me-1"], ["class", "modal-backdrop fade show", 4, "ngIf"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "text-center", "my-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card", "mb-4", "shadow-sm", "bg-light"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "mb-3", "fw-bold", "d-flex", "align-items-center"], [1, "bi", "bi-bag", "me-2", "text-primary"], [1, "lead", "mb-1"], [1, "badge", "rounded-pill", "px-3", "py-2"], [1, "bi", 3, "ngClass"], [1, "ms-2", "fw-bold"], [1, "text-muted", "d-flex", "align-items-center"], [1, "bi", "bi-calendar3", "me-2"], ["class", "text-success small", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["routerLink", "/orders", 1, "btn", "btn-secondary", "me-2"], [1, "bi", "bi-arrow-left", "me-2"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "row", "mb-5"], [1, "col-md-8"], [1, "card", "shadow"], [1, "card-header", "bg-white", "border-bottom"], [1, "mb-0", "text-primary", "fw-bold"], [1, "bi", "bi-cart3", "me-2"], [1, "card-body", "p-0"], ["class", "alert alert-info m-3 mb-0", 4, "ngIf"], ["class", "list-group list-group-flush", 4, "ngIf"], ["class", "card-footer bg-white", 4, "ngIf"], [1, "col-md-4"], [1, "bi", "bi-receipt", "me-2"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "fw-medium"], ["class", "fw-medium", 4, "ngIf"], ["class", "text-muted fst-italic", 4, "ngIf"], [1, "my-3"], [1, "d-flex", "justify-content-between", "fw-bold"], [1, "fs-5"], [1, "fs-5", "text-primary"], ["class", "alert alert-info mt-4 mb-0 py-2 small", 4, "ngIf"], [1, "card", "mt-3", "shadow"], [1, "bi", "bi-person-badge", "me-2"], [1, "d-flex", "align-items-center", "mb-2"], [1, "bi", "bi-person", "me-2", "text-muted"], ["class", "d-flex align-items-center mb-0", 4, "ngIf"], [1, "text-success", "small"], [1, "text-muted", "small"], [1, "bi", "bi-lock", "me-2"], [1, "mt-2"], [1, "badge", "rounded-pill", "px-3", "py-2", 3, "ngClass"], [1, "btn", "btn-danger", 3, "click"], [1, "alert", "alert-info", "m-3", "mb-0"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "py-3", "border-bottom"], ["class", "d-flex justify-content-between align-items-center", 4, "ngIf"], ["class", "edit-item-form p-3 border rounded bg-light mt-2 mb-1", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-start"], [1, "me-3", "mt-1"], [1, "badge", "rounded-pill", "bg-light", "text-dark", "px-2", "py-2"], [1, "mb-1", "fw-bold"], [1, "text-muted", "mb-0", "small"], ["class", "text-muted mb-0 small fst-italic", 4, "ngIf"], [1, "text-end"], [1, "text-primary", "mb-1", "fw-bold"], ["class", "btn-group btn-group-sm mt-1", 4, "ngIf"], [1, "text-muted", "mb-0", "small", "fst-italic"], [1, "bi", "bi-chat-left-text", "me-1"], [1, "btn-group", "btn-group-sm", "mt-1"], ["title", "Edit item", 1, "btn", "btn-outline-primary", "rounded-start", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Remove item", 1, "btn", "btn-outline-danger", "rounded-end", 3, "click"], [1, "bi", "bi-trash"], [1, "edit-item-form", "p-3", "border", "rounded", "bg-light", "mt-2", "mb-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0", "d-flex", "align-items-center"], [1, "bi", "bi-pencil-square", "text-primary", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "row"], [1, "col-md-5", "mb-3"], ["for", "editQuantity", 1, "form-label", "fw-medium"], [1, "input-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-dash-lg"], ["type", "number", "id", "editQuantity", "min", "1", "max", "10", 1, "form-control", "text-center", "fw-bold", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-plus-lg"], [1, "form-text", "text-center", "mt-1"], [1, "col-md-7"], [1, "d-flex", "justify-content-between"], ["for", "editNote", 1, "form-label", "fw-medium"], [1, "text-muted"], ["id", "editNote", "rows", "2", "placeholder", "Any special requests or notes for this item?", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "mt-3"], [1, "text-primary", "fw-bold", "fs-5"], [1, "btn", "btn-outline-secondary", "me-2", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-check-lg", "me-1"], [1, "card-footer", "bg-white"], [1, "fw-bold"], [1, "text-muted", "fst-italic"], [1, "alert", "alert-info", "mt-4", "mb-0", "py-2", "small"], [1, "bi", "bi-info-circle", "me-1"], [1, "d-flex", "align-items-center", "mb-0"], [1, "bi", "bi-envelope", "me-2", "text-muted"], [1, "text-decoration-none", 3, "href"], [1, "mb-0"], [1, "modal-backdrop", "fade", "show"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, OrderDetailComponent_div_1_Template, 3, 1, "div", 1)(2, OrderDetailComponent_div_2_Template, 3, 1, "div", 2)(3, OrderDetailComponent_div_3_Template, 4, 0, "div", 3)(4, OrderDetailComponent_div_4_Template, 71, 22, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
      \u0275\u0275element(10, "i", 10);
      \u0275\u0275text(11, " Confirm Deletion ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 11);
      \u0275\u0275listener("click", function OrderDetailComponent_Template_button_click_12_listener() {
        return ctx.closeDeleteModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "div", 14);
      \u0275\u0275element(16, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div")(18, "h5", 16);
      \u0275\u0275text(19, "Remove Item From Order");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, OrderDetailComponent_p_20_Template, 5, 1, "p", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 18);
      \u0275\u0275element(22, "i", 19);
      \u0275\u0275text(23, " This action cannot be undone. You will have to add the item again if you change your mind. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 20)(25, "button", 21);
      \u0275\u0275listener("click", function OrderDetailComponent_Template_button_click_25_listener() {
        return ctx.closeDeleteModal();
      });
      \u0275\u0275element(26, "i", 22);
      \u0275\u0275text(27, "Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 23);
      \u0275\u0275listener("click", function OrderDetailComponent_Template_button_click_28_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275element(29, "i", 24);
      \u0275\u0275text(30, "Yes, Remove Item ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(31, OrderDetailComponent_div_31_Template, 1, 0, "div", 25);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.order);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showDeleteModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showDeleteModal);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.itemToDelete);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
    }
  }, dependencies: [SharedModule, NgClass, NgIf, RouterLink, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DecimalPipe, FormsModule, CommonModule], styles: ["\n\n.edit-item-form[_ngcontent-%COMP%] {\n  background-color: #f9f9ff;\n  border: 1px solid rgba(0, 123, 255, 0.2) !important;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s ease-in-out;\n}\n.edit-item-form[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.edit-item-form[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.edit-item-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.edit-item-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.edit-item-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n.edit-item-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.modal.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.15s linear;\n}\n.modal[_ngcontent-%COMP%]:not(.show) {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  transform: translate(0, 0);\n  transition: transform 0.3s ease-out;\n  border: none;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-white[_ngcontent-%COMP%] {\n  filter: invert(1) grayscale(100%) brightness(200%);\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .bi-trash[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transition: opacity 0.15s linear;\n}\n/*# sourceMappingURL=order-detail.component-RAWXHTA3.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailComponent, [{
    type: Component,
    args: [{ selector: "app-order-detail", standalone: true, imports: [SharedModule, FormsModule, CommonModule], template: `<div class="container py-4">\r
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show">\r
    {{ errorMessage }}\r
    <button type="button" class="btn-close" (click)="errorMessage = ''"></button>\r
  </div>\r
  \r
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show">\r
    {{ successMessage }}\r
    <button type="button" class="btn-close" (click)="successMessage = ''"></button>\r
  </div>\r
  \r
  <div *ngIf="isLoading" class="text-center my-5">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
  \r
  <div *ngIf="!isLoading && order">\r
    <div class="card mb-4 shadow-sm bg-light">\r
      <div class="card-body">\r
        <div class="d-flex justify-content-between align-items-start">\r
          <div>\r
            <h2 class="mb-3 fw-bold d-flex align-items-center">\r
              <i class="bi bi-bag me-2 text-primary"></i>\r
              Order Details\r
            </h2>\r
            <p class="lead mb-1">\r
              <span class="badge rounded-pill px-3 py-2" [class.bg-success]="isOrderOpen()" [class.bg-secondary]="!isOrderOpen()">\r
                <i class="bi" [ngClass]="isOrderOpen() ? 'bi-clock' : 'bi-lock'"></i>\r
                {{ isOrderOpen() ? 'Open' : 'Closed' }}\r
              </span>\r
              <span class="ms-2 fw-bold">{{ order.restaurantName }}</span>\r
            </p>\r
            <p class="text-muted d-flex align-items-center">\r
              <i class="bi bi-calendar3 me-2"></i> {{ formatDate(order.orderDate) }}\r
            </p>\r
            <p *ngIf="isOrderOpen()" class="text-success small">\r
              <i class="bi bi-info-circle me-2"></i> You can modify your order items while the order is open.\r
            </p>\r
            <p *ngIf="!isOrderOpen() && order?.closedAt" class="text-muted small">\r
              <i class="bi bi-lock me-2"></i> Order closed at: {{ formatDate(order?.closedAt) }}\r
            </p>\r
            <p *ngIf="hasPaymentStatus()" class="mt-2">\r
              <span class="badge rounded-pill px-3 py-2" [ngClass]="getPaymentStatusClass()">\r
                <i class="bi" [ngClass]="{'bi-check-circle': isPaid(), 'bi-exclamation-circle': isUnpaid()}"></i>\r
                {{ getPaymentStatusText() }}\r
              </span>\r
            </p>\r
          </div>\r
          \r
          <div>\r
            <button class="btn btn-secondary me-2" routerLink="/orders">\r
              <i class="bi bi-arrow-left me-2"></i> Back to Orders\r
            </button>\r
            <button *ngIf="isOrderOpen() && (authService.isAdmin || authService.isManager)" class="btn btn-danger" (click)="closeOrder()">\r
              <i class="bi bi-lock me-2"></i> Close Order\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="row mb-5">\r
      <div class="col-md-8">\r
        <div class="card shadow">\r
          <div class="card-header bg-white border-bottom">\r
            <h5 class="mb-0 text-primary fw-bold">\r
              <i class="bi bi-cart3 me-2"></i>Your Order Items\r
            </h5>\r
          </div>\r
          <div class="card-body p-0">\r
            <div *ngIf="myOrderItems.length === 0" class="alert alert-info m-3 mb-0">\r
              <i class="bi bi-info-circle me-2"></i>\r
              You haven't ordered anything yet.\r
            </div>\r
            \r
            <ul class="list-group list-group-flush" *ngIf="myOrderItems.length > 0">\r
              @for (item of myOrderItems; track item.id) {\r
                <li class="list-group-item py-3 border-bottom">\r
                  <!-- Normal view mode -->\r
                  <div *ngIf="editingItem?.id !== item.id" class="d-flex justify-content-between align-items-center">\r
                    <div class="d-flex align-items-start">\r
                      <div class="me-3 mt-1">\r
                        <span class="badge rounded-pill bg-light text-dark px-2 py-2">\r
                          {{ item.quantity }}\r
                        </span>\r
                      </div>\r
                      <div>\r
                        <h6 class="mb-1 fw-bold">{{ item.menuItemName }}</h6>\r
                        <p class="text-muted mb-0 small">\r
                          \${{ item.price?.toFixed(2) ?? '0.00' }} each\r
                        </p>\r
                        <p class="text-muted mb-0 small fst-italic" *ngIf="item.note">\r
                          <i class="bi bi-chat-left-text me-1"></i>{{ item.note }}\r
                        </p>\r
                      </div>\r
                    </div>\r
                    <div class="text-end">\r
                      <h6 class="text-primary mb-1 fw-bold">\${{ (item.total || item.itemTotal || (item.price * item.quantity)).toFixed(2) }}</h6>\r
                      <div class="btn-group btn-group-sm mt-1" *ngIf="canModifyItems()">\r
                        <button class="btn btn-outline-primary rounded-start" (click)="startEditItem(item)" title="Edit item">\r
                          <i class="bi bi-pencil"></i>\r
                        </button>\r
                        <button class="btn btn-outline-danger rounded-end" (click)="deleteItem(item)" title="Remove item">\r
                          <i class="bi bi-trash"></i>\r
                        </button>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- Edit mode -->\r
                  <div *ngIf="editingItem?.id === item.id" class="edit-item-form p-3 border rounded bg-light mt-2 mb-1">\r
                    <div class="d-flex justify-content-between align-items-center mb-3">\r
                      <h6 class="fw-bold mb-0 d-flex align-items-center">\r
                        <i class="bi bi-pencil-square text-primary me-2"></i>\r
                        Editing: {{ item.menuItemName }}\r
                      </h6>\r
                      <button type="button" class="btn-close" aria-label="Close" (click)="cancelEdit()"></button>\r
                    </div>\r
                    \r
                    <div class="row">\r
                      <div class="col-md-5 mb-3">\r
                        <label for="editQuantity" class="form-label fw-medium">Quantity</label>\r
                        <div class="input-group">\r
                          <button class="btn btn-primary" type="button" (click)="decreaseQuantity()">\r
                            <i class="bi bi-dash-lg"></i>\r
                          </button>\r
                          <input type="number" class="form-control text-center fw-bold" id="editQuantity" [(ngModel)]="editQuantity" min="1" max="10">\r
                          <button class="btn btn-primary" type="button" (click)="increaseQuantity()">\r
                            <i class="bi bi-plus-lg"></i>\r
                          </button>\r
                        </div>\r
                        <div class="form-text text-center mt-1">\r
                          Min: 1 \xB7 Max: 10\r
                        </div>\r
                      </div>\r
                      \r
                      <div class="col-md-7">\r
                        <div class="d-flex justify-content-between">\r
                          <label for="editNote" class="form-label fw-medium">Special Instructions</label>\r
                          <small class="text-muted">Optional</small>\r
                        </div>\r
                        <textarea \r
                          class="form-control" \r
                          id="editNote" \r
                          [(ngModel)]="editNote" \r
                          rows="2" \r
                          placeholder="Any special requests or notes for this item?">\r
                        </textarea>\r
                      </div>\r
                    </div>\r
                    \r
                    <div class="d-flex justify-content-between mt-3">\r
                      <span class="text-primary fw-bold fs-5">\r
                        Total: \${{ (editingItem?.price || 0) * editQuantity | number:'1.2-2' }}\r
                      </span>\r
                      <div>\r
                        <button class="btn btn-outline-secondary me-2" (click)="cancelEdit()">\r
                          <i class="bi bi-x-lg me-1"></i>Cancel\r
                        </button>\r
                        <button class="btn btn-primary" (click)="saveItemChanges()">\r
                          <i class="bi bi-check-lg me-1"></i>Save Changes\r
                        </button>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </li>\r
              }\r
            </ul>\r
          </div>\r
          <div class="card-footer bg-white" *ngIf="myOrderItems.length > 0">\r
            <div class="d-flex justify-content-between align-items-center">\r
              <span class="text-muted">{{ myOrderItems.length }} item(s) in your order</span>\r
              <span class="fw-bold">Subtotal: \${{ (order.subtotal || calculateSubtotal()).toFixed(2) }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="col-md-4">\r
        <div class="card shadow">\r
          <div class="card-header bg-white border-bottom">\r
            <h5 class="mb-0 text-primary fw-bold">\r
              <i class="bi bi-receipt me-2"></i>Order Summary\r
            </h5>\r
          </div>\r
          <div class="card-body">\r
            <div class="d-flex justify-content-between mb-3">\r
              <span class="fw-medium">Subtotal</span>\r
              <span class="fw-medium">\${{ (order.subtotal || calculateSubtotal()).toFixed(2) }}</span>\r
            </div>\r
            <div class="d-flex justify-content-between mb-3">\r
              <span class="fw-medium">Delivery Fee</span>\r
              <span *ngIf="!isOrderOpen()" class="fw-medium">\${{ order.deliveryFeeShare?.toFixed(2) ?? '0.00' }}</span>\r
              <span *ngIf="isOrderOpen()" class="text-muted fst-italic">Calculated when order closes</span>\r
            </div>\r
            <hr class="my-3">\r
            <div class="d-flex justify-content-between fw-bold">\r
              <span class="fs-5">Total</span>\r
              <span class="fs-5 text-primary">\${{ (order.total || calculateTotal()).toFixed(2) }}</span>\r
            </div>\r
            \r
            <div *ngIf="getDeliveryFeeNote()" class="alert alert-info mt-4 mb-0 py-2 small">\r
              <i class="bi bi-info-circle me-1"></i> {{ getDeliveryFeeNote() }}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="card mt-3 shadow">\r
          <div class="card-header bg-white border-bottom">\r
            <h5 class="mb-0 text-primary fw-bold">\r
              <i class="bi bi-person-badge me-2"></i>Manager\r
            </h5>\r
          </div>\r
          <div class="card-body">\r
            <p class="d-flex align-items-center mb-2">\r
              <i class="bi bi-person me-2 text-muted"></i> \r
              <span class="fw-medium">{{ order.managerName }}</span>\r
            </p>\r
            <p class="d-flex align-items-center mb-0" *ngIf="order.managerEmail">\r
              <i class="bi bi-envelope me-2 text-muted"></i> \r
              <a href="mailto:{{ order.managerEmail }}" class="text-decoration-none">{{ order.managerEmail }}</a>\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Confirmation Modal -->\r
<div class="modal" [class.show]="showDeleteModal" [style.display]="showDeleteModal ? 'block' : 'none'" tabindex="-1" role="dialog">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content shadow">\r
      <div class="modal-header bg-danger text-white">\r
        <h5 class="modal-title">\r
          <i class="bi bi-exclamation-triangle me-2"></i>\r
          Confirm Deletion\r
        </h5>\r
        <button type="button" class="btn-close btn-close-white" (click)="closeDeleteModal()" aria-label="Close"></button>\r
      </div>\r
      <div class="modal-body p-4">\r
        <div class="d-flex align-items-center mb-3">\r
          <div class="text-danger me-3">\r
            <i class="bi bi-trash fs-1"></i>\r
          </div>\r
          <div>\r
            <h5 class="mb-1">Remove Item From Order</h5>\r
            <p class="mb-0" *ngIf="itemToDelete">Are you sure you want to remove <strong>{{ itemToDelete?.menuItemName }}</strong> from your order?</p>\r
          </div>\r
        </div>\r
        <div class="alert alert-warning">\r
          <i class="bi bi-info-circle me-2"></i>\r
          This action cannot be undone. You will have to add the item again if you change your mind.\r
        </div>\r
      </div>\r
      <div class="modal-footer bg-light">\r
        <button type="button" class="btn btn-outline-secondary" (click)="closeDeleteModal()">\r
          <i class="bi bi-x-lg me-1"></i>Cancel\r
        </button>\r
        <button type="button" class="btn btn-danger" (click)="confirmDelete()" [disabled]="isLoading">\r
          <i class="bi bi-trash me-1"></i>Yes, Remove Item\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div class="modal-backdrop fade show" *ngIf="showDeleteModal"></div> `, styles: ["/* src/app/features/orders/order-detail/order-detail.component.scss */\n.edit-item-form {\n  background-color: #f9f9ff;\n  border: 1px solid rgba(0, 123, 255, 0.2) !important;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s ease-in-out;\n}\n.edit-item-form .btn-close {\n  opacity: 0.5;\n}\n.edit-item-form .btn-close:hover {\n  opacity: 1;\n}\n.edit-item-form .form-control:focus {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.edit-item-form .input-group .btn-primary {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.edit-item-form .input-group .btn-primary:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n.edit-item-form .input-group input[type=number] {\n  font-weight: 600;\n}\n.btn-group-sm .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.list-group-item {\n  transition: all 0.3s ease;\n}\n.list-group-item:hover {\n  background-color: #f8f9fa;\n}\n.badge {\n  padding: 0.5rem 0.75rem;\n}\n.card {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.card .card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.modal.show {\n  opacity: 1;\n  transition: opacity 0.15s linear;\n}\n.modal:not(.show) {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.modal .modal-content {\n  transform: translate(0, 0);\n  transition: transform 0.3s ease-out;\n  border: none;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.modal .modal-header .btn-close-white {\n  filter: invert(1) grayscale(100%) brightness(200%);\n}\n.modal .modal-body .bi-trash {\n  opacity: 0.8;\n}\n.modal-backdrop {\n  opacity: 0.5;\n  transition: opacity 0.15s linear;\n}\n/*# sourceMappingURL=order-detail.component-RAWXHTA3.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: OrderService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/features/orders/order-detail/order-detail.component.ts", lineNumber: 53 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=chunk-SSKQRJBM.js.map
