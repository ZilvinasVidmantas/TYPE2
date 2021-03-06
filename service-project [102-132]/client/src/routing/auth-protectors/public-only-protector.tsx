/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'store/hooks';
import { authSelector } from 'store/auth';
import routes from '../routes';

const PublicOnlyProtector: React.FC = ({ children }) => {
  const auth = useSelector(authSelector);

  if (auth.loggedIn) {
    return <Navigate to={auth.redirectTo ?? routes.HomePage} />;
  }

  return <>{children}</>;
};

export default PublicOnlyProtector;
