import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import AuthService from '../../../services/auth-service';

const ProfilePageUserInfo = ({ formik }) => {
  const {
    initialValues, values, errors, touched, isSubmitting,
    handleChange, handleBlur, setValues, setFieldValue,
  } = formik;

  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const handleEmailChange = (e) => {
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

  const handleEmailBlur = (e) => {
    if (e.target.value === initialValues.email) {
      setValues({
        ...values,
        email: initialValues.email,
        emailChecked: false,
        emailAvailable: false,
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
    <Box>
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
    </Box>
  );
};

export default ProfilePageUserInfo;

// 11:23
