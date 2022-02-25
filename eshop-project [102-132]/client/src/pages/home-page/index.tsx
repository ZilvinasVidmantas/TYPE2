import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import HomePageServices from './home-page-services';
import HomePageFilters from './home-page-filters';

const HomePage: React.FC = () => (
  <Container sx={{ pt: 10 }} maxWidth="xl">

    <Grid container columnSpacing={3}>
      <Grid item xs={3}>
        <Paper sx={{ p: 2 }}>
          <HomePageFilters />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper sx={{ mb: 3, p: 2 }}>
          <Typography>Surastas daiktas(125)</Typography>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <HomePageServices />
        </Paper>
      </Grid>
    </Grid>

  </Container>
);

export default HomePage;
