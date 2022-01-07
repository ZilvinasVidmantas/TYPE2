import { LOGIN_SUCCESS } from './action-types';

export const createLoginSuccessAction = ({ user, token }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
    user,
  },
});

export default {
  createLoginSuccessAction,
};
