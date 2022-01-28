import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import ImageGrid from './profile-page-image-grid';

const ProfilePageGallery = ({ imgData }) => {
  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

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
        <ImageGrid imgData={imgData} />
      </Box>
    </Box>
  );
};

export default ProfilePageGallery;
