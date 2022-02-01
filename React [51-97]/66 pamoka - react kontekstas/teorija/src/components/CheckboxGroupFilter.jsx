import { useContext } from "react";
import FilterContainer from './FilterContainer';
import CheckboxGroup from './CheckboxGroup';
import { CarContext } from '../contexts/CarContext';

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
