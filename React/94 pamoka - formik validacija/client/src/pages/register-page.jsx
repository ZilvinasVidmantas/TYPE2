import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';
import * as yup from 'yup';
import { Formik } from 'formik';
import AuthForm from '../components/auth-form';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters')
    .required('Is required'),
  surname: yup
    .string()
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters')
    .required('Is required'),
  email: yup
    .string()
    .email('Is not valid email')
    .required('Is required'),
  password: yup
    .string()
    .min(6, 'At least 6 symbols')
    .max(32, 'Most 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
    .matches(/^.*\d+.*$/, 'Atleast one number')
    .required('Is required'),
});

const RegisterPage = () => (
  <Formik
    initialValues={{
      name: '',
      surname: '',
      email: '',
      password: '',
      subscribed: true,
    }}
    validationSchema={validationSchema}
    onSubmit={(...params) => {
      console.log('Formik.handleSubmit', params);
    }}
  >
    {(formik) => {
      const {
        handleChange, handleSubmit, handleBlur, errors, touched, values,
      } = formik;
      console.log(touched);

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
                    checked={values.subscribed}
                    name="subscribed"
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
