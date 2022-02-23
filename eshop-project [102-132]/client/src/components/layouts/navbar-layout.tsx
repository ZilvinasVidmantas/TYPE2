import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

const NavbarLayout = () => (
  <Box>
    <Navbar />
    <Outlet />
  </Box>
);

export default NavbarLayout;
