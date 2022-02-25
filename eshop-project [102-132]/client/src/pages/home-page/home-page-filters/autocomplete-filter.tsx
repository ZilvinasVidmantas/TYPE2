import React from 'react';
import {
  Autocomplete,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import FilterWrapper from './filter-wrapper';

const options = [
  { id: '1', title: 'Vilnius' },
  { id: '2', title: 'Kaunas' },
  { id: '3', title: 'Klaipėda' },
  { id: '4', title: 'Šiauliai' },
];

const AutocompleteFilter: React.FC = () => {
  return (
    <FilterWrapper>
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Miestas" />}
        size="small"
        sx={{ mt: 1 }}
        getOptionLabel={(options) => options.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, px: 1, pt: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>Vilnius</Typography>
          <Button variant="contained" size="small" sx={{ p: 0 }} color="secondary">⨉</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Kaunas</Typography>
          <Button variant="contained" size="small" color="secondary" sx={{ p: 0 }}>⨉</Button>
        </Box>
      </Box>
    </FilterWrapper>
  );
};

export default AutocompleteFilter;
