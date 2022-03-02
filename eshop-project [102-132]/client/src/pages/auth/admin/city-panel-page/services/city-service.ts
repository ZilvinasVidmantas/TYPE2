import axios, { AxiosError, AxiosInstance } from 'axios';
import AuthService from 'services/auth-service';
import { City, CityData, ErrorResponse } from 'types';

const CityService = new (class CityService {
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
      baseURL: 'http://localhost:5000/api/cities',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public createCity = async (formData: CityData): Promise<City | string> => {
    const token = CityService.validateToken();
    if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.post<City>('/', formData, {
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

  public updateCity = async (id: string, formData: CityData): Promise<City | string> => {
    const token = CityService.validateToken();
    if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.patch<City>(`/${id}`, formData, {
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

  public getCities = async (): Promise<City[] | string> => {
    const token = CityService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.get<City[]>('/', {
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

  public deleteCity = async (id: string): Promise<City | string> => {
    const token = CityService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.delete<City>(`/${id}`, {
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
})();

export default CityService;
