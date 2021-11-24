import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import DataTable from './components/DataTable';
import DataFilters from './components/DataFilters';

const filters = [
  { title: 'Markė', property: 'brand' },
  { title: 'Modelis', property: 'model' },
];

const initialCars = [
  { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', year: 2004 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', year: 2008 }
];

const App = () => {
  const [cars, setCars] = useState((() => {
    console.log('nustama nauja cars reikšmė')
    return initialCars
  })());

  const handleFilterGroupChange = (event) => {
    console.table(filterPropsArray.reduce((options, filterProps) => [...options, ...filterProps.options], []));
    
    const { value, name, checked } = event.target;
    const newFilters = filterPropsArray.map(filterProps => ({
      ...filterProps,
      options: filterProps.name !== name
      ? filterProps.options
      : filterProps.options.map(option => ({
          ...option,
          checked: option.value === value ? checked : option.checked
        }))
      }));
    console.table(newFilters.reduce((options, filterProps) => [...options, ...filterProps.options], []));
      
    setDataFilterPropsArray(newFilters);
  }
  // 11:10
  // 5 min. Kur naudojamas state kintamis aprašant pradinę <filterPropsArray> reikšmę ?
  const [filterPropsArray, setDataFilterPropsArray] = useState(filters.map(({ title, property }) => {
    console.log('formuojami FormGroup options');
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
  }));

  return (
    <Container>
      <Typography component="h1" variant="h3" gutterBottom align="center">Mašinos</Typography>
      <Button onClick={() => setCars([]) }>change state</Button>
      <Typography component="pre">
        {JSON.stringify(cars, undefined, 2)}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataFilters filterPropsArray={filterPropsArray} />
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
