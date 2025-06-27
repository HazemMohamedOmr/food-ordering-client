import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse, User, UserLogin, UserRegister, UserRole } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private jwtHelper = new JwtHelperService();
  
  constructor(private http: HttpClient, private router: Router) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      try {
        const userData = this.jwtHelper.decodeToken(token);
        console.log('Decoded token:', userData);
        
        if (userData) {
          // Extract role from token - be more flexible with how role is stored
          let userRole = UserRole.EndUser; // Default
          
          // First check session storage as a reliable source of role
          const sessionRole = sessionStorage.getItem('userRole');
          if (sessionRole) {
            userRole = parseInt(sessionRole, 10);
            console.log('Using role from session storage:', userRole);
          }
          // If not in session storage, try to extract from token
          else if (userData.role) {
            if (typeof userData.role === 'string') {
              // Handle string roles like "Admin", "1", etc.
              if (userData.role === "1" || userData.role.toLowerCase() === "admin") {
                userRole = UserRole.Admin;
              } else if (userData.role === "2" || userData.role.toLowerCase() === "manager") {
                userRole = UserRole.Manager;
              }
            } else if (typeof userData.role === 'number') {
              // Handle numeric roles
              userRole = userData.role;
            }
          } else if (userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']) {
            // Some JWT tokens store role in this format
            const roleValue = userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            if (roleValue === "1" || roleValue === "Admin") {
              userRole = UserRole.Admin;
            } else if (roleValue === "2" || roleValue === "Manager") {
              userRole = UserRole.Manager;
            }
          }
          
          const user: User = {
            id: userData.nameid || userData.sub || userData.id,
            name: userData.name || userData.unique_name || userData.username,
            email: userData.email,
            role: userRole
          };
          
          this.currentUserSubject.next(user);
          console.log('User loaded from storage:', user);
          console.log('Is admin?', user.role === UserRole.Admin);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        this.logout();
      }
    } else if (token && this.jwtHelper.isTokenExpired(token)) {
      console.warn('Token expired, logging out');
      this.logout();
    }
  }

  login(credentials: UserLogin): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, credentials)
      .pipe(
        tap(response => {
          console.log('Login response:', response);
          this.handleAuthResponse(response);
        })
      );
  }

  register(user: UserRegister): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/register`, user)
      .pipe(
        tap(response => {
          console.log('Register response:', response);
          this.handleAuthResponse(response);
        })
      );
  }

  private handleAuthResponse(response: AuthResponse): void {
    if (response && response.token) {
      console.log('Storing token:', response.token);
      localStorage.setItem('token', response.token);
      
      // Save user role in session storage
      if (response.user && response.user.role) {
        sessionStorage.setItem('userRole', response.user.role.toString());
        console.log('Stored user role in session storage:', response.user.role);
      }
      
      this.currentUserSubject.next(response.user);
    } else {
      console.error('No token in auth response');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('userRole');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    const token = this.token;
    if (!token) {
      return false;
    }
    try {
      return !this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return false;
    }
  }

  get isAdmin(): boolean {
    const user = this.currentUser;
    let isAdmin = user?.role === UserRole.Admin;
    
    // If user state doesn't show admin but session storage does, use that as fallback
    if (!isAdmin && sessionStorage.getItem('userRole') === UserRole.Admin.toString()) {
      console.log('Admin role detected from session storage');
      isAdmin = true;
    }
    return isAdmin;
  }

  get isManager(): boolean {
    const user = this.currentUser;
    return user?.role === UserRole.Manager;
  }

  get isEndUser(): boolean {
    const user = this.currentUser;
    return user?.role === UserRole.EndUser;
  }

  updateProfile(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/${user.id}`, user).pipe(
      tap((updatedUser) => {
        this.storeUserData(updatedUser);
      })
    );
  }

  storeUserData(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private getDecodedToken(): any {
    const token = this.token;
    if (token) {
      try {
        return this.jwtHelper.decodeToken(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
} 