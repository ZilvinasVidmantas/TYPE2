import { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { CarContext } from '../../contexts/car-context';

const CarTable = () => {
  const { cars } = useContext(CarContext);

  const rows = cars.map(({ id, brand, model, year, price }) =>
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{model}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{year}</TableCell>
    </TableRow>);

  return (
    <TableContainer component={Paper} elevation={4} square={true}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Markė</TableCell>
            <TableCell>Modelis</TableCell>
            <TableCell align="right">Kaina €</TableCell>
            <TableCell align="right">Gam. Metai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarTable;