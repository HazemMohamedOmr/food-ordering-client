import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse, User, UserLogin, UserRegister } from '../models/user.model';
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
      const userData = this.jwtHelper.decodeToken(token);
      if (userData) {
        this.currentUserSubject.next({
          id: userData.nameid,
          name: userData.name,
          email: userData.email,
          phoneNumber: userData.phoneNumber,
          role: userData.role
        });
      }
    }
  }

  login(credentials: UserLogin): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, credentials)
      .pipe(
        tap(response => this.handleAuthResponse(response))
      );
  }

  register(user: UserRegister): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/register`, user)
      .pipe(
        tap(response => this.handleAuthResponse(response))
      );
  }

  private handleAuthResponse(response: AuthResponse): void {
    if (response && response.token) {
      localStorage.setItem('token', response.token);
      this.currentUserSubject.next(response.user);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  get isAdmin(): boolean {
    const user = this.currentUser;
    return user?.role === 1; // Admin role
  }

  get isManager(): boolean {
    const user = this.currentUser;
    return user?.role === 2; // Manager role
  }

  get isEndUser(): boolean {
    const user = this.currentUser;
    return user?.role === 3; // EndUser role
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
      return this.jwtHelper.decodeToken(token);
    }
    return null;
  }
} 