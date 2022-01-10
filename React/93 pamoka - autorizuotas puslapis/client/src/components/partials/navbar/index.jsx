import React, { useState, useRef } from 'react';
import {
  AppBar,
  Divider,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Box,
  Typography,
  styled,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';
import { authSelector } from '../../../store/auth/selectors';
import { logoutAction } from '../../../store/auth/action-creators';
import ButtonLink from './navbar-link-button';
import RoutingService from '../../../routing';
import {
  HomeRoute,
  TodoAppRoute,
  LoginRoute,
  RegisterRoute,
  ProfileRoute,
} from '../../../routing/routes';
import AuthMenuLink from './navbar-auth-menu-link';

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
  const anchorRef = useRef();
  const auth = useSelector(authSelector);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    handleCloseMenu();
    dispatch(logoutAction);
  };

  const authLeftRoutes = leftRoutes
    .filter((route) => RoutingService.authenticateRoute(route, auth));
  const authRightRoutes = rightRoutes
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
            {authLeftRoutes.map((props) => <ButtonLink key={props.link} {...props} />)}
          </Box>
          <Box sx={{ display: 'flex' }}>
            {authRightRoutes.map((props) => <ButtonLink key={props.link} {...props} />)}
          </Box>
          {
            auth.loggedIn
              ? (
                <Box>
                  <IconButton onClick={handleOpenMenu} ref={anchorRef}>
                    <Avatar src="/static/images/lady-of-the-night.jpg" />
                  </IconButton>
                  <Menu
                    open={menuOpen}
                    onClose={handleCloseMenu}
                    anchorEl={anchorRef.current}
                    // anchorOrigin - Mygtuko(enchorEl) atspirties taškas
                    anchorOrigin={{
                      horizontal: 'right',
                      vertical: 'bottom',
                    }}
                    // transformOrigin - <Menu> komponento turinio atspirties taškas
                    transformOrigin={{
                      horizontal: 'right',
                      vertical: 'top',
                    }}
                  >
                    <MenuItem onClick={handleCloseMenu}>
                      <AuthMenuLink to={ProfileRoute.link}>
                        <PersonIcon sx={{ mr: 2 }} />
                        <Typography textAlign="center">Profile</Typography>
                      </AuthMenuLink>
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleLogout}>
                      <PowerSettingsNewIcon sx={{ mr: 2 }} />
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )
              : null
          }
        </Box>
      </StyledContainer>
    </AppBar>
  );
};

export default Navbar;
