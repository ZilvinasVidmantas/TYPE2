import React from 'react';
import {
  AppBar, Container, Box,
} from '@mui/material';
import ButtonLink from './navbar-link-button';

const leftRoutes = [
  { title: 'Home', link: '/' },
  { title: 'Todo App', link: '/todo-app' },
];

const rightRoutes = [
  { title: 'Login', link: '/login' },
  { title: 'Register', link: '/register' },
];

const Navbar = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          {leftRoutes.map((props) => <ButtonLink {...props} />)}
        </Box>
        <Box sx={{ display: 'flex' }}>
          {rightRoutes.map((props) => <ButtonLink {...props} />)}
        </Box>
      </Box>
    </Container>
  </AppBar>
);

export default Navbar;
