import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import DashboardLayoutAppBar from './dashboard-layout-app-bar';
import DashboardLayoutMain from './dashboard-layout-main';
import DashboardLayoutDrawerHeader from './dashboard-layout-drawer-header';
import DashboardLayoutDrawer from './dashboard-layout-drawer';

const drawerWidth = 240;

const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <DashboardLayoutAppBar
        position="fixed"
        drawerIcon={(
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        )}
        open={open}
        drawerWidth={drawerWidth}
      />
      <DashboardLayoutDrawer
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
      />
      <DashboardLayoutMain open={open} drawerWidth={drawerWidth}>
        <DashboardLayoutDrawerHeader />
        <Outlet />
      </DashboardLayoutMain>
    </Box>
  );
};

export default DashboardLayout;
