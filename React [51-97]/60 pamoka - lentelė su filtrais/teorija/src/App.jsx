import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@mui/material';
import DataTable from './components/DataTable';
import DataFilters from './components/DataFilters';

const filters = [
  { title: 'Markė', property: 'brand' },
  { title: 'Modelis', property: 'model' },
];

const cars = [
  { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', year: 2004 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', year: 2008 }
]

const App = () => {

  const handleFilterGroupChange = ({ target }) => console.log({
    value: target.value,
    name: target.name,
    checked: target.checked
  });

  const dataFiltersOptions = filters.map(({ title, property }) => {
    const properties = cars.map(car => car[property]);
    const uniqProperties = [...new Set(properties)];
    const options = uniqProperties.map(uniqProp => ({
      label: uniqProp,
      value: uniqProp,
      checked: true
    }));

    return {
      title,
      name: property,
      options,
      onChange: handleFilterGroupChange
    }
  })

  return (
    <Container>
      <Typography component="h1" variant="h3" gutterBottom align="center">Mašinos</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataFilters options={dataFiltersOptions} />
        </Grid>
        <Grid item xs={9}>
          <DataTable 
            headers={[
              { name: 'ID' },
              { name: 'Markė' },
              { name: 'Modelis' },
              { name: 'Gam. Metai', align: "right" }
            ]}
            data={cars}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App;


/*
  Perskaityti:
    https://reactjs.org/docs/thinking-in-react.html

  0. Sudaryti atvaizdavimą - HTML + CSS | Komponenetai apjungti hierarchija viename faile

  1. Pasikartojančias arba gaubiančias kitus elementus vaizdo dalis išskaidyti komponentais

  2. Aprašyti komponentų prop'sus

  3. Įsivertinti minimalius state kiekvienam komponentui pagal kuriuos bus atvaizduojamas/keičiamas atvaizdavimas

  4. Nuspręsti, kur turi būti aprašyti duomenys, jog būtų įgalintas norimas funkcionalumas tarp komponentų (lifting state up)

  5. Aprašyti Event'listenerius, kurie keičia state ir įgalina norimą funkcionalumą
*/
