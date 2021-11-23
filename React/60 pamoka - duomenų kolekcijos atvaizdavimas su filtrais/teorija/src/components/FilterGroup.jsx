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
    <div>
      <Typography component="h3" variant="h5">{title ?? 'title --[UNDEFINED]--'}</Typography>
      {checkboxGroups}
    </div>
  );
};

export default FilterGroup;
