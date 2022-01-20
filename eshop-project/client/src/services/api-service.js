import axios from 'axios';
import SessionService from './session-service';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuth = (token) => {
  requester.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const login = async ({ email, password }) => {
  try {
    const { data: { user, token } } = await requester.post('/auth/login', { email, password });
    SessionService.set('auth', {
      loggedIn: true,
      user,
      token,
    });
    setAuth(token);
    return user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const register = async () => {

};

const checkEmail = async (email) => {
  try {
    const { data } = await requester.get(`/auth/check-email?email=${email}`);
    return data.available;
  } catch (error) {
    return error.message;
  }
};

export default {
  login,
  register,
  checkEmail,
};
