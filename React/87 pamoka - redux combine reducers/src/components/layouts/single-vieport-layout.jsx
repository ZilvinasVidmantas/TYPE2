import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const SingleVieportLayout = () => (
  <Box sx={{ bgcolor: 'red' }}>
    <Outlet />
  </Box>
);

export default SingleVieportLayout;
