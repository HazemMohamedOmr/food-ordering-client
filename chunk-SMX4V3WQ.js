import "./chunk-GMSD7K74.js";

// src/app/features/admin/admin.routes.ts
var ADMIN_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-WFZDPGZN.js").then((m) => m.AdminDashboardComponent),
    title: "Admin Dashboard - QualiFoodie"
  },
  {
    path: "users",
    loadComponent: () => import("./chunk-SWH4FN26.js").then((m) => m.UserManagementComponent),
    title: "User Management - Admin - QualiFoodie"
  },
  {
    path: "restaurant-management",
    loadComponent: () => import("./chunk-7XYDRG3Q.js").then((m) => m.RestaurantManagementComponent),
    title: "Restaurant Management - Admin - QualiFoodie"
  },
  {
    path: "menu-management/:id",
    loadComponent: () => import("./chunk-WYQUB5V7.js").then((m) => m.MenuManagementComponent),
    title: "Menu Management - Admin - QualiFoodie"
  },
  {
    path: "order-management",
    loadComponent: () => import("./chunk-37NLESRV.js").then((m) => m.OrderManagementComponent),
    title: "Order Management - Admin - QualiFoodie"
  }
];
export {
  ADMIN_ROUTES
};
//# sourceMappingURL=chunk-SMX4V3WQ.js.map
