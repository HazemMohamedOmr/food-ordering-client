import { Order } from './order.model';
import { User } from './user.model';
import { PaymentStatus } from './order.model';

export interface Payment {
  id?: string;
  orderId: string;
  order?: Order;
  userId: string;
  user?: User;
  status: PaymentStatus;
  amount: number;
  date: Date;
} 