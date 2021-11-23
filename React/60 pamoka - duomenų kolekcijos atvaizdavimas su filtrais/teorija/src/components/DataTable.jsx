import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const DataTable = () => {

  return (
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
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Opel</TableCell>
            <TableCell>Astra</TableCell>
            <TableCell align="right">2000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>BMW</TableCell>
            <TableCell>X5</TableCell>
            <TableCell align="right">2000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Subaru</TableCell>
            <TableCell>Impreza</TableCell>
            <TableCell align="right">2004</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Volkswagen</TableCell>
            <TableCell>Passat</TableCell>
            <TableCell align="right">2006</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

/*
  1. Sukurti masyvą su objektais skirtą, atvaizduoti duomenų eilutėms. (Virš komponento) -> const rows = [...]
  2. Atvaizduoti eilutes pagal [1.] užduotyje sukurtą <rows> kintamajį
  3. Atvaizduokite Lentelės antraštes pagal duomenis -> const headers = [...]
  4. Atvaizduoti antraštes pagal [4.] užduotyje sukurtą <headers> kintamajį
  5. Perrašyti logiką, jog duomenys būtų priimami per prop'sus ir tėviniame komponente (App.jsx) juos perduokite
*/

export default DataTable;