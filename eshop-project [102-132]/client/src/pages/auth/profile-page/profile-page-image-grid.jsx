import React from 'react';
import { Box } from '@mui/material';

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

const ProfilePageImageGrid = ({ imgData, columns, handleSelectImage }) => (
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
          onClick={handleSelectImage ? () => handleSelectImage(id) : undefined}
        >
          <img
            src={src}
            alt={src}
            style={imageStyle}
          />
        </Box>
      ))
    }
  </Box>
);

export default ProfilePageImageGrid;
