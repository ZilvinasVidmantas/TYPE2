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
  alpha,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CachedIcon from '@mui/icons-material/Cached';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import { City } from 'types';
import CityService from './services/city-service';

type EditedCity = City & {
  edited: boolean,
}


export type CityPanelPageTableProps = {
  data: EditedCity[],
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
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
  onEdit,
  onDelete,
}) => {

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
              sx={(theme) => ({
                bgcolor: city.edited ? alpha(theme.palette.warning.main, 0.3) : undefined,
                '&:last-child td, &:last-child th': { border: 0 },
              })}
            >
              <StyledTableCell component="th" scope="row">
                {city.id}
              </StyledTableCell>
              <StyledTableCell>{city.title}</StyledTableCell>
              <StyledTableCell align="right">{city.createdAt}</StyledTableCell>
              <StyledTableCell align="right">{city.updatedAt}</StyledTableCell>
              <StyledTableCell sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  color={city.edited ? 'warning' : 'secondary'}
                  onClick={() => onEdit(city.id)}
                >
                  {city.edited ? <DoNotDisturbAltIcon /> : <CachedIcon />}
                </Button>
                <Button variant="contained" color="error" onClick={() => onDelete(city.id)}>
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
