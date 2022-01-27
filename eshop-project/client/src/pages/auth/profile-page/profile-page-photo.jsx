import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  styled,
} from '@mui/material';
import ImageService from '../../../services/image-service';

const imageContainerStyle = {
  position: 'relative',
  width: '100%',
  pt: '100%',
};

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
};

const MainImage = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  height: '250px',
  width: '250px',
  objectFit: 'cover',
  [theme.breakpoints.up('md')]: {
    height: '285px',
    width: '285px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '210px',
    width: '210px',
  },
}));

const emptyImgCount = 6;
const emptyImages = Array
  .from(new Array(emptyImgCount))
  .map((x, i) => ({
    id: i,
    src: '/no-image.jpg',
    createdAt: new Date(0),
    updatedAt: new Date(0),
  }
  ));

// eslint-disable-next-line no-unused-vars
const ProfilePagePhoto = ({ formik, mainImg }) => {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedImgData = await ImageService.getUserImages();
      const emptyCount = emptyImgCount - fetchedImgData.length;

      const finalImgData = emptyCount > 0
        ? [...imgData, ...emptyImages.slice(0, emptyCount)]
        : fetchedImgData.slice(0, 6);

      setImgData(finalImgData);
    })();
  }, []);

  return (
    <Box sx={{ mt: { xs: 4, lg: 0 } }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Nuotraukos</Typography>
      <Box sx={{
        display: 'flex',
        gap: 4,
        flexDirection: { xs: 'column', sm: 'row' },
        flexWrap: { xs: 'nowrap', sm: 'wrap', md: 'nowrap' },
        alignItems: 'center',
      }}
      >
        <Box sx={{
          textAlign: 'center',
          width: { xs: '100%', md: 'auto' },
        }}
        >
          <MainImage
            src={(mainImg && mainImg.src) ?? '/no-image.jpg'}
            alt="user"
          />
        </Box>

        <Box sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: '1fr 1fr 1fr',
          width: { xs: '100%', sm: 'auto' },
          flexGrow: 1,
        }}
        >

          {
            imgData.map(({ id, src }) => (
              <Box key={id} sx={imageContainerStyle}>
                <img
                  src={src}
                  alt={src}
                  style={imageStyle}
                />
              </Box>
            ))
          }
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button variant="outlined" sx={{ textTransform: 'none' }}>Įkelti nuotraukas</Button>
          <Button variant="outlined" sx={{ textTransform: 'none' }}>Pasirinkti pagrindinę</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePagePhoto;
