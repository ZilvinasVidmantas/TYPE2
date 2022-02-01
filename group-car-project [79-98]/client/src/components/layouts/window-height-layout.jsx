import React from 'react';
import {
  Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';

const WindowHeightLayout = () => (
  <Box sx={{ height: '100vh' }}>
    <Navbar />
    <Box
      component="main"
      sx={(theme) => ({
        height: `calc(100vh - ${theme.mixins.toolbar.height + theme.mixins.footer.height}px)`,
        overflowY: 'auto',
      })}
    >
      <Outlet />
    </Box>
    <Footer />
  </Box>
);

export default WindowHeightLayout;
