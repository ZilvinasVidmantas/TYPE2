import React, { useState, useEffect, useRef } from 'react';
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

const ProfilePageImages = () => {
  const [imgData, setImgData] = useState([]);
  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  useEffect(() => {
    (async () => {
      const fetchedImgData = await UserImageService.getUserImages();
      setImgData(fetchedImgData);
    })();
  }, []);

  return (
    <Box sx={{ mt: { xs: 4, lg: 0 } }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <Typography variant="h5" sx={{ mb: 3 }}>Nuotraukos</Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: 'none' }}
          onClick={handleUploadFiles}
        >
          Įkelti Nuotraukas
        </Button>
        <input
          type="file"
          hidden
          ref={fileUploadRef}
          accept=".jpg, .jpeg, .png"
          multiple
        />
      </Box>
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
    </Box>
  );
};

export default ProfilePageImages;
