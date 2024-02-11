import { MenuType } from '@/types/menu';
import axios from 'axios';

export class MenuService {
  static client = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}/menu`,
  });

  static async getMenu(): Promise<MenuType[]> {
    const response = await MenuService.client.get('');

    return response.data;
  }
}
