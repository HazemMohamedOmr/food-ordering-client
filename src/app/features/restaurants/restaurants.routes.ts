import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

export const RESTAURANTS_ROUTES: Routes = [
  {
    path: '',
    component: RestaurantListComponent,
    title: 'Restaurants - Food Ordering System'
  },
  {
    path: ':id',
    loadComponent: () => import('./restaurant-detail/restaurant-detail.component').then(m => m.RestaurantDetailComponent),
    title: 'Restaurant Details - Food Ordering System'
  }
]; 