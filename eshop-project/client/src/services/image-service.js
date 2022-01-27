import axios from 'axios';
import AuthService from './auth-service';

const ImageService = new (class ImageService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/images',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getUserImages() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Can not get user images without authentication');
    } else {
      const { data } = await this.requester.get('/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.images;
    }
  }
})();

export default ImageService;
