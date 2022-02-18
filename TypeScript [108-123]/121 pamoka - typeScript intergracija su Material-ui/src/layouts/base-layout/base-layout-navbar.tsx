import React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import BaseLayoutNavbarLink from './base-layout-navbar-link';

const BaseLayoutNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <BaseLayoutNavbarLink to="/">Home</BaseLayoutNavbarLink>
          <BaseLayoutNavbarLink to="/posts">Posts</BaseLayoutNavbarLink>
          <BaseLayoutNavbarLink to="/users">Users</BaseLayoutNavbarLink>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default BaseLayoutNavbar;
