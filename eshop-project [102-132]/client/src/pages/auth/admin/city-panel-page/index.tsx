import React from 'react';
import {
  Container,
  Box,
  Typography,
} from '@mui/material';
import { City } from 'types';
import CityPanelPageForm from './city-panel-page-form';
import CityPanelPageTable from './city-panel-page-table';

const data: City[] = [
  {
    id: 'asdasdasd',
    title: 'Vilnius',
    createdAt: '2022-01-22',
    updatedAt: '2022-01-22',
  },
  {
    id: 'asdasdasdfg',
    title: 'Kaunas',
    createdAt: '2022-01-22',
    updatedAt: '2022-01-22',
  },
  {
    id: 'asdasdasd654',
    title: 'Klaipėda',
    createdAt: '2022-01-22',
    updatedAt: '2022-01-22',
  },
];

const CityPanelPage = () => (
  <Container maxWidth="xl">
    <Typography component="h1" variant="h2">Miestų panelė</Typography>
    <Box sx={{ width: 600, mt: 4, mb: 2 }}>
      <CityPanelPageForm />
    </Box>
    <CityPanelPageTable data={data} />
  </Container>
);

export default CityPanelPage;
