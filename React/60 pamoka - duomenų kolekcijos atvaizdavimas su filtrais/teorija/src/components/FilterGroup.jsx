import FilterGroupCheckbox from './FilterGroupCheckbox';
import { Typography } from '@mui/material';

const FilterGroup = ({ title, name, options, onChange }) => {

  let checkboxGroups = 'options --[UNDEFINED]--';
  if (options) {
    checkboxGroups = options.map(checkboxProps =>
      <FilterGroupCheckbox
        {...checkboxProps}
        key={checkboxProps.value}
        name={name}
        onChange={onChange}
      />)
  }

  return (
    <>
      <Typography component="h3" variant="h5">{title ?? 'title --[UNDEFINED]--'}</Typography>
      {checkboxGroups}
    </>
  );
};

export default FilterGroup;

/*
  4. Padaryti taip, jog komponentas nenutrauktų programos, jeigu yra kurimas be jokių <props>
*/
