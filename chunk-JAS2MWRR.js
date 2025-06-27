import "./chunk-GMSD7K74.js";

// src/app/features/orders/orders.routes.ts
var ORDERS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-C5NMZVLA.js").then((m) => m.OrderListComponent),
    title: "My Orders - QualiFoodie"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-SSKQRJBM.js").then((m) => m.OrderDetailComponent),
    title: "Order Details - QualiFoodie"
  }
];
export {
  ORDERS_ROUTES
};
//# sourceMappingURL=chunk-JAS2MWRR.js.map
