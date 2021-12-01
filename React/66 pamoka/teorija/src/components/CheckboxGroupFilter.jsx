import React from 'react';
import FilterContainer from './FilterContainer';
import CheckboxGroup from './CheckboxGroup';

const CheckboxGroupFilter = ({ filterName, title, options }) => {
  return (
    <FilterContainer title={title}>
      {options.map(({ name, selected }) => <CheckboxGroup
        key={name}
        label={name}
        checked={selected}
        name={filterName}
        value={name}
        onChange={(e) => console.log(e.target)}
      />)}
    </FilterContainer>
  );
}

export default CheckboxGroupFilter;
