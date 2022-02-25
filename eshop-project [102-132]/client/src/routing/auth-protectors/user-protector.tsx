import React from 'react';
import { useSelector } from '../../store/hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const UserProtector: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.loggedIn) {
    return <Navigate to={`${routes.LoginPage}?redirectTo=${pathname}`} />;
  }

  if (auth.user?.role !== 'user') {
    return <Navigate to={routes.ProfilePage} />;
  }

  return <>{children}</>;
};

export default UserProtector;