import { OrderType } from '@/types/order';
import axios from 'axios';

export class OrderService {
  static client = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}/order`,
  });

  static async getOrder(): Promise<OrderType> {
    const response = await OrderService.client.get('');

    return response.data;
  }
}
