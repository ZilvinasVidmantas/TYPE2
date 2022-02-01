import React from 'react';
import {
  TextField,
  Grid,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FormContainer from '../../components/containers/form-container';
import FormButton from '../../components/buttons/form-button';

const title = ['Prisijungti'];

const SignIn = () => (
  <FormContainer title={title}>
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
      <FormButton>{title}</FormButton>
      <Link to="/sign-up">
        Neturite paskyros? Registruokitės
      </Link>
    </Box>
  </FormContainer>
);
export default SignIn;
