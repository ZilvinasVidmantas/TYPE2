import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../store/hooks';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const AuthProtector: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.loggedIn) {
    return <Navigate to={`${routes.LoginPage}?redirectTo=${pathname}`} />;
  }

  return <>{children}</>;
};

export default AuthProtector;
