import React from 'react';
import {
  Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../partials/footer';
import DasboardNavigation from '../partials/user-dashboard-navigation';

const DashboardLayout = () => (
  <Box>
    <Box
      component="main"
      sx={(theme) => ({
        display: 'flex',
        minHeight: `calc(100vh - ${theme.mixins.toolbar.height}px)`,
        overflowY: 'auto',
      })}
    >
      <DasboardNavigation />
      <Outlet />
    </Box>
    <Footer />
  </Box>
);

export default DashboardLayout;
