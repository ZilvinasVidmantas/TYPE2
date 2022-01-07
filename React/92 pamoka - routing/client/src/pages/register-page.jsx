import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
} from '@mui/material';
import AuthForm from '../components/auth-form';

const title = ['Registruotis'];

const RegisterPage = () => (
  <AuthForm title={title} linkTo="/register" linkTitle="Jau turite paskyrą? Prisijunkite">
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Vardas"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Pavardė"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="El. paštas"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
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
        <Grid item sx={{ mb: 2 }} xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Noriu gauti su rinkodara susijusius pranešimus"
          />
        </Grid>
      </Grid>
    </Box>
  </AuthForm>
);
export default RegisterPage;
