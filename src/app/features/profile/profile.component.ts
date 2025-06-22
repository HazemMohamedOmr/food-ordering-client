import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User | null = null;
  isLoading = false;
  isSaving = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern(/^\+?[0-9]{10,15}$/)]
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: '/profile' } });
      return;
    }
    
    this.user = this.authService.currentUser;
    
    if (this.user) {
      this.profileForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phoneNumber: this.user.phoneNumber || ''
      });
    }
    
    this.isLoading = false;
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const updatedUser = {
      ...this.user,
      ...this.profileForm.value
    };

    this.authService.updateProfile(updatedUser).subscribe({
      next: (user) => {
        this.user = user;
        this.isSaving = false;
        this.successMessage = 'Profile updated successfully!';
        
        // Update the stored user data
        this.authService.storeUserData(user);
      },
      error: (error) => {
        this.isSaving = false;
        this.errorMessage = error.message || 'Failed to update profile. Please try again.';
      }
    });
  }

  changePassword(): void {
    this.router.navigate(['/profile/change-password']);
  }
} 