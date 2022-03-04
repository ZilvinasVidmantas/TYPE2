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
import { Service } from 'types';

type EditedService = Service & {
  edited: boolean,
};

export type UserServicePanelPageTableProps = {
  data: EditedService[],
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

export const UserServicePanelPageTable: React.FC<UserServicePanelPageTableProps> = ({
  data,
  onEdit,
  onDelete,
}) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Id</StyledTableCell>
          <StyledTableCell>Pavadinimas</StyledTableCell>
          <StyledTableCell>Kategorija</StyledTableCell>
          <StyledTableCell align="right">Sukurta:</StyledTableCell>
          <StyledTableCell align="right">Atnaujinta:</StyledTableCell>
          <StyledTableCell align="right">Veiksmai:</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((service) => (
          <TableRow
            key={service.id}
            sx={(theme) => ({
              bgcolor: service.edited ? alpha(theme.palette.warning.main, 0.3) : undefined,
              '&:last-child td, &:last-child th': { border: 0 },
            })}
          >
            <StyledTableCell component="th" scope="row">
              {service.id}
            </StyledTableCell>
            <StyledTableCell>{service.title}</StyledTableCell>
            <StyledTableCell>{service.category.title}</StyledTableCell>
            <StyledTableCell align="right">{service.createdAt}</StyledTableCell>
            <StyledTableCell align="right">{service.updatedAt}</StyledTableCell>
            <StyledTableCell sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                color={service.edited ? 'warning' : 'secondary'}
                onClick={() => onEdit(service.id)}
              >
                {service.edited ? <DoNotDisturbAltIcon /> : <CachedIcon />}
              </Button>
              <Button variant="contained" color="error" onClick={() => onDelete(service.id)}>
                <DeleteForeverIcon />
              </Button>
            </StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default UserServicePanelPageTable;
