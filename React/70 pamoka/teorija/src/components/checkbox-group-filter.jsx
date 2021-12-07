import FilterContainer from './filter-container';
import CheckboxGroup from './checkbox-group';

const CheckboxGroupFilter = ({ filterName, title, options, onChange }) => {

  return (
    <FilterContainer title={title}>
      {options.map(({ name, selected }) => <CheckboxGroup
        key={name}
        label={name}
        checked={selected}
        name={filterName}
        value={name}
        onChange={(e) => onChange({ filterName, name, selected: e.target.checked })}
      />)}
    </FilterContainer>
  );
}

export default CheckboxGroupFilter;
