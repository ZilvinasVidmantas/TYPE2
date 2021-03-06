import axios, { AxiosInstance } from 'axios';
import { ServiceData, Service } from 'types';
import AuthService from './auth-service';
import { fetchUserServices } from '../store/user-services';

const ServicesService = new (class ServicesService {
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
      baseURL: 'http://localhost:5000/api/services',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public async fetchUserServices(): Promise<Service[]> {
    const token = ServicesService.validateToken();

    const { data } = await this.requester.get<Service[]>('/userServices', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  public async createUserService(serviceData: ServiceData): Promise<Service> {
    const token = ServicesService.validateToken();

    const body = new FormData();

    Object.entries(serviceData).forEach(([name, data]) => {
      if (data instanceof Array) {
        data.forEach((x) => {
          body.append(name, x);
        });
      } else {
        body.append(name, String(data));
      }
    });

    const { data } = await this.requester.post<Service>('/userServices', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
})();

export default ServicesService;
