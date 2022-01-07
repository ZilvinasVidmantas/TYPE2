import {
  PUBLIC,
  VISITOR,
  AUTHENTICATED,
} from './routing-types';

export const HomeRoute = { title: 'Home', link: '/', auth: PUBLIC };
export const TodoAppRoute = { title: 'Todo App', link: '/todo-app', auth: PUBLIC };
export const LoginRoute = { title: 'Login', link: '/login', auth: VISITOR };
export const RegisterRoute = { title: 'Register', link: '/register', auth: VISITOR };
export const LogoutRoute = { title: 'Logout', link: '/logout', auth: AUTHENTICATED };

export const publicRoutes = {
  Home: HomeRoute,
  TodoApp: TodoAppRoute,
};

export const visitorRoutes = {
  Login: LoginRoute,
  Register: RegisterRoute,
};

export const authenticatedRoutes = {
  Logout: LogoutRoute,
};

export default {
  ...publicRoutes,
  ...visitorRoutes,
  ...authenticatedRoutes,
};
