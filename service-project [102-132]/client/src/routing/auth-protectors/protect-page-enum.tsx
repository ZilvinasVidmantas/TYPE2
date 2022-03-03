import React from 'react';
import {
  AuthType,
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
} from './auth-types';

import PublicOnlyProtector from './public-only-protector';
import AuthProtector from './auth-protector';
import UserProtector from './user-protector';
import AdminProtector from './admin-protector';

type ProtectPageEnum = {
  [Key in AuthType]: (Page: React.FC) => React.ReactNode
};

const protectPageEnum: ProtectPageEnum = {
  [ADMIN]: (Page) => <AdminProtector><Page /></AdminProtector>,
  [PUBLIC_ONLY]: (Page) => <PublicOnlyProtector><Page /></PublicOnlyProtector>,
  [AUTH]: (Page) => <AuthProtector><Page /></AuthProtector>,
  [USER]: (Page) => <UserProtector><Page /></UserProtector>,
};

export default protectPageEnum;
