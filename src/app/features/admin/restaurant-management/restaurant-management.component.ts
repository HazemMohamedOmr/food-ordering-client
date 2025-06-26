import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Restaurant } from '../../../core/models/restaurant.model';
import { RestaurantService } from '../../../core/services/restaurant.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './restaurant-management.component.html',
  styleUrls: ['./restaurant-management.component.scss']
})
export class RestaurantManagementComponent implements OnInit {
  restaurants: Restaurant[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  
  // Restaurant form fields
  restaurantToEdit: Restaurant | null = null;
  isEditMode = false;
  showForm = false;
  newRestaurant: Restaurant = {
    name: '',
    description: '',
    address: '',
    phoneNumber: '',
    deliveryFee: 0
  };

  constructor(
    private restaurantService: RestaurantService,
    public authService: AuthService,
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
  
  createRestaurant(): void {
    this.isEditMode = false;
    this.restaurantToEdit = null;
    this.newRestaurant = {
      name: '',
      description: '',
      address: '',
      phoneNumber: '',
      deliveryFee: 0
    };
    this.showForm = true;
  }
  
  editRestaurant(restaurant: Restaurant): void {
    this.isEditMode = true;
    this.restaurantToEdit = restaurant;
    this.newRestaurant = { ...restaurant }; // create a copy to avoid modifying original
    this.showForm = true;
  }
  
  cancelForm(): void {
    this.showForm = false;
    this.restaurantToEdit = null;
    this.errorMessage = '';
    this.successMessage = '';
  }
  
  submitRestaurant(): void {
    if (this.validateForm()) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';
      
      if (this.isEditMode && this.restaurantToEdit?.id) {
        this.restaurantService.update(this.restaurantToEdit.id, this.newRestaurant).subscribe({
          next: () => {
            this.handleSuccess('Restaurant updated successfully');
          },
          error: (error) => {
            this.handleError(error);
          }
        });
      } else {
        this.restaurantService.create(this.newRestaurant).subscribe({
          next: () => {
            this.handleSuccess('Restaurant created successfully');
          },
          error: (error) => {
            this.handleError(error);
          }
        });
      }
    }
  }
  
  deleteRestaurant(id: string): void {
    if (confirm('Are you sure you want to delete this restaurant? This cannot be undone.')) {
      this.isLoading = true;
      this.errorMessage = '';
      
      this.restaurantService.delete(id).subscribe({
        next: () => {
          this.handleSuccess('Restaurant deleted successfully');
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    }
  }
  
  private validateForm(): boolean {
    if (!this.newRestaurant.name || this.newRestaurant.name.trim() === '') {
      this.errorMessage = 'Restaurant name is required.';
      return false;
    }
    
    if (!this.newRestaurant.description || this.newRestaurant.description.trim() === '') {
      this.errorMessage = 'Description is required.';
      return false;
    }
    
    if (!this.newRestaurant.address || this.newRestaurant.address.trim() === '') {
      this.errorMessage = 'Address is required.';
      return false;
    }
    
    if (!this.newRestaurant.phoneNumber || this.newRestaurant.phoneNumber.trim() === '') {
      this.errorMessage = 'Phone number is required.';
      return false;
    }
    
    if (this.newRestaurant.deliveryFee < 0) {
      this.errorMessage = 'Delivery fee cannot be negative.';
      return false;
    }
    
    return true;
  }
  
  private handleSuccess(message: string): void {
    this.isLoading = false;
    this.successMessage = message;
    this.loadRestaurants();
    this.showForm = false;
  }
  
  private handleError(error: any): void {
    this.isLoading = false;
    this.errorMessage = error.message || 'An error occurred while processing your request.';
  }
} 