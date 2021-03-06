import React, { useState, useEffect } from 'react';
import {
  Grid,
  Container,
  Typography,
} from '@mui/material';

import { useSelector } from 'store/hooks';
import { userSelector } from 'store/auth';
import ProfileService from 'services/profile-service';
import { Image } from 'types';
import Gallery from './profile-page-gallery';
import UserInfo from './profile-page-user-info';
import MainImage from './profile-page-main-image';

export type SetMainImage = (id: string) => Promise<void>;
export type HandleImageDelete = (id: string) => Promise<void>;
export type UpdateImgData = (data: Image[]) => void;

const ProfilePage: React.FC = () => {
  const user = useSelector(userSelector);
  const [imgData, setImgData] = useState<Image[]>([]);

  const updateImgData: UpdateImgData = (newImgData) => {
    setImgData([...imgData, ...newImgData]);
  };

  const handleImageDelete: HandleImageDelete = async (id) => {
    await ProfileService.deleteImage(id);
    setImgData(imgData.filter((x) => x.id !== id));
  };

  const setMainImage: SetMainImage = async (id) => {
    await ProfileService.setMainImage(id);
  };

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
          <MainImage
            mainImg={user ? user.mainImg : undefined}
            imgData={imgData}
            setMainImage={setMainImage}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <UserInfo user={user} />
        </Grid>
        <Grid item xs={12}>
          <Gallery
            imgData={imgData}
            updateImgData={updateImgData}
            handleImageDelete={handleImageDelete}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
