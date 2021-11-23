import React from 'react';
import FilterGroup from './FilterGroup';
import {
  Typography,
  Paper,
  Divider,
} from '@mui/material';

const DataFilters = ({options}) => {

  const filterGroups = options.map((option) => 
    <React.Fragment key={option.name}>
      <Divider sx={{ my: 1 }} />
      <FilterGroup {...option} />
    </React.Fragment>
  )

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Typography component="h2" variant="h4">Filtrai</Typography>
      {filterGroups}
    </Paper>
  );
}

export default DataFilters;