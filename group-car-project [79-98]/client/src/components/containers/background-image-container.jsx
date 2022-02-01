import React from 'react';
import { Box } from '@mui/material';

const BackgroundImageContainer = ({ children, sx }) => (
  <Box
    sx={{
      backgroundSize: 'cover',
      height: '100%',
      backgroundPosition: 'center',
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default BackgroundImageContainer;
