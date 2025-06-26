import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User, UserRole } from '../../../core/models/user.model';
import { AdminService } from '../../../core/services/admin.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  UserRole = UserRole; // Make enum available in template

  constructor(
    private adminService: AdminService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Only allow access to admin users
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(['/']);
      return;
    }

    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load users';
      }
    });
  }

  updateUserRole(user: User, newRole: UserRole): void {
    // Don't update if it's the same role
    if (user.role === newRole) return;
    
    // Don't allow promoting to Admin through the API
    if (newRole === UserRole.Admin) {
      this.errorMessage = 'Cannot promote users to Admin through the API';
      return;
    }
    
    // Don't allow changing your own role
    if (user.id === this.authService.currentUser?.id) {
      this.errorMessage = 'Cannot change your own role';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';
    
    this.adminService.updateUserRole(user.id!, newRole).subscribe({
      next: () => {
        this.isLoading = false;
        user.role = newRole;
        this.successMessage = `Updated ${user.name}'s role successfully`;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to update user role';
      }
    });
  }
  
  getRoleName(role: UserRole): string {
    switch(role) {
      case UserRole.Admin: return 'Admin';
      case UserRole.Manager: return 'Manager';
      case UserRole.EndUser: return 'User';
      default: return 'Unknown';
    }
  }
} 