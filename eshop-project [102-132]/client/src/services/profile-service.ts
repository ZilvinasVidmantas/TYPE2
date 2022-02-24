import axios, { AxiosInstance } from 'axios';
import AuthService from './auth-service';
import store from '../store';
import { updateUser } from '../store/auth';
import UserPatch from '../types/user-patch';
import User from '../types/user';
import Image from '../types/image';

const ProfileService = new (class ProfileService {
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
      baseURL: 'http://localhost:5000/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public async updateUserData(body: UserPatch): Promise<void> {
    const token = ProfileService.validateToken();
    const { data } = await this.requester.patch<User>('/users/', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    store.dispatch(updateUser({ user: data }));
  }

  public async getUserImages(): Promise<Image[]> {
    const token = ProfileService.validateToken();

    const { data } = await this.requester.get<Image[]>('/images/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  public async uploadImages(files: FileList): Promise<Image[]> {
    const token = ProfileService.validateToken();

    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('files', files[i]);
    }

    const { data } = await this.requester.post<Image[]>('/images/', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  }

  public async deleteImage(id: string): Promise<true> {
    const token = ProfileService.validateToken();

    await this.requester.delete(`images/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return true;
  }

  public async setMainImage(id: string): Promise<boolean> {
    const token = ProfileService.validateToken();

    const { data } = await this.requester.patch<User>(`users/mainImg/${id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    store.dispatch(updateUser({ user: data }));

    return true;
  }
})();

export default ProfileService;
