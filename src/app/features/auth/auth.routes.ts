import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login - Food Ordering System'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register - Food Ordering System'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]; 