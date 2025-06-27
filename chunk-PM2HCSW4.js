import "./chunk-GMSD7K74.js";

// src/app/features/restaurants/restaurants.routes.ts
var RESTAURANTS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-FCMUV5WD.js").then((m) => m.RestaurantListComponent),
    title: "Restaurants - QualiFoodie"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-433VRHJQ.js").then((m) => m.RestaurantDetailComponent),
    title: "Restaurant Details - QualiFoodie"
  }
];
export {
  RESTAURANTS_ROUTES
};
//# sourceMappingURL=chunk-PM2HCSW4.js.map
