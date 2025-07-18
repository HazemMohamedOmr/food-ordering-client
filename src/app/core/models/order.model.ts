import { Restaurant } from './restaurant.model';
import { User } from './user.model';
import { OrderItem } from './order-item.model';
import { Payment } from './payment.model';

export enum OrderStatus {
  Open = 1,
  Closed = 2
}

export enum PaymentStatus {
  Unpaid = 1,
  Paid = 2
}

export interface Order {
  id?: string;
  restaurantId: string;
  restaurant?: Restaurant;
  managerId: string;
  manager?: User;
  status: OrderStatus;
  closedAt?: Date;
  orderDate: Date;
  orderItems?: OrderItem[];
  payments?: Payment[];
}
