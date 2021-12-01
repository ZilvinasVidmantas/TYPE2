import {
  Button,
  Typography,
  Container
} from "@mui/material"

import { useState } from "react";

import MyTable from "./components/Table"
import DataFilter from "./components/DataFilter"

function App() {
  const [movieName, setMovieName] = useState("");
  const [yearValue, setYearValue] = useState([1950, 2021]);
  const [scoreValue, setScoreValue] = useState([0, 10]);

  const [filterNameCheck, setFilterNameCheck] = useState(false);
  const [filterYearCheck, setFilterYearCheck] = useState(false);
  const [filterScoreCheck, setFilterScoreCheck] = useState(false);

  const buttons = ["Redaguoti", "Trinti"];
  const movies = [
    { id: 0, Pavadinimas: "Harry Potter", Metai: "2001", IMDB: "7.6", Veiksmai: buttons },
    { id: 1, Pavadinimas: "Lord of the Rings", Metai: "2001", IMDB: "8.8", Veiksmai: buttons },
    { id: 2, Pavadinimas: "Simpsons", Metai: "2007", IMDB: "7.3", Veiksmai: buttons },
    { id: 3, Pavadinimas: "Mortal Engines", Metai: "2018", IMDB: "6.1", Veiksmai: buttons }
  ];
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const handleFilteredMovieNameChange = (e) => {
    setMovieName(e.target.value);
  }
  const handleFilteredMovieYearChange = (e, newValue) => {
    setYearValue(newValue);
  };
  const handleFilteredMovieScoreChange = (e, newValue) => {
    setScoreValue(newValue);
  };
  const handleFilterNameCheck = () => {
    console.log("spaudžiam name check");
    if(filterNameCheck){
      setFilterNameCheck(false);
      setMovieName("");
      filterMovies();
    } else {
      setFilterNameCheck(true);
    }
  }
  const handleFilterYearCheck = () => {
    console.log("spaudžiam year check");
    if(filterYearCheck){
      setFilterYearCheck(false);
      setYearValue([1950, 2021]);
      filterMovies();
    } else {
      setFilterYearCheck(true);
    }   
  }
  const handleFilterScoreCheck = () => {
    console.log("spaudžiam score check");
    if(filterScoreCheck){
      setFilterScoreCheck(false);
      setScoreValue([0, 10]);
      filterMovies();
    } else {
      setFilterScoreCheck(true);
    }   
  }

  const filterMovies = () => {
    console.log("filtruojam filmus");
    setFilteredMovies(movies
      .filter(movie => movie.Pavadinimas.toLowerCase().includes(movieName.toLowerCase()))
      .filter(movie => movie.Metai >= yearValue[0] && movie.Metai <= yearValue[1])
      .filter(movie => movie.IMDB >= scoreValue[0] && movie.IMDB <= scoreValue[1])
    )
    setFiltered(true);
  }

  const submitFilter = (e) => {
    e.preventDefault();
    filterMovies();
  }
  const resetFilter = (e) => {
    e.preventDefault();
    setFilteredMovies([]);
    setFiltered(false);
    setMovieName("");
    setYearValue([1950, 2021]);
    setScoreValue([0, 10]);
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h2"> Filmai </Typography>
      <Button variant="contained" color="success" size="small">
        Pridėti filmą
      </Button>
      <DataFilter
        movieName={movieName}
        setMovieName={handleFilteredMovieNameChange}
        yearValue={yearValue}
        setYearValue={handleFilteredMovieYearChange}
        scoreValue={scoreValue}
        setScoreValue={handleFilteredMovieScoreChange}
        submitFilter={submitFilter}
        resetFilter={resetFilter}
        filterNameCheck={filterNameCheck}
        handleFilterNameCheck={handleFilterNameCheck}
        filterYearCheck={filterYearCheck}
        handleFilterYearCheck={handleFilterYearCheck}
        filterScoreCheck={filterScoreCheck}
        handleFilterScoreCheck={handleFilterScoreCheck}
      />
      <MyTable
        theads={[
          { name: "Pavadinimas", align: "center" },
          { name: "Metai", align: "center" },
          { name: "IMDB", align: "center" },
          { name: "Veiksmai", align: "center" }
        ]}
        data = {!filtered ? movies : filteredMovies}
      />
    </Container>
  );
}

export default App;