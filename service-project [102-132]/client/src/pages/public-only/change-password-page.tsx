import React from 'react';
import {
  TextField,
  Grid,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import routes from 'routing/routes';
import AuthForm from 'components/auth-form';
import AuthService from 'services/auth-service';

type InitialValues = {
  password: string,
  passwordConfirmation: string,
};

type FormikOnSubmit =
  (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => void | Promise<void>;

const validationSchema = yup.object({
  password: yup.string()
    .required('Is required')
    .min(6, 'At least 6 symbols')
    .max(32, 'Most 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
    .matches(/^.*\d+.*$/, 'Atleast one number'),
  passwordConfirmation: yup.string()
    .required('Is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const initialValues: InitialValues = {
  password: '',
  passwordConfirmation: '',
};

const ChangePasswordPage: React.FC = () => {
  const [urlSearchParams] = useSearchParams();

  const onSubmit: FormikOnSubmit = async ({ password, passwordConfirmation }) => {
    await AuthService.changePassword({
      password,
      passwordConfirmation,
      resetToken: urlSearchParams.get('resetToken') ?? '',
    });
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
      title="Pakeisti slaptažodį"
      linkTo={routes.LoginPage}
      linkTitle="Prisiminėte slaptažodį? Prisijunkite."
      loading={isSubmitting}
      isValid={isValid && dirty}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
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
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="passwordConfirmation"
            variant="outlined"
            label="Pakartoti slaptažodį"
            type="password"
            value={values.passwordConfirmation}
            error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
            helperText={touched.passwordConfirmation && errors.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            fullWidth
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default ChangePasswordPage;
