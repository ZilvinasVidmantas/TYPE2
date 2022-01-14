import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
} from './types';

const authenticateRoute = (route, authState) => {
  switch (route.auth) {
    case PUBLIC_ONLY: return !authState.loggedIn;
    case AUTH: return authState.loggedIn;
    case USER: return authState.loggedIn && authState.role === USER;
    case ADMIN: return authState.loggedIn && authState.role === ADMIN;
    default: return true;
  }
};

export default {
  authenticateRoute,
};
