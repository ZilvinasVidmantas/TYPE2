import {
  LOGIN_SUCCESS,
  LOGOUT,
} from './action-types';

export const createLoginSuccessAction = ({ user, token, redirectTo }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
    user,
    redirectTo,
  },
});

export const logoutAction = {
  type: LOGOUT,
};

export default {
  createLoginSuccessAction,
  logoutAction,
};
