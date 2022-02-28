import React, { useState } from 'react';
import CityService from './services/city-service';
import { City } from 'types';
import {
  TextField,
  Paper,
  Button,
} from '@mui/material';

export type CityPanelPageFormProps = {
  onSubmit: (city: City) => void
}

const CityPanelPageForm: React.FC<CityPanelPageFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const createdCity = await CityService.createCity({ title });

    if (typeof createdCity === 'string') {
      window.alert(createdCity);
      return;
    }

    setTitle('');
    onSubmit(createdCity);
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
