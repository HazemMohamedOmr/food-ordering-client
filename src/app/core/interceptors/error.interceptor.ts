import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  
  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        // Auto logout if 401 response returned from api
        authService.logout();
      }
      
      const errorMessage = error.error?.message || error.statusText || 'Unknown error';
      return throwError(() => new Error(errorMessage));
    })
  );
}; 