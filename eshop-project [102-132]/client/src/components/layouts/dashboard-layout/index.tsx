import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import DashboardLayoutAppBar from './dashboard-layout-app-bar';
import DashboardLayoutMain from './dashboard-layout-main';
import DashboardLayoutDrawerHeader from './dashboard-layout-drawer-header';
import DashboardLayoutDrawer from './dashboard-layout-drawer';

const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery(({ breakpoints }: Theme) => breakpoints.down('md'));

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <DashboardLayoutAppBar
        position="fixed"
        open={open}
      />
      <DashboardLayoutDrawer
        open={open}
        handleDrawerClose={handleDrawerToggle}
        isSmallScreen={isSmallScreen}
      />
      <DashboardLayoutMain open={open}>
        <DashboardLayoutDrawerHeader />
        <Outlet />
      </DashboardLayoutMain>

      {isSmallScreen && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          size="large"
          sx={(theme) => ({
            position: 'fixed',
            bottom: 30,
            right: 30,
            mr: 2,
            bgcolor: 'primary.light',
            borderRadius: theme.shape.borderRadius,
            ':hover': {
              bgcolor: 'primary.dark',
            }
          })}
        >
          <MenuIcon sx={{ color: 'common.white' }} />
        </IconButton>
      )}
    </Box>
  );
};

export default DashboardLayout;
