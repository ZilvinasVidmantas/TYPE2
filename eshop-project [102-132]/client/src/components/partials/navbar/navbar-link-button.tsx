import React from 'react';
import { Button, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&.active': {
    boxShadow: `inset 0 -2px 0 0 ${theme.palette.common.white}`,
  },
}));

const NavbarLinkButton = ({ title, link, onClick }) => {
  if (link) {
    return (
      <StyledNavLink to={link}>
        <Button
          key={title}
          sx={{ color: 'white', display: 'block', height: '100%' }}
        >
          {title}
        </Button>
      </StyledNavLink>
    );
  }

  return (
    <Button
      key={title}
      sx={{ color: 'white', display: 'block', height: '100%' }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default NavbarLinkButton;
