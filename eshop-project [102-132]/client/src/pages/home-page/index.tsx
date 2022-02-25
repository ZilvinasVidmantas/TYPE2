import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import HomePageServices from './home-page-services';
import HomePageFilters from './home-page-filters';
import HomePageHeader from './home-page-header';

const HomePage: React.FC = () => (
  <Container sx={{ pt: 10 }} maxWidth="xl">

    <Grid container columnSpacing={3}>
      <Grid item xs={2.5}>
        <Paper sx={{ p: 2 }}>
          <HomePageFilters />
        </Paper>
      </Grid>
      <Grid item xs={9.5}>
        <Paper sx={{ mb: 3, p: 1 }}>
          <HomePageHeader />
        </Paper>
        <Paper sx={{ p: 2 }}>
          <HomePageServices />
        </Paper>
      </Grid>
    </Grid>

  </Container>
);

export default HomePage;
