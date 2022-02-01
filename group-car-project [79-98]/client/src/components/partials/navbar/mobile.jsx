import React from 'react';
import {
  Box, IconButton, Menu, MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './logo';
import StyledNavLink from './styled-nav-link';

const Mobile = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
  breakPoint,
}) => {
  const mobileStyles = {
    flexGrow: 1,
    display: { xs: 'flex', [breakPoint]: 'none' },
  };

  return (
    <>
      <Box sx={mobileStyles}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <MenuItem>
            <StyledNavLink
              to="/"
              onClick={handleCloseNavMenu}
              breakPoint={breakPoint}
            >
              Pagrindinis
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink
              to="/search"
              onClick={handleCloseNavMenu}
              breakPoint={breakPoint}
            >
              Automobilių paieška
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink
              to="/sign-in"
              onClick={handleCloseNavMenu}
              breakPoint={breakPoint}
            >
              Prisijungti
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink
              to="/sign-up"
              onClick={handleCloseNavMenu}
              breakPoint={breakPoint}
            >
              Registruotis
            </StyledNavLink>
          </MenuItem>
        </Menu>
      </Box>
      <Logo sx={mobileStyles} />
    </>
  );
};

export default Mobile;
