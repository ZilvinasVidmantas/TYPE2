import React from 'react';
import {
  Slider,
  Box,
  Input,
  styled,
} from '@mui/material';
import FilterWrapper from './filter-wrapper';

const RangeFilterInput = styled(Input)({
  width: 50,
  input: {
    textAlign: 'center'
  },
});

const RangeFilter = () => {
  return (
    <FilterWrapper>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <RangeFilterInput value={10} />
        <RangeFilterInput value={100} />
      </Box>
      <Box sx={{ px: 2, pt: 2 }}>
        <Slider
          min={10}
          max={100}
          value={[10, 100]}
          onChange={() => console.log('Keiciamas Slider\'is')}
        />
      </Box>
    </FilterWrapper>

  );
};

export default RangeFilter;
