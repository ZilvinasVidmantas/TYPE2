import React from 'react';
import {
  AppBar,
  Container,
  Box,
  styled,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import LinkButton from './navbar-link-button';
import AuthMenu from './navbar-auth-menu';
import routes from '../../../routing/routes';

const StyledContainer = styled(Container)(({ theme }) => ({
  height: theme.mixins.navbar.height,
}));

const Navbar = () => {
  const auth = useSelector(authSelector);

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
            <LinkButton link={routes.HomePage} title="Home" />
          </Box>
          {
            !auth.loggedIn ? (
              <Box sx={{ display: 'flex' }}>
                <LinkButton link={routes.LoginPage} title="Login" />
                <LinkButton link={routes.RegisterPage} title="Register" />
              </Box>
            ) : null
          }
          {auth.loggedIn ? <AuthMenu /> : null}
        </Box>
      </StyledContainer>
    </AppBar>
  );
};

export default Navbar;
