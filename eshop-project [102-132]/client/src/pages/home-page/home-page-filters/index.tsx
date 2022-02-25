import React from 'react';
import {
  Typography,
  Divider,
  Box
} from '@mui/material';
import RangeFilter from './range-filter';
import AutocompleteFilter from './autocomplete-filter';

const HomePageFilters: React.FC = () => {
  return (
    <Box>
      <Typography>Filtrai</Typography>
      <Divider sx={{ my: 1 }} />
      <RangeFilter />
      <Divider sx={{ my: 1 }} />
      <AutocompleteFilter />
      <Divider sx={{ my: 1 }} />
      <AutocompleteFilter />

    </Box>
  );
};

export default HomePageFilters;
