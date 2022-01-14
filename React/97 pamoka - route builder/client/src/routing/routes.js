import {
  PUBLIC_ONLY,
  AUTH,
} from './types';

export const HomeRoute = { title: 'Home', link: '/' };
export const LoginRoute = { title: 'Login', link: '/login', auth: PUBLIC_ONLY };
export const RegisterRoute = { title: 'Register', link: '/register', auth: PUBLIC_ONLY };
export const ProfileRoute = { title: 'Profile', link: '/profile', auth: AUTH };
