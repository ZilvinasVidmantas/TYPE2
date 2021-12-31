import React from 'react';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const PageContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.mixins.navbar.height}px)`,
  overflow: 'hidden',
  display: 'grid',
}));

const SingleVieportLayout = () => (
  <PageContainer sx={{ bgcolor: 'red' }}>
    <Outlet />
  </PageContainer>
);

export default SingleVieportLayout;
