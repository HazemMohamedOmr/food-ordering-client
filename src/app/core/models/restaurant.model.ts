import { MenuItem } from './menu-item.model';

export interface Restaurant {
  id?: string;
  name: string;
  description: string;
  address: string;
  phoneNumber: string;
  deliveryFee: number;
  menuItems?: MenuItem[];
} 