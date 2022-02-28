import React, { useState } from 'react';
import CityService from './services/city-service';
import {
  TextField,
  Paper,
  Button,
} from '@mui/material';

const CityPanelPageForm = () => {
  const [title, setTitle] = useState<string>('');
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const createdCity = await CityService.createCity({ title });

    if (typeof createdCity === 'string') {
      window.alert(createdCity);
      return;
    }

    setTitle('');
  }

  return (
    <Paper component="form" sx={{ display: 'flex' }} onSubmit={handleSubmit}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <Button variant="contained" color="primary" type="submit">Sukurti</Button>
    </Paper>
  );
}

export default CityPanelPageForm;
