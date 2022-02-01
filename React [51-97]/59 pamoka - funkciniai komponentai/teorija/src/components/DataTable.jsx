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
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell>1</TableCell>
            <TableCell>Opel</TableCell>
            <TableCell>Astra</TableCell>
            <TableCell align="right">2000</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell>2</TableCell>
            <TableCell>BMW</TableCell>
            <TableCell>X5</TableCell>
            <TableCell align="right">2000</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell>3</TableCell>
            <TableCell>Subaru</TableCell>
            <TableCell>Impreza</TableCell>
            <TableCell align="right">2004</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
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

export default DataTable;