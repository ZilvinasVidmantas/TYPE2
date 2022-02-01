/* eslint-disable no-param-reassign */
import produce from 'immer';
import SessionService from '../../services/session-service';
import {
  LOGIN_SUCCESS,
  LOGOUT,
} from './action-types';

const initState = SessionService.get('auth') ?? {
  loggedIn: false,
  token: null,
  user: null,
  redirectTo: null,
};

// eslint-disable-next-line default-param-last
const reducer = (oldState = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const newState = produce(oldState, (state) => {
        state.loggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.redirectTo = action.payload.redirectTo;
      });
      SessionService.set('auth', newState);
      return newState;
    }
    case LOGOUT: {
      SessionService.clear('auth');
      return produce(oldState, (state) => {
        state.loggedIn = false;
        state.token = null;
        state.user = null;
      });
    }

    default:
      return oldState;
  }
};

export default reducer;
