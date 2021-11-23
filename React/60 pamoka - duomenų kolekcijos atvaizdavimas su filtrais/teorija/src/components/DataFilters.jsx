import FilterGroup from './FilterGroup';
import {
  Typography,
  Paper,
  Divider,
} from '@mui/material';

const DataFilters = ({options}) => {

  const filterGroups = options.map((filterGroupProps, i) => 
    <>
      <Divider sx={{ my: 1 }} />
      <FilterGroup {...filterGroupProps} />
    </>
  )

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Typography component="h2" variant="h4">Filtrai</Typography>
      {filterGroups}
    </Paper>
  );
}

export default DataFilters;