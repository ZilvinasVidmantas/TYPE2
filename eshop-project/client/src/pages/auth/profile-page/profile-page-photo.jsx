import React from 'react';
import {
  Box,
  Typography,
  Button,
  styled,
} from '@mui/material';

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

// eslint-disable-next-line no-unused-vars
const ProfilePagePhoto = ({ formik, mainImg }) => {
  console.log(mainImg);

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
          <Box sx={imageContainerStyle}>
            <img
              src="https://picsum.photos/id/444/150/151"
              alt="user"
              style={imageStyle}
            />

          </Box>
          <Box sx={imageContainerStyle}>
            <img
              src="https://picsum.photos/id/443/150/152"
              alt="user"
              style={imageStyle}
            />

          </Box>
          <Box sx={imageContainerStyle}>
            <img
              src="https://picsum.photos/id/442/150/153"
              alt="user"
              style={imageStyle}
            />

          </Box>
          <Box sx={imageContainerStyle}>
            <img
              src="https://picsum.photos/id/441/150/154"
              alt="user"
              style={imageStyle}
            />

          </Box>
          <Box sx={imageContainerStyle}>
            <img
              src="https://picsum.photos/id/449/150/155"
              alt="user"
              style={imageStyle}
            />

          </Box>
          <Box sx={imageContainerStyle}>
            <img
              src="https://picsum.photos/id/448/150/156"
              alt="user"
              style={imageStyle}
            />

          </Box>
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
