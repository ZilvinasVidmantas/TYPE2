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

const myTable = ({theads, data}) => {


  return (
    <TableContainer component={Paper} sx={{ minWidth: 650 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Pavadinimas</TableCell>
            <TableCell align="center">Metai</TableCell>
            <TableCell align="center">IMDB</TableCell>
            <TableCell align="center">Veiksmai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">Harry Potter</TableCell>
            <TableCell align="right">2001</TableCell>
            <TableCell align="right">7.6</TableCell>
            <TableCell align="center">
              <Button>Redaguoti</Button>
              <Button>Trinti</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Lord of the Rings</TableCell>
            <TableCell align="right">2001</TableCell>
            <TableCell align="right">8.8</TableCell>
            <TableCell align="center">
              <Button>Redaguoti</Button>
              <Button>Trinti</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Simpsons</TableCell>
            <TableCell align="right">2007</TableCell>
            <TableCell align="right">7.3</TableCell>
            <TableCell align="center">
              <Button>Redaguoti</Button>
              <Button>Trinti</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Mortal Engines</TableCell>
            <TableCell align="right">2018</TableCell>
            <TableCell align="right">6.1</TableCell>
            <TableCell align="center">
              <Button>Redaguoti</Button>
              <Button>Trinti</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default myTable;