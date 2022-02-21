import React from 'react';
import { Box, Avatar } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../app/features/auth-slice';
import NavbarLink from './base-layout-navbar-link';

const BaseLayoutNavbarAuthMenu = () => {
  const user = useAppSelector(selectUser);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {
        user
          ? (
            <>
              {user.email}
              <Avatar sx={{ height: 35, width: 35, fontSize: 15 }}>{user.name[0]}{user.surname[0]}</Avatar>
            </>
          )
          : (
            <>
              <NavbarLink to="/login">Login</NavbarLink>
              <NavbarLink to="/register">Register</NavbarLink>
            </>
          )
      }
    </Box>
  );
};

export default BaseLayoutNavbarAuthMenu;
