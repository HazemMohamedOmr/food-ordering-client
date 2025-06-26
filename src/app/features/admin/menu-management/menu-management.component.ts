import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuItem } from '../../../core/models/menu-item.model';
import { Restaurant } from '../../../core/models/restaurant.model';
import { MenuItemService } from '../../../core/services/menu-item.service';
import { RestaurantService } from '../../../core/services/restaurant.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-menu-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss']
})
export class MenuManagementComponent implements OnInit {
  restaurant: Restaurant | null = null;
  menuItems: MenuItem[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  
  // Menu item form fields
  menuItemToEdit: MenuItem | null = null;
  isEditMode = false;
  showForm = false;
  newMenuItem: MenuItem = {
    name: '',
    description: '',
    price: 0,
    restaurantId: ''
  };
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuItemService: MenuItemService,
    private restaurantService: RestaurantService,
    public authService: AuthService
  ) { }
  
  ngOnInit(): void {
    // Only allow access to admin users
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(['/']);
      return;
    }
    
    const restaurantId = this.route.snapshot.paramMap.get('id');
    if (!restaurantId) {
      this.errorMessage = 'No restaurant ID provided';
      return;
    }
    
    this.loadRestaurant(restaurantId);
    this.loadMenuItems(restaurantId);
  }
  
  loadRestaurant(id: string): void {
    this.isLoading = true;
    
    this.restaurantService.getById(id).subscribe({
      next: (restaurant) => {
        this.restaurant = restaurant;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.handleError(error);
      }
    });
  }
  
  loadMenuItems(restaurantId: string): void {
    this.isLoading = true;
    
    this.menuItemService.getByRestaurant(restaurantId).subscribe({
      next: (items: MenuItem[]) => {
        this.menuItems = items;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.handleError(error);
      }
    });
  }
  
  createMenuItem(): void {
    if (!this.restaurant?.id) return;
    
    this.isEditMode = false;
    this.menuItemToEdit = null;
    this.newMenuItem = {
      name: '',
      description: '',
      price: 0,
      restaurantId: this.restaurant.id
    };
    this.showForm = true;
  }
  
  editMenuItem(item: MenuItem): void {
    this.isEditMode = true;
    this.menuItemToEdit = item;
    this.newMenuItem = { ...item };
    this.showForm = true;
  }
  
  cancelForm(): void {
    this.showForm = false;
    this.menuItemToEdit = null;
    this.errorMessage = '';
    this.successMessage = '';
  }
  
  submitMenuItem(): void {
    if (this.validateForm()) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';
      
      if (this.isEditMode && this.menuItemToEdit?.id) {
        this.menuItemService.update(this.menuItemToEdit.id, this.newMenuItem).subscribe({
          next: () => {
            this.handleSuccess('Menu item updated successfully');
          },
          error: (error: any) => {
            this.handleError(error);
          }
        });
      } else {
        this.menuItemService.create(this.newMenuItem).subscribe({
          next: () => {
            this.handleSuccess('Menu item created successfully');
          },
          error: (error: any) => {
            this.handleError(error);
          }
        });
      }
    }
  }
  
  deleteMenuItem(id: string): void {
    if (confirm('Are you sure you want to delete this menu item? This cannot be undone.')) {
      this.isLoading = true;
      this.errorMessage = '';
      
      this.menuItemService.delete(id).subscribe({
        next: () => {
          this.handleSuccess('Menu item deleted successfully');
        },
        error: (error: any) => {
          this.handleError(error);
        }
      });
    }
  }
  
  private validateForm(): boolean {
    if (!this.newMenuItem.name || this.newMenuItem.name.trim() === '') {
      this.errorMessage = 'Menu item name is required.';
      return false;
    }
    
    if (!this.newMenuItem.description || this.newMenuItem.description.trim() === '') {
      this.errorMessage = 'Description is required.';
      return false;
    }
    
    if (this.newMenuItem.price <= 0) {
      this.errorMessage = 'Price must be greater than zero.';
      return false;
    }
    
    return true;
  }
  
  private handleSuccess(message: string): void {
    this.isLoading = false;
    this.successMessage = message;
    if (this.restaurant?.id) {
      this.loadMenuItems(this.restaurant.id);
    }
    this.showForm = false;
  }
  
  private handleError(error: any): void {
    this.isLoading = false;
    this.errorMessage = error.message || 'An error occurred while processing your request.';
  }
} 