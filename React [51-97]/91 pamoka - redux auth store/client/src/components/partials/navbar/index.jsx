import React from 'react';
import {
  AppBar, Container, Box, styled,
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
  LogoutRoute,
} from '../../../routing/routing-routes';

const leftRoutes = [
  HomeRoute,
  TodoAppRoute,
];

const rightRoutes = [
  LoginRoute,
  RegisterRoute,
  LogoutRoute,
];

const StyledContainer = styled(Container)(({ theme }) => ({
  height: theme.mixins.navbar.height,
}));

const Navbar = () => {
  const auth = useSelector(authSelector);

  const authLeftRoutes = leftRoutes
    .filter((route) => RoutingService.authenticateRoute(route, auth));
  const authRightRoutes = rightRoutes
    .filter((route) => RoutingService.authenticateRoute(route, auth));

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
