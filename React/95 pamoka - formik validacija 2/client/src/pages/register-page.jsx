import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
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

const fakeRegister = () => new Promise((success) => {
  setTimeout(() => {
    success({
      token: 'sdgfisghfsd',
      user: {
        name: 'Banys',
        role: 'Gangster',
      },
    });
  }, 2000);
});

const initialValues = {
  name: 'Žilvinas',
  surname: 'Vidmantas',
  email: 'aaa@gt.lt',
  password: 'Labas123',
  subscribed: true,
};

const RegisterPage = () => {
  const onSubmit = async () => {
    const result = await fakeRegister();
    console.log(result);
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    isValid,
    isSubmitting,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthForm
      title="Registruotis"
      linkTo="/register"
      linkTitle="Jau turite paskyrą? Prisijunkite"
      onSubmit={handleSubmit}
      isValid={isValid}
      loading={isSubmitting}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="name"
            label="Vardas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            disabled={isSubmitting}
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
            value={values.surname}
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
            disabled={isSubmitting}
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
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={isSubmitting}
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
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item sx={{ mb: 2 }} xs={12}>
          <FormControlLabel
            control={(
              <Checkbox
                name="subscribed"
                onChange={handleChange}
                checked={values.subscribed}
                disabled={isSubmitting}
                color="primary"
              />
                )}
            label="Noriu gauti su rinkodara susijusius pranešimus"
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default RegisterPage;
