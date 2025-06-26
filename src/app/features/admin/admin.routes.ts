import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    title: 'Admin Dashboard - Food Ordering System'
  },
  {
    path: 'users',
    loadComponent: () => import('./user-management/user-management.component').then(m => m.UserManagementComponent),
    title: 'User Management - Admin - Food Ordering System'
  },
  {
    path: 'restaurant-management',
    loadComponent: () => import('./restaurant-management/restaurant-management.component').then(m => m.RestaurantManagementComponent),
    title: 'Restaurant Management - Admin - Food Ordering System'
  },
  {
    path: 'menu-management/:id',
    loadComponent: () => import('./menu-management/menu-management.component').then(m => m.MenuManagementComponent),
    title: 'Menu Management - Admin - Food Ordering System'
  },
  {
    path: 'order-management',
    loadComponent: () => import('./order-management/order-management.component').then(m => m.OrderManagementComponent),
    title: 'Order Management - Admin - Food Ordering System'
  }
]; 