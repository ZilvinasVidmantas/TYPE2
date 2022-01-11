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
    validate={({
      name,
      surname,
      email,
      password,
    }) => {
      const errors = {};
      if (name === '') {
        errors.name = 'Privalomas laukas';
      }
      if (surname === '') {
        errors.surname = 'Privalomas laukas';
      }
      if (email === '') {
        errors.email = 'Privalomas laukas';
      }
      if (password === '') {
        errors.password = 'Privalomas laukas';
      }
      return errors;
    }}
    onSubmit={(...params) => {
      console.log('Formik.handleSubmit', params);
    }}
  >
    {(formik) => {
      const {
        handleChange, handleSubmit, handleBlur, errors, touched,
      } = formik;

      return (
        <AuthForm
          title="Registruotis"
          linkTo="/register"
          linkTitle="Jau turite paskyrą? Prisijunkite"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                label="Vardas"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="surname"
                label="Pavardė"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.surname && Boolean(errors.surname)}
                helperText={touched.surname && errors.surname}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="El. paštas"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Slaptažodis"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
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
