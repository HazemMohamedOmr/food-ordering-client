import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    title: 'Admin Dashboard - QualiFoodie'
  },
  {
    path: 'users',
    loadComponent: () => import('./user-management/user-management.component').then(m => m.UserManagementComponent),
    title: 'User Management - Admin - QualiFoodie'
  },
  {
    path: 'restaurant-management',
    loadComponent: () => import('./restaurant-management/restaurant-management.component').then(m => m.RestaurantManagementComponent),
    title: 'Restaurant Management - Admin - QualiFoodie'
  },
  {
    path: 'menu-management/:id',
    loadComponent: () => import('./menu-management/menu-management.component').then(m => m.MenuManagementComponent),
    title: 'Menu Management - Admin - QualiFoodie'
  },
  {
    path: 'order-management',
    loadComponent: () => import('./order-management/order-management.component').then(m => m.OrderManagementComponent),
    title: 'Order Management - Admin - QualiFoodie'
  }
]; 