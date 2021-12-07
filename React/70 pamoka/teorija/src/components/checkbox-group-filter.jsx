import { useContext } from "react";
import FilterContainer from './filter-container';
import CheckboxGroup from './checkbox-group';
import { CarContext } from '../contexts/car-context';

const CheckboxGroupFilter = ({ filterName, title, options }) => {
  const { changeFilters } = useContext(CarContext);

  return (
    <FilterContainer title={title}>
      {options.map(({ name, selected }) => <CheckboxGroup
        key={name}
        label={name}
        checked={selected}
        name={filterName}
        value={name}
        onChange={(e) => changeFilters({ filterName, name, selected: e.target.checked })}
      />)}
    </FilterContainer>
  );
}

export default CheckboxGroupFilter;
