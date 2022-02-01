import * as React from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Typography,
  Button,
  TableContainer,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

// Generate owner cars data
function createData(id, brand, model, year, price) {
  return {
    id,
    brand,
    model,
    year,
    price,
  };
}

const rows = [
  createData(
    0,
    'opel',
    'žopel',
    '2000',
    312.44,
  ),
  createData(
    1,
    'opel',
    'žopel',
    '2000',
    866.99,
  ),
  createData(
    2,
    'opel',
    'žopel',
    '2000',
    100.81,
  ),
  createData(
    3,
    'opel',
    'žopel',
    '2000',
    654.39,
  ),
  createData(
    4,
    'opel',
    'žopel',
    '2000',
    212.79,
  ),
];

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const preventDefault = (event) => {
  event.preventDefault();
};

const UserCars = () => (
  <>
    <Typography component="h2" variant="h6">Mano automobiliai</Typography>
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Markė</TableCell>
            <TableCell>Modelis</TableCell>
            <TableCell>metai</TableCell>
            <TableCell align="right">Kaina</TableCell>
            <TableCell align="right">Veiksmai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.brand}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell align="right">{`${row.price}`}</TableCell>
              <TableCell align="right">
                <StyledLink to="">
                  <VisibilityIcon />
                </StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={preventDefault}>
      <StyledLink to="">
        Daugiau
      </StyledLink>
    </Button>
  </>
);

export default UserCars;
