import {
  Slider,
  Box,
  Input
} from '@mui/material';
import FilterContainer from './FilterContainer';

const RangeFilter = ({ title, selectedMin, selectedMax, min, max }) => {
  return (
    <FilterContainer title={title}>
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
};

export default RangeFilter;
