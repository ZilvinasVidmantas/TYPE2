import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import BaseLayoutNavbar from './base-layout-navbar';

const BaseLayout = () => {
  return (
    <Box component="main">
      <BaseLayoutNavbar />
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default BaseLayout;
