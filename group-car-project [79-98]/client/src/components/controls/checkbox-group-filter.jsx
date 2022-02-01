import React from 'react';
import FilterContainer from '../containers/filter-container';
import CheckboxGroup from './checkbox-group';

const CheckboxGroupFilter = ({
  filterName, title, options, onChange,
}) => (
  <FilterContainer title={title}>
    {options.map(({ name, selected }) => (
      <CheckboxGroup
        key={name}
        label={name}
        checked={selected}
        name={filterName}
        value={name}
        onChange={(e) => onChange({ filterName, name, selected: e.target.checked })}
      />
    ))}
  </FilterContainer>
);

export default CheckboxGroupFilter;
