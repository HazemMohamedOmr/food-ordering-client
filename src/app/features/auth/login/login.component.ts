import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserLogin } from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
    // Debug: Check if user is already logged in
    console.log('Current user:', this.authService.currentUser);
    console.log('Is logged in:', this.authService.isLoggedIn);
    console.log('Token:', this.authService.token);
  }
  
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    this.errorMessage = '';
    
    const credentials: UserLogin = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        console.log('Token stored:', this.authService.token);
        console.log('Current user after login:', this.authService.currentUser);
        
        this.isSubmitting = false;
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login error:', error);
        this.isSubmitting = false;
        this.errorMessage = error.message || 'Failed to login. Please check your credentials.';
      }
    });
  }
} 