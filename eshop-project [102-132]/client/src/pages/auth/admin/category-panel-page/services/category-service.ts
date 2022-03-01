import axios, { AxiosError, AxiosInstance } from 'axios';
import AuthService from 'services/auth-service';
import { Category, CategoryData, ErrorResponse } from 'types';

const CategoryService = new (class CategoryService {
  private requester: AxiosInstance;

  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('No auth token found');
    }

    return token;
  }

  public constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/categories',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public createCategory = async (formData: CategoryData): Promise<Category | string> => {
    const token = CategoryService.validateToken();
    if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.post<Category>('/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;
      return error as any as string;
    }
  };

  public updateCategory = async (id: string, formData: CategoryData): Promise<Category | string> => {
    const token = CategoryService.validateToken();
    if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.patch<Category>(`/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;
      return error as any as string;
    }
  };

  public getCategories = async (): Promise<Category[] | string> => {
    const token = CategoryService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.get<Category[]>('/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;
      return error as any as string;
    }
  }

  public deleteCategory = async (id: string): Promise<Category | string> => {
    const token = CategoryService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.delete<Category>(`/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;
      return error as any as string;
    }
  }
})();

export default CategoryService;
