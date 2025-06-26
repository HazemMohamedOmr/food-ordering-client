export enum UserRole {
  Admin = 1,
  Manager = 2,
  EndUser = 3
}

export interface User {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  role?: UserRole;
  roleName?: string;
  createdAt?: Date;
  token?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: UserRole;
}

export interface AuthResponse {
  token: string;
  expiration: string;
  user: User;
} 