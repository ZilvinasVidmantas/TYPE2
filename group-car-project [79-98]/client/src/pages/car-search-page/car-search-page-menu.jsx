import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CarOptions from './car-search-page-menu-options';

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const CarSearchPageMenu = ({ view, changeView, openDrawer }) => (
  <Box sx={{
    display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '3px',
  }}
  >
    <StyledButton
      size="small"
      variant="outlined"
      onClick={openDrawer}
      sx={{
        textTransform: 'none', height: '40px', fontSize: '17px', fontWeight: 400,
      }}
    >
      Filtrai
    </StyledButton>
    <CarOptions view={view} changeView={changeView} />
  </Box>
);

export default CarSearchPageMenu;
