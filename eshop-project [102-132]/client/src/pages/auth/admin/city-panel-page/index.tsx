import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
} from '@mui/material';
import { City } from 'types';
import CityPanelPageForm, { CityPanelPageFormProps } from './city-panel-page-form';
import CityPanelPageTable from './city-panel-page-table';
import CityService from './services/city-service';

const CityPanelPage = () => {
  const [cities, setCities] = useState<City[]>([]);

  const addCity: CityPanelPageFormProps['onSubmit'] = (city) => {
    setCities([...cities, city]);
  }

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
        <CityPanelPageForm onSubmit={addCity} />
      </Box>
      <CityPanelPageTable data={cities} />
    </Container>
  );
}

export default CityPanelPage;
