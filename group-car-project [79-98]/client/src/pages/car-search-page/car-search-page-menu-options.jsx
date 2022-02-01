import React from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

const CarOptions = ({ view, changeView }) => (
  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
    <ToggleButtonGroup
      value={view}
      exclusive
      onChange={changeView}
      size="small"
      sx={{ my: 1 }}
    >
      <ToggleButton value="table" aria-label="table">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="grid">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  </Box>
);

export default CarOptions;
