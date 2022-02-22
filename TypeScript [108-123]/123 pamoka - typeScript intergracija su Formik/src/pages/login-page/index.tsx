import React, { useState, FormEventHandler } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import {
  TextField,
  Grid,
  Container,
  Box,
  Avatar,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthService from '../../services/auth-service';
import { useAppDispatch } from '../../app/hooks';
import { login } from '../../app/features/auth-slice';
import * as yup from 'yup';

interface InitialValues {
  email: string,
  password: string,
}

type FormikAsyncOnSubmit =
  (data: InitialValues, formikBag: FormikHelpers<InitialValues>) => Promise<void>;

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Min 8 chars'),
});

const formControlMixin = {
  height: 56,
};

const initialValues: InitialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [serverError, setServerError] = useState<null | string>(null);

  const deleteServerError = () => setServerError(null);

  const onSubmit: FormikAsyncOnSubmit = async (values) => {
    console.log('onSubmit');
    deleteServerError();
    const fetchedUser = await AuthService.login(values);
    if (typeof fetchedUser === 'string') {
      setServerError(fetchedUser);
    } else {
      const reduxAction = login(fetchedUser);
      dispatch(reduxAction);
    }
  };

  const {
    values, touched, errors, dirty, isValid, isSubmitting,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleAsyncSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    console.log(event);
    if (isSubmitting) event.preventDefault();
    else handleSubmit(event);
  };

  return (
    <Container
      maxWidth="xs"
      component="main"
      sx={{ pt: '7vh' }}
    >
      <Box component="form" onSubmit={handleAsyncSubmit}>
        <Box sx={{
          mb: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Login</Typography>
        </Box>
        {serverError && (
          <Alert onClose={deleteServerError} color="error" sx={{ mb: 3 }}>
            {serverError}
          </Alert>
        )}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="El. paštas"
              fullWidth
              autoComplete="email"
              InputProps={{ sx: formControlMixin }}
              // Formik props
              name="email"
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 4 }}>
            <TextField
              variant="outlined"
              label="Slaptažodis"
              type="password"
              fullWidth
              InputProps={{ sx: formControlMixin }}
              // Formik props
              name="password"
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={formControlMixin}
          type="submit"
          disabled={!isValid || !dirty || isSubmitting}
        >
          {isSubmitting ? <CircularProgress color="inherit" /> : 'Login'}
        </Button>
      </Box>
    </Container>

  );
};

export default LoginPage;
