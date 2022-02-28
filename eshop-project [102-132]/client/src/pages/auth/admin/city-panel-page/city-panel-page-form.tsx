import React from 'react';
import CityService from './services/city-service';
import { City } from 'types';
import {
  TextField,
  Paper,
  Button,
} from '@mui/material';

export type CityPanelPageFormProps = {
  title: string,
  editMode: boolean,
  onSubmit: (city: City) => void,
  setTitle: (newValue: string) => void,
}

const CityPanelPageForm: React.FC<CityPanelPageFormProps> = ({
  title,
  editMode,
  onSubmit,
  setTitle
}) => {
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
        color={editMode ? 'warning' : 'secondary'}
        label={editMode ? 'Atnaujinti' : 'Sukurti'}
      />
      <Button
        variant="contained"
        color={editMode ? 'warning' : 'secondary'}
        type="submit">
        {editMode ? 'Atnaujinti' : 'Sukurti'}
      </Button>
    </Paper>
  );
}

export default CityPanelPageForm;
