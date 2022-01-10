import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../store/auth/selectors';
import { LoginRoute } from './routes';

const RequireAuth = ({ children }) => {
  const auth = useSelector(authSelector);

  if (!auth.loggedIn) {
    return <Navigate to={LoginRoute.link} />;
  }

  return children;
};

export default RequireAuth;
