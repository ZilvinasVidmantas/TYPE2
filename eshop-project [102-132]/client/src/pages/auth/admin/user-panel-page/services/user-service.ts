import axios, { AxiosError, AxiosInstance } from 'axios';
import AuthService from 'services/auth-service';
import { User, ErrorResponse } from 'types';

const UserService = new (class UserService {
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
      baseURL: 'http://localhost:5000/api/users',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public resetPassword = async (id: string, newPassword: string): Promise<void | string> => {
    const token = UserService.validateToken();
    if (!token) return 'You are not authorized';

    try {
      await this.requester.patch(`/resetPassword${id}`, { newPassword }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return;
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

  public getUsers = async (): Promise<User[] | string> => {
    const token = UserService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.get<User[]>('/', {
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

  public deleteUser = async (id: string): Promise<User | string> => {
    const token = UserService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.delete<User>(`/${id}`, {
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

export default UserService;
