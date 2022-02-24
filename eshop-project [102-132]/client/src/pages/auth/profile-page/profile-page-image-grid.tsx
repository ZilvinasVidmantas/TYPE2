import React from 'react';
import { Box, Fab } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Image from '../../../types/image';
import { HandleSelectImage } from './profile-page-main-image';
import { HandleImageDelete } from '.';

const imageContainerStyle = (theme) => ({
  position: 'relative',
  width: '100%',
  pt: '100%',
  '&.selectable': {
    ':hover': {
      cursor: 'pointer',
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
  },
});

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
};

export type ProfilePageImageGridProps = {
  imgData: Image[],
  columns?: number,
  handleSelectImage?: HandleSelectImage,
  handleImageDelete?: HandleImageDelete,
};

const ProfilePageImageGrid: React.FC<ProfilePageImageGridProps> = ({
  imgData,
  columns,
  handleSelectImage,
  handleImageDelete,
}) => (
  <Box sx={{
    display: 'grid',
    gap: 1,
    gridTemplateColumns: `repeat(${columns ?? 3}, 1fr)`,
    width: { xs: '100%', sm: 'auto' },
    flexGrow: 1,
  }}
  >
    {
      imgData.map(({ id, src }) => (
        <Box
          key={id}
          sx={imageContainerStyle}
          className={handleSelectImage ? 'selectable' : undefined}
          onClick={handleSelectImage ? () => handleSelectImage(id) : undefined}
        >
          <img
            src={src}
            alt={src}
            style={imageStyle}
          />
          {handleImageDelete && (
            <Fab
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                height: 22,
                minHeight: 22,
                width: 22,
                borderRadius: 0,
                bgcolor: 'error.main',
                color: 'common.white',
              }}
              onClick={() => handleImageDelete(id)}
            >
              <ClearIcon fontSize="small" />
            </Fab>
          )}
        </Box>
      ))
    }
  </Box>
);

export default ProfilePageImageGrid;
