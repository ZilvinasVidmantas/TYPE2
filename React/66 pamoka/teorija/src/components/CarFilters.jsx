import React, { useContext } from 'react';
import {
  Typography,
  Paper,
  Slider,
  Box,
  Input
} from '@mui/material';
import { CarContext } from '../contexts/CarContext';
import FilterContainer from './FilterContainer';
import CheckboxGroupFilter from './CheckboxGroupFilter';

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
          options={filterProps.options}
        />;

      case "numberRange":
        // RangeFilter
        const { min, max, selectedMin, selectedMax } = filterProps;
        return (
          <FilterContainer key={filterName} title={title}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 1, px: 3 }}>
              <Input value={selectedMin} inputProps={{
                sx: { textAlign: 'center' }
              }} />
              <Input value={selectedMax} inputProps={{
                sx: { textAlign: 'center' }
              }} />
            </Box>
            <Box sx={{ px: 1 }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={[selectedMin, selectedMax]}
                min={min}
                max={max}
                onChange={(x) => console.log(x)}
                valueLabelDisplay="auto"
              />
            </Box>
          </FilterContainer>);
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