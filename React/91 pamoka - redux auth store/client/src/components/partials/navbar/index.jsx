import React from 'react';
import {
  AppBar, Container, Box, styled,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth/selectors';
import ButtonLink from './navbar-link-button';

const leftRoutes = [
  { title: 'Home', link: '/', auth: 'public' },
  { title: 'Todo App', link: '/todo-app', auth: 'public' },
];

const rightRoutes = [
  { title: 'Login', link: '/login', auth: 'visitor' },
  { title: 'Register', link: '/register', auth: 'visitor' },
  { title: 'Logout', link: '/logout', auth: 'authenticated' },
];

const handleRouteAuth = (route, authState) => {
  switch (route.auth) {
    case 'none': return true;
    case 'visitor': return !authState.loggedIn;
    case 'authenticated': return authState.loggedIn;
    case 'user': return authState.loggedIn && authState.role === 'user';
    case 'admin': return authState.loggedIn && authState.role === 'admin';
    default: return false;
  }
};

const StyledContainer = styled(Container)(({ theme }) => ({
  height: theme.mixins.navbar.height,
}));

const Navbar = () => {
  const auth = useSelector(authSelector);

  const authLeftRoutes = leftRoutes.filter((route) => handleRouteAuth(route, auth));
  const authRightRoutes = rightRoutes.filter((route) => handleRouteAuth(route, auth));

  return (
    <AppBar position="static">
      <StyledContainer maxWidth="xl">
        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%',
        }}
        >
          <Box sx={{ display: 'flex' }}>
            {authLeftRoutes.map((props) => <ButtonLink key={props.link} {...props} />)}
          </Box>
          <Box sx={{ display: 'flex' }}>
            {authRightRoutes.map((props) => <ButtonLink key={props.link} {...props} />)}
          </Box>
        </Box>
      </StyledContainer>
    </AppBar>
  );
};

export default Navbar;
