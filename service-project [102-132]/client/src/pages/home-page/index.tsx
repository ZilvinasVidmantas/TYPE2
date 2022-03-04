import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import HomePageServices from './home-page-services';
import HomePageFilters from './home-page-filters';
import HomePageHeader from './home-page-header';
import Service from '../../types/service';

const HomePage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/api/services/');
      const data = await response.json() as Service[];

      setServices(data);
    })();
  }, []);

  return (
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
          <HomePageServices
            services={services}
          />
        </Grid>
      </Grid>

    </Container>
  );
};

export default HomePage;
