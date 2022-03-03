import React from 'react';
import { styled } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';

const StyledNavbarAuthMenuLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.black,
  textDecoration: 'none',
}));

export type NavbarAuthMenuLinkProps = LinkProps;

const NavbarAuthMenuLink: React.FC<NavbarAuthMenuLinkProps> = ({ children, ...props }) => (
  <StyledNavbarAuthMenuLink {...props}>
    {children}
  </StyledNavbarAuthMenuLink>
);

export default NavbarAuthMenuLink;
