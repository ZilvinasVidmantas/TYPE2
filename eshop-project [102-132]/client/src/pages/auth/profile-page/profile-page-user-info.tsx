import React, { useMemo, useState } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import AuthService from '../../../services/auth-service';
import ProfileService from '../../../services/profile-service';
import { User, UserPatch } from '../../../types';
import { TextFieldProps } from '@mui/material';

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
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

export type ProfilePageUserInfoProps = {
  user: User | null,
};

type InitialValues = UserPatch & {
  emailChecked: boolean,
  emailAvailable: boolean,
};

type FormikOnSubmit = (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => void | Promise<void>;

const ProfilePageUserInfo: React.FC<ProfilePageUserInfoProps> = ({ user }) => {
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const initialValues = useMemo(() => ({
    name: user ? user.name : '',
    surname: user ? user.surname : '',
    email: user ? user.email : '',
    emailChecked: true,
    emailAvailable: true,
  }), [user]);

  const onSubmit: FormikOnSubmit = async ({ name, surname, email }) => {
    await ProfileService.updateUserData({ name, surname, email });
  };

  const {
    values, errors, touched, isSubmitting, dirty, isValid,
    handleChange, handleBlur, setValues, setFieldValue, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
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
    if (e.target.value === initialValues.email) {
      setValues({
        ...values,
        email: initialValues.email,
        emailChecked: true,
        emailAvailable: true,
      }, true);

      return;
    }
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
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ mb: 4 }}>Vartotojo informacija</Typography>
      <Box sx={{
        display: 'flex',
        gap: 3,
        flexDirection: 'column',
      }}
      >
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
      </Box>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" size="large" type="submit" disabled={!dirty || !isValid}>
          Išsaugoti pakeitimus
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePageUserInfo;
