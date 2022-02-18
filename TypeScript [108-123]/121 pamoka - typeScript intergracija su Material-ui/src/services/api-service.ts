import axios, { AxiosInstance } from 'axios';
import Post from '../types/post';

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
})();

export default ApiService;

/* 
  1. Sukurti navigacija (labai minimalią) naudojant react-router-dom biblioteką, kad galėtumėte nueiti į 2 puslapius:
    * /posts - šiuo metu matomas puslapis app.tsx
    * /users - puslapis kuriame reikės atvaizduoti visus user'ius
    
  2. Analogiškai pagal post'ų parsiuntimą, parsiųskite varototojus ir juos atvaizduokite lentele: https://jsonplaceholder.typicode.com/users
*/
