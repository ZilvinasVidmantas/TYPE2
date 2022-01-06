/* eslint-disable no-param-reassign */
import produce from 'immer';
import { LOGIN_SUCCESS } from './action-types';

const initState = {
  loggedIn: false,
  token: null,
  user: null,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return produce(state, (newState) => {
        newState.loggedIn = true;
        newState.user = action.payload.user;
        newState.token = action.payload.token;
      });

    default:
      return state;
  }
};

export default reducer;
