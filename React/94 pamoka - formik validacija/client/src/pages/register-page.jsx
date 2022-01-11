import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';
import { Formik } from 'formik';
import AuthForm from '../components/auth-form';

const RegisterPage = () => (
  <Formik
    initialValues={{
      name: '',
      surname: '',
      email: '',
      password: '',
      subscribe: false,
    }}
  >
    {(formik) => {
      const { handleChange } = formik;
      return (
        <AuthForm
          title="Registruotis"
          linkTo="/register"
          linkTitle="Jau turite paskyrą? Prisijunkite"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                label="Vardas"
                onChange={handleChange}
                fullWidth
                variant="outlined"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="surname"
                label="Pavardė"
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="El. paštas"
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Slaptažodis"
                onChange={handleChange}
                fullWidth
                variant="outlined"
                type="password"
              />
            </Grid>
            <Grid item sx={{ mb: 2 }} xs={12}>
              <FormControlLabel
                control={(
                  <Checkbox
                    name="subscribe"
                    onChange={handleChange}
                    color="primary"
                  />
                )}
                label="Noriu gauti su rinkodara susijusius pranešimus"
              />
            </Grid>
          </Grid>
        </AuthForm>
      );
    }}

  </Formik>
);
export default RegisterPage;
