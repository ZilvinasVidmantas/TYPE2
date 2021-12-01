import React, { useContext } from 'react';
import { Typography, Paper } from '@mui/material';
import { CarContext } from '../contexts/CarContext';
import CheckboxGroupFilter from './CheckboxGroupFilter';
import RangeFilter from './RangeFilter';

const CarFilters = () => {
  const { filters } = useContext(CarContext);
  const filterArray = Object.entries(filters);

  const filterGroups = filterArray.map(([filterName, { type, title, ...filterProps }]) => {
    switch (type) {
      case "checkboxGroup":
        return <CheckboxGroupFilter
          key={filterName}
          filterName={filterName}
          title={title}
          {...filterProps}
        />;

      case "numberRange":
        return <RangeFilter
          key={filterName}
          filterName={filterName}
          title={title}
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