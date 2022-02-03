import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import FlippingCard from '../components/flipping-card';

const FrontComponent = () => <Box>asdasdasd</Box>;
const BackComponent = () => <Box>Galas</Box>;

const HomePage = () => (
  <Container sx={{ pt: 10 }}>
    <Typography>HomePage</Typography>

    <FlippingCard
      sx={{ height: 300, width: 150 }}
      FrontComponent={FrontComponent}
      BackComponent={BackComponent}
    />
  </Container>
);

export default HomePage;
