import FilterGroupCheckbox from './FilterGroupCheckbox';
import { Typography } from '@mui/material';

const FilterGroup = () => {
  return (
    <>
      <Typography component="h3" variant="h5">Gamintojas</Typography>
      <FilterGroupCheckbox checked={true} label="Opel" />
      <FilterGroupCheckbox onChange={(e) => console.log(e.target)} label="BMW" />
      <FilterGroupCheckbox label="Subaru" />
      <FilterGroupCheckbox onChange={(e) => console.log(e.target)} checked={false} label="Be baro" />
    </>
  );
};

export default FilterGroup;