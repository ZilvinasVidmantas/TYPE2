import React from 'react';
import { AppBar, Toolbar, Container, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.grey[300],
  textDecoration: 'none',
  padding: theme.spacing(2),
  ':hover': {
    textDecoration: 'underline',
  },
  '&.active': {
    color: theme.palette.common.white,
  }
}));

const BaseLayoutNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/posts">Posts</StyledNavLink>
          <StyledNavLink to="/users">Users</StyledNavLink>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default BaseLayoutNavbar;
