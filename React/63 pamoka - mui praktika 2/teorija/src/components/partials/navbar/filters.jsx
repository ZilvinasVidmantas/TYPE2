import React from 'react';
import SelectableButton from '../../buttons/selectable-button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const FilterContainer = styled(Box)(({theme}) => ({
  height: '100%',
  padding: theme.spacing(2, 0, 3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

const Filters = () => {
  return (
    <FilterContainer>
      <SelectableButton selected={true}>
        <Box component="span">Kaina</Box>
        <ArrowDropDownIcon />
      </SelectableButton>
      <SelectableButton>Būsto tipas</SelectableButton>
    </FilterContainer>
  )
};

export default Filters;
