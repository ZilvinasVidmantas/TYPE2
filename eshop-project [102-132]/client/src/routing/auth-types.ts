export const PUBLIC_ONLY = 'public-only';
export const AUTH = 'auth';
export const USER = 'user';
export const ADMIN = 'admin';

export type AuthType = typeof PUBLIC_ONLY
  | typeof AUTH
  | typeof USER
  | typeof ADMIN;
