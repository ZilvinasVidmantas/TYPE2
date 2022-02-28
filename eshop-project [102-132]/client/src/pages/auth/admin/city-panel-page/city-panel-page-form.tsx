import React from 'react';
import {
  TextField,
  Paper,
  Button,
} from '@mui/material';

const CityPanelPageForm = () => (
  <Paper sx={{ display: 'flex' }}>
    <TextField sx={{ flexGrow: 1 }} />
    <Button variant="contained" color="primary">Sukurti</Button>
  </Paper>
);

export default CityPanelPageForm;
