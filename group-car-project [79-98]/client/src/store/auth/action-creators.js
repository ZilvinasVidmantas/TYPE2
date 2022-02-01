import { LOGIN_SUCCESS } from './action-types';

export const createLoginSuccessAction = ({ user, token }) => ({
  type: LOGIN_SUCCESS,
  payload: { // payload prie state rodytų tik sėmės atveju;
    token,
    user,
  },
});

export default {
  createLoginSuccessAction,
};
