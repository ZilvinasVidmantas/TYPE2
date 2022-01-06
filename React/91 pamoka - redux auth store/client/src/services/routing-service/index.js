import {
  PUBLIC,
  VISITOR,
  AUTHENTICATED,
  USER,
  ADMIN,
} from './routing-service-types';

const authenticateRoute = (route, authState) => {
  switch (route.auth) {
    case PUBLIC: return true;
    case VISITOR: return !authState.loggedIn;
    case AUTHENTICATED: return authState.loggedIn;
    case USER: return authState.loggedIn && authState.role === USER;
    case ADMIN: return authState.loggedIn && authState.role === ADMIN;
    default: return false;
  }
};

export default {
  authenticateRoute,
};
