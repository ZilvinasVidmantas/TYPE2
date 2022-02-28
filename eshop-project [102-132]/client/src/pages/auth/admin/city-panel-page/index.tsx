import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
} from '@mui/material';
import { City } from 'types';
import CityPanelPageForm, { CityPanelPageFormProps } from './city-panel-page-form';
import CityPanelPageTable, { CityPanelPageTableProps } from './city-panel-page-table';
import CityService from './services/city-service';

const CityPanelPage = () => {
  const [cities, setCities] = useState<City[]>([]);

  const addCity: CityPanelPageFormProps['onSubmit'] = (city) => {
    setCities([...cities, city]);
  }

  const deleteCity: CityPanelPageTableProps['onDelete'] = (id) => {
    setCities(cities.filter(x => x.id !== id));
  }

  useEffect(() => {
    (async () => {
      const fetchedCities = await CityService.getCities();

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
      <CityPanelPageTable
        data={cities}
        onDelete={deleteCity}
      />
    </Container>
  );
}

export default CityPanelPage;
