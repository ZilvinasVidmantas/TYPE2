import {
  TextField,
  Slider,
  Button,
  Container
} from "@mui/material"

const DataFilter = ({movieName, setMovieName}) => {
  return (
  <Container>
    <TextField 
      id="findMovie" 
      label="Movie name" 
      variant="standard" 
      value={movieName}
      onChange={(e)=>setMovieName(e)}
    />
    {/*<Slider
      value={yearValue}
      onChange={(e)=>console.log(e)}
      valueLabelDisplay="auto"
      disableSwap
      min={1950}
      max={2021}
    />
    <Slider
      value={scoreValue}
      onChange={handleChangeScore}
      valueLabelDisplay="auto"
      disableSwap
      min={0}
      max={10}
      step={0.1}
    />*/}
    <Button>Search</Button>
  </Container>
  );
}
 
export default DataFilter;