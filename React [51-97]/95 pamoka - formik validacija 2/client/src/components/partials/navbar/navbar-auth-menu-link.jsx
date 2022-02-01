import React from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledNavbarAuthMenuLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.black,
  textDecoration: 'none',
}));

const NavbarAuthMenuLink = ({ children, ...props }) => (
  <StyledNavbarAuthMenuLink {...props}>
    {children}
  </StyledNavbarAuthMenuLink>
);

export default NavbarAuthMenuLink;
