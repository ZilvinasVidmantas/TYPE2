import FilterGroupCheckbox from './FilterGroupCheckbox';
import { Typography } from '@mui/material';

const FilterGroup = () => {
  return (
    <>
      <Typography component="h3" variant="h5">Gamintojas</Typography>
      <FilterGroupCheckbox />
      <FilterGroupCheckbox />
      <FilterGroupCheckbox />
      <FilterGroupCheckbox />
    </>
  );
};

export default FilterGroup;