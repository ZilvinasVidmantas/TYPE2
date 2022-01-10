import {
  LOGIN_SUCCESS,
  LOGOUT,
} from './action-types';

export const createLoginSuccessAction = ({ user, token }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const logoutAction = {
  type: LOGOUT,
};

export default {
  createLoginSuccessAction,
  logoutAction,
};
