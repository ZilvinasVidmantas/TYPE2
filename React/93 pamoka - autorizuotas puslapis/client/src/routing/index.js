import {
  PUBLIC,
  VISITOR,
  AUTH,
  USER,
  ADMIN,
} from './types';

const authenticateRoute = (route, authState) => {
  switch (route.auth) {
    case PUBLIC: return true;
    case VISITOR: return !authState.loggedIn;
    case AUTH: return authState.loggedIn;
    case USER: return authState.loggedIn && authState.role === USER;
    case ADMIN: return authState.loggedIn && authState.role === ADMIN;
    default: return false;
  }
};

export default {
  authenticateRoute,
};
