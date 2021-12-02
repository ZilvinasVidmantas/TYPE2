import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@mui/material';
import CarTable from './components/CarTable';
import CarFilters from './components/CarFilters';



const App = () => {
  return (
    <Container>
      <Typography component="h1" variant="h3" gutterBottom align="center">Mašinos</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CarFilters/>
        </Grid>
        <Grid item xs={9}>
          <CarTable/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App;
