import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const DataTable = ({ headers, data }) => {

  const rows = data.map(({ id, brand, model, year }) =>
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{model}</TableCell>
      <TableCell align="right">{year}</TableCell>
    </TableRow>);

  return (
    <TableContainer component={Paper} elevation={4} square={true}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(({ name, ...props }) => <TableCell key={name} {...props}>{name}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;