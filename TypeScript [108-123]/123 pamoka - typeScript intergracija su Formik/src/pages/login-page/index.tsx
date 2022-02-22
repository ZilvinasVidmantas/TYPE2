import React from 'react';
import { useFormik } from 'formik';
import {
  TextField,
  Grid,
  Container,
  Box,
  Avatar,
  Typography,
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthService from '../../services/auth-service';
import { useAppDispatch } from '../../app/hooks';
import { login } from '../../app/features/auth-slice';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
});

const formControlMixin = {
  height: 56,
};

interface InitialValues {
  email: string,
  password: string,
}

const initialValues: InitialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    try {
      const user = await AuthService.login({
        email: 'admin@gmail.com',
        password: 'Vilnius123'
      });
      const reduxAction = login(user);
      dispatch(reduxAction);
    }
    catch (err) {
      console.log(err.message ? err.message : err);
    }
  };

  /*
    values
      * Kaip nustatomos pradinės 'values' reikšmės?
      * Kaip keičiamos 'values' reikšmės?
  */

  const {
    values, touched, errors, dirty, isValid, isSubmitting,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Container
        maxWidth="xs"
        component="main"
        sx={{ pt: '7vh' }}
      >
        <Box component="form" onSubmit={handleSubmit}>
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
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                value={values.email}
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
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={formControlMixin}
            type="submit"
          >
            Login
          </Button>
        </Box>
      </Container>
      <Box component="pre" sx={{ position: 'fixed', top: 200, left: 0, pl: 20 }}>
        {
          JSON.stringify(
            { values, touched, errors, dirty, isValid, isSubmitting },
            null,
            2
          )
        }
      </Box>
    </>
  );
};

export default LoginPage;
