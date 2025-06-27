import {
  HttpClient,
  Injectable,
  environment,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UXXDM6C4.js";

// src/app/core/models/order.model.ts
var OrderStatus;
(function(OrderStatus2) {
  OrderStatus2[OrderStatus2["Open"] = 1] = "Open";
  OrderStatus2[OrderStatus2["Closed"] = 2] = "Closed";
})(OrderStatus || (OrderStatus = {}));
var PaymentStatus;
(function(PaymentStatus2) {
  PaymentStatus2[PaymentStatus2["Unpaid"] = 1] = "Unpaid";
  PaymentStatus2[PaymentStatus2["Paid"] = 2] = "Paid";
})(PaymentStatus || (PaymentStatus = {}));

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  http;
  apiUrl = `${environment.apiUrl}/orders`;
  activeOrdersCache = {};
  constructor(http) {
    this.http = http;
    this.loadActiveOrdersFromStorage();
  }
  loadActiveOrdersFromStorage() {
    try {
      const stored = localStorage.getItem("activeOrders");
      if (stored) {
        this.activeOrdersCache = JSON.parse(stored);
        const now = Date.now();
        let hasChanges = false;
        Object.keys(this.activeOrdersCache).forEach((restaurantId) => {
          if (now - this.activeOrdersCache[restaurantId].timestamp > 24 * 60 * 60 * 1e3) {
            delete this.activeOrdersCache[restaurantId];
            hasChanges = true;
          }
        });
        if (hasChanges) {
          this.saveActiveOrdersToStorage();
        }
      }
    } catch (e) {
      console.error("Error loading active orders from storage", e);
      this.activeOrdersCache = {};
    }
  }
  saveActiveOrdersToStorage() {
    try {
      localStorage.setItem("activeOrders", JSON.stringify(this.activeOrdersCache));
    } catch (e) {
      console.error("Error saving active orders to storage", e);
    }
  }
  storeActiveOrder(restaurantId, orderId) {
    this.activeOrdersCache[restaurantId] = {
      orderId,
      restaurantId,
      timestamp: Date.now()
    };
    this.saveActiveOrdersToStorage();
  }
  removeActiveOrder(restaurantId) {
    if (this.activeOrdersCache[restaurantId]) {
      delete this.activeOrdersCache[restaurantId];
      this.saveActiveOrdersToStorage();
    }
  }
  getCachedActiveOrder(restaurantId) {
    return this.activeOrdersCache[restaurantId] || null;
  }
  startOrder(restaurantId, managerId) {
    return this.http.post(`${this.apiUrl}/start`, {
      restaurantId,
      managerId
    }).pipe(map((response) => {
      const orderId = response.id || response;
      this.storeActiveOrder(restaurantId, orderId);
      return orderId;
    }));
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getActiveOrders() {
    return this.http.get(`${this.apiUrl}/active`);
  }
  getActiveOrderForRestaurant(restaurantId) {
    console.log(`Fetching active orders to check for restaurant ${restaurantId}`);
    const cachedOrder = this.getCachedActiveOrder(restaurantId);
    if (cachedOrder) {
      console.log("Found cached active order:", cachedOrder);
    }
    return this.http.get(`${this.apiUrl}/active`).pipe(map((response) => {
      console.log("All active orders response:", response);
      if (!response) {
        this.removeActiveOrder(restaurantId);
        return null;
      }
      let orders = [];
      if (Array.isArray(response)) {
        orders = response;
      } else if (response.data && Array.isArray(response.data)) {
        orders = response.data;
      } else {
        console.error("Unexpected response format:", response);
        this.removeActiveOrder(restaurantId);
        return null;
      }
      console.log("Processing orders:", orders);
      const matchingOrder = orders.find((order) => {
        const orderRestaurantId = order.restaurantId || (order.restaurant ? order.restaurant.id : null);
        console.log("Comparing order restaurant ID:", orderRestaurantId, "with", restaurantId);
        return orderRestaurantId === restaurantId;
      });
      if (matchingOrder && matchingOrder.id) {
        console.log("Found matching order:", matchingOrder);
        this.storeActiveOrder(restaurantId, matchingOrder.id);
        return matchingOrder;
      } else {
        this.removeActiveOrder(restaurantId);
        return null;
      }
    }));
  }
  hasActiveOrderForRestaurant(restaurantId) {
    const cachedOrder = this.getCachedActiveOrder(restaurantId);
    if (cachedOrder) {
      return of(true);
    }
    return this.getActiveOrderForRestaurant(restaurantId).pipe(map((order) => !!order && order.status === OrderStatus.Open));
  }
  getOrderHistory(userId, restaurantId) {
    let url = `${this.apiUrl}/history`;
    if (userId || restaurantId) {
      url += "?";
      if (userId) {
        url += `userId=${userId}`;
      }
      if (restaurantId) {
        url += userId ? `&restaurantId=${restaurantId}` : `restaurantId=${restaurantId}`;
      }
    }
    return this.http.get(url);
  }
  getMyOrderHistory(restaurantId) {
    let url = `${this.apiUrl}/my-history`;
    if (restaurantId) {
      url += `?restaurantId=${restaurantId}`;
    }
    return this.http.get(url);
  }
  getOrderReceipt(orderId) {
    return this.http.get(`${this.apiUrl}/${orderId}/receipt`);
  }
  closeOrder(orderId) {
    return this.http.post(`${this.apiUrl}/${orderId}/close`, {}).pipe(map((response) => {
      Object.keys(this.activeOrdersCache).forEach((restaurantId) => {
        if (this.activeOrdersCache[restaurantId].orderId === orderId) {
          this.removeActiveOrder(restaurantId);
        }
      });
      return response;
    }));
  }
  updatePaymentStatus(orderId, userId, status) {
    return this.http.put(`${this.apiUrl}/${orderId}/users/${userId}/payment-status`, { status });
  }
  // Order Item Methods
  getMyOrderItems(orderId) {
    return this.http.get(`${this.apiUrl}/${orderId}/my-items`);
  }
  getAllOrderItems(orderId) {
    return this.http.get(`${this.apiUrl}/${orderId}/items`);
  }
  addOrderItem(orderItem) {
    return this.http.post(`${this.apiUrl}/items`, orderItem);
  }
  updateOrderItem(id, orderItem) {
    return this.http.put(`${this.apiUrl}/items/${id}`, orderItem);
  }
  deleteOrderItem(id) {
    return this.http.delete(`${this.apiUrl}/items/${id}`);
  }
  canModifyOrderItem(orderItem, orderId) {
    return this.getById(orderId).pipe(map((order) => order.status === OrderStatus.Open));
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  OrderStatus,
  PaymentStatus,
  OrderService
};
//# sourceMappingURL=chunk-N7XXU6VP.js.map
