import axios from 'axios';
import SessionService from './session-service';

// Singleton pattern - only one object of a class
const ApiService = new (class ApiService {
  constructor() {
    const { token } = SessionService.get('auth') ?? {};
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (token) {
      this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }

  setAuth(token) {
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async login({ email, password }) {
    try {
      const { data: { user, token } } = await this.requester.post('/auth/login', { email, password });
      SessionService.set('auth', {
        loggedIn: true,
        user,
        token,
      });
      this.setAuth(token);
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async register() {
    console.log(this);
  }

  async checkEmail(email) {
    try {
      const { data } = await this.requester.get(`/auth/check-email?email=${email}`);
      return data.available;
    } catch (error) {
      return error.message;
    }
  }
})();

export default ApiService;
