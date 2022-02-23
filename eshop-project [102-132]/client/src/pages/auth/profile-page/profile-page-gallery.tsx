import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import ImageGrid from './profile-page-image-grid';
import ProfileService from '../../../services/profile-service';

const ProfilePageGallery = ({ imgData, updateImgData, handleImageDelete }) => {
  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    const data = await ProfileService.uploadImages(input.files);
    updateImgData(data);
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
          onChange={handleImagesLoaded}
        />
      </Box>
      <Box>
        <ImageGrid imgData={imgData} handleImageDelete={handleImageDelete} />
      </Box>
    </Box>
  );
};

export default ProfilePageGallery;
