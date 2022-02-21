import React from 'react';
import { AppBar, Toolbar, Container, Box } from '@mui/material';
import NavbarLink from './base-layout-navbar-link';
import AuthMenu from './base-layout-navbar-auth-menu';

const BaseLayoutNavbar = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/posts">Posts</NavbarLink>
            <NavbarLink to="/users">Users</NavbarLink>
          </Box>
          <AuthMenu />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default BaseLayoutNavbar;
