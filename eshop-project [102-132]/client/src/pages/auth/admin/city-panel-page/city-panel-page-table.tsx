import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  Button,
  styled,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CachedIcon from '@mui/icons-material/Cached';
import { City } from 'types';
import CityService from './services/city-service';

export type CityPanelPageTableProps = {
  data: City[],
  onDelete: (id: string) => void,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const CityPanelPageTable: React.FC<CityPanelPageTableProps> = ({
  data,
  onDelete,
}) => {
  const handleCityDelete = async (id: string) => {
    const deletedCity = await CityService.deleteCity(id);

    if (typeof deletedCity === 'string') {
      console.error(deletedCity);
      return;
    }

    onDelete(id);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Pavadinimas</StyledTableCell>
            <StyledTableCell align="right">Sukurta:</StyledTableCell>
            <StyledTableCell align="right">Atnaujinta:</StyledTableCell>
            <StyledTableCell align="right">Veiksmai:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((city) => (
            <TableRow
              key={city.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {city.id}
              </StyledTableCell>
              <StyledTableCell>{city.title}</StyledTableCell>
              <StyledTableCell align="right">{city.createdAt}</StyledTableCell>
              <StyledTableCell align="right">{city.updatedAt}</StyledTableCell>
              <StyledTableCell sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Button variant="contained" color="secondary">
                  <CachedIcon />
                </Button>
                <Button variant="contained" color="error" onClick={() => handleCityDelete(city.id)}>
                  <DeleteForeverIcon />
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CityPanelPageTable;
