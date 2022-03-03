import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import { City } from 'types';
import CityPanelPageForm, { CityPanelPageFormProps } from './city-panel-page-form';
import CityPanelPageTable, { CityPanelPageTableProps } from './city-panel-page-table';
import CityService from './services/city-service';

const CityPanelPage = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [titleField, setTitleField] = useState<string>('');
  const [editedCityId, setEditedCityId] = useState<null | string>(null);

  const handleSubmit: CityPanelPageFormProps['onSubmit'] = (event) => {
    event.preventDefault();
    if (editedCityId !== null) updateCity();
    else createCity();
  };

  const createCity = async () => {
    const createdCity = await CityService.createCity({ title: titleField });
    if (typeof createdCity === 'string') {
      setError(createdCity);
      return;
    } if (error) {
      setError(null);
    }

    setCities([createdCity, ...cities]);
    setTitleField('');
  };

  const editCity: CityPanelPageTableProps['onEdit'] = (id: string) => {
    const isNewEditedCity = id !== editedCityId;
    setEditedCityId(isNewEditedCity ? id : null);
    if (isNewEditedCity) {
      const editedCity = cities.find((x) => x.id === id) as City;
      setTitleField(editedCity.title);
    } else {
      setTitleField('');
    }
    if (error) setError(null);
  };

  const updateCity = async () => {
    if (editedCityId !== null) {
      const updatedCity = await CityService.updateCity(editedCityId, { title: titleField });
      if (typeof updatedCity === 'string') {
        setError(updatedCity);
        return;
      } if (error) {
        setError(null);
      }

      setCities(cities.map((x) => (x.id === editedCityId ? updatedCity : x)));
      setTitleField('');
      setEditedCityId(null);
    }
  };

  const deleteCity = async (id: string) => {
    const deletedCity = await CityService.deleteCity(id);

    if (typeof deletedCity === 'string') {
      setError(deletedCity);
      return;
    } if (error) {
      setError(null);
    }

    setCities(cities.filter((x) => x.id !== id));
    setEditedCityId(null);
    setTitleField('');
  };

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
          onSubmit={handleSubmit}
          title={titleField}
          setTitle={setTitleField}
          editMode={Boolean(editedCityId)}
        />
      </Box>
      {
        error && (
          <Alert
            onClose={() => setError(null)}
            color="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        )
      }
      <CityPanelPageTable
        data={cities.map((x) => ({ ...x, edited: editedCityId === x.id }))}
        onDelete={deleteCity}
        onEdit={editCity}
      />
    </Container>
  );
};

export default CityPanelPage;
