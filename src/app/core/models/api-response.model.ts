export interface ApiResponse<T> {
  succeeded: boolean;
  errors?: string[];
  data?: T;
} 