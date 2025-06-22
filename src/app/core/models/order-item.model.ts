import { MenuItem } from './menu-item.model';
import { Order } from './order.model';
import { User } from './user.model';

export interface OrderItem {
  id?: string;
  orderId: string;
  order?: Order;
  userId: string;
  user?: User;
  menuItemId: string;
  menuItem?: MenuItem;
  quantity: number;
  note?: string;
} 