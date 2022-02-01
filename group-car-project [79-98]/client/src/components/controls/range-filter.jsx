import React, { useState, useEffect } from 'react';
import {
  Slider, Box, Input, Typography,
} from '@mui/material';

const RangeFilter = ({
  filterName,
  title,
  selectedMin,
  selectedMax,
  min,
  max,
  onChange,
  sx,
}) => {
  const [range, setRange] = useState([selectedMin, selectedMax]);
  const [currMin, currMax] = range;

  const handleSliderOnChange = (_, newRange) => {
    const [rangeMin, rangeMax] = newRange;
    if (rangeMin !== currMin || rangeMax !== currMax) {
      setRange(newRange);
    }
  };

  const handleInputOnChange = ({ inputName, inputMin, inputMax }) => {
    if (inputMin !== currMin || inputMax !== currMax) {
      setRange([inputMin, inputMax]);
      onChange({ inputName, inputMin, inputMax });
    }
  };

  useEffect(
    () => setRange([selectedMin, selectedMax]),
    [selectedMin, selectedMax],
  );

  return (
    <Box sx={{ my: 1, px: 1 }}>
      <Typography gutterBottom>{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          my: 1.3,
        }}
      >
        <Input
          size="small"
          value={currMin}
          type="number"
          inputProps={{ sx: { textAlign: 'center' } }}
          onChange={(event) => handleInputOnChange({
            filterName,
            inputMin: Number(event.target.value),
            inputMax: currMax,
          })}
        />
        <Input
          size="small"
          value={currMax}
          type="number"
          inputProps={{ sx: { textAlign: 'center' } }}
          onChange={(event) => handleInputOnChange({
            filterName,
            inputMin: currMin,
            inputMax: Number(event.target.value),
          })}
        />
      </Box>
      <Box>
        <Slider
          size="small"
          getAriaLabel={() => 'Temperature range'}
          min={min}
          max={max}
          value={range}
          sx={sx}
          onChange={handleSliderOnChange}
          onChangeCommitted={(_, [newMin, newMax]) => onChange(
            { filterName, min: newMin, max: newMax },
          )}
        />
      </Box>
    </Box>
  );
};

export default RangeFilter;
