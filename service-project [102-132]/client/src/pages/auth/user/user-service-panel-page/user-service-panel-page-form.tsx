import React from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
  Autocomplete,
  Checkbox,
  Button,
} from '@mui/material';
import { Category, City } from 'types';

export type UserServicePanelPageFormProps = {
  categoryOptions: Category[],
  cityOptions: City[],
};

const UserServicePanelPageForm: React.FC<UserServicePanelPageFormProps> = ({
  categoryOptions,
  cityOptions,
}) => {
  const handleCityChange = (...params: any[]) => {
    console.log(params);
  };

  return (

    <Paper component="form" sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Nauja Paslauga</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Pavadinimas"
        />
        <TextField
          label="Kategorija"
          select
        >
          {categoryOptions.map(({ id, title }) => (
            <MenuItem key={title} value={id}>
              {title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Kaina"
        />
        <Autocomplete
          multiple
          disableCloseOnSelect
          options={cityOptions}
          onChange={handleCityChange}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <MenuItem {...props}>
              <Checkbox
                sx={{ mr: 1 }}
                checked={selected}
              />
              {option.title}
            </MenuItem>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Miestai" placeholder="Pasirinkite miestus" />
          )}
        />
        <TextField
          label="Aprašymas"
          inputProps={{
            sx: { height: 80 },
          }}
        />
        <Box sx={{ width: '100%' }}>
          <Typography>Pasirinkite nuotraukas</Typography>
          <TextField
            type="file"
            fullWidth
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ alignSelf: 'center' }}
        >
          Kurti naują paslaugą
        </Button>
      </Box>
    </Paper>

  );
};

export default UserServicePanelPageForm;
