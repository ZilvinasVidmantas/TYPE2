import {
  Button,
  Typography,
  Container
} from "@mui/material"

import { useState } from "react";

import MyTable from "./components/Table"
import DataFilter from "./components/DataFilter"

function App() {

  const [movieName, setMovieName] = useState("pradinis name'as");
  const [yearValue, setYearValue] = useState([1950,2021]);
  /*const [scoreValue, setScoreValue] = useState([0,10]);*/

  console.log(movieName, "app'e");

  const buttons = ["Redaguoti", "Trinti"];
  const movies = [
    { id: 0, Pavadinimas: "Harry Potter", Metai: "2001", IMDB: "7.6", Veiksmai: buttons },
    { id: 1, Pavadinimas: "Lord of the Rings", Metai: "2001", IMDB: "8.8", Veiksmai: buttons },
    { id: 2, Pavadinimas: "Simpsons", Metai: "2007", IMDB: "7.3", Veiksmai: buttons },
    { id: 3, Pavadinimas: "Mortal Engines", Metai: "2018", IMDB: "6.1", Veiksmai: buttons }
  ];

  const handleFilteredMovieName = (e) => {
    setMovieName(e.target.value);
  }
  
  const handleChangeYear = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setYearValue([Math.min(newValue[0], yearValue[1]), yearValue[1]]);
    } else {
      setYearValue([yearValue[0], Math.max(newValue[1], yearValue[0])]);
    }
  };
  /*const handleChangeScore = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setScoreValue([Math.min(newValue[0], scoreValue[1]), scoreValue[1]]);
    } else {
      setScoreValue([scoreValue[0], Math.max(newValue[1], scoreValue[0])]);
    }
  };*/

  return (
    <Container maxWidth="md">
      <Typography variant="h2"> Filmai </Typography>
      <Button variant="contained" color="success" size="small">
        Pridėti filmą
      </Button>
      <DataFilter 
        movieName={movieName}
        setMovieName={handleFilteredMovieName}
        yearValue={yearValue}
        setYearValue={handleChangeYear}
      />
      <MyTable
        theads={[
          { name: "Pavadinimas", align: "center" },
          { name: "Metai", align: "center" },
          { name: "IMDB", align: "center" },
          { name: "Veiksmai", align: "center" }
        ]}
        data={movies}
      />
    </Container>
  );
}

export default App;