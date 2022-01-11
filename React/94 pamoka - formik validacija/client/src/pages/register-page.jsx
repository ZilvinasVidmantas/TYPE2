import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';
import { Formik } from 'formik';
import AuthForm from '../components/auth-form';

/*
  Įgalinkite validavimą visiems <input> įvesties laukams, jog jie būtų privalomi
  Jeigu laukai nėra privalomi, turi būti rodomos klaidos po įvesties laukais
  (taip pat kaip 'name' įvesties lauke)

*/

const RegisterPage = () => (
  <Formik
    initialValues={{
      name: '',
      surname: '',
      email: '',
      password: '',
      subscribe: false,
    }}
    validate={({ name }) => {
      const errors = {};
      if (name === '') {
        errors.name = 'Privalomas laukas';
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
                error={Boolean(touched.name) && Boolean(errors.name)}
                helperText={touched.name && errors.name && errors.name}
                fullWidth
                variant="outlined"
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
