import { Routes } from '@angular/router';

export const RESTAURANTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./restaurant-list/restaurant-list.component').then(m => m.RestaurantListComponent),
    title: 'Restaurants - QualiFoodie'
  },
  {
    path: ':id',
    loadComponent: () => import('./restaurant-detail/restaurant-detail.component').then(m => m.RestaurantDetailComponent),
    title: 'Restaurant Details - QualiFoodie'
  }
]; 