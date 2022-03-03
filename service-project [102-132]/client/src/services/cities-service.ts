import axios, { AxiosInstance } from 'axios';
import { City } from 'types';
import AuthService from './auth-service';

const CitiesService = new (class CitiesService {
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
      baseURL: 'http://localhost:5000/api/cities',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public async getCities(): Promise<City[]> {
    const token = CitiesService.validateToken();
    const { data } = await this.requester.get<City[]>('/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
})();

export default CitiesService;
