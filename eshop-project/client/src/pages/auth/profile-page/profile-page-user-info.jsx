import React from 'react';
import {
  Box,
  Typography,
  TextField,
} from '@mui/material';

const ProfilePageUserInfo = ({ formik }) => {
  const { values, handleChange } = formik;
  const userFieldsData = [
    { name: 'name', label: 'Vardas', value: values.name },
    { name: 'surname', label: 'Pavardė', value: values.surname },
    { name: 'email', label: 'El. paštas', value: values.email },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 4 }}>Vartotojo informacija</Typography>
      <Box sx={{
        display: 'flex',
        gap: 3,
        flexDirection: 'column',
      }}
      >
        {userFieldsData.map(({ name, value, label }) => (
          <TextField
            fullWidth
            id="outlined-size-small"
            label={label}
            InputLabelProps={{
              shrink: true,
            }}
            // Props needed for formik
            name={name}
            value={value}
            onChange={handleChange}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProfilePageUserInfo;
