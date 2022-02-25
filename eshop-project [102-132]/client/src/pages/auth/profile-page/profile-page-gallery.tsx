import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import ImageGrid from './profile-page-image-grid';
import ProfileService from '../../../services/profile-service';
import { Image } from '../../../types';
import { UpdateImgData, HandleImageDelete } from './index';

export type ProfilePageGalleryProps = {
  imgData: Image[],
  updateImgData: UpdateImgData,
  handleImageDelete: HandleImageDelete
};

const ProfilePageGallery: React.FC<ProfilePageGalleryProps> = ({
  imgData,
  updateImgData,
  handleImageDelete,
}) => {
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleUploadFiles = () => {
    if (fileUploadRef && fileUploadRef.current) {
      fileUploadRef.current.click();
    }
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    if (input && input.files) {
      const data = await ProfileService.uploadImages(input.files);
      updateImgData(data);
    }
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
