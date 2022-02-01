import React, { useState, useRef } from 'react';
import {
  Divider,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Box,
  Typography,
} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';
import AuthService from '../../../services/auth-service';
import AuthMenuLink from './navbar-auth-menu-link';
import routes from '../../../routing/routes';

const NavbarAuthMenu = () => {
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    handleCloseMenu();
    AuthService.logout();
  };

  return (
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
          <AuthMenuLink to={routes.ProfilePage}>
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
  );
};

export default NavbarAuthMenu;
