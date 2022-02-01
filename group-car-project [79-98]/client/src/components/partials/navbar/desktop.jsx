import React from 'react';
import { Box } from '@mui/material';
import StyledNavLink from './styled-nav-link';
import Logo from './logo';

const Desktop = ({ handleCloseNavMenu, breakPoint }) => {
  const desktopStyles = {
    display: { xs: 'none', [breakPoint]: 'flex' },
  };

  return (
    <>
      <Logo sx={{ mr: 2, ...desktopStyles }} />
      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
          alignItems: 'stretch',
          ...desktopStyles,
        }}
      >
        <StyledNavLink
          to="/"
          onClick={handleCloseNavMenu}
          breakPoint={breakPoint}
        >
          Pagrindinis
        </StyledNavLink>
        <StyledNavLink
          to="/search"
          onClick={handleCloseNavMenu}
          breakPoint={breakPoint}
        >
          Automobilių paieška
        </StyledNavLink>
      </Box>
      <Box
        sx={{
          height: '100%',
          alignItems: 'stretch',
          mr: 2,
          ...desktopStyles,
        }}
      >
        <StyledNavLink
          to="/sign-in"
          onClick={handleCloseNavMenu}
          breakPoint={breakPoint}
        >
          Prisijungti
        </StyledNavLink>
        <StyledNavLink
          to="/sign-up"
          onClick={handleCloseNavMenu}
          breakPoint={breakPoint}
        >
          Registruotis
        </StyledNavLink>
      </Box>
    </>
  );
};

export default Desktop;
