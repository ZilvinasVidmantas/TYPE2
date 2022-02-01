import React from 'react';
import { Button, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&.active': {
    borderBottom: `1px solid ${theme.palette.common.white}`,
  },
}));

const NavbarLinkButton = ({ title, link }) => (
  <Button
    key={title}
    sx={{ color: 'white', display: 'block' }}
  >
    <StyledNavLink to={link}>{title}</StyledNavLink>
  </Button>
);

export default NavbarLinkButton;
