import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';

const FilterWrapper: React.FC = ({ children }) => (
  <Box sx={{ pt: 1, pb: 2 }}>
    <Typography variant="h6">Filtrio pavadinimas</Typography>
    {children}
  </Box>
);

export default FilterWrapper;
