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

const MyTable = ({ theads, data }) => {


  return (
    <TableContainer component={Paper} elevation={1} sx={{ minWidth: 650 }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {theads.map(({ name, ...props }) => <TableCell {...props}>{name}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({id, Pavadinimas, Metai, IMDB, Veiksmai }) =>
            <TableRow key={id}>
              <TableCell align="center">{Pavadinimas}</TableCell>
              <TableCell align="center">{Metai}</TableCell>
              <TableCell align="center">{IMDB}</TableCell>
              <TableCell align="center">
                {Veiksmai.map((button) => 
                  <Button>{button}</Button> 
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