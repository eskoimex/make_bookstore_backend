import { Order } from '../entity/order.entity';
import { OrderRepository } from '../repository/order.repository';

const orderRepository = new OrderRepository();

export class OrderService {
  async createOrder(userId: number, bookId: number): Promise<Order|String> {
    return orderRepository.createOrder(userId, bookId);
  }

  async cancelOrder(orderId: number): Promise<Order> {
    return orderRepository.cancelOrder(orderId);
  }
  async getAllOrders(): Promise<Order[]> {
    return orderRepository.getAllOrders();
  }

  async getOrderById(id: number, skip: number, take: number): Promise<Order[]> {
    return orderRepository.getOrderById(id, skip, take);
  }
}
