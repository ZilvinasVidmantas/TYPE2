import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button
} from "@mui/material"

import { v4 as uuidv4 } from 'uuid';

const MyTable = ({ theads, data }) => {
  return (
    <TableContainer component={Paper} elevation={1} sx={{ minWidth: 650 }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {theads.map(({ name, ...props }) => <TableCell key={uuidv4()} {...props}>{name}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({id, Pavadinimas, Metai, IMDB, Veiksmai }) =>
            <TableRow key={uuidv4()}>
              <TableCell align="center">{Pavadinimas}</TableCell>
              <TableCell align="center">{Metai}</TableCell>
              <TableCell align="center">{IMDB}</TableCell>
              <TableCell align="center">
                {Veiksmai.map((button) => 
                  <Button key={uuidv4()}>{button}</Button> 
                )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;