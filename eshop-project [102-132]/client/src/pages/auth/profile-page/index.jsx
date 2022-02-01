import React, { useState, useEffect } from 'react';
import {
  Grid,
  Container,
  Typography,
} from '@mui/material';

import { useSelector } from 'react-redux';
import Gallery from './profile-page-gallery';
import UserInfo from './profile-page-user-info';
import MainImage from './profile-page-main-image';
import { userSelector } from '../../../store/auth';
import ProfileService from '../../../services/profile-service';

const ProfilePage = () => {
  const user = useSelector(userSelector);
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedImgData = await ProfileService.getUserImages();
      setImgData(fetchedImgData);
    })();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mb: 3 }}>Jūsų profilis</Typography>
      <Grid container rowSpacing={4}>
        <Grid item xs={12} md={5}>
          <MainImage mainImg={user.mainImg} imgData={imgData} />
        </Grid>
        <Grid item xs={12} md={7}>
          <UserInfo user={user} />
        </Grid>
        <Grid item xs={12}>
          <Gallery imgData={imgData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
