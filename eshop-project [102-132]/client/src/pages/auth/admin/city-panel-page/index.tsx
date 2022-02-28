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
  const [titleField, setTitleField] = useState<string>('');
  const [editedCityId, setEditedCityId] = useState<null | string>(null);

  const addCity: CityPanelPageFormProps['onSubmit'] = (city) => {
    setCities([...cities, city]);
  }

  const deleteCity: CityPanelPageTableProps['onDelete'] = (id) => {
    setCities(cities.filter(x => x.id !== id));
    setEditedCityId(null);
    setTitleField('');
  }

  const editCity: CityPanelPageTableProps['onEdit'] = (id: string) => {
    const isNewEditedCity = id !== editedCityId;
    setEditedCityId(isNewEditedCity ? id : null);
    if (isNewEditedCity) {
      const editedCity = cities.find(x => x.id === id) as City;
      setTitleField(editedCity.title);
    } else {
      setTitleField('');
    }
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
        <CityPanelPageForm
          onSubmit={addCity}
          title={titleField}
          setTitle={setTitleField}
          editMode={Boolean(editedCityId)}
        />
      </Box>
      <CityPanelPageTable
        data={cities.map(x => ({ ...x, edited: editedCityId === x.id }))}
        onDelete={deleteCity}
        onEdit={editCity}
      />
    </Container>
  );
}

export default CityPanelPage;
