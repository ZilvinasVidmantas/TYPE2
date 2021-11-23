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
      <FilterGroup
        title="Gamintojas"
        name="brand"
        options={[
          { label: 'Opel', value: 'opel', checked: true },
          { label: 'BMW', value: 'bmw', checked: false },
          { label: 'Mazda', value: 'mazda', checked: true },
          { label: 'Subaru', value: 'subaru', checked: false },
        ]}
        onChange={({ target }) => console.log({
          value: target.value,
          name: target.name,
          checked: target.checked
        })}
      />
      <Divider sx={{ my: 3 }} />
      <FilterGroup title="Modelis"/>
      <Divider sx={{ my: 3 }} />
      <FilterGroup  title="Metai"/>
    </Paper>
  );
}

export default DataFilters;