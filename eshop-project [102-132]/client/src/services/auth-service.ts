import axios, { AxiosError, AxiosInstance } from 'axios';
import reduxStore from 'store/index';
import { login, logout, authFailed } from 'store/auth';
import { Crudentials, ErrorResponse, User, UserRegistration } from 'types';
import SessionService from './session-service';


type AuthResponse = {
  user: User,
  token: string
};

type CheckEmailResponse = {
  available: boolean,
};

type PasswordResetData = {
  password: string,
  passwordConfirmation: string,
  resetToken: string,
}

const AuthService = new (class AuthService {
  private requester: AxiosInstance;

  private token?: string;

  public constructor() {
    const token = SessionService.get('auth_token');

    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      headers: { 'Content-Type': 'application/json' },
    });

    if (token) {
      this.authenticate(token);
    } else {
      reduxStore.dispatch(authFailed());
    }
  }

  public setAuth(token: string): void {
    this.token = token;
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  public getToken(): typeof this.token {
    return this.token;
  }

  public logout(): void {
    SessionService.clear('auth_token');
    delete this.requester.defaults.headers.common.Authorization;
    reduxStore.dispatch(logout());
  }

  public async login({ email, password }: Crudentials): Promise<User | string> {
    try {
      const response = await this.requester.post<AuthResponse>('/login', { email, password });
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);

      return user;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }

  public async register(formData: UserRegistration): Promise<User | string> {
    try {
      const response = await this.requester.post<AuthResponse>('/register', formData);
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);

      return user;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }

  public async authenticate(token: string): Promise<string | true> {
    try {
      const { data } = await this.requester.post<AuthResponse>('/', { token });
      reduxStore.dispatch(login({ user: data.user }));
      this.setAuth(token);

      return true;
    } catch (error) {
      reduxStore.dispatch(authFailed());
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }

  public async checkEmail(email: string): Promise<boolean | string> {
    try {
      const { data } = await this.requester.get<CheckEmailResponse>(`/checkEmail?email=${email}`);

      return data.available;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }

  public resetPassword = async (id: string): Promise<void | string> => {
    const token = this.getToken();
    if (!token) return 'You are not authorized';

    try {
      await this.requester.post(`/resetPassword/${id}`, {}, {
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

  public changePassword = async (formData: PasswordResetData): Promise<void> => {
    try {
      const { data } = await this.requester.post<AuthResponse>(`/changePassword`, formData);

      reduxStore.dispatch(login({ user: data.user }));
      SessionService.set('auth_token', data.token);
      this.setAuth(data.token);

    } catch (error) {
      console.error(error);
    }
  };
})();

export default AuthService;
