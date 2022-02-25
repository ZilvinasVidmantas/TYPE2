import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Alert,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from '../../store/hooks';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthForm from '../../components/auth-form';
import AuthService from '../../services/auth-service';
import { Crudentials } from '../../types';

type InitialValues = Crudentials;

type FormikOnSubmit = (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => void | Promise<void>;

const validationSchema = yup.object({
  email: yup.string()
    .required('Is required')
    .email('Is not valid email'),
  password: yup.string()
    .required('Is required'),
});

const initialValues: InitialValues = {
  email: '',
  password: '',
};

const LoginPage: React.FC = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: FormikOnSubmit = async ({ email, password }) => {
    setError(null);
    const fetchedUser = await AuthService.login({
      email,
      password,
    });
    if (typeof fetchedUser === 'string') {
      setError(fetchedUser);

      return;
    }

    const redirectTo = urlSearchParams.get('redirectTo') ?? undefined;
    const loginSuccessAction = login({
      user: fetchedUser,
      redirectTo,
    });
    dispatch(loginSuccessAction);
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthForm
      title="Prisijungti"
      linkTo={routes.RegisterPage}
      linkTitle="Neturite paskyros? Registruokitės"
      loading={isSubmitting}
      isValid={isValid && dirty}
      onSubmit={handleSubmit}
    >
      <Alert severity="error" sx={{ my: 2, visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </Alert>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            name="email"
            variant="outlined"
            label="El. paštas"
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            fullWidth
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="password"
            variant="outlined"
            label="Slaptažodis"
            type="password"
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            fullWidth
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default LoginPage;
