import React from 'react';
import {
  Grid,
  Container,
  Typography,
} from '@mui/material';

import { useSelector } from 'react-redux';
import Images from './profile-page-images';
import UserInfo from './profile-page-user-info';
import MainImage from './profile-page-main-image';
import { userSelector } from '../../../store/auth';

const ProfilePage = () => {
  const user = useSelector(userSelector);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mb: 3 }}>Jūsų profilis</Typography>
      <Grid container rowSpacing={4}>
        <Grid item xs={12} lg={4}>
          <MainImage mainImg={user.mainImg} />
        </Grid>
        <Grid item xs={12} lg={8}>
          <UserInfo user={user} />
        </Grid>
        <Grid item xs={12}>
          <Images />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
