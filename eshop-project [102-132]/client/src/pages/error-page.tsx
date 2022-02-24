import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

const ErrorPage: React.FC = () => (
  <Box sx={{
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <Typography sx={{ fontSize: 60 }} color="error">404: page not found</Typography>
  </Box>
);

export default ErrorPage;
