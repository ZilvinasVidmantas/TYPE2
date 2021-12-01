import { useContext } from "react";
import { Slider, Box, Input } from '@mui/material';
import FilterContainer from './FilterContainer';
import { CarContext } from '../contexts/CarContext';

const RangeFilter = ({ filterName, title, selectedMin, selectedMax, min, max }) => {
  const { changeFilters } = useContext(CarContext);

  return (
    <FilterContainer title={title}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 1, px: 3 }}>
        <Input
          value={selectedMin}
          inputProps={{ sx: { textAlign: 'center' } }}
          onChange={(e) => changeFilters({ filterName, min: Number(e.target.value), max: selectedMax })}
        />
         <Input
          value={selectedMax}
          inputProps={{ sx: { textAlign: 'center' } }}
          onChange={(e) => changeFilters({ filterName, min: selectedMin, max: Number(e.target.value) })}
        />
      </Box>
      <Box sx={{ px: 1 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={[selectedMin, selectedMax]}
          min={min}
          max={max}
          onChange={(_, [min, max]) => changeFilters({ filterName, min, max })}
          valueLabelDisplay="auto"
        />
      </Box>
    </FilterContainer>);
};

export default RangeFilter;
