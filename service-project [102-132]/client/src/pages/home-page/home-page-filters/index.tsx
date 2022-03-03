import React from 'react';
import {
  Typography,
  Divider,
  Box,
} from '@mui/material';
import RangeFilter from './range-filter';
import AutocompleteFilter from './autocomplete-filter';

const HomePageFilters: React.FC = () => (
  <Box>
    <Typography variant="h4">Filtrai</Typography>
    <Divider sx={{ my: 1 }} />
    <RangeFilter />
    <Divider sx={{ my: 1 }} />
    <AutocompleteFilter />
    <Divider sx={{ my: 1 }} />
    <AutocompleteFilter />

  </Box>
);

export default HomePageFilters;
