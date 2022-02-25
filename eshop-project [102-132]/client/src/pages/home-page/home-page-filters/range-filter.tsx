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

const StyledSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-thumb': {
    background: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    ':hover': {
      boxShadow: '0px 0px 0px 4px rgb(69 69 69 / 16%)',
    }
  },
  '& .Mui-active': {
    background: theme.palette.secondary.dark,
  },
  '& .Mui-focusVisible': {
    boxShadow: '0px 0px 0px 6px rgb(69 69 69 / 16%)',
  }
}));

const RangeFilter = () => {
  return (
    <FilterWrapper>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <RangeFilterInput value={10} />
        <RangeFilterInput value={100} />
      </Box>
      <Box sx={{ px: 2, pt: 2 }}>
        <StyledSlider
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
