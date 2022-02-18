import axios, { AxiosInstance } from 'axios';
import Post from '../types/post';
import User from '../types/user';

const ApiService = new (class ApiService {
  private requester: AxiosInstance;

  constructor() {
    this.requester = axios.create({
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  getPosts = async (): Promise<Post[]> => {
    try {
      const { data } = await this.requester.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

      return data;

    } catch (error) {
      throw new Error('Serverio klaida');
    }
  };

  getUsers = async (): Promise<User[]> => {
    try {
      const { data } = await this.requester.get<User[]>('https://jsonplaceholder.typicode.com/users');

      return data;

    } catch (error) {
      throw new Error('Serverio klaida');
    }
  };
})();

export default ApiService;
