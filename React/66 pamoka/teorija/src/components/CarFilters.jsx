import React, { useContext } from 'react';
import {
  Typography,
  Paper,
  Slider,
  Box,
  Input
} from '@mui/material';
import { CarContext } from '../contexts/CarContext';
import FilterGroupContainer from './FilterGroupContainer';
import CheckboxGroup from './CheckboxGroup';

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
        const { min, max, selectedMin, selectedMax } = filterProps;
        filterContent = (<>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, my: 1, px: 3 }}>
            <Input value={selectedMin} inputProps={{
              sx: { textAlign: 'center' }
            }} />
            <Input value={selectedMax} inputProps={{
              sx: { textAlign: 'center' }
            }} />
          </Box>
          <Box sx={{ px: 1}}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={[selectedMin, selectedMax]}
              min={min}
              max={max}
              onChange={(x) => console.log(x)}
              valueLabelDisplay="auto"
            />
          </Box>
        </>);
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
      <Typography component="h2" variant="h4">Filtrai</Typography>
      {filterGroups}
    </Paper>
  );
}

export default CarFilters;