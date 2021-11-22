import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const App = () => {
  const [cars] = useState([
    { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
    { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
    { id: 3, brand: 'Subaru', model: 'Impreza', year: 2004 },
    { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
    { id: 5, brand: 'Opel', model: 'Astra', year: 2008 }
  ]);

  return (
    <Container>
      <Typography component="h1" variant="h3" gutterBottom align="center">Cars</Typography>
      <TableContainer component={Paper} elevation={4} square={true}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Model</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car) => (
              <TableRow
                key={car.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{car.id}</TableCell>
                <TableCell>{car.brand}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell align="right">{car.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default App;


/*
  Perskaityti:
    https://reactjs.org/docs/thinking-in-react.html

  [14:00]
  0. Sudaryti atvaizdavimą
    Naudojant Material-ui padaryti formos stulpelį dešinėje su checkbox'ais (pagal automobilių markes)

  [14:25]
  1. Pasikartojančias vaizdo dalis išskaidyti komponentais

  [14:50]
  2. Komponentuose kintančias vietas, aprašyti kintamaisiais (aprašytais virš komponento)

  [15:15]
  3. Įsivertinti minimalius reikalingus props'us ir state kiekvienam komponentui

  [15:40]
  4. Nuspręsti, kur turi būti aprašyti duomenys, jog būtų įgalinamas norimas funkcionalumas (lifting state up)
  5. Persiųsti ir panaudoti duomenis (per Props)
*/
