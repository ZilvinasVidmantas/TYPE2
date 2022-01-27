import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import UserImageService from '../../../services/user-image-service';

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

const ProfilePageImages = () => {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedImgData = await UserImageService.getUserImages();
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
      <Box>
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
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="outlined">Įkelti nuotraukas</Button>
      </Box>
    </Box>
  );
};

export default ProfilePageImages;
