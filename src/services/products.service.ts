import { ProductType } from '@/types/product';
import axios from 'axios';

export class ProductsService {
  static client = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}/products`,
  });

  static async getAllProducts(): Promise<ProductType[]> {
    const response = await ProductsService.client.get('');

    return response.data;
  }
}
