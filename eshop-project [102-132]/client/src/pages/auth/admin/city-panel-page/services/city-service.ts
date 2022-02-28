import axios, { AxiosInstance } from 'axios';
import AuthService from 'services/auth-service';
import { City, CityData } from 'types';

const CityService = new (class CityService {
  private requester: AxiosInstance;

  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Can not get user images without authentication');
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
    if (!token) return 'You ar not authorized';

    try {
      const { data } = await this.requester.post<City>('/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return error as any as string;
    }
  };

  public getCities = async (): Promise<City[] | string> => {
    const token = CityService.validateToken();
    if (!token) return 'You ar not authorized';
    try {
      const { data } = await this.requester.get<City[]>('/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return error as any as string;
    }
  }
})();

export default CityService;
