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
import { Category } from 'types';
import CategoryService from './services/category-service';

type EditedCategory = Category & {
  edited: boolean,
}


export type CategoryPanelPageTableProps = {
  data: EditedCategory[],
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

export const CategoryPanelPageTable: React.FC<CategoryPanelPageTableProps> = ({
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
          {data.map((category) => (
            <TableRow
              key={category.id}
              sx={(theme) => ({
                bgcolor: category.edited ? alpha(theme.palette.warning.main, 0.3) : undefined,
                '&:last-child td, &:last-child th': { border: 0 },
              })}
            >
              <StyledTableCell component="th" scope="row">
                {category.id}
              </StyledTableCell>
              <StyledTableCell>{category.title}</StyledTableCell>
              <StyledTableCell align="right">{category.createdAt}</StyledTableCell>
              <StyledTableCell align="right">{category.updatedAt}</StyledTableCell>
              <StyledTableCell sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  color={category.edited ? 'warning' : 'secondary'}
                  onClick={() => onEdit(category.id)}
                >
                  {category.edited ? <DoNotDisturbAltIcon /> : <CachedIcon />}
                </Button>
                <Button variant="contained" color="error" onClick={() => onDelete(category.id)}>
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

export default CategoryPanelPageTable;
