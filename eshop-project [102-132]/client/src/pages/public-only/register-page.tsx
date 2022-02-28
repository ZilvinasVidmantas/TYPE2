import React, { useState } from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  InputAdornment,
  CircularProgress,
  TextFieldProps,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import * as yup from 'yup';
import { useFormik, FormikHelpers } from 'formik';
import { useDispatch } from 'store/hooks';
import { login } from 'store/auth';
import AuthForm from 'components/auth-form';
import AuthService from 'services/auth-service';
import routes from 'routing/routes';

type InitialValues = {
  name: string,
  surname: string,
  email: string
  password: string,
  passwordConfirmation: string,
  subscribed: boolean,
  emailChecked: boolean,
  emailAvailable: boolean,
};

type FormikOnSubmit =
  (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => void | Promise<void>;

const validationSchema = yup.object({
  name: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  surname: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  email: yup.string()
    .required('Is required')
    .email('Is not valid email')
    .test('email-validator', 'Email unavailable', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;

      return emailAvailable;
    }),
  password: yup.string()
    .required('Is required')
    .min(6, 'At least 6 symbols')
    .max(32, 'Most 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
    .matches(/^.*\d+.*$/, 'Atleast one number'),
  passwordConfirmation: yup.string()
    .required('Is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

const initialValues: InitialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const onSubmit: FormikOnSubmit = async ({
    email, name, surname, password, passwordConfirmation,
  }) => {
    const fetchedUser = await AuthService.register({
      email,
      name,
      surname,
      password,
      repeatPassword: passwordConfirmation,
    });

    if (typeof fetchedUser === 'string') {
      console.error(fetchedUser);
    } else {
      dispatch(login({ user: fetchedUser }));
    }
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
    setValues,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleEmailChange: TextFieldProps['onChange'] = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur: TextFieldProps['onBlur'] = (e) => {
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        try {
          setEmailCheckLoading(true);
          const emailAvailable = await AuthService.checkEmail(values.email);
          setFieldValue('emailAvailable', emailAvailable);
        } catch (error) {
          setFieldValue('emailAvailable', false);
        } finally {
          setFieldValue('emailChecked', true, true);
          setEmailCheckLoading(false);
        }
      })();
    }
  };

  let emailEndornment;
  if (emailCheckLoading) {
    emailEndornment = <CircularProgress size={24} />;
  } else if (!values.emailChecked) {
    emailEndornment = null;
  } else if (values.emailAvailable) {
    emailEndornment = <CheckCircleIcon color="success" />;
  } else {
    emailEndornment = <ErrorIcon color="error" />;
  }

  return (
    <AuthForm
      title="Registruotis"
      linkTo={routes.LoginPage}
      linkTitle="Jau turite paskyrą? Prisijunkite"
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
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
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {emailEndornment}
                </InputAdornment>
              ),
            }}
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
        <Grid item xs={12}>
          <TextField
            name="passwordConfirmation"
            label="Slaptažodžio pakartojimas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirmation}
            error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
            helperText={touched.passwordConfirmation && errors.passwordConfirmation}
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
