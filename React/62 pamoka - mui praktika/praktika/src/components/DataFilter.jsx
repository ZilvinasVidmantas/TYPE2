import {
  TextField,
  Slider,
  Button,
  Container,
  Paper,
  FormControlLabel,
  Checkbox,
  Box,
  Typography
} from "@mui/material"

const DataFilter = ({ movieName, setMovieName, yearValue, setYearValue, scoreValue, setScoreValue, submitFilter, resetFilter, filterNameCheck, handleFilterNameCheck, filterYearCheck, handleFilterYearCheck, filterScoreCheck, handleFilterScoreCheck }) => {
  return (
    <Container
      component={Paper}
      elevation={2}
      sx={{ minWidth: 650, marginBottom: 5, marginTop: 5 }}
    >
      <Box>
        <Typography>Search by:</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={filterNameCheck}
              onChange={handleFilterNameCheck}
            />}
          label="Name"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filterYearCheck}
              onChange={handleFilterYearCheck}
            />}
          label="Year"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filterScoreCheck}
              onChange={handleFilterScoreCheck}
            />}
          label="IMDB"
        />
      </Box>
      <Box>
        {filterNameCheck ?
          <TextField
            id="findMovie"
            label="Movie name"
            variant="standard"
            value={movieName}
            onChange={setMovieName}
          /> : null
        }
        {filterYearCheck ?
          <Slider
            value={yearValue}
            onChange={setYearValue}
            valueLabelDisplay="auto"
            disableSwap
            min={1950}
            max={2021}
          /> : null
        }
        {filterScoreCheck ?
          <Slider
            value={scoreValue}
            onChange={setScoreValue}
            valueLabelDisplay="auto"
            disableSwap
            min={0}
            max={10}
            step={0.1}
          /> : null
        }
        <Box>
          <Button
            onClick={submitFilter}
          >Search</Button>
          <Button
            onClick={resetFilter}
          >Reset</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default DataFilter;