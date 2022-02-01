import { LOGIN } from './action-types';

const initState = {
  loggedIn: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:

      return state;

    default:
      return state;
  }
};

export default reducer;
