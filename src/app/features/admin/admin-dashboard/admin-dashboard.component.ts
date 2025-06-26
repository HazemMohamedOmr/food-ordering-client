import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RestaurantService } from '../../../core/services/restaurant.service';
import { AdminService } from '../../../core/services/admin.service';
import { OrderService } from '../../../core/services/order.service';
import { Restaurant } from '../../../core/models/restaurant.model';
import { SharedModule } from '../../../shared/shared.module';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterLink]
})
export class AdminDashboardComponent implements OnInit {
  restaurants: Restaurant[] = [];
  activeOrders: any[] = [];
  userCount: number = 0;
  isLoading = false;
  errorMessage = '';

  constructor(
    public authService: AuthService,
    private restaurantService: RestaurantService,
    private adminService: AdminService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Only allow access to admin users
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(['/']);
      return;
    }

    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    // Load all data in parallel
    forkJoin({
      restaurants: this.restaurantService.getAll(),
      activeOrders: this.orderService.getActiveOrders(),
      users: this.adminService.getAllUsers()
    }).subscribe({
      next: (results) => {
        this.restaurants = results.restaurants;
        this.activeOrders = results.activeOrders;
        this.userCount = results.users.length;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load dashboard data';
        
        // Try to load at least some data
        this.loadRestaurants();
      }
    });
  }

  loadRestaurants(): void {
    this.restaurantService.getAll().subscribe({
      next: (restaurants) => {
        this.restaurants = restaurants;
      },
      error: (error) => {
        this.errorMessage += ' Failed to load restaurants.';
      }
    });
  }

  editRestaurant(id: string): void {
    // Placeholder for edit functionality
    console.log(`Edit restaurant with ID: ${id}`);
  }

  createRestaurant(): void {
    // Placeholder for create functionality
    console.log('Create new restaurant');
  }
} 