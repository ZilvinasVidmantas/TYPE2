import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
  styled,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Service } from 'types';

const Image = styled('img')({
  objectPosition: 'center',
  objectFit: 'cover',
  width: '100%',
});

export type ServiceCardProps = Service;

const ServiceCard: React.FC<Service> = ({
  title,
  price,
  images,
  category,
  cities,
  description,
}) => (
  <Paper>
    <Image src={images[0] ?? '/no-image.jpg'} />
    <Box sx={{
      px: 2,
      pt: 0,
      pb: 3,
    }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
      }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h5" color="secondary" fontWeight="bold">{`${price} $`}</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ width: 120 }}>Miestai: </Typography>
        <Typography sx={{ fontWeight: 'bold' }}>{cities.map((x) => x.title).join(', ')}</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ width: 120 }}>Darbo pobūdis: </Typography>
        <Typography sx={{ fontWeight: 'bold' }}>{category.title}</Typography>
      </Box>
      <Typography variant="body2" sx={{ my: 2, fontSize: 16 }}>{description}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained">Daugiau</Button>
        <Button variant="contained" color="secondary">
          <ShoppingCartIcon />
        </Button>
      </Box>

    </Box>
  </Paper>
);

export default ServiceCard;
