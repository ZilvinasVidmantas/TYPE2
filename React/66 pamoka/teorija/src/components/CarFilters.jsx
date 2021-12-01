import React, { useContext } from 'react';
import {
  Typography,
  Paper,
} from '@mui/material';
import { CarContext } from '../contexts/CarContext';
import FilterGroupContainer from './FilterGroupContainer';
import CheckboxGroup from './CheckboxGroup';

// <React.Fragment key={filterProps.name}>
//   <Divider sx={{ my: 1 }} />
//   <FilterGroup {...filterProps} />
// </React.Fragment>
const CarFilters = () => {
  const { filters } = useContext(CarContext);
  const filterArray = Object.entries(filters);

  const filterGroups = filterArray.map(([filterName, { type, ...filterProps }]) => {
    let filterContent;

    switch (type) {
      case "checkboxGroup":
        const { options } = filterProps;
        filterContent = options.map(({ name, selected }) => <CheckboxGroup
          key={name}
          label={name}
          checked={selected}
          name={filterName}
          value={name}
          onChange={(e) => console.log(e.target)}
        />);
        break;

      case "numberRange":
        filterContent = <div>Ateityje būsiu Range filtras</div>;
        break;
        
      default:
        throw new Error('DataFilter Komponente, naudojamas nežinomas filtro tipas');
    }
    return (
      <FilterGroupContainer key={filterName} title={'filterName: ' + filterName}>
        {filterContent}
      </FilterGroupContainer>
    )
  })

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <form>
        <Typography component="h2" variant="h4">Filtrai</Typography>
        {filterGroups}
        <button type="submit">Submit</button>
      </form>
    </Paper>
  );
}

export default CarFilters;