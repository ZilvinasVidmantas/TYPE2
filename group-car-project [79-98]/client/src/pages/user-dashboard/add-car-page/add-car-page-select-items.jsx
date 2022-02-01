import React from 'react';
import {
  FormControl,
  TextField,
  Grid,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const AddCarPageSelectItems = ({
  title, options, onChange, value, name,
}) => (
  <Grid item xs={12} md={4}>
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <Autocomplete
        disablePortal
        name={name}
        label={title}
        options={options}
        value={value}
        onChange={(event, option) => onChange(event, option, name)}
        renderInput={(params) => <TextField {...params} label={title} />} // teksto rašymui
      />
    </FormControl>
  </Grid>
);

export default AddCarPageSelectItems;
