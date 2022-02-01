import FilterGroup from './FilterGroup';
import {
  Typography,
  Paper,
  Divider,
} from '@mui/material';

const DataFilters = () => {

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Typography component="h2" variant="h4">Filtrai</Typography>
      <Divider sx={{ my: 3 }} />
      <FilterGroup />
      <Divider sx={{ my: 3 }} />
      <FilterGroup />
      <Divider sx={{ my: 3 }} />
      <FilterGroup />
    </Paper>
  );
}

export default DataFilters;