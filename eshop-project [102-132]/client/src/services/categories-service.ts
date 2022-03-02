import axios, { AxiosError, AxiosInstance } from 'axios';
import { Category, ErrorResponse } from 'types';
import AuthService from './auth-service';

const CategoryService = new (class CategoryService {
  private requester: AxiosInstance;

  static validateToken() {

    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Authorization token not found');
    }

    return token;
  }

  public constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/categories',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public async getCategories(): Promise<Category[]> {
    const token = CategoryService.validateToken();
    const { data } = await this.requester.get<Category[]>('/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
})();

export default CategoryService;
