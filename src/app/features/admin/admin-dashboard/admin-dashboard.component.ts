import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RestaurantService } from '../../../core/services/restaurant.service';
import { Restaurant } from '../../../core/models/restaurant.model';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class AdminDashboardComponent implements OnInit {
  restaurants: Restaurant[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    public authService: AuthService,
    private restaurantService: RestaurantService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Only allow access to admin users
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(['/']);
      return;
    }

    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.restaurantService.getAll().subscribe({
      next: (restaurants) => {
        this.restaurants = restaurants;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load restaurants';
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