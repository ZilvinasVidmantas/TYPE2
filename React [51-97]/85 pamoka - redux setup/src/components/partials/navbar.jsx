import React from 'react';
import {
  AppBar, Container, Box, Button, Toolbar, styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const pages = [
  { title: 'Home', link: '/' },
  { title: 'Todo App', link: '/todo-app' },
];

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&.active': {
    borderBottom: `1px solid ${theme.palette.common.white}`,
  },
}));

const Navbar = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ display: 'flex' }}>
          {pages.map(({ title, link }) => (
            <Button
              key={title}
              sx={{ my: 2, color: 'white', display: 'block' }}

            >
              <StyledNavLink to={link}>{title}</StyledNavLink>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
