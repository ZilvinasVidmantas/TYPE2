import { useContext, useState, useEffect } from "react";
import { Slider, Box, Input } from '@mui/material';
import FilterContainer from './FilterContainer';
import { CarContext } from '../contexts/CarContext';

const RangeFilter = ({ filterName, title, selectedMin, selectedMax, min, max }) => {
  const { changeFilters } = useContext(CarContext);
  const [range, setRange] = useState([selectedMin, selectedMax])
  const [currMin, currMax] = range;

  useEffect(() => setRange([selectedMin, selectedMax]), [selectedMin, selectedMax]);

  return (
    <FilterContainer title={title}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 1, px: 3 }}>
        <Input
          value={currMin}
          type="number"
          inputProps={{ sx: { textAlign: 'center' } }}
          onChange={(event) => changeFilters({
            filterName,
            min: Number(event.target.value),
            max: currMax
          })}
        />
        <Input
          value={currMax}
          type="number"
          inputProps={{ sx: { textAlign: 'center' } }}
          onChange={(event) => changeFilters({
            filterName,
            min: currMin,
            max: Number(event.target.value)
          })}
        />
      </Box>
      <Box sx={{ px: 1 }}>
        {/* TODO: kodėl Keičiant Slider reikšmę kontekstas kviečiasi 2 kartus */}
        <Slider
          getAriaLabel={() => 'Temperature range'}
          min={min}
          max={max}
          value={range}
          onChange={(_, newRange) => setRange(newRange)}
          onChangeCommitted={(_, [min, max]) => changeFilters({ filterName, min, max })}
          valueLabelDisplay="auto"
        />
      </Box>
    </FilterContainer>);
};

export default RangeFilter;
