import React from 'react';
import {
  AppBar, Container, Box, styled,
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

const StyledContainer = styled(Container)(({ theme }) => ({
  height: theme.mixins.navbar.height,
}));

const Navbar = () => (
  <AppBar position="static">
    <StyledContainer maxWidth="xl">
      <Box sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%',
      }}
      >
        <Box sx={{ display: 'flex' }}>
          {leftRoutes.map((props) => <ButtonLink key={props.link} {...props} />)}
        </Box>
        <Box sx={{ display: 'flex' }}>
          {rightRoutes.map((props) => <ButtonLink key={props.link} {...props} />)}
        </Box>
      </Box>
    </StyledContainer>
  </AppBar>
);

export default Navbar;
