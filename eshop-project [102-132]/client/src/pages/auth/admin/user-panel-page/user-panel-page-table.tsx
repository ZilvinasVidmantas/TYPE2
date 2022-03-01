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
import { User } from 'types';

export type UserPanelPageTableProps = {
  data: User[],
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

export const UserPanelPageTable: React.FC<UserPanelPageTableProps> = ({
  data,
  onDelete,
}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Paštas</StyledTableCell>
            <StyledTableCell>Vardas</StyledTableCell>
            <StyledTableCell>Pavardė</StyledTableCell>
            <StyledTableCell align="right">Sukurta:</StyledTableCell>
            <StyledTableCell align="right">Atnaujinta:</StyledTableCell>
            <StyledTableCell align="right">Veiksmai:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow
              key={user.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
              <StyledTableCell>{user.email}</StyledTableCell>
              <StyledTableCell>{user.name}</StyledTableCell>
              <StyledTableCell>{user.surname}</StyledTableCell>
              <StyledTableCell align="right">{user.createdAt}</StyledTableCell>
              <StyledTableCell align="right">{user.updatedAt}</StyledTableCell>
              <StyledTableCell sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Button variant="contained" color="secondary" >Reset password</Button>
                <Button variant="contained" color="error" onClick={() => onDelete(user.id)}>
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

export default UserPanelPageTable;
