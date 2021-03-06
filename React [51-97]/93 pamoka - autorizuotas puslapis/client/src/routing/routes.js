import {
  PUBLIC,
  VISITOR,
  AUTH,
} from './types';

export const HomeRoute = { title: 'Home', link: '/', auth: PUBLIC };
export const TodoAppRoute = { title: 'Todo App', link: '/todo-app', auth: PUBLIC };
export const LoginRoute = { title: 'Login', link: '/login', auth: VISITOR };
export const RegisterRoute = { title: 'Register', link: '/register', auth: VISITOR };
export const ProfileRoute = { title: 'Profile', link: '/profile', auth: AUTH };

export const publicRoutes = {
  Home: HomeRoute,
  TodoApp: TodoAppRoute,
};

export const visitorRoutes = {
  Login: LoginRoute,
  Register: RegisterRoute,
};

export const authRoutes = {
  Profile: ProfileRoute,
};

export default {
  ...publicRoutes,
  ...visitorRoutes,
  ...authRoutes,
};
