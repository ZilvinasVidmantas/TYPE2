import {
  TextField,
  Slider,
  Button,
  Container
} from "@mui/material"

const DataFilter = ({movieName, setMovieName, yearValue, setYearValue, scoreValue, setScoreValue, submitFilter}) => {
  return (
  <Container>
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
    <Button onClick={submitFilter}>Search</Button>
  </Container>
  );
}
 
export default DataFilter;