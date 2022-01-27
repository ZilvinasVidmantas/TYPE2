import React from 'react';
import {
  Box,
  Typography,
  TextField,
} from '@mui/material';

const ProfilePageUserInfo = ({ formik }) => {
  const {
    values, errors, touched, handleChange, handleBlur,
  } = formik;
  const userFieldsData = [
    {
      name: 'name',
      label: 'Vardas',
      value: values.name,
      error: touched.name && Boolean(errors.name),
      helperText: touched.name && errors.name,
    },
    {
      name: 'surname',
      label: 'Pavardė',
      value: values.surname,
      error: touched.surname && Boolean(errors.surname),
      helperText: touched.surname && errors.surname,
    },
    {
      name: 'email',
      label: 'El. paštas',
      value: values.email,
      error: touched.email && Boolean(errors.email),
      helperText: touched.email && errors.email,
    },
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
        {userFieldsData.map(({
          name, label, value, error, helperText,
        }) => (
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            // Props needed for formik
            name={name}
            label={label}
            value={value}
            error={error}
            helperText={helperText}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProfilePageUserInfo;
