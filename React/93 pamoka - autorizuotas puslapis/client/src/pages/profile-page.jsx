import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { userSelector } from '../store/auth/selectors';

const ProfilePage = () => {
  const user = useSelector(userSelector);
  const greeting = `Hello, ${user.name} ${user.surname}`;

  return (
    <Typography>{greeting}</Typography>
  );
};

export default ProfilePage;
