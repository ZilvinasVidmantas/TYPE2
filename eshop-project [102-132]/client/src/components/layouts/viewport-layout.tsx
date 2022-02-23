import React from 'react';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const ViewportContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.mixins.navbar.height}px)`,
  overflow: 'hidden',
  display: 'grid',
}));

const VieportLayout = () => (
  <ViewportContainer>
    <Outlet />
  </ViewportContainer>
);

export default VieportLayout;
