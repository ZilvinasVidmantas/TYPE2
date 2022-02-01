import {
  Button,
  Typography,
  Container
} from "@mui/material"

import MyTable from "./components/Table"

function App() {
  const buttons = ["Redaguoti", "Trinti"];
  const movies = [
    {id:0, Pavadinimas: "Harry Potter", Metai: "2001", IMDB: "7.6", Veiksmai: buttons},
    {id:1, Pavadinimas: "Lord of the Rings", Metai: "2001", IMDB: "8.8", Veiksmai: buttons},
    {id:2, Pavadinimas: "Simpsons", Metai: "2007", IMDB: "7.3", Veiksmai: buttons},
    {id:3, Pavadinimas: "Mortal Engines", Metai: "2018", IMDB: "6.1", Veiksmai: buttons}
  ]

  return (
    <Container maxWidth="md">
      <Typography variant="h2"> Filmai </Typography>
      <Button variant="contained" color="success" size="small">
        Pridėti filmą
      </Button>
      <MyTable 
        theads={[
          {name : "Pavadinimas", align: "center"},
          {name : "Metai", align: "center"},
          {name : "IMDB", align: "center"},
          {name : "Veiksmai", align: "center"}
        ]}
        data = {movies}
      />
    </Container>
  );
}

export default App;