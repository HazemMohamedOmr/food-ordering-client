import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UXXDM6C4.js";

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // User Management
  getAllUsers() {
    return this.http.get(`${this.apiUrl}/admin/users`);
  }
  updateUserRole(userId, role) {
    return this.http.put(`${this.apiUrl}/admin/users/${userId}/role`, { role });
  }
  // Restaurant Management methods are already in RestaurantService
  // Order Management
  closeOrder(orderId) {
    return this.http.post(`${this.apiUrl}/orders/${orderId}/close`, {});
  }
  updatePaymentStatus(orderId, userId, status) {
    return this.http.put(`${this.apiUrl}/orders/${orderId}/users/${userId}/payment-status`, { status });
  }
  getActiveOrders() {
    return this.http.get(`${this.apiUrl}/orders/active`);
  }
  getOrderHistory(userId, restaurantId, includeOtherParticipants = false) {
    let url = `${this.apiUrl}/orders/history?`;
    if (userId) {
      url += `userId=${userId}&`;
    }
    if (restaurantId) {
      url += `restaurantId=${restaurantId}&`;
    }
    url += `includeOtherParticipants=${includeOtherParticipants}`;
    return this.http.get(url);
  }
  static \u0275fac = function AdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AdminService
};
//# sourceMappingURL=chunk-5O64PYLZ.js.map
