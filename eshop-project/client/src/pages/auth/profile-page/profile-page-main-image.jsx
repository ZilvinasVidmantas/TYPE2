import React from 'react';
import {
  styled,
  Button,
  Box,
} from '@mui/material';

const StyledMainImage = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  height: '250px',
  width: '250px',
  objectFit: 'cover',
  [theme.breakpoints.up('md')]: {
    height: '285px',
    width: '285px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '210px',
    width: '210px',
  },
}));

const MainImage = ({ mainImg }) => (
  <Box sx={{
    display: { xs: 'flex' },
    flexDirection: { xs: 'column' },
    alignItems: { xs: 'center' },
    gap: 2,
  }}
  >
    <StyledMainImage
      src={(mainImg && mainImg.src) ?? '/no-image.jpg'}
      alt="user"
    />
    <Button variant="outlined" size="large">Keisti</Button>
  </Box>
);

export default MainImage;
