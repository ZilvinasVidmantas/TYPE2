/* eslint-disable no-param-reassign */
import produce from 'immer';
import { LOGIN_SUCCESS } from './action-types';
import SessionService from '../../services/session-service';

const initState = SessionService.get('auth') ?? {
  loggedIn: false,
  token: null,
  user: null,
};

// eslint-disable-next-line default-param-last
const reducer = (oldState = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const newState = produce(oldState, (state) => {
        state.loggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      });
      SessionService.set('auth', newState);
      return newState;
    }
    default:
      return oldState;
  }
};

export default reducer;
