import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
  styled,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Image = styled('img')({
  objectPosition: 'center',
  objectFit: 'cover',
  width: '100%'
});

const ServiceCards = () => {
  return (
    <Paper>
      <Image
        src="https://www.viskas.lt/uploads/image/0/7/71424/original/apdaila_tinkuojant_v.JPG"
      />
      <Box sx={{
        px: 2,
        pt: 0,
        pb: 3,
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1
        }}>
          <Typography variant="h5">Tinkavimas</Typography>
          <Typography variant="h5" color="secondary" fontWeight="bold">20 €</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ width: 120 }} >Miestas: </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>Vilnius</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ width: 120 }} >Darbo pobūdis: </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>Apdaila</Typography>
        </Box>
        <Typography variant="body2" sx={{ my: 2, fontSize: 16 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam deserunt recusandae unde aliquam ducimus voluptates quis, nulla fugiat nesciunt inventore.</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained">Daugiau</Button>
          <Button variant="contained" color="secondary">
            <ShoppingCartIcon />
          </Button>
        </Box>

      </Box>
    </Paper>
  );
};

export default ServiceCards;
