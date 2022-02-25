import React from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Divider,
  Pagination,
} from '@mui/material';

const options = [
  { title: 'A - Z', value: 'a-z' },
  { title: 'Z - A', value: 'z-a' },
  { title: 'Price ASC', value: 'price-asc' },
  { title: 'Price DESC', value: 'price-desc' },
];

const HomePageHeader: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h5">Surastas daiktas(125)</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Pagination count={5} variant="outlined" shape="rounded" />
        <Divider flexItem orientation="vertical" sx={{ my: 0.75 }} />
        <Typography variant="h6">Sort: </Typography>
        <TextField
          select
          value={options[0].value}
          size="small"
        >
          {options.map((option) => (
            <MenuItem key={option.title} value={option.value}>{option.title}</MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default HomePageHeader;
