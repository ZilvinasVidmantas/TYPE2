import React from 'react';
import {
  Grid,
  Box,
  Button,
  Typography,
  Fade,
} from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import ProfilePagePhoto from './profile-page-photo';
import ProfilePageUserInfo from './profile-page-user-info';
import { userSelector } from '../../../store/auth';

const ProfilePage = () => {
  const user = useSelector(userSelector);
  const formik = useFormik({
    initialValues: {
      name: user.name,
      surname: user.surname,
      email: user.email,
    },
  });

  return (
    <Box
      component="form"
    >
      <pre style={{
        position: 'fixed', top: 100, right: 0, width: 450,
      }}
      >
        <h2>Formik</h2>
        {JSON.stringify({
          values: formik.values,
          errors: formik.errors,
          dirty: formik.dirty,
          touched: formik.touched,
        }, null, 2)}
      </pre>
      <Box
        sx={{ width: 'calc(100% - 480px)', mr: 'auto' }}
      >

        <Typography variant="h4" sx={{ mb: 3 }}>Jūsų profilis</Typography>
        <Grid container columnSpacing={6}>
          <Grid item xs={12} lg={4}>
            <ProfilePageUserInfo formik={formik} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProfilePagePhoto formik={formik} />
          </Grid>
        </Grid>

        <Fade in={formik.dirty}>
          <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" size="large">
              Išsaugoti pakeitimus
            </Button>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default ProfilePage;
