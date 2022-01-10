import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../store/auth/selectors';
import { HomeRoute } from './routes';

const RequirePublic = ({ children }) => {
  const auth = useSelector(authSelector);

  if (auth.loggedIn) {
    return <Navigate to={auth.redirectTo ?? HomeRoute.link} />;
  }

  return children;
};

export default RequirePublic;
