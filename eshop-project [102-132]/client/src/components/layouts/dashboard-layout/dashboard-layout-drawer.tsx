import React from 'react';
import { Drawer, IconButton, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardLayoutDrawerHeader from './dashboard-layout-drawer-header';

export type DashboardLayoutDrawerProps = {
  open: boolean,
  drawerWidth: number,
  handleDrawerClose: () => void,
};

const DashboardLayoutDrawer: React.FC<DashboardLayoutDrawerProps> = ({
  open,
  drawerWidth,
  handleDrawerClose,
}) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DashboardLayoutDrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DashboardLayoutDrawerHeader>
    </Drawer>
  );
};

export default DashboardLayoutDrawer;
