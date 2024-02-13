import axios from 'axios';

export class CategoriesService {
  static client = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}/categories`,
  });

  static async getAllCategories(): Promise<string[]> {
    const response = await CategoriesService.client.get('');

    return response.data;
  }
}
