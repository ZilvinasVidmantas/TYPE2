import React from 'react';
import { Autocomplete, Checkbox, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AutocompleteCheckboxFilter = ({
  filterOptions,
  noOptionsText,
  filterName,
  label,
  onChange,
  ...restProps
}) => (
  <Autocomplete
    size="small"
    options={filterOptions}
    noOptionsText={'Filtrų nėra' ?? noOptionsText}
    multiple
    disableCloseOnSelect
    getOptionLabel={(option) => option.title}
    {...restProps}
    renderOption={(props, option, { selected }) => (
      <li {...props}>
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          style={{ marginRight: 8 }}
          checked={selected}
        />
        {option.title}
      </li>
    )}
    renderInput={(params) => (
      <TextField {...params} label={label ?? 'Filtras'} />
    )}
    onChange={(_, selectedFilterOptions) => onChange(selectedFilterOptions, filterName)}
  />
);

export default AutocompleteCheckboxFilter;
