import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
} from '@mui/material';
import { City } from 'types';
import CityPanelPageForm from './city-panel-page-form';
import CityPanelPageTable from './city-panel-page-table';
import CityService from './services/city-service';

const CityPanelPage = () => {
  const [cities, setCities] = useState<City[]>([]);

  console.log(cities);

  useEffect(() => {
    (async () => {
      const fetchedCities = await CityService.getCities();
      console.log(fetchedCities);

      if (typeof fetchedCities === 'string') {
        console.error(fetchedCities);
        return;
      }

      setCities(fetchedCities);
    })();
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography component="h1" variant="h2">Miestų panelė</Typography>
      <Box sx={{ width: 600, mt: 4, mb: 2 }}>
        <CityPanelPageForm />
      </Box>
      <CityPanelPageTable data={cities} />
    </Container>
  );
}

export default CityPanelPage;
