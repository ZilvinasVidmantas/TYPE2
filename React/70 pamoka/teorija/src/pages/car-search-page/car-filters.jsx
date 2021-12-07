import React, { useContext } from 'react';
import { Typography, Paper } from '@mui/material';
import { CarContext } from '../../contexts/car-context';
import CheckboxGroupFilter from '../../components/checkbox-group-filter';
import RangeFilter from '../../components/range-filter';

const CarFilters = () => {
  const { filters } = useContext(CarContext);

  const filterGroups = filters.map(({ name, type, ...filterProps }) => {
    switch (type) {
      case "checkboxGroup":
        return <CheckboxGroupFilter
          key={name}
          filterName={name}
          {...filterProps}
        />;

      case "numberRange":
        return <RangeFilter
          key={name}
          filterName={name}
          {...filterProps}
        />;
      default:
        throw new Error('DataFilter Komponente, naudojamas nežinomas filtro tipas');
    }
  })

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Typography component="h2" variant="h4">Filtrai</Typography>
      {filterGroups}
    </Paper>
  );
}

export default CarFilters;

/*
  * Iškelt konteksto funkciją iš range-filter į šį komponentą, ir peduot ją per props'są (onChange)
    * beabejo užnaudoti
  * Iškelt konteksto funkciją iš checkbox-group-filter į šį komponentą, ir peduot ją per props'us (onChange)
    * beabejo užnaudoti

*/