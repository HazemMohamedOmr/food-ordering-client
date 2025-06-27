import {
  HttpClient,
  Injectable,
  environment,
  map,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UXXDM6C4.js";

// src/app/core/services/menu-item.service.ts
var MenuItemService = class _MenuItemService {
  http;
  apiUrl = `${environment.apiUrl}/menuitems`;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  getByRestaurant(restaurantId) {
    return this.http.get(`${this.apiUrl}/restaurant/${restaurantId}`).pipe(shareReplay(1));
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(menuItem) {
    return this.http.post(this.apiUrl, menuItem).pipe(map((response) => response.data));
  }
  update(id, menuItem) {
    return this.http.put(`${this.apiUrl}/${id}`, menuItem);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function MenuItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuItemService, factory: _MenuItemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MenuItemService
};
//# sourceMappingURL=chunk-BS6L2LPW.js.map
