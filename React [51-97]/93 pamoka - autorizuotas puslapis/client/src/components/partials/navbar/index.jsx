import React from 'react';
import {
  AppBar,
  Container,
  Box,
  styled,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth/selectors';
import ButtonLink from './navbar-link-button';
import RoutingService from '../../../routing';
import {
  HomeRoute,
  TodoAppRoute,
  LoginRoute,
  RegisterRoute,
} from '../../../routing/routes';
import AuthMenu from './navbar-auth-menu';

const leftRoutes = [
  HomeRoute,
  TodoAppRoute,
];

const rightRoutes = [
  LoginRoute,
  RegisterRoute,
];

const StyledContainer = styled(Container)(({ theme }) => ({
  height: theme.mixins.navbar.height,
}));

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const auth = useSelector(authSelector);

  const authenticatedLeftRoutes = leftRoutes
    .filter((route) => RoutingService.authenticateRoute(route, auth));
  const authenticatedRightRoutes = rightRoutes
    .filter((route) => RoutingService.authenticateRoute(route, auth));

  return (
    <AppBar position="static">
      <StyledContainer maxWidth="xl">
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100%',
        }}
        >
          <Box sx={{ display: 'flex' }}>
            {authenticatedLeftRoutes.map((props) => <ButtonLink key={props.link} {...props} />)}
          </Box>
          <Box sx={{ display: 'flex' }}>
            {authenticatedRightRoutes.map((props) => <ButtonLink key={props.link} {...props} />)}
          </Box>
          {auth.loggedIn ? <AuthMenu /> : null}
        </Box>
      </StyledContainer>
    </AppBar>
  );
};

export default Navbar;
