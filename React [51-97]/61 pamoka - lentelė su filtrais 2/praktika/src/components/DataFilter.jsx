import {
  TextField,
  Slider,
  Button,
  Container,
  Paper
} from "@mui/material"

const DataFilter = ({ movieName, setMovieName, yearValue, setYearValue, scoreValue, setScoreValue, submitFilter, resetFilter }) => {
  return (
    <Container
      component={Paper}
      elevation={2}
      sx={{ minWidth: 650, marginBottom: 5, marginTop: 5 }}>
      <TextField
        id="findMovie"
        label="Movie name"
        variant="standard"
        value={movieName}
        onChange={setMovieName}
      />
      <Slider
        value={yearValue}
        onChange={setYearValue}
        valueLabelDisplay="auto"
        disableSwap
        min={1950}
        max={2021}
      />
      <Slider
        value={scoreValue}
        onChange={setScoreValue}
        valueLabelDisplay="auto"
        disableSwap
        min={0}
        max={10}
        step={0.1}
      />
      <Button
        onClick={submitFilter}
      >Search</Button>
      <Button
        onClick={resetFilter}
      >Reset</Button>
    </Container>
  );
}

export default DataFilter;