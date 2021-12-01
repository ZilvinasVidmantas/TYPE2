import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@mui/material';
import CarTable from './components/CarTable';
import DataFilters from './components/DataFilters';
import "./contexts/CarContext";

const filters = [
  { title: 'Markė', property: 'brand', type: '' },
  { title: 'Modelis', property: 'model', type: '' },
];

const initialCars = [
  { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', year: 2004 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', year: 2008 }
];

const App = () => {
  const [cars, setCars] = useState(initialCars);

  const handleFilterGroupChange = (event) => {
    const { value, name, checked } = event.target;

    setDataFilterPropsArray((prevState) => prevState.map(filterProps => ({
      ...filterProps,
      options: filterProps.name !== name
        ? filterProps.options
        : filterProps.options.map(option => ({
          ...option,
          checked: option.value === value ? checked : option.checked
        }))
    })));
  }

  const [filterPropsArray, setDataFilterPropsArray] = useState(
    filters.map(({ title, property }) => {
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
  );

  useEffect(() => {
    // console.log('Reaguojama į filtrų pasikeitimą');
    setCars(initialCars.filter(car => {
        for (let i = 0; i < filterPropsArray.length; i++) {
          const filter = filterPropsArray[i];
          const validProps = filter.options.filter(x => x.checked).map(x => x.value)
          if (!validProps.includes(car[filter.name])) {
            return false;
          }
        }
        return true;
      })
    );

  }, [filterPropsArray])

  return (
    <Container>
      <Typography component="h1" variant="h3" gutterBottom align="center">Mašinos</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataFilters filterPropsArray={filterPropsArray} />
        </Grid>
        <Grid item xs={9}>
          <CarTable/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App;
