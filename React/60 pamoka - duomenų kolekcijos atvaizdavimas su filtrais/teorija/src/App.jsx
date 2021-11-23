import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@mui/material';
import DataTable from './components/DataTable';
import DataFilters from './components/DataFilters';

const App = () => {
  // const [cars] = useState([
  //   { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
  //   { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
  //   { id: 3, brand: 'Subaru', model: 'Impreza', year: 2004 },
  //   { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
  //   { id: 5, brand: 'Opel', model: 'Astra', year: 2008 }
  // ]);

  return (
    <Container>
      <Typography component="h1" variant="h3" gutterBottom align="center">Mašinos</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataFilters />
        </Grid>
        <Grid item xs={9}>
          <DataTable />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App;


/*
  Perskaityti:
    https://reactjs.org/docs/thinking-in-react.html

  0. Sudaryti atvaizdavimą
    Naudojant Material-ui padaryti formos stulpelį dešinėje su checkbox'ais (pagal automobilių markes)

  1. Pasikartojančias arba gaubiančias kitus elementus vaizdo dalis išskaidyti komponentais

  2. Aprašyti komponentų prop'sus

  3. Įsivertinti minimalius reikalingus props'us ir state kiekvienam komponentui

  4. Nuspręsti, kur turi būti aprašyti duomenys, jog būtų įgalinamas norimas funkcionalumas (lifting state up)

  5. Persiųsti ir panaudoti duomenis (per Props)
*/
