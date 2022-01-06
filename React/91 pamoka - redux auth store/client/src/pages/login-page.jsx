import React from 'react';
import {
  TextField,
  Grid,
  Box,
} from '@mui/material';
import AuthFormContainer from '../components/containers/auth-form-container';
// eslint-disable-next-line no-unused-vars
import APIService from '../services/api-service';

const title = ['Prisijungti'];

const LoginPage = () => (
  <AuthFormContainer title={title} linkTo="/login" linkTitle="Neturite paskyros? Registruokitės">
    <Box component="form" noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="El. paštas"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Slaptažodis"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
    </Box>
  </AuthFormContainer>
);
export default LoginPage;
