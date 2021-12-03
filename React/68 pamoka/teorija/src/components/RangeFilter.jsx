import { useContext, useState } from "react";
import { Slider, Box, Input } from '@mui/material';
import FilterContainer from './FilterContainer';
import { CarContext } from '../contexts/CarContext';

const RangeFilter = ({ filterName, title, min, max }) => {
  const { changeFilters } = useContext(CarContext);
  const [range, setRange] = useState([min, max])
  const [selectedMin, selectedMax] = range;

  const handleInputChange = (newRange) => {
    const [min, max] = newRange;
    setRange(newRange);
    changeFilters({ filterName, min, max });
  }

  return (
    <FilterContainer title={title}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 1, px: 3 }}>
        <Input
          value={selectedMin}
          inputProps={{ sx: { textAlign: 'center' } }}
          onChange={(event) => handleInputChange([Number(event.target.value), selectedMax])}
        />
        <Input
          value={selectedMax}
          inputProps={{ sx: { textAlign: 'center' } }}
          onChange={(event) => handleInputChange([selectedMin, Number(event.target.value)])}
        />
      </Box>
      <Box sx={{ px: 1 }}>
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
